import { StaticImageData } from "next/image";
import rabbitbrushPhoto from "@/app/native-plants/rabbitbrush_better_closeup.jpg";
import asterPhoto from "@/app/native-plants/aster-ours.jpg";
import portersAsterPhoto from "@/app/native-plants/asters/porters-aster.jpg";
import smoothBlueAsterPhoto from "@/app/native-plants/asters/smooth-blue-aster.jpg";
import bigelowsTansyasterPhoto from "@/app/native-plants/asters/bigelows-tansyaster.jpg";
import hoaryTansyasterPhoto from "@/app/native-plants/asters/hoary-tansyaster.jpg";
import greenthreadPhoto from "@/app/native-plants/other-plants/greenthread.jpg";
import mountainMahoganyPhoto from "@/app/native-plants/other-plants/mountain-mahogany.jpg";
import broomSnakeweedPhoto from "@/app/native-plants/other-plants/broom-snakeweed.jpg";
import ponderosaPinePhoto from "@/app/native-plants/other-plants/ponderosa-pine.jpg";
import ponderosaConePhoto from "@/app/native-plants/other-plants/ponderosa-cone.jpg";
import commonSunflowerPhoto from "@/app/native-plants/other-plants/common-sunflower.jpg";
import soapweedYuccaPhoto from "@/app/native-plants/other-plants/soapweed-yucca.jpg";

export interface PlantLink {
  label: string;
  href: string;
}

export interface Species {
  name: string;
  scientificName: string;
  // Optional label shown above the name, e.g. a lichen's growth form.
  tag?: string;
  note?: string;
  photo?: StaticImageData;
  photoAlt?: string;
  // Tailwind object-position class for photos whose subject sits off-center, e.g. "object-top".
  photoPosition?: string;
}

export interface Plant {
  // Also the anchor id of the plant's section on the Colorado Native Plants page.
  id: string;
  name: string;
  scientificName: string;
  photo?: StaticImageData;
  photoAlt?: string;
  // Short description for the home page card.
  summary: string;
  links: PlantLink[];

  // In-depth profile for the Colorado Native Plants page.
  about: string[];
  whyWeStudyIt: string;
  species?: Species[];
  funFacts: string[];
  traditionalUses: string[];
  sources: PlantLink[];
}

