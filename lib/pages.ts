export interface SitePage {
  title: string;
  href: string;
  blurb: string;
  // Shown as a card in the home page's Explore section.
  explore?: boolean;
}

// Single source of truth for site navigation: used by the Pages dropdown and the home page Explore cards.
export const pages: SitePage[] = [
  { title: "Home", href: "/", blurb: "Project overview, our plants, and links to NEST." },
  { title: "Natural Dyeing", href: "/natural-dyeing", blurb: "The steps of natural dyeing and why each one matters." },
  { title: "Branching AdaCAD Operation", href: "/weaving/branching", blurb: "Rabbitbrush and the branching designs it inspired in AdaCAD." },
  { title: "Aster AdaCAD Operation", href: "/weaving/aster", blurb: "Asters and how their compound flowers became a woven draft." },
  { title: "AdaCAD", href: "/weaving", blurb: "More about the AdaCAD design software.", explore: true },
  { title: "Workshop", href: "/workshop", blurb: "Where our workshop is and what will be taught there.", explore: true },
  { title: "Interactive Dyeing", href: "/dyeing", blurb: "Pick a dye, mordant, and fiber to see the resulting color.", explore: true },
  { title: "Colorado Native Plants", href: "/native-plants", blurb: "The native plants we work with, where they grow, and how to recognize them.", explore: true },
];
