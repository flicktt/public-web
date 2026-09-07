import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import type { SvgComponent } from "astro/types";
import type { StickerId } from "./treasureHunt";

export type Page =
  | "home"
  | "offerings-group-sessions"
  | "offerings-private-coaching"
  | "offerings-workshops"
  | "offerings-open-sessions"
  | "offerings-table-bookings"
  | "offerings-corporate"
  | "kids-group-sessions"
  | "kids-private-coaching"
  | "kids-u18-tournament"
  | "kids-school-sessions"
  | "compete-about"
  | "compete-club-league"
  | "compete-tournament"
  | "membership"
  | "about"
  | "coaches"
  | "not-found";

export type PageConfig = {
  /** Nav label; also the visible display word in the page header. */
  title: string;
  /** `<title>` and og:title. Query first, location, brand last; keep under ~60 characters. */
  metaTitle: string;
  desc: string;
  /**
   * Completes the <h1>. The header shows `title` as the giant display word and appends this
   * visually-hidden so the heading reads "<title>: <heading>" to search engines and screen readers.
   */
  heading: string;
};

export type FaqConfig = {
  title: string;
  Content: AstroComponentFactory | string;
  /**
   * Plain-text answer for the FAQPage JSON-LD emitted by <Faqs />. Only needed when `Content`
   * is a component; string answers are used as-is.
   */
  answerText?: string;
};

export type PageTabConfig = {
  label: string;
  contentId: string;
  Content: AstroComponentFactory;
};

export type PointsRowConfig = {
  Icon: SvgComponent;
  text: string;
  /** Treasure hunt sticker on the back of the icon; hovering/clicking flips it over. */
  sticker?: StickerId;
}[];

export type CoachProfileConfig = {
  img: ImageMetadata;
  name: string;
  title: "head" | "coach";
  description: string[];
  /** Treasure hunt sticker hidden in this coach's profile drawer. */
  sticker?: StickerId;
};

export interface ContainerProps extends astroHTML.JSX.HTMLAttributes {
  section?: boolean;
  main?: boolean;
  fullMaxWidth?: boolean;
}

export type ScheduleDayConfig =
  | {
      type: "clubTable";
      isPeak?: boolean;
      hasRobot?: boolean;
      hours: number;
    }
  | {
      type: "group";
      lvl: "3-4-5" | "2-3" | "all" | "1-2" | "u18-1-2" | "u18-3-4" | "3-4";
      hours: number;
    }
  | {
      type: "clubLeague";
      matching: "open" | "grouped" | "any";
      hours: number;
    };

export type ScheduleDayProps = {
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  blocks: ScheduleDayConfig[];
};

export type ScheduleConfig = ScheduleDayProps[];

export interface MembershipTypeProps {
  name: string;
  prices: {
    monthly: number;
    quarterly: number;
    biannual: number;
    annual: number;
  };
}
