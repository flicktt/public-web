import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import type { SvgComponent } from "astro/types";

export type Page =
  | "home"
  | "offerings"
  | "compete"
  | "kids"
  | "membership"
  | "about"
  | "coaches";

export type PageConfig = {
  title: string;
  desc: string;
};

export type FaqConfig = {
  title: string;
  Content: AstroComponentFactory | string;
};

export type PageTabConfig = {
  label: string;
  contentId: string;
  Content: AstroComponentFactory;
};

export type PointsRowConfig = {
  Icon: SvgComponent;
  text: string;
}[];

export type CoachProfileConfig = {
  img: string;
  name: string;
  title: "head" | "coach";
  description: string[];
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
      matching: "open" | "grouped";
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
