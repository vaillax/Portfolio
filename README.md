# Alexander Villagomez — Portfolio

Astro static site. Dark theme, maize & blue accents, near-zero JS.

## Commands
- `npm run dev` — local dev server at http://localhost:4321
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built site

## Editing content
**All text lives in `src/data/site.ts`.** Search it for `TODO` to find placeholders:
- `links.email` / `links.linkedin` — pre-filled from resume, confirm
- Roblox Game Dev + JARVIS project descriptions and links
- `image:` fields on projects — drop files in `public/projects/` and set e.g. `"/projects/jarvis.png"` (16:9 looks best)

Other:
- Resume: replace `public/resume.pdf`
- Deployed URL: `site` in `astro.config.mjs`
- Colors/fonts: `src/styles/global.css` (`:root` tokens)
