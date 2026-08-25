# flick-tt-web

Astro site for Flick Table Tennis.

Link: https://preview.flicktt.club/

## Requirements

- Node.js 22.12.0 or newer
- pnpm

## Setup

```sh
pnpm install
```

## Local development

```sh
pnpm dev
```

Open the site at `http://localhost:4321`.

## Build

```sh
pnpm build
```

## Preview production build

```sh
pnpm preview
```

## Deployment

The site deploys as a **Cloudflare Worker** (`flick-tt-web`, routes in `wrangler.jsonc`). CI
(`.github/workflows/deploy.yml`) builds and deploys on every push to `master`; it needs the
`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repository secrets.

Deploy manually with:

```sh
pnpm build
npx wrangler deploy
```

## Notes

- Uses Astro with the Cloudflare adapter, and Tailwind CSS
- Pages live under `src/pages`
- Components live under `src/components`
- Static assets live in `public`
