import { navigateToTab } from "./tabNavigation";

export const initializeTabController = (root: HTMLElement) => {
  const desktopTriggers = Array.from(
    root.querySelectorAll<HTMLButtonElement>("[data-tab-trigger]"),
  );
  const mobileMenuToggle = root.querySelector<HTMLButtonElement>(
    "[data-mobile-menu-toggle]",
  );
  const mobileMenu = root.querySelector<HTMLElement>("[data-mobile-menu]");
  const mobileIconDown = root.querySelector<HTMLElement>(
    "[data-mobile-icon-down]",
  );
  const mobileIconUp = root.querySelector<HTMLElement>("[data-mobile-icon-up]");

  const handleKeyboardNavigation = (
    event: KeyboardEvent,
    trigger: HTMLButtonElement,
  ) => {
    const currentIndex = desktopTriggers.indexOf(trigger);
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      nextIndex = (currentIndex + 1) % desktopTriggers.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      nextIndex =
        (currentIndex - 1 + desktopTriggers.length) % desktopTriggers.length;
    } else if (event.key === "Home") {
      event.preventDefault();
      nextIndex = 0;
    } else if (event.key === "End") {
      event.preventDefault();
      nextIndex = desktopTriggers.length - 1;
    }

    if (nextIndex !== currentIndex) {
      const nextTrigger = desktopTriggers[nextIndex];
      if (nextTrigger) {
        nextTrigger.focus();
      }
    }
  };

  desktopTriggers.forEach((trigger) => {
    trigger.addEventListener("keydown", (event) => {
      handleKeyboardNavigation(event, trigger);
    });
  });

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu?.getAttribute("data-open") === "true";
      const nextState = !isOpen;

      if (mobileMenu) {
        mobileMenu.classList.toggle("hidden", !nextState);
        mobileMenu.classList.toggle("block", nextState);
        mobileMenu.setAttribute("data-open", nextState ? "true" : "false");
      }
      mobileMenuToggle.setAttribute(
        "aria-expanded",
        nextState ? "true" : "false",
      );
      if (mobileIconDown) {
        mobileIconDown.classList.toggle("hidden", nextState);
      }
      if (mobileIconUp) {
        mobileIconUp.classList.toggle("hidden", !nextState);
      }
    });
  }
};

export const initializeTabControllers = (selector = "[data-tabs-root]") => {
  document
    .querySelectorAll<HTMLElement>(selector)
    .forEach(initializeTabController);
};

export const initializeTabLinkHandlers = (
  selector = "[data-link-to-tab]",
  options?: { scrollToTop?: boolean },
) => {
  document.querySelectorAll<HTMLAnchorElement>(selector).forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = element.getAttribute("href")?.replace(/^#/, "") || "";
      navigateToTab(targetId, options ?? { scrollToTop: true });
    });
  });
};
