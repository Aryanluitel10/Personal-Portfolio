# Aryan Luitel · React Portfolio

A responsive personal portfolio built with React and Vite. Includes selected projects with category filtering, professional experience, education, résumé access, and email/LinkedIn/GitHub contact links.

## Development

Requires Node.js 22.12+ (or 20.19+).

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`. Relative asset paths support GitHub Pages project URLs as well as domain-root deployments.

## Customize

- Update profile, experience, and project content in `src/data.js`.
- Edit page sections in `src/main.jsx` and styling in `src/styles.css`.
- Replace `public/avatar.jpg` and `public/Resume.pdf` with current versions. The résumé and résumé-based content were updated from the supplied October 2026 upload.
- Project visuals are illustrations, not application screenshots. Project links are deliberately omitted until real repository or demo URLs are available. The GitHub profile link is provided instead.
- Email opens the visitor’s mail client. Copy email uses the browser clipboard API; it does not send a message.

## GitHub Pages

In the repository, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**. The included workflow deploys pushes to `main`, or can be run manually. If your default branch differs, update `.github/workflows/deploy.yml`.

For Vercel or Netlify, use build command `npm run build` and output directory `dist`.
