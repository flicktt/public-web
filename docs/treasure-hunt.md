# Treasure hunt stickers

Stickers hidden around the site for the sticker hunt. Every file in `src/assets/stickers/` is a
sticker (WhatsApp sticker WebPs, 512×512); the ones with a placement are registered by id in
`src/treasureHunt.ts` and rendered through the components in `src/components/treasureHunt/`.

A dismissible banner above the header announces the hunt (`HuntBanner.astro`). Stickers render
with an empty `alt` and no "treasure hunt" text in the markup, and are generated at 256px or
larger so they stay sharp when zoomed. Everything that remembers state (banner dismissal,
visited pages, page-load count) lives in the visitor's `localStorage`, so it is per browser.

## Placed stickers

| Sticker | File | Id | Page | How to trigger |
| --- | --- | --- | --- | --- |
| <img src="../src/assets/stickers/alberto-drawer.webp" width="64" alt="alberto-drawer"> | `alberto-drawer` | `alberto-drawer` | Coaches | Open Alberto's profile drawer; sticker sits in the top-left corner. |
| <img src="../src/assets/stickers/lis-drawer.webp" width="64" alt="lis-drawer"> | `lis-drawer` | `lis-drawer` | Coaches | Open Lis's profile drawer; sticker sits in the top-left corner. |
| <img src="../src/assets/stickers/martin-drawer.webp" width="64" alt="martin-drawer"> | `martin-drawer` | `martin-drawer` | Coaches | Open Martin's profile drawer; sticker sits in the top-left corner. |
| <img src="../src/assets/stickers/404-alberto.webp" width="64" alt="404-alberto"> | `404-alberto` | `404-alberto` | 404 page | Visit any URL that doesn't exist; one of the six 404 stickers is picked at random per load. |
| <img src="../src/assets/stickers/404-isaac.webp" width="64" alt="404-isaac"> | `404-isaac` | `404-isaac` | 404 page | As above. |
| <img src="../src/assets/stickers/404-jess.webp" width="64" alt="404-jess"> | `404-jess` | `404-jess` | 404 page | As above. |
| <img src="../src/assets/stickers/404-leena.webp" width="64" alt="404-leena"> | `404-leena` | `404-leena` | 404 page | As above. |
| <img src="../src/assets/stickers/404-mark.webp" width="64" alt="404-mark"> | `404-mark` | `404-mark` | 404 page | As above. |
| <img src="../src/assets/stickers/404-shreyansh.webp" width="64" alt="404-shreyansh"> | `404-shreyansh` | `404-shreyansh` | 404 page | As above. |
| <img src="../src/assets/stickers/sid-1.webp" width="64" alt="sid-1"> | `sid-1` | `sid-footer` | Every page (footer) | Hover or click/tap "Sid Gurung" in the footer credit; pops up above the name. |
| <img src="../src/assets/stickers/may-workshop.webp" width="64" alt="may-workshop"> | `may-workshop` | `may-workshop` | Membership | Hover or click/tap "Free" in the Workshop row of the benefits table (or mobile card). |
| <img src="../src/assets/stickers/mark-1.webp" width="64" alt="mark-1"> | `mark-1` | `mark-about` | About | Hover or click/tap "Mark Lee" in the contacts list. |
| <img src="../src/assets/stickers/isaac-1.webp" width="64" alt="isaac-1"> | `isaac-1` | `isaac-whatsapp` | Every page (footer) and About | Hover the WhatsApp icon, or long-press it on touch (the press doesn't open WhatsApp). |
| <img src="../src/assets/stickers/lis-3.webp" width="64" alt="lis-3"> | `lis-3` | `lis-smiley` | Membership | Hover the smiley-face icon in the points row to flip it over; click/tap toggles it. |
| <img src="../src/assets/stickers/mark-go.webp" width="64" alt="mark-go"> | `mark-go` | `mark-go` | Compete › Club League | Front of the card in the top-right corner of the "Currently Active" box. |
| <img src="../src/assets/stickers/mark-stop.webp" width="64" alt="mark-stop"> | `mark-stop` | `mark-stop` | Compete › Club League | Back of that card: each click flips it; moving the mouse onto it flips it once too. |
| <img src="../src/assets/stickers/brandon-1.webp" width="64" alt="brandon-1"> | `brandon-1` | `brandon-tournament` | Compete › Tournament | Scroll to the very bottom of the page; springs up from the bottom edge for 1.5 s. Re-arms after scrolling away. |
| <img src="../src/assets/stickers/brandon-2.webp" width="64" alt="brandon-2"> | `brandon-2` | `brandon-level1` | Offerings › Group Sessions | Open the "LEVEL 1 — Solid foundations" accordion; sits in the top-right corner with the text wrapping around it. |
| <img src="../src/assets/stickers/burger.webp" width="64" alt="burger"> | `burger` | `burger-menu` | Every page (mobile menu) | Open the mobile nav menu; the toggle button inside it shows the burger instead of the hamburger icon. |
| <img src="../src/assets/stickers/ben-popout.webp" width="64" alt="ben-popout"> | `ben-popout` | `ben-schedule` | Home | Swipe/scroll the schedule to its right-hand end; slides in from the right edge for 1.5 s. Below the `xl` breakpoint only (the schedule doesn't scroll on wide screens). |
| <img src="../src/assets/stickers/david-popout.webp" width="64" alt="david-popout"> | `david-popout` | `david-schedule` | Home | Swipe/scroll the schedule back to its left-hand end; slides in from the left edge for 1.5 s. |
| <img src="../src/assets/stickers/leena-fall.webp" width="64" alt="leena-fall"> | `leena-fall` | `leena-shake` | Every page | Shake the phone hard (four strong jolts within 1.5 s); slides down from the top and fades after 3 s. Android works as is; iOS asks for motion permission on the first tap. |
| <img src="../src/assets/stickers/lis-4.webp" width="64" alt="lis-4"> | `lis-4` | `lis-reward` | Every page | Visit every page of the site (all 17, not the 404); a card with the sticker appears at the bottom and follows you until dismissed. Dismissing resets the count so the round can be done again. |
| <img src="../src/assets/stickers/leena-hello.webp" width="64" alt="leena-hello"> | `leena-hello` | `leena-hello` | Every page | From the 20th page load on, each load has a 10% chance of a greeting card ("Hello!") that fades after 3 s. |
| <img src="../src/assets/stickers/may-hello.webp" width="64" alt="may-hello"> | `may-hello` | `may-hello` | Every page | As above ("Hello!"). |
| <img src="../src/assets/stickers/umberto-1.webp" width="64" alt="umberto-1"> | `umberto-1` | `umberto-hello` | Every page | As above ("Che?"). |
| <img src="../src/assets/stickers/brandon-4.webp" width="64" alt="brandon-4"> | `brandon-4` | `brandon-hello` | Every page | As above ("How you doin'?"). |

## Not placed yet

| Sticker | File | Notes |
| --- | --- | --- |
| <img src="../src/assets/stickers/alberto-1.webp" width="64" alt="alberto-1"> | `alberto-1` | |
| <img src="../src/assets/stickers/alberto-2.webp" width="64" alt="alberto-2"> | `alberto-2` | |
| <img src="../src/assets/stickers/alberto-3.webp" width="64" alt="alberto-3"> | `alberto-3` | |
| <img src="../src/assets/stickers/brandon-3.webp" width="64" alt="brandon-3"> | `brandon-3` | |
| <img src="../src/assets/stickers/charles-1.webp" width="64" alt="charles-1"> | `charles-1` | |
| <img src="../src/assets/stickers/charles-2.webp" width="64" alt="charles-2"> | `charles-2` | |
| <img src="../src/assets/stickers/charles-3.webp" width="64" alt="charles-3"> | `charles-3` | |
| <img src="../src/assets/stickers/chips.webp" width="64" alt="chips"> | `chips` | Pairs naturally with `burger`. |
| <img src="../src/assets/stickers/david-1.webp" width="64" alt="david-1"> | `david-1` | |
| <img src="../src/assets/stickers/isaac-2.webp" width="64" alt="isaac-2"> | `isaac-2` | |
| <img src="../src/assets/stickers/isaac-3.webp" width="64" alt="isaac-3"> | `isaac-3` | |
| <img src="../src/assets/stickers/jess-1.webp" width="64" alt="jess-1"> | `jess-1` | |
| <img src="../src/assets/stickers/jess-2.webp" width="64" alt="jess-2"> | `jess-2` | |
| <img src="../src/assets/stickers/lis-1.webp" width="64" alt="lis-1"> | `lis-1` | |
| <img src="../src/assets/stickers/lis-5.webp" width="64" alt="lis-5"> | `lis-5` | |
| <img src="../src/assets/stickers/lis-clap.webp" width="64" alt="lis-clap"> | `lis-clap` | |
| <img src="../src/assets/stickers/mark-2.webp" width="64" alt="mark-2"> | `mark-2` | |
| <img src="../src/assets/stickers/martin-1.webp" width="64" alt="martin-1"> | `martin-1` | |
| <img src="../src/assets/stickers/may-1.webp" width="64" alt="may-1"> | `may-1` | |
| <img src="../src/assets/stickers/may-2.webp" width="64" alt="may-2"> | `may-2` | |
| <img src="../src/assets/stickers/neha-1.webp" width="64" alt="neha-1"> | `neha-1` | |
| <img src="../src/assets/stickers/shreyansh-1.webp" width="64" alt="shreyansh-1"> | `shreyansh-1` | |
| <img src="../src/assets/stickers/shreyansh-2.webp" width="64" alt="shreyansh-2"> | `shreyansh-2` | |
| <img src="../src/assets/stickers/shreyansh-3.webp" width="64" alt="shreyansh-3"> | `shreyansh-3` | |
| <img src="../src/assets/stickers/shreyansh-4.webp" width="64" alt="shreyansh-4"> | `shreyansh-4` | |
| <img src="../src/assets/stickers/sid-2.webp" width="64" alt="sid-2"> | `sid-2` | |
| <img src="../src/assets/stickers/sid-3.webp" width="64" alt="sid-3"> | `sid-3` | |

## Mechanics

Each placement is one of these components (all in `src/components/treasureHunt/`):

| Component | Behaviour |
| --- | --- |
| `Sticker` | Plain sticker `<img>` at a given size; the building block for the rest. |
| `RandomSticker` | Renders one of several ids, chosen client-side on every load (404 page). |
| `RevealSticker` | Wraps a word or icon; the sticker pops up above it on hover, and click/tap toggles it. `hoverOnly` for content inside links (long press on touch instead of tap). |
| `FlipSticker` | Flip card with slotted content on the front and a sticker on the back; hover shows the back, click toggles. |
| `ToggleSticker` | Flip card with a sticker on each face; click and mouse-enter each flip it. |
| `PopoutSticker` | Fixed to a viewport edge, slides in on a trigger: `page-end`, `scroll-edge` (a horizontal scroller reaching an edge) or `parent-dialog` (its `<dialog>` opening). |
| `ShakeSticker` | Drops from the top when the phone is shaken hard. |
| `VisitedAllSticker` | Dismissible reward card once every page has been visited. |
| `GreetingSticker` | Occasional random captioned greeting after a number of page loads. |
| `HuntBanner` | The announcement strip above the header. |

The flip cards use a 2D squash-and-swap (`flipCard.ts`) rather than a 3D rotation, because
browsers rasterise 3D-transformed layers once at their on-page size and the stickers would stay
blurry under zoom.

## Adding a sticker

1. Drop the WebP into `src/assets/stickers/` (512×512, like the others).
2. Import it in `src/treasureHunt.ts` and add an entry to `STICKERS` under a descriptive id.
3. Place it with one of the components above, and add a row to the table here.
