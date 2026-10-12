export interface SitePage {
  title: string;
  href: string;
  blurb: string;
}

// Single source of truth for site navigation: used by the Pages dropdown and the home page cards.
export const pages: SitePage[] = [
  { title: "Home", href: "/", blurb: "Project overview, workshops, and links to NEST." },
  { title: "Interactive Dyeing", href: "/dyeing", blurb: "Pick a dye, mordant, and fiber to see the resulting color." },
  { title: "Natural Dyeing", href: "/natural-dyeing", blurb: "The steps of natural dyeing and why each one matters." },
  { title: "Weaving", href: "/weaving", blurb: "How the plants connect to weaving patterns and AdaCAD." },
  { title: "Workshop", href: "/workshop", blurb: "Where our workshop is and what will be taught there." },
  { title: "Colorado Native Plants", href: "/native-plants", blurb: "The native plants we work with, where they grow, and how to recognize them." },
];
