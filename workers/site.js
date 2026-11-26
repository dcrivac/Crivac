// crivac.com Worker: serves the built portfolio from dist/ (ASSETS binding),
// plus one small API route: eBay's account-deletion endpoint for Yard Picker Pro.
//
// It used to forward POST /api/generate to the Anthropic API with the
// ANTHROPIC_API_KEY secret and no sign-in, so anyone could spend that key.
// Nothing on the site called it, so the route is gone. If an AI feature comes
// back, give it its own auth (or Cloudflare Access) and a rate limit first.

// Yard Picker Pro's eBay keyset is registered for Marketplace Account Deletion
// notifications at this exact URL (set in the eBay developer portal when the app
// ran on SiteGround). eBay hashes it into the GET challenge, so it must match
// the portal character for character. Override with the EBAY_DELETION_ENDPOINT
// var if the portal URL ever changes.
const EBAY_DELETION_PATH = "/ebay-deletion.php";
const EBAY_DELETION_ENDPOINT = "https://crivac.com/ebay-deletion.php";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === EBAY_DELETION_PATH) {
      return handleEbayDeletion(request, env, url);
    }
    return env.ASSETS.fetch(request);
  },
};

// eBay Marketplace Account Deletion / Closure notifications.
// Spec: https://developer.ebay.com/develop/guides/marketplace-user-account-deletion
//   GET ?challenge_code=X -> 200 {"challengeResponse": sha256_hex(X + token + endpoint)}
//   POST notification     -> acknowledge right away with 200/201/202/204.
// Yard Picker Pro uses eBay's Browse API with an app token only and stores no
// eBay user data, so a notice needs no deletion: we acknowledge and log its id.
export async function handleEbayDeletion(request, env, url) {
  if (request.method === "POST") {
    // Log only eBay's ids, never the payload: it carries the eBay user's name and id.
    let notificationId = "unknown";
    let topic = "unknown";
    try {
      const body = await request.json();
      notificationId = String(body?.notification?.notificationId ?? notificationId);
      topic = String(body?.metadata?.topic ?? topic);
    } catch {
      // Acknowledge anyway: eBay retries until it gets a 2xx.
    }
    console.log(`ebay-deletion: acknowledged ${topic} ${notificationId}`);
    return new Response(null, { status: 204, headers: { "cache-control": "no-store" } });
  }

  if (request.method === "GET") {
    const challengeCode = url.searchParams.get("challenge_code");
    if (!challengeCode) return json({ error: "Missing challenge_code" }, 400);
    const token = env.EBAY_VERIFICATION_TOKEN;
    if (!token) {
      // Only needed when the endpoint is saved again in eBay's portal.
      console.error("ebay-deletion: EBAY_VERIFICATION_TOKEN secret is not set");
      return json({ error: "Misconfigured" }, 500);
    }
    const endpoint = env.EBAY_DELETION_ENDPOINT || EBAY_DELETION_ENDPOINT;
    const challengeResponse = await sha256Hex(challengeCode + token + endpoint);
    return json({ challengeResponse });
  }

  return json({ error: "Method not allowed" }, 405, { allow: "GET, POST" });
}

async function sha256Hex(text) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store", ...extraHeaders },
  });
}