// The plants that are the entry point to the site: used by the home page cards, the Pages menu, and the native plants page.
export const plants: Plant[] = [
  {
    id: "rabbitbrush",
    name: "Rabbitbrush",
    scientificName: "Ericameria nauseosa",
    photo: rabbitbrushPhoto,
    photoAlt: "Close-up of rabbitbrush flowers",
    summary:
      "A gray-green shrub that gets covered in small yellow flowers in late summer. It grows in dry, open places all over Colorado, from the plains and roadsides up into the mountains. We use its flowers for natural dyeing, and the way its stems split into smaller branches inspires our branch operation.",
    links: [
      { label: "Natural Dyeing", href: "/natural-dyeing" },
      { label: "Branching AdaCAD Operation", href: "/weaving/branching" },
    ],
    about: [
      "Rabbitbrush is a member of the Asteraceae family with branching stems that form a rounded crown of small yellow flowers in late summer and early fall. Most species grow between three and five feet tall and are found from California to Kansas, Canada to Texas. Rabbitbrush grows well in disturbed areas, such as abandoned agricultural, graze, or fire zones, and is an important pioneering species to help others reestablish. Its flowers and stems can be used to create natural dye.",
      "Rubber rabbitbrush, also called chamisa or gray rabbitbrush, is a rounded shrub usually 2 to 5 feet tall. Its stems are whitish-green, and its leaves are narrow and gray-green.",
      "From August to October, when most other plants are fading, rabbitbrush covers itself in dense clusters of yellow flowers at the tips of its branches. Each tiny flower head holds only about five small, tubular flowers, and there are no outer petals at all.",
      "It is tough and drought-tolerant, growing in coarse, alkaline soils from arid rangelands to mountain openings. It often forms dense stands on roadsides, old fields, and other disturbed ground, where its deep roots help hold the soil in place.",
    ],
    whyWeStudyIt:
      "Rabbitbrush's bright flowers make a yellow dye, which we test step by step on the Natural Dyeing page. Its stems fan out and split into smaller and smaller branches, which inspires our Branching AdaCAD Operation.",
    funFacts: [
      "Its species name, nauseosa, refers to the smell of its crushed leaves. Some people say it smells like pineapple, while others call it \"foul and rubbery.\"",
      "Its sap contains real rubber. During World War II it was tested as a high-quality rubber source, and it is still studied for rubber, resins, and biofuels.",
      "It is one of the few native plants in the Intermountain West that feeds pollinators in late summer and fall, so its flowers are often buzzing with insects",
      "Mule deer, pronghorn, and jackrabbits browse it in fall and winter, and small birds nest in its cover.",
      "It belongs to the aster family, so it is a relative of the asters on this page.",
    ],
    traditionalUses: [
      "Native Americans reportedly used rabbitbrush to make yellow dye, a medicinal tea, and chewing gum.",
      "The Navajo used it as a medicine for coughs, colds, fever, chest pain, headache, and menstrual pain. The bark has been used for a green dye and the flowers for a yellow dye.",
      "Researchers are studying compounds from rabbitbrush as possible insect repellents and anti-malarial agents.",
    ],
    sources: [
      { label: "USDA Forest Service: Rubber Rabbitbrush", href: "https://www.fs.usda.gov/wildflowers/plant-of-the-week/ericameria_nauseosa.shtml" },
      { label: "Utah State University Extension: Rubber Rabbitbrush", href: "https://extension.usu.edu/rangeplants/shrubs-and-trees/gray-rabbitbrush" },
      { label: "National Park Service: Rabbitbrush", href: "https://www.nps.gov/colm/learn/nature/rabbitbrush.htm" },
      { label: "USDA Forest Service: Plant Dyes", href: "https://www.fs.usda.gov/wildflowers/ethnobotany/dyes.shtml" },
    ],
  },
  {
    id: "aster",
    name: "Aster",
    scientificName: "Asteraceae (the aster family)",
    photo: asterPhoto,
    photoAlt: "A bush of light purple asters with yellow centers",
    summary:
      "What looks like one purple, daisy-like flower is really a head of many tiny flowers, with purple petals around a yellow center. We're studying these small flowers within a larger flower to create a stamping operation that connects small units into one bigger pattern.",
    links: [{ label: "Aster AdaCAD Operation", href: "/weaving/aster" }],
    about: [
      "Asteraceae is a large and widespread family of plants, trees, and shrubs. The Aster alpinus, or alpine daisy, might be the most iconic aster native to Colorado with its bright yellow center surrounded by light purple petals. Other asters that grow natively in Colorado include common species like alpine sunflowers, black-eyed Susans, and coneflowers. Rabbitbrush is also a part of the aster family! Plentiful non-native species are the bristle and Canadian thistles, common dandelions, and oxeye daisies.",
      "As the second-largest plant family, the breadth of the Asteraceae complicates ideas about what is native or local. The first instances of aster plants are thought to have originated in Argentina over 50 million years ago, and species from the family can now be found worldwide.",
      "Asters are daisy-like wildflowers that light up Colorado's meadows, foothills, and mountain trails in late summer and fall, in shades of purple, blue, pink, and white.",
      "Each aster \"flower\" is actually a flower head, or capitulum, made of many tiny flowers called florets. Around the edge are ray florets, each with one long petal. In the center are dozens of disk florets which are tiny five-lobed tubes packed tightly together to form the yellow eye.",
      "The two kinds of florets have different jobs. The rays mainly attract pollinators, while the disk florets hold the nectar and pollen. This is why the aster family used to be called Compositae: each head is a composite of many smaller flowers.",
    ],
    whyWeStudyIt:
      "An aster repeats one small unit, the floret, many times and arranges the copies into a larger whole. This structure of small flowers within a larger flower inspires our Aster AdaCAD Operation, which stamps small pieces of a pattern and connects them together.",
    species: [
      {
        name: "Alpine aster",
        scientificName: "Aster alpinus",
        note: "Also called the alpine daisy, it might be the most iconic aster native to Colorado, with its bright yellow center surrounded by light purple petals.",
      },
      {
        name: "Porter's aster",
        photo: portersAsterPhoto,
        photoAlt: "White Porter's asters with yellow centers",
        scientificName: "Symphyotrichum porteri",
      },
      {
        name: "Smooth blue aster",
        photo: smoothBlueAsterPhoto,
        photoAlt: "Pale blue smooth blue asters with yellow centers",
        scientificName: "Symphyotrichum laeve",
      },
      {
        name: "Bigelow's tansyaster",
        photo: bigelowsTansyasterPhoto,
        photoAlt: "A deep violet Bigelow's tansyaster with a golden center and curled bracts",
        scientificName: "Dieteria bigelovii",
      },
      {
        name: "Hoary tansyaster",
        photo: hoaryTansyasterPhoto,
        photoAlt: "A lavender hoary tansyaster on a branching stem",
        photoPosition: "object-top",
        scientificName: "Dieteria canescens",
      },
    ],
    funFacts: [
      "\"Aster\" is Greek for \"star,\" after the way the rays spread out from the center of each flower head.",
      "The aster family is one of the largest plant families on Earth. Sunflowers belong to it too, and a single sunflower head can hold more than 1,000 tiny flowers.",
      "Bigelow's tansyaster has sticky, glandular hairs on its stems that can trap sand grains and even ants.",
      "Smooth blue aster is a host plant for Pearl Crescent and Silvery Checkerspot butterflies, whose caterpillars feed on its leaves.",
      "The related genus Machaeranthera gets its name from Greek words for \"sword\" and \"anther,\" after the sword-shaped tips of its pollen-bearing parts.",
    ],
    traditionalUses: [
      "Native Americans used the roots of purple-stemmed aster to treat fever, colds, pneumonia, and toothache.",
      "Cree and Métis peoples made a tea from the roots of Lindley's aster to treat pink eye, and applied the ground plant to cuts to stop bleeding.",
      "Smooth blue aster's roots, leaves, and flowers have traditionally been used for breathing ailments and in poultices.",
    ],
    sources: [
      { label: "Colorado Wildflowers: Aster family", href: "https://coloradowildflower.com/wildflower_category/aster/" },
      { label: "Wikipedia: Asteraceae", href: "https://en.wikipedia.org/wiki/Asteraceae" },
      { label: "Southwest Colorado Wildflowers: Dieteria", href: "https://swcoloradowildflowers.com/Blue%20Purple%20Enlarged%20Photo%20Pages/dieteria.htm" },
      { label: "Michigan State University: Smooth blue aster", href: "https://www.canr.msu.edu/nativeplants/plant_facts/smooth_blue_aster" },
      { label: "Native Plant Trust: Purple-stemmed American-aster", href: "https://gobotany.nativeplanttrust.org/species/symphyotrichum/puniceum/" },
    ],
  },
];

