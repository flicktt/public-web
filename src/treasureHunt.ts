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
import mayWorkshop from "./assets/stickers/may-workshop.webp";
import markAbout from "./assets/stickers/mark-1.webp";
import brandonTournament from "./assets/stickers/brandon-1.webp";
import burgerMenu from "./assets/stickers/burger.webp";
import benSchedule from "./assets/stickers/ben-popout.webp";
import davidSchedule from "./assets/stickers/david-popout.webp";

/**
 * Treasure hunt stickers (WhatsApp sticker WebP files in src/assets/stickers). Each entry is one
 * hidden sticker; placing it is a `<Sticker id="..." />` in the component that hides it.
 * Adding, removing or moving a sticker is a change here plus the one placement.
 * `<RandomSticker ids={[...]} />` places one of several, chosen client-side on each load;
 * `<RevealSticker id="...">word</RevealSticker>` pops one up above a word on hover/click;
 * `<PopoutSticker id="..." />` jumps up from the bottom edge when the page is scrolled to the end
 * (or a scroll container reaches an edge, or the <dialog> it sits in opens; see its props).
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
  // Revealed by hovering/clicking a word (RevealSticker.astro): footer credit, membership "Free",
  // about page contact name.
  "sid-footer": { img: sidFooter, alt: "Treasure hunt sticker: Sid" },
  "may-workshop": { img: mayWorkshop, alt: "Treasure hunt sticker: May" },
  "mark-about": { img: markAbout, alt: "Treasure hunt sticker: Mark" },
  // Jumps up from the bottom edge when the reader reaches the end of the page (PopoutSticker.astro).
  "brandon-tournament": { img: brandonTournament, alt: "Treasure hunt sticker: Brandon" },
  // Replaces the hamburger icon on the toggle button inside the open mobile nav menu.
  "burger-menu": { img: burgerMenu, alt: "Treasure hunt sticker: Burger" },
  // Home page schedule: pop in from the viewport edge when it is swiped to its right/left end.
  "ben-schedule": { img: benSchedule, alt: "Treasure hunt sticker: Ben" },
  "david-schedule": { img: davidSchedule, alt: "Treasure hunt sticker: David" },
} as const satisfies Record<string, { img: ImageMetadata; alt: string }>;

export type StickerId = keyof typeof STICKERS;
