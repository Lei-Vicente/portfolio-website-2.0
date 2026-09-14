# Leibern R. Vicente — Portfolio

A responsive personal portfolio and digital resume built with React, TypeScript, Vite, Tailwind CSS, and Motion.

## Getting started

**Prerequisite:** Node.js 20 or later.

```bash
npm install
npm run dev
```

The development server is available at `http://localhost:3000`.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run TypeScript type checking without emitting files |
| `npm run clean` | Remove the production build output |

## Deployment

The app is a static Vite site. It can be deployed to GitHub Pages, Vercel, Netlify, or any static hosting provider after running `npm run build`.

For GitHub Pages under a project repository, set Vite's `base` option to `/<repository-name>/` before building. A custom domain or a user site repository (`<username>.github.io`) can use the default base path.

## Environment variables

The current portfolio has no runtime environment-variable requirements. `.env.example` is retained as a safe template if an integration is added later; never commit real `.env` files or API keys.

## License

No license has been selected yet. Add a license file before accepting outside contributions or reuse.