export interface OtherPlant {
  name: string;
  scientificName: string;
  tag: "Dye" | "Pattern" | "Fiber";
  note: string;
  photo: StaticImageData;
  photoAlt: string;
  // Optional second photo shown beside the first, splitting the photo area in half.
  photo2?: StaticImageData;
  photo2Alt?: string;
  source: PlantLink;
}

// A shorter list of other Colorado plants worth exploring for dye or pattern, shown on the native plants page.
export const otherPlants: OtherPlant[] = [
  {
    name: "Greenthread",
    photo: greenthreadPhoto,
    photoAlt: "A yellow greenthread flower among thin green leaves",
    scientificName: "Thelesperma spp.",
    tag: "Dye",
    note: "A wildflower found in the high plains, used for both tea and dye. Boiling just the flowers gives yellow, and using more of them pushes the color toward rust.",
    source: { label: "Wild Ones Front Range", href: "https://frontrange.wildones.org/wp-content/images/sites/105/2025/06/Thelesperma-filifolium-full-page-Reduced-File-Size.pdf" },
  },
  {
    name: "Mountain mahogany",
    photo: mountainMahoganyPhoto,
    photoAlt: "A mountain mahogany growing from a rocky ledge",
    scientificName: "Cercocarpus montanus",
    tag: "Dye",
    note: "A foothills shrub whose red bark is boiled to make a reddish-brown dye.",
    source: { label: "Chimney Rock National Monument", href: "https://www.chimneyrockco.org/puebloan-resources/trees-shrubs/" },
  },
  {
    name: "Ponderosa pine",
    photo: ponderosaPinePhoto,
    photoAlt: "Tall ponderosa pines with orange-red bark",
    photo2: ponderosaConePhoto,
    photo2Alt: "A ponderosa pine cone with its scales arranged in spirals",
    scientificName: "Pinus ponderosa",
    tag: "Pattern",
    note: "The scales on its cones grow in two sets of spirals going opposite directions, often 8 one way and 13 the other.",
    source: { label: "Awkward Botany: Pine cones and the Fibonacci sequence", href: "https://awkwardbotany.com/2019/12/25/pine-cones-and-the-fibonacci-sequence/" },
  },
  {
    name: "Broom snakeweed",
    photo: broomSnakeweedPhoto,
    photoAlt: "Clusters of small yellow broom snakeweed flowers",
    scientificName: "Gutierrezia sarothrae",
    tag: "Dye",
    note: "A rabbitbrush look-alike whose small yellow flowers were used by Navajo dyers for yellow. Unlike rabbitbrush, its flower heads have tiny petals around the edge.",
    source: { label: "Bard Graduate Center: Navajo dye recipes", href: "https://exhibitions.bgc.bard.edu/shapedbytheloom/wp-content/uploads/page//SBTL-Educator-Guide_Activity-1-Handouts_FINAL_Sep-2023.pdf" },
  },
  {
    name: "Common sunflower",
    photo: commonSunflowerPhoto,
    photoAlt: "A sunflower with a spiraled brown center against a blue sky",
    scientificName: "Helianthus annuus",
    tag: "Pattern",
    note: "A giant relative of the asters. The tiny flowers in its center are packed into crisscrossing spirals whose counts are Fibonacci numbers, with each new flower about 137.5° from the last.",
    source: { label: "Algorithmic Botany: Modelling spiral phyllotaxis", href: "https://www.algorithmicbotany.org/papers/modelling-spiral-phyllotaxis.pdf" },
  },
  {
    name: "Soapweed yucca",
    photo: soapweedYuccaPhoto,
    photoAlt: "A soapweed yucca with a tall stalk of white flowers on the plains",
    scientificName: "Yucca glauca",
    tag: "Fiber",
    note: "A spiky plains plant with two textile uses. Its tough leaf fibers were woven into baskets, mats, sandals, and rope, and its roots were pounded into suds for washing wool and blankets.",
    source: { label: "National Park Service: Soapweed yucca", href: "https://www.nps.gov/articles/000/soapweed-yucca.htm" },
  },
];
