# ✨ Premium Personal Portfolio Website

[![Deploy to GitHub Pages](https://github.com/Lybaqadir/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Lybaqadir/portfolio/actions/workflows/deploy.yml)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwindcss&logoColor=white)

A single-page personal portfolio site — hero, about, skills, experience, education, hackathons, and projects sections — built with React + Vite + Tailwind, and auto-deployed to GitHub Pages.

🔗 **Live site:** https://lybaqadir.github.io/portfolio/

---

<details>
<summary>📦 <strong>What's in this repo?</strong> (click to expand)</summary>

```
src/
├── app/
│   ├── App.tsx          # Root component, wires up the router
│   ├── Portfolio.tsx    # Composes all page sections
│   ├── routes.tsx       # react-router setup (basename: /portfolio/)
│   └── components/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Education.tsx
│       ├── Hackathons.tsx
│       ├── Projects.tsx
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── IntroSplash.tsx
│       ├── ui/          # Reusable UI primitives (Radix + shadcn-style)
│       └── figma/        # Figma-imported asset helpers
├── assets/images/        # Photos used across sections
└── styles/                # Global Tailwind styles
```

</details>

<details>
<summary>🚀 <strong>Run it locally</strong> (click to expand)</summary>

```bash
npm install      # install dependencies
npm run dev      # start the Vite dev server
npm run build    # production build → dist/
```

</details>

<details>
<summary>🌐 <strong>How deployment works</strong> (click to expand)</summary>

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which:

1. Installs dependencies and runs `npm run build`
2. Uploads the `dist/` output as a Pages artifact
3. Deploys it to GitHub Pages

Since the site is served from a subpath (`/portfolio/`), `vite.config.ts` and `routes.tsx` are both configured with a matching `base` / `basename` so assets and routes resolve correctly.

</details>

<details>
<summary>🖼️ <strong>Updating photos</strong> (click to expand)</summary>

See [HOW_TO_ADD_YOUR_PHOTOS.md](HOW_TO_ADD_YOUR_PHOTOS.md) for instructions on swapping in your own images.

</details>

---

🎨 Originally designed in Figma: [Premium Personal Portfolio Website](https://www.figma.com/design/MSBp6cOHKe5YlO5fv8OK8z/Premium-Personal-Portfolio-Website)

See [ATTRIBUTIONS.md](ATTRIBUTIONS.md) for third-party credits.
