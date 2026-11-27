# crivac.com — Portfolio

Personal portfolio for David Crivac, live at **https://www.crivac.com**.

## Stack
- **Vite 6 + React 18 + TypeScript**, Tailwind CSS v4, shadcn/ui, framer-motion.
- Single-page scroll site — **no client-side router**. All sections render in `App.tsx`.

## How to edit content (most common task)

The site is plain text inside React components in `components/`. To change wording, links,
or projects, edit these files — no build step needed to find the text:

| What you want to change | File | What to look for |
|---|---|---|
| Name, rotating job titles, hero social links | `components/HeroSection.tsx` | the `titles` array; `Github`/`Linkedin`/`Mail` links |
| Bio / about text | `components/AboutSection.tsx` | the paragraph text |
| Skills list | `components/SkillsSection.tsx` | the skills data arrays |
| **Projects** (add/edit/reorder) | `components/ProjectsSection.tsx` | the `projects` array — each item has `title`, `description`, `image`, `technologies`, `github`, `live`, `featured` |
| Contact email / links | `components/ContactSection.tsx` | contact data |
| Nav menu / logo | `components/Navigation.tsx` | nav items |

To **add a project**, copy an existing object in the `projects` array in
`components/ProjectsSection.tsx` and edit its fields. Set `featured: true` to put it in the
top "Featured Projects" grid.

## Run locally
```bash
npm install        # first time only
npm run dev        # local dev server with hot reload
npm run build      # production build -> dist/  (tsc && vite build)
npm run preview    # serve the built dist/ locally
npm run format     # prettier
```

## Deploy (automatic)

**Push to `main` → it goes live automatically.** No manual steps.

crivac.com is served by the Cloudflare Worker `crivac-site` (custom domain `crivac.com`).
`.github/workflows/deploy.yml` runs on every push to `main`: it builds the site and runs
`wrangler deploy`, which uploads `dist/` as the Worker's static assets plus `workers/site.js`.
Pull requests only build, so a broken build shows up before merge.

- `wrangler.jsonc` holds the Worker config (name, account, assets dir, custom domain).
- **A deploy replaces every static file on the Worker.** Anything served from crivac.com must
  live in this repo (`public/` is copied into `dist/` as is, e.g. `public/projects/`).
- `workers/site.js` serves the assets plus one route, `/ebay-deletion.php`: Yard Picker Pro's
  eBay Marketplace Account Deletion endpoint, still registered at this crivac.com URL in the
  eBay developer portal. POST notices get a 204 (the app stores no eBay user data). The GET
  challenge needs the Worker secret `EBAY_VERIFICATION_TOKEN` (the token in eBay's portal),
  and only runs when the endpoint is saved again there. Keep this route until the portal points
  at Yard Picker Pro's own domain, or eBay can disable the app's keys.
- The old `POST /api/generate` proxy to Anthropic was removed because it was open to anyone.
  Don't add a route that spends an API key without auth and a rate limit.
- `public/_redirects` sends the old `/yp2.html` to Yard Picker Pro's own domain.
- The workflow needs one GitHub Actions secret: `CLOUDFLARE_API_TOKEN` (Edit Cloudflare
  Workers template, scoped to this account and the crivac.com zone).
- The site moved off SiteGround in Nov 2026. The old `SSH_*` / `REMOTE_PATH` secrets are unused.

## Editing on the go
This repo is connected to Claude Code on the web (claude.ai/code). From a phone or browser:
describe the change, let Claude commit to `main`, and the deploy pipeline publishes it.

## Notes
- `dist/`, `logs/`, `webstats/`, `public_html/` are build/server artifacts and are gitignored —
  don't commit them. CI regenerates `dist/` on each deploy.
