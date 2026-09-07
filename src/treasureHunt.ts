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
import isaacWhatsapp from "./assets/stickers/isaac-1.webp";
import lisSmiley from "./assets/stickers/lis-3.webp";
import markGo from "./assets/stickers/mark-go.webp";
import markStop from "./assets/stickers/mark-stop.webp";
import brandonLevel1 from "./assets/stickers/brandon-2.webp";
import charlesChristmas from "./assets/stickers/charles-1.webp";
import brandonTournament from "./assets/stickers/brandon-1.webp";
import burgerMenu from "./assets/stickers/burger.webp";
import benSchedule from "./assets/stickers/ben-popout.webp";
import davidSchedule from "./assets/stickers/david-popout.webp";
import leenaShake from "./assets/stickers/leena-fall.webp";
import lisReward from "./assets/stickers/lis-4.webp";
import leenaHello from "./assets/stickers/leena-hello.webp";
import mayHello from "./assets/stickers/may-hello.webp";
import umbertoHello from "./assets/stickers/umberto-1.webp";
import brandonHello from "./assets/stickers/brandon-4.webp";

/**
 * Treasure hunt stickers (WhatsApp sticker WebP files in src/assets/stickers). Each entry is one
 * hidden sticker; placing it is a `<Sticker id="..." />` in the component that hides it.
 * Adding, removing or moving a sticker is a change here plus the one placement.
 * `<RandomSticker ids={[...]} />` places one of several, chosen client-side on each load;
 * `<RevealSticker id="...">word</RevealSticker>` pops one up above a word on hover/click;
 * `<PopoutSticker id="..." />` jumps up from the bottom edge when the page is scrolled to the end
 * (or a scroll container reaches an edge, or the <dialog> it sits in opens; see its props).
 * `<FlipSticker id="...">icon</FlipSticker>` flips the content over to reveal one on hover/click;
 * `<ToggleSticker front="..." back="..." />` flips between two stickers on each click;
 * `<ShakeSticker id="..." />` drops one onto the floor when the phone is shaken hard.
 * `<VisitedAllSticker id="..." />` is a dismissible reward pop-up after every page is visited.
 * Stickers render with an empty alt on purpose: no name or "treasure hunt" hint in the markup.
 * `<GreetingSticker greetings={[...]} />` occasionally shows a random captioned greeting.
 * `<ClockSticker id="..." hour12={..} minute={..} />` is a dismissible card at a given time of day.
 */
export const STICKERS = {
  "alberto-drawer": { img: albertoDrawer },
  "lis-drawer": { img: lisDrawer },
  "martin-drawer": { img: martinDrawer },
  // 404 page: one of these is shown per load (see RandomSticker.astro / pages/404.astro).
  "404-alberto": { img: notFoundAlberto },
  "404-isaac": { img: notFoundIsaac },
  "404-jess": { img: notFoundJess },
  "404-leena": { img: notFoundLeena },
  "404-mark": { img: notFoundMark },
  "404-shreyansh": { img: notFoundShreyansh },
  // Revealed by hovering/clicking a word (RevealSticker.astro): footer credit, membership "Free",
  // about page contact name, WhatsApp icon (hover only).
  "sid-footer": { img: sidFooter },
  "may-workshop": { img: mayWorkshop },
  "mark-about": { img: markAbout },
  "isaac-whatsapp": { img: isaacWhatsapp },
  // On the back of the membership page smiley icon (FlipSticker.astro).
  "lis-smiley": { img: lisSmiley },
  // League page "Currently Active" box corner; clicking flips between the two (ToggleSticker.astro).
  "mark-go": { img: markGo },
  "mark-stop": { img: markStop },
  // Group sessions page: inside the Level 1 accordion panel, right side.
  "brandon-level1": { img: brandonLevel1 },
  // Every page: dismissible card for anyone loading a page at 12:25 am/pm (ClockSticker.astro).
  "charles-christmas": { img: charlesChristmas },
  // Jumps up from the bottom edge when the reader reaches the end of the page (PopoutSticker.astro).
  "brandon-tournament": { img: brandonTournament },
  // Replaces the hamburger icon on the toggle button inside the open mobile nav menu.
  "burger-menu": { img: burgerMenu },
  // Home page schedule: pop in from the viewport edge when it is swiped to its right/left end.
  "ben-schedule": { img: benSchedule },
  "david-schedule": { img: davidSchedule },
  // Every page: drops onto the floor when the phone is shaken hard (ShakeSticker.astro).
  "leena-shake": { img: leenaShake },
  // Reward pop-up once every page has been visited (VisitedAllSticker.astro).
  "lis-reward": { img: lisReward },
  // Random greetings after 20 page loads (GreetingSticker.astro).
  "leena-hello": { img: leenaHello },
  "may-hello": { img: mayHello },
  "umberto-hello": { img: umbertoHello },
  "brandon-hello": { img: brandonHello },
} as const satisfies Record<string, { img: ImageMetadata }>;

export type StickerId = keyof typeof STICKERS;

/**
 * Pixel width to generate a sticker image at for a given rendered CSS size. Stickers are drawn
 * small (down to 24px) but readers zoom in on them, so never go below 256px and give larger ones
 * three times their size, capped at the 512px source. The browser scales it down on the page.
 */
export const stickerRenderWidth = (size: number) => Math.min(512, Math.max(size * 3, 256));
