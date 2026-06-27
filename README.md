# Pilli Group Foundation

A modern React + Tailwind website for Pilli Group Foundation.

## Local development

From the project folder, install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Production build

Build the optimized static site with:

```bash
npm run build
```

Then preview the production output locally with:

```bash
npm run preview
```

The output will be generated in `dist/`.

## Project structure

- `src/` — React app source code
- `src/pages/` — page components for each route
- `src/components/` — shared UI components
- `src/lib/formService.js` — local form and auth helpers
- `index.html` — Vite entrypoint
- `tailwind.config.js` — Tailwind configuration
- `vite.config.js` — Vite config

## Deployment

Firebase Hosting now targets the `dist/` folder via `firebase.json`.

Vercel is configured for SPA routing using `vercel.json`.
