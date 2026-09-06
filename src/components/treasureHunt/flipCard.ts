/**
 * Flips a two-faced card by squashing it horizontally to nothing, swapping which face is shown,
 * and expanding it again. It's a 2D effect on purpose: browsers rasterise 3D-transformed layers
 * once at their on-page size, so a 3D-rotated sticker stays blurry when the reader zooms in. At
 * rest the card carries no transform at all and re-renders sharply at any zoom.
 *
 * `card` holds two children marked `data-flip-face="front"` and `data-flip-face="back"`; one is
 * `hidden` at any time.
 */
const HALF_MS = 200;

const reducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

const showFace = (card: HTMLElement, showBack: boolean) => {
  for (const face of card.querySelectorAll<HTMLElement>("[data-flip-face]")) {
    face.hidden = (face.dataset.flipFace === "back") !== showBack;
  }
};

const pending = new WeakMap<HTMLElement, boolean>();

export function flipCard(card: HTMLElement, showBack: boolean) {
  if (reducedMotion()) {
    showFace(card, showBack);
    return;
  }
  // Remember the latest target; if a flip is already mid-way, it picks this up when it swaps.
  const alreadyFlipping = pending.has(card);
  pending.set(card, showBack);
  if (alreadyFlipping) return;

  card.style.transition = `transform ${HALF_MS}ms ease-in`;
  card.style.transform = "scaleX(0)";
  setTimeout(() => {
    showFace(card, pending.get(card) ?? showBack);
    pending.delete(card);
    card.style.transition = `transform ${HALF_MS}ms ease-out`;
    card.style.transform = "";
    setTimeout(() => {
      card.style.transition = "";
    }, HALF_MS);
  }, HALF_MS);
}
