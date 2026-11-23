// crivac.com Worker: serves the built portfolio from dist/ (ASSETS binding)
// and proxies POST /api/generate to the Anthropic Messages API.
// Copied from the live crivac-site Worker so a deploy keeps its behavior.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/generate") {
      if (request.method !== "POST") return json({ error: { message: "POST only" } }, 405);
      if (!env.ANTHROPIC_API_KEY) {
        return json({ error: { message: "Server missing ANTHROPIC_API_KEY secret." } }, 500);
      }
      let body;
      try {
        body = await request.json();
      } catch {
        return json({ error: { message: "Invalid JSON body." } }, 400);
      }
      const payload = {
        model: "claude-sonnet-4-6",
        max_tokens: 1000,
        messages: Array.isArray(body.messages) ? body.messages.slice(0, 2) : [],
      };
      if (!payload.messages.length) return json({ error: { message: "No messages supplied." } }, 400);
      try {
        const upstream = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "x-api-key": env.ANTHROPIC_API_KEY,
            "anthropic-version": "2023-06-01",
          },
          body: JSON.stringify(payload),
        });
        return json(await upstream.json(), upstream.status);
      } catch (e) {
        return json({ error: { message: "Upstream request failed: " + e.message } }, 502);
      }
    }

    return env.ASSETS.fetch(request);
  },
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });
}
