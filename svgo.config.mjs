// SVGO config used by `npm run optimize:svg` (see package.json).
// svgo 4's preset-default already keeps viewBox and <title>, which our icon/logo
// components rely on (responsive scaling + accessible name), so no overrides needed.
export default {
	multipass: true,
	plugins: ["preset-default"],
};
