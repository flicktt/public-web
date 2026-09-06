import type { ImageMetadata } from "astro";
import albertoDrawer from "./assets/stickers/alberto-drawer.webp";
import lisDrawer from "./assets/stickers/lis-drawer.webp";
import martinDrawer from "./assets/stickers/martin-drawer.webp";

/**
 * Treasure hunt stickers (WhatsApp sticker WebP files in src/assets/stickers). Each entry is one
 * hidden sticker; placing it is a `<Sticker id="..." />` in the component that hides it.
 * Adding, removing or moving a sticker is a change here plus the one placement.
 */
export const STICKERS = {
  "alberto-drawer": { img: albertoDrawer, alt: "Treasure hunt sticker: Alberto" },
  "lis-drawer": { img: lisDrawer, alt: "Treasure hunt sticker: Lis" },
  "martin-drawer": { img: martinDrawer, alt: "Treasure hunt sticker: Martin" },
} as const satisfies Record<string, { img: ImageMetadata; alt: string }>;

export type StickerId = keyof typeof STICKERS;
