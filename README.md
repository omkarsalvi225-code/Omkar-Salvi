## UI/UX Portfolio (React + Tailwind)

Premium static portfolio site for a UI/UX designer (single-page, smooth scroll, Framer Motion).

### Tech

- React (Vite)
- Tailwind CSS
- Framer Motion

### Folder structure

- `src/components/` reusable UI primitives
- `src/sections/` page sections (Hero, About, Skills, etc.)
- `src/data/` resume-driven content (`profile.js`)
- `public/` static assets (`resume.pdf`, project preview images)

### Run locally

```bash
cd UIUX-portfolio-
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

### Update content

Edit `src/data/profile.js`.

Resume download button serves `public/resume.pdf`.

### Push to GitHub

```bash
cd UIUX-portfolio-
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

### Deploy to Netlify

- Create a new site in Netlify and connect your GitHub repo.
- **Build command**: `npm run build`
- **Publish directory**: `dist`

If Netlify asks for a Node version, use **Node 20+**.

Optional (recommended): Add a `.nvmrc` or Netlify environment variable `NODE_VERSION=20`.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
