# Pilli Group Foundation

A modern React + Tailwind website for Pilli Group Foundation, designed to help supporters, sponsors, churches, and donors connect with the mission more clearly.

This project is a Vite-powered React app with responsive sections, sponsor-focused messaging, and a dedicated children visibility experience for supporters.

## What’s included

- A polished nonprofit-style home page with impact highlights and trust signals
- Dedicated pages for individuals, churches, and children
- Sponsor-oriented messaging that makes the giving journey clearer
- A featured children experience so donors and sponsors can see the people behind the mission
- Responsive storytelling sections, contact forms, and navigation built with React and Tailwind CSS
- Local form and authentication handling for demo purposes

## Tech stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM

## Local development

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal in your browser.

## Production build

Create an optimized production build:

```bash
npm run build
```

Preview the production output locally:

```bash
npm run preview
```

The production build is generated in the `dist/` folder.

## Project structure

- `src/`
  - `main.jsx` — application entrypoint
  - `App.jsx` — route configuration and app shell
  - `index.css` — Tailwind imports and global styles
  - `components/` — shared UI such as navigation, forms, and layout
  - `pages/` — Home, Individuals, Churches, Children, Login, and Signup views
  - `lib/formService.js` — local storage-based form and auth utilities
- `index.html` — Vite HTML template
- `tailwind.config.js` — Tailwind configuration
- `vite.config.js` — Vite configuration
- `firebase.json` — Firebase hosting config
- `vercel.json` — Vercel SPA routing config

## Deployment

### Firebase Hosting

Firebase is configured to serve the production build from the `dist/` folder with SPA rewrites.

### Vercel

Vercel is configured for client-side routing with the SPA rewrite included in `vercel.json`.

## Notes

- The site is currently front-end focused and uses local storage for demo form and auth behavior.
- For real backend support, the existing local form service can be replaced with API calls to your preferred platform.
