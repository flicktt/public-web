/**
 * Section navigation (PageTabs.astro). The section links are ordinary anchors between sibling
 * pages; this adds arrow/Home/End key movement between the desktop links and the mobile
 * open/close toggle for the collapsed list.
 */
export const initializeSectionNav = (root: HTMLElement) => {
  const desktopLinks = Array.from(
    root.querySelectorAll<HTMLAnchorElement>("[data-section-link]"),
  );

  const handleKeyboardNavigation = (
    event: KeyboardEvent,
    link: HTMLAnchorElement,
  ) => {
    const currentIndex = desktopLinks.indexOf(link);
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      nextIndex = (currentIndex + 1) % desktopLinks.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      nextIndex =
        (currentIndex - 1 + desktopLinks.length) % desktopLinks.length;
    } else if (event.key === "Home") {
      event.preventDefault();
      nextIndex = 0;
    } else if (event.key === "End") {
      event.preventDefault();
      nextIndex = desktopLinks.length - 1;
    }

    if (nextIndex !== currentIndex) {
      desktopLinks[nextIndex]?.focus();
    }
  };

  desktopLinks.forEach((link) => {
    link.addEventListener("keydown", (event) => {
      handleKeyboardNavigation(event, link);
    });
  });

  const mobileMenuToggle = root.querySelector<HTMLButtonElement>(
    "[data-mobile-menu-toggle]",
  );
  const mobileMenu = root.querySelector<HTMLElement>("[data-mobile-menu]");
  const mobileIconDown = root.querySelector<HTMLElement>(
    "[data-mobile-icon-down]",
  );
  const mobileIconUp = root.querySelector<HTMLElement>("[data-mobile-icon-up]");

  if (!mobileMenuToggle) return;

  mobileMenuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu?.getAttribute("data-open") === "true";
    const nextState = !isOpen;

    if (mobileMenu) {
      mobileMenu.classList.toggle("hidden", !nextState);
      mobileMenu.classList.toggle("block", nextState);
      mobileMenu.setAttribute("data-open", nextState ? "true" : "false");
    }
    mobileMenuToggle.setAttribute("aria-expanded", nextState ? "true" : "false");
    mobileIconDown?.classList.toggle("hidden", nextState);
    mobileIconUp?.classList.toggle("hidden", !nextState);
  });
};

export const initializeSectionNavs = (selector = "[data-section-nav-root]") => {
  document
    .querySelectorAll<HTMLElement>(selector)
    .forEach(initializeSectionNav);
};
