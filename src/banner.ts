import { getImage } from "astro:assets";
import BannerBackground from "./assets/banner-image.png";

/**
 * The header banner shared by every page. Resolved once so that PageLayout
 * can `<link rel="preload">` the exact URL HeaderLayout paints as a CSS
 * background (a CSS background is otherwise only discovered after the
 * stylesheet/HTML is parsed, which delays the LCP).
 */
export const bannerBg = await getImage({ src: BannerBackground, width: 1920, format: "webp" });
