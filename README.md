# Pilli Group Foundation

A modern React + Tailwind website for Pilli Group Foundation.

This repository contains the migrated version of the original static site, rebuilt as a Vite-powered React app with client-side routing and Tailwind CSS for fast, maintainable styling.

## Features

- React application with route-based pages
- Tailwind CSS styling and responsive design
- Vite-powered development and production build
- Local form handling and auth simulation via `localStorage`
- Modal-based login and signup experience
- SPA-friendly routing for Firebase/Vercel deployment

## Local development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite in your browser.

## Production build

Build the optimized production site:

```bash
npm run build
```

Preview the production output locally:

```bash
npm run preview
```

The built site is generated in `dist/`.

## Project structure

- `src/`
  - `main.jsx` — application entrypoint
  - `App.jsx` — route configuration and app shell
  - `index.css` — Tailwind imports and global styles
  - `components/` — shared UI components
  - `pages/` — page-level views for Home, Churches, Individuals, Login, Signup
  - `lib/formService.js` — local storage form and auth utilities
- `index.html` — Vite HTML template
- `tailwind.config.js` — Tailwind configuration
- `vite.config.js` — Vite configuration
- `firebase.json` — static site hosting config for Firebase
- `vercel.json` — SPA routing config for Vercel

## Deployment

### Firebase Hosting

Firebase is configured to serve the production `dist/` folder with SPA rewrites in `firebase.json`.

### Vercel

Vercel is configured for client-side routing with the SPA rewrite in `vercel.json`.

## Notes

- The legacy static pages and CSS files have been removed after migration.
- Form submissions and auth are mocked locally for demo purposes.
- For real backend integration, replace `src/lib/formService.js` with API calls to your chosen backend.
