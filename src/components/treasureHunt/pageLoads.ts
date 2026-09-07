/**
 * Counts this browser's page loads in localStorage. The count is bumped once per page load no
 * matter how many components ask for it (the module caches the result), so every treasure hunt
 * feature keyed on page loads sees the same number. Returns 0 if storage is unavailable.
 */
const KEY = "hunt:page-loads";
let current: number | undefined;

export function pageLoadCount(): number {
  if (current === undefined) {
    try {
      current = (Number(localStorage.getItem(KEY)) || 0) + 1;
      localStorage.setItem(KEY, String(current));
    } catch {
      current = 0;
    }
  }
  return current;
}
