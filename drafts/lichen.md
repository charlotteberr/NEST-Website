# Lichen (on hold)

Our mentors asked to take lichen off the site for now. This file holds everything that was written for it so it can go back in later. The lichen photos are still in the project (`app/native-plants/lichen.jpg` and `app/native-plants/lichens/`), so nothing needs to be re-downloaded.

## How to put lichen back

1. In `lib/plants.ts`, paste the import lines below at the top, with the other imports.
2. In `lib/plants.ts`, paste the lichen block below into the `plants` list, after the aster block (before the `];`).
3. Optional: in `app/weaving/branching/page.tsx`, change the subtitle back to "Inspired by rabbitbrush and lichen", and do the same in the Branching AdaCAD Operation blurb in `lib/pages.ts`.
4. Optional: on the home page (`app/page.tsx`), change `md:grid-cols-2` back to `md:grid-cols-3` in the Our Plants grid so the three cards sit in one row.

The home page card, the Pages menu, and the Colorado Native Plants section all come from that one block, so they all come back at once. The lichen decal is still in `components/PlantIcon.tsx`.

## Import lines

```ts
import lichenPhoto from "@/app/native-plants/lichen.jpg";
import wolfLichenPhoto from "@/app/native-plants/lichens/wolf-lichen.jpg";
import oldMansBeardPhoto from "@/app/native-plants/lichens/old-mans-beard.jpg";
import dogLichenPhoto from "@/app/native-plants/lichens/dog-lichen.jpg";
import firedotLichenPhoto from "@/app/native-plants/lichens/firedot-lichen.jpg";
```

## Lichen block

```ts
  {
    id: "lichen",
    name: "Lichen",
    scientificName: "Fruticose lichens: Letharia, Usnea & relatives",
    photo: lichenPhoto,
    photoAlt: "Branching pale green lichen growing on a tree trunk",
    summary:
      "Not a plant at all, but a fungus and an alga living together as one. Shrubby lichens on Colorado's trees, rocks, and forest floors fork again and again as they grow, and that repeated branching inspires our branch operation.",
    links: [{ label: "Branching AdaCAD Operation", href: "/weaving/branching" }],
    about: [
      "A lichen is a partnership. A fungus builds the body and protects its partner from the environment, while an alga or cyanobacterium living inside makes food through photosynthesis. Together they can live where neither could survive alone.",
      "Lichens come in three main growth forms: crusty (crustose), leafy (foliose), and shrubby (fruticose). Fruticose lichens grow as small stalks or strands that split into two again and again, forming tiny branching shrubs, beards, or antlers.",
      "In Colorado, lichens cover granite boulders, tree bark, fallen logs, and the forest floor from the foothills to above treeline. Rocky Mountain National Park calls them among the most common, and most overlooked, living things in the park.",
    ],
    whyWeStudyIt:
      "Branching lichens grow by forking: each tip splits into two, and each new tip splits again. This simple rule repeated over and over creates complex forms and it inspires our Branching AdaCAD Operation.",
    species: [
      {
        name: "Wolf lichen",
        photo: wolfLichenPhoto,
        photoAlt: "Bright yellow-green, branching wolf lichen on a weathered branch",
        tag: "Shrubby (fruticose)",
        scientificName: "Letharia vulpina",
      },
      {
        name: "Old man's beard",
        photo: oldMansBeardPhoto,
        photoAlt: "Pale green, hair-like old man's beard lichen hanging from a conifer twig",
        photoPosition: "object-[50%_20%]",
        tag: "Shrubby (fruticose)",
        scientificName: "Usnea spp.",
      },
      {
        name: "Dog lichens",
        photo: dogLichenPhoto,
        photoAlt: "Gray, leaf-like lobes of dog lichen growing on moss",
        scientificName: "Peltigera spp.",
        tag: "Leafy (foliose)",
      },
      {
        name: "Firedot lichens",
        photo: firedotLichenPhoto,
        photoAlt: "A bright orange lichen growing on gray rock",
        scientificName: "Caloplaca spp.",
        tag: "Crusty (crustose)",
      },
    ],
    funFacts: [
      "Lichens grow very slowly, some only a few millimeters a year, so large ones can be hundreds or even thousands of years old.",
      "They are often the first living things on bare rock. Some make acids that slowly break rock down into soil which is a process that takes centuries.",
      "Wolf lichen contains a yellow pigment called vulpinic acid that is poisonous to meat-eaters. For hundreds of years, people in Europe used it to poison wolves and foxes.",
      "Wolf lichen can survive freezing and start photosynthesizing again within about 12 minutes of thawing.",
      "Reindeer and caribou rely on Cladonia lichens as a major winter food, and their gut microbes break down the lichens' defensive chemicals.",
    ],
    traditionalUses: [
      "Wolf lichen is the most important lichen dye in North America. Many Indigenous peoples boiled it to make a yellow dye, and the Tlingit used it to dye the yellow in Chilkat blankets, where it also protected the wool from insects.",
      "Plateau tribes used wolf lichen as a poultice for swelling, bruises, and sores, and the Blackfoot and Okanagan-Colville drank it as a medicinal tea.",
      "Usnea has been used as a remedy for fungal infections, and in Finland to treat wounds and skin problems.",
    ],
    sources: [
      { label: "National Park Service: Lichens of Rocky Mountain National Park", href: "https://www.nps.gov/romo/learn/nature/lichens.htm" },
      { label: "Wikipedia: Letharia vulpina", href: "https://en.wikipedia.org/wiki/Letharia_vulpina" },
      { label: "Wikipedia: Ethnolichenology", href: "https://en.wikipedia.org/wiki/Ethnolichenology" },
    ],
  },
```

