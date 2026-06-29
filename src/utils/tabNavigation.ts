export const navigateToTab = (
	tabId: string,
	options?: { scrollToTop?: boolean },
) => {
	if (!tabId) return;

	const { scrollToTop = false } = options ?? {};

	const url = new URL(window.location.href);
	url.hash = tabId;
	window.history.pushState({}, "", url);
	window.dispatchEvent(new HashChangeEvent("hashchange"));
	if (scrollToTop) {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
};
