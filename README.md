# flick-tt-web

Astro site for Flick Table Tennis.

Live: https://www.flicktt.com/ — Preview: https://preview.flicktt.club/

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

The site deploys as a **Cloudflare Worker** with two environments (routes in `wrangler.jsonc`):

| Branch   | Worker                 | URL                            | Build                                    |
|----------|------------------------|--------------------------------|------------------------------------------|
| `master` | `flick-tt-web`         | https://www.flicktt.com/       | `astro build`                            |
| `dev`    | `flick-tt-web-preview` | https://preview.flicktt.club/  | `CLOUDFLARE_ENV=preview astro build`     |

The Astro Cloudflare adapter resolves the Wrangler environment at **build** time (it emits a flattened
`dist/client/wrangler.json`), so the environment is picked with `CLOUDFLARE_ENV` when building —
`wrangler deploy --env` has no effect afterwards.

CI (`.github/workflows/deploy.yml`) builds and deploys on every push to either branch; it needs the
`CLOUDFLARE_API_TOKEN` (Workers Scripts + Workers Routes edit on both zones) and
`CLOUDFLARE_ACCOUNT_ID` repository secrets. The preview host sends `X-Robots-Tag: noindex`
(`public/_headers`).

**Branch flow:** work lands on `dev` (directly or via feature branches). `master` only ever receives
merge PRs from `dev` — a branch ruleset blocks direct pushes and the `Protect master` workflow
(`.github/workflows/protect-master.yml`) is a required check that fails for any other source branch.

Deploy manually with:

```sh
pnpm build && npx wrangler deploy                          # production
CLOUDFLARE_ENV=preview pnpm build && npx wrangler deploy   # preview
```

## Notes

- Uses Astro with the Cloudflare adapter, and Tailwind CSS
- Pages live under `src/pages`
- Components live under `src/components`
- Static assets live in `public`
- `public/og-image.png` (social share image) is generated from the logo by `pnpm generate:og` — re-run if the logo changes
