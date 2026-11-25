// crivac.com Worker: serves the built portfolio from dist/ (ASSETS binding).
//
// It used to forward POST /api/generate to the Anthropic API with the
// ANTHROPIC_API_KEY secret and no sign-in, so anyone could spend that key.
// Nothing on the site called it, so the route is gone. If an AI feature comes
// back, give it its own auth (or Cloudflare Access) and a rate limit first.
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
