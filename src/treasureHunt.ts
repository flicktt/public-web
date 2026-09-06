import type { ImageMetadata } from "astro";
import albertoDrawer from "./assets/stickers/alberto-drawer.webp";
import lisDrawer from "./assets/stickers/lis-drawer.webp";
import martinDrawer from "./assets/stickers/martin-drawer.webp";
import notFoundAlberto from "./assets/stickers/404-alberto.webp";
import notFoundIsaac from "./assets/stickers/404-isaac.webp";
import notFoundJess from "./assets/stickers/404-jess.webp";
import notFoundLeena from "./assets/stickers/404-leena.webp";
import notFoundMark from "./assets/stickers/404-mark.webp";
import notFoundShreyansh from "./assets/stickers/404-shreyansh.webp";
import sidFooter from "./assets/stickers/sid-1.webp";

/**
 * Treasure hunt stickers (WhatsApp sticker WebP files in src/assets/stickers). Each entry is one
 * hidden sticker; placing it is a `<Sticker id="..." />` in the component that hides it.
 * Adding, removing or moving a sticker is a change here plus the one placement.
 * `<RandomSticker ids={[...]} />` places one of several, chosen client-side on each load.
 */
export const STICKERS = {
  "alberto-drawer": { img: albertoDrawer, alt: "Treasure hunt sticker: Alberto" },
  "lis-drawer": { img: lisDrawer, alt: "Treasure hunt sticker: Lis" },
  "martin-drawer": { img: martinDrawer, alt: "Treasure hunt sticker: Martin" },
  // 404 page: one of these is shown per load (see RandomSticker.astro / pages/404.astro).
  "404-alberto": { img: notFoundAlberto, alt: "Treasure hunt sticker: Alberto" },
  "404-isaac": { img: notFoundIsaac, alt: "Treasure hunt sticker: Isaac" },
  "404-jess": { img: notFoundJess, alt: "Treasure hunt sticker: Jess" },
  "404-leena": { img: notFoundLeena, alt: "Treasure hunt sticker: Leena" },
  "404-mark": { img: notFoundMark, alt: "Treasure hunt sticker: Mark" },
  "404-shreyansh": { img: notFoundShreyansh, alt: "Treasure hunt sticker: Shreyansh" },
  // Footer: revealed by hovering or clicking the developer credit.
  "sid-footer": { img: sidFooter, alt: "Treasure hunt sticker: Sid" },
} as const satisfies Record<string, { img: ImageMetadata; alt: string }>;

export type StickerId = keyof typeof STICKERS;