## Plain text (for reading or editing outside the code)

**Name:** Lichen  
**Scientific name:** Fruticose lichens: Letharia, Usnea & relatives

**Home page card:** Not a plant at all, but a fungus and an alga living together as one. Shrubby lichens on Colorado's trees, rocks, and forest floors fork again and again as they grow, and that repeated branching inspires our branch operation.

**About:**

A lichen is a partnership. A fungus builds the body and protects its partner from the environment, while an alga or cyanobacterium living inside makes food through photosynthesis. Together they can live where neither could survive alone.

Lichens come in three main growth forms: crusty (crustose), leafy (foliose), and shrubby (fruticose). Fruticose lichens grow as small stalks or strands that split into two again and again, forming tiny branching shrubs, beards, or antlers.

In Colorado, lichens cover granite boulders, tree bark, fallen logs, and the forest floor from the foothills to above treeline. Rocky Mountain National Park calls them among the most common, and most overlooked, living things in the park.

**Why we study it:** Branching lichens grow by forking: each tip splits into two, and each new tip splits again. This simple rule repeated over and over creates complex forms and it inspires our Branching AdaCAD Operation.

**Species:**

- Wolf lichen (*Letharia vulpina*), Shrubby (fruticose)
- Old man's beard (*Usnea spp.*), Shrubby (fruticose)
- Dog lichens (*Peltigera spp.*), Leafy (foliose)
- Firedot lichens (*Caloplaca spp.*), Crusty (crustose)

**Fun facts:**

- Lichens grow very slowly, some only a few millimeters a year, so large ones can be hundreds or even thousands of years old.
- They are often the first living things on bare rock. Some make acids that slowly break rock down into soil which is a process that takes centuries.
- Wolf lichen contains a yellow pigment called vulpinic acid that is poisonous to meat-eaters. For hundreds of years, people in Europe used it to poison wolves and foxes.
- Wolf lichen can survive freezing and start photosynthesizing again within about 12 minutes of thawing.
- Reindeer and caribou rely on Cladonia lichens as a major winter food, and their gut microbes break down the lichens' defensive chemicals.

**Traditional and medicinal uses:**

- Wolf lichen is the most important lichen dye in North America. Many Indigenous peoples boiled it to make a yellow dye, and the Tlingit used it to dye the yellow in Chilkat blankets, where it also protected the wool from insects.
- Plateau tribes used wolf lichen as a poultice for swelling, bruises, and sores, and the Blackfoot and Okanagan-Colville drank it as a medicinal tea.
- Usnea has been used as a remedy for fungal infections, and in Finland to treat wounds and skin problems.

**Sources:**

- [National Park Service: Lichens of Rocky Mountain National Park](https://www.nps.gov/romo/learn/nature/lichens.htm)
- [Wikipedia: Letharia vulpina](https://en.wikipedia.org/wiki/Letharia_vulpina)
- [Wikipedia: Ethnolichenology](https://en.wikipedia.org/wiki/Ethnolichenology)
