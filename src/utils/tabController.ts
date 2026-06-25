import { navigateToTab } from "./tabNavigation";

type TabOptions = {
  updateHash?: boolean;
  focusTrigger?: boolean;
};

export const initializeTabController = (root: HTMLElement) => {
  const desktopTriggers = Array.from(
    root.querySelectorAll<HTMLButtonElement>("[data-tab-trigger]"),
  );
  const mobileTriggers = Array.from(
    root.querySelectorAll<HTMLButtonElement>("[data-mobile-tab-trigger]"),
  );
  const mobileMenuToggle = root.querySelector<HTMLButtonElement>(
    "[data-mobile-menu-toggle]",
  );
  const mobileMenu = root.querySelector<HTMLElement>("[data-mobile-menu]");
  const mobileButtonLabel = root.querySelector<HTMLElement>(
    "[data-mobile-button-label]",
  );
  const mobileIconDown = root.querySelector<HTMLElement>(
    "[data-mobile-icon-down]",
  );
  const mobileIconUp = root.querySelector<HTMLElement>("[data-mobile-icon-up]");
  const panels = Array.from(
    root.querySelectorAll<HTMLElement>("[data-tab-panel]"),
  );

  const setActiveTab = (
    tabId: string | null | undefined,
    options: TabOptions = {},
  ) => {
    const { updateHash = true, focusTrigger = false } = options;
    const selectedTabId =
      tabId || panels[0]?.getAttribute("data-tab-panel") || "";
    const selectedPanel = panels.find(
      (panel) => panel.getAttribute("data-tab-panel") === selectedTabId,
    );
    const selectedDesktopTrigger = desktopTriggers.find(
      (trigger) => trigger.getAttribute("data-tab-trigger") === selectedTabId,
    );

    if (!selectedPanel || !selectedDesktopTrigger) {
      return;
    }

    panels.forEach((panel) => {
      const isActive = panel === selectedPanel;
      panel.hidden = !isActive;
      panel.classList.toggle("hidden", !isActive);
      panel.classList.toggle("block", isActive);
    });

    desktopTriggers.forEach((trigger) => {
      const isActive = trigger === selectedDesktopTrigger;
      trigger.setAttribute("aria-selected", isActive ? "true" : "false");
      trigger.setAttribute("tabindex", isActive ? "0" : "-1");
      if (isActive) {
        trigger.setAttribute("data-active", "true");
      } else {
        trigger.removeAttribute("data-active");
      }
    });

    mobileTriggers.forEach((trigger) => {
      const isActive =
        trigger.getAttribute("data-mobile-tab-trigger") === selectedTabId;
      trigger.hidden = isActive;
      trigger.classList.toggle("hidden", isActive);
      if (isActive) {
        trigger.setAttribute("data-active", "true");
      } else {
        trigger.removeAttribute("data-active");
      }
    });

    if (mobileMenuToggle) {
      mobileMenuToggle.setAttribute(
        "data-active",
        selectedDesktopTrigger.getAttribute("data-tab-trigger") ===
          selectedTabId
          ? "true"
          : "false",
      );
    }

    if (mobileButtonLabel) {
      mobileButtonLabel.textContent =
        selectedDesktopTrigger.textContent?.trim() || "";
    }

    if (mobileMenuToggle) {
      mobileMenuToggle.setAttribute("aria-expanded", "false");
    }
    if (mobileMenu) {
      mobileMenu.classList.add("hidden");
      mobileMenu.removeAttribute("data-open");
    }
    if (mobileIconDown) {
      mobileIconDown.classList.remove("hidden");
    }
    if (mobileIconUp) {
      mobileIconUp.classList.add("hidden");
    }

    if (updateHash) {
      navigateToTab(selectedTabId);
    }

    if (focusTrigger) {
      selectedDesktopTrigger.focus();
    }
  };

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
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveTab(trigger.getAttribute("data-tab-trigger"), {
        updateHash: true,
        focusTrigger: true,
      });
      return;
    }

    if (nextIndex !== currentIndex) {
      const nextTrigger = desktopTriggers[nextIndex];
      if (nextTrigger) {
        nextTrigger.focus();
        setActiveTab(nextTrigger.getAttribute("data-tab-trigger"), {
          updateHash: true,
          focusTrigger: false,
        });
      }
    }
  };

  desktopTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      setActiveTab(trigger.getAttribute("data-tab-trigger"), {
        updateHash: true,
        focusTrigger: false,
      });
    });
    trigger.addEventListener("keydown", (event) => {
      handleKeyboardNavigation(event, trigger);
    });
  });

  mobileTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      setActiveTab(trigger.getAttribute("data-mobile-tab-trigger"), {
        updateHash: true,
        focusTrigger: false,
      });
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

  const initialTabId =
    window.location.hash.replace(/^#/, "") ||
    panels[0]?.getAttribute("data-tab-panel") ||
    "";
  setActiveTab(initialTabId, { updateHash: false, focusTrigger: false });

  window.addEventListener("hashchange", () => {
    setActiveTab(window.location.hash.replace(/^#/, ""), {
      updateHash: false,
      focusTrigger: false,
    });
  });
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
