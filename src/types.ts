import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export type Page =
  | "home"
  | "offerings"
  | "compete"
  | "kids"
  | "membership"
  | "about"
  | "coaches";

export type PageConfig = {
  title: string;
};

export type FaqConfig = {
  title: string;
  Content: AstroComponentFactory | string;
};

export type PageTabConfig = {
  label: string;
  contentId: string;
};
