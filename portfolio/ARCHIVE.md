# Local portfolio designs

This branch stores both new portfolio designs and the local A-button integration. The public site remains on `main`. This branch is not merged, and `vercel.json` disables automatic deployment for `codex/portfolio-design-archive` only.

Run `node portfolio/preview.cjs` from the repository root, then open:

- `http://localhost:4175/` — original website. Its top-left A opens the current new design in the same tab; the existing image-first landing animation runs on entry.
- `http://localhost:4175/portfolio/index.html` — saved new design 1.
- `http://localhost:4175/portfolio/v2.html` — current new design 2, with the white Timeline and Resume button.

The 1 / 2 controls appear on the new designs only. Their relative URLs work both in this subfolder and in the standalone local preview. The original site's content, project modal, navigation, analytics, contact links, and resume are preserved; its A destination is the only original-page change.

Both designs include their compiled JavaScript and assets, so viewing them needs no build. Editable React/GSAP source is in `component-src-v1` and `component-src`; each folder has its own package and build command. Install dependencies within a source folder and run `npm run build` only when changing its components.

The separate untouched V1 snapshot remains at `C:/Users/akans/Downloads/Portfolio-Version-1-Saved-2026-10-13`. The standalone working preview remains at `C:/Users/akans/Downloads/Portfolio-Elena-Preview`.
