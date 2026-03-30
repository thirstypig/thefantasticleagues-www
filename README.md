# The Fantastic Leagues — Marketing Site

Static marketing site for [The Fantastic Leagues](https://www.thefantasticleagues.com).

Built with **Astro** + **Tina.io CMS**. Deployed to **GitHub Pages**.

## Development

```bash
npm install
npm run dev    # Starts Astro + Tina at http://localhost:3030
```

## Content Management

Blog posts and changelog entries are managed via Tina CMS:
- Local: `http://localhost:3030/admin`
- Cloud: Connect to [Tina Cloud](https://app.tina.io) for visual editing

Content lives in `content/` as MDX files, committed to git.

## Deployment

Push to `main` triggers GitHub Actions → builds Astro → deploys to GitHub Pages.

## Architecture

- `www.thefantasticleagues.com` → This repo (GitHub Pages)
- `app.thefantasticleagues.com` → Main app ([fbst](https://github.com/thirstypig/fbst) on Railway)
