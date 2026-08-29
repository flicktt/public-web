import { getImage } from "astro:assets";
import logoSrc from "./assets/logo-club.png";
import { CONTACT_CONSTS } from "./constants";

const SITE = "https://www.flicktt.com";

const logo = await getImage({ src: logoSrc, width: 600, format: "png" });

/**
 * Organisation / venue schema for the club, emitted on every page from
 * PageLayout.astro. Keep the address and opening hours in sync with
 * AboutFlickTT.astro and Footer.astro.
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["SportsActivityLocation", "SportsClub"],
  "@id": `${SITE}/#organization`,
  name: "Flick Table Tennis Club",
  alternateName: "Flick TT",
  url: SITE,
  logo: new URL(logo.src, SITE).href,
  image: new URL(logo.src, SITE).href,
  description:
    "Table tennis club in Canada Water, London, offering coaching, group sessions, open play, table hire, a club league and tournaments at Decathlon Surrey Quays.",
  email: CONTACT_CONSTS.supportEmail,
  sport: "Table tennis",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Decathlon Surrey Quays, 9 Maritime Street",
    addressLocality: "London",
    postalCode: "SE16 7FU",
    addressCountry: "GB",
  },
  hasMap: CONTACT_CONSTS.gmap,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "17:00",
    },
  ],
  sameAs: ["https://www.instagram.com/flickttlondon/", CONTACT_CONSTS.whatsapp],
};

/**
 * BreadcrumbList for the section pages (/offerings/x/, /kids/x/, /compete/x/), so search results
 * can show "Home › Offerings › Group Sessions" instead of the raw URL. `url`s are site-relative.
 */
export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(({ name, url }, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: new URL(url, SITE).href,
  })),
});
