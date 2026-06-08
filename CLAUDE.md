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

`.github/workflows/deploy.yml` runs on every push to `main`: it builds the site and uploads
`dist/` to SiteGround over SFTP. Goes live at https://www.crivac.com within ~1 minute.

- The SiteGround web root is **shared** — it also holds backend files (`api.php`, `scrape.php`,
  etc.) for other projects. The deploy uses `delete_remote_files: false` and only uploads the
  built portfolio, so **never enable delete-remote** or those files will be wiped.
- Deploy target + SSH live in the repo's GitHub **Actions secrets** (`SSH_HOST`, `SSH_USERNAME`,
  `SSH_PORT`, `SSH_PRIVATE_KEY`, `REMOTE_PATH`). The web root is
  `/home/u2074-ems391e7qg8i/www/crivac.com/public_html/`.

## Editing on the go
This repo is connected to Claude Code on the web (claude.ai/code). From a phone or browser:
describe the change, let Claude commit to `main`, and the deploy pipeline publishes it.

## Notes
- `dist/`, `logs/`, `webstats/`, `public_html/` are build/server artifacts and are gitignored —
  don't commit them. CI regenerates `dist/` on each deploy.
