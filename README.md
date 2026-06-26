# Pilli Group Foundation

A modern, responsive website for Pilli Group Foundation featuring:
- a home page for the foundation's mission and impact
- dedicated pages for churches and faith communities
- dedicated pages for individual givers
- login and sign-up pages
- Firebase-ready form submission support

## Preview locally

From the project folder, run:

```bash
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Project structure

- index.html — main landing page
- churches.html — faith communities page
- individuals.html — individual givers page
- login.html — login page
- signup.html — sign-up page
- styles.css — site styling
- script.js — form handling and auth logic

## Firebase setup

To enable real Firebase submissions and authentication, update the Firebase configuration in script.js and the project ID in .firebaserc with your own Firebase project details.

## Deployment

The site is configured for Firebase Hosting via firebase.json.
