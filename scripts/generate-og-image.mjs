// Generates public/og-image.png (1200×630) — the club logo centred on the site background.
// Re-run with `pnpm generate:og` if the logo or brand colour changes; the PNG is committed
// so the build never needs to composite images at runtime.
import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;
const BACKGROUND = "#1e1e1e"; // --color-flick-black

const logo = await sharp("src/assets/logo-club.png")
  .resize({ width: 960, fit: "inside" })
  .png()
  .toBuffer();

await sharp({
  create: { width: WIDTH, height: HEIGHT, channels: 4, background: BACKGROUND },
})
  .composite([{ input: logo, gravity: "centre" }])
  .png({ compressionLevel: 9 })
  .toFile("public/og-image.png");

console.log("wrote public/og-image.png");
