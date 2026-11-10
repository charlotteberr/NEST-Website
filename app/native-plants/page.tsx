import Image, { StaticImageData } from "next/image";
import ButtonLink from "@/components/ButtonLink";
import PhotoCredit, { type Credit } from "@/components/PhotoCredit";
import PageHeader from "@/components/PageHeader";
import PlantIcon from "@/components/PlantIcon";
import rabbitbrushPhoto from "./rabbitbrush_better_closeup.jpg";
import asterPhoto from "./aster-ours.jpg";
import portersAsterPhoto from "./asters/porters-aster.jpg";
import smoothBlueAsterPhoto from "./asters/smooth-blue-aster.jpg";
import bigelowsTansyasterPhoto from "./asters/bigelows-tansyaster.jpg";
import hoaryTansyasterPhoto from "./asters/hoary-tansyaster.jpg";
import greenthreadPhoto from "./other-plants/greenthread.jpg";
import mountainMahoganyPhoto from "./other-plants/mountain-mahogany.jpg";
import mountainMahoganyPlumesPhoto from "./other-plants/mountain-mahogany-plumes.jpg";
import broomSnakeweedPhoto from "./other-plants/broom-snakeweed.jpg";
import ponderosaPinePhoto from "./other-plants/ponderosa-pine.jpg";
import ponderosaConePhoto from "./other-plants/ponderosa-cone.jpg";
import commonSunflowerPhoto from "./other-plants/common-sunflower.jpg";
import soapweedYuccaPhoto from "./other-plants/soapweed-yucca.jpg";
// TO ADD LATER: lichen photos, for the lichen section that's commented out below.
// import lichenPhoto from "./lichen.jpg";
// import wolfLichenPhoto from "./lichens/wolf-lichen.jpg";
// import oldMansBeardPhoto from "./lichens/old-mans-beard.jpg";
// import dogLichenPhoto from "./lichens/dog-lichen.jpg";
// import firedotLichenPhoto from "./lichens/firedot-lichen.jpg";

// Everything written on this page is in this file. The plant text is in the lists just below.

interface PlantLink {
    label: string;
    href: string;
}

// Link to a photo's page on Wikimedia Commons, for photo credits.
const commons = (file: string) => `https://commons.wikimedia.org/wiki/File:${file}`;

interface Species {
    name: string;
    scientificName: string;
    // Optional label shown above the name, e.g. a lichen's growth form.
    tag?: string;
    note?: string;
    photo?: StaticImageData;
    photoAlt?: string;
    // Tailwind object-position class for photos whose subject sits off-center, e.g. "object-top".
    photoPosition?: string;
    photoCredit?: Credit;
}

interface Plant {
    // Also the anchor id of the plant's section, so links like "/native-plants#aster" jump to it.
    id: string;
    name: string;
    scientificName: string;
    photo?: StaticImageData;
    photoAlt?: string;
    links: PlantLink[];
    // A map of where people have seen this plant in Colorado, on iNaturalist.
    map: PlantLink;
    mapNote: string;

    about: string[];
    whyWeStudyIt: string;
    species?: Species[];
    funFacts: string[];
    traditionalUses: string[];
    sources: PlantLink[];
}

// The two plants we focus on, each shown as its own section below.
const plants: Plant[] = [
    {
        id: "rabbitbrush",
        name: "Rabbitbrush",
        scientificName: "Ericameria nauseosa",
        photo: rabbitbrushPhoto,
        photoAlt: "Close-up of rabbitbrush flowers",
        links: [
            { label: "Natural Dyeing", href: "/natural-dyeing" },
            { label: "Rabbitbrush Research", href: "/rabbitbrush" },
        ],
        mapNote: "See where people have spotted rabbitbrush around Colorado.",
        map: { label: "Rabbitbrush map on iNaturalist", href: "https://www.inaturalist.org/observations?place_id=34&taxon_id=57934&subview=map" },
        about: [
            "Rabbitbrush is a member of the Asteraceae family with branching stems that form a rounded crown of small yellow flowers in late summer and early fall. Most species grow between three and five feet tall and are found from California to Kansas, Canada to Texas. Rabbitbrush grows well in disturbed areas, such as abandoned agricultural, graze, or fire zones, and is an important pioneering species to help others reestablish. Its flowers and stems can be used to create natural dye.",
            "Rubber rabbitbrush, also called chamisa or gray rabbitbrush, is a rounded shrub usually 2 to 5 feet tall. Its stems are whitish-green, and its leaves are narrow and gray-green.",
            "From August to October, when most other plants are fading, rabbitbrush covers itself in dense clusters of yellow flowers at the tips of its branches. Each tiny flower head holds only about five small, tubular flowers, and there are no outer petals at all.",
            "It is tough and drought-tolerant, growing in coarse, alkaline soils from arid rangelands to mountain openings. It often forms dense stands on roadsides, old fields, and other disturbed ground, where its deep roots help hold the soil in place.",
        ],
        whyWeStudyIt:
            "Rabbitbrush's bright flowers make a yellow dye, which we test step by step on the Natural Dyeing page. Its stems fan out and split into smaller and smaller branches, which inspires the branching weave designs on our Rabbitbrush Research page.",
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
        links: [{ label: "Aster Research", href: "/aster" }],
        mapNote: "See where people have spotted asters around Colorado.",
        map: { label: "Aster family map on iNaturalist", href: "https://www.inaturalist.org/observations?place_id=34&taxon_id=47604&subview=map" },
        about: [
            "Asteraceae is a large and widespread family of plants, trees, and shrubs. The Aster alpinus, or alpine daisy, might be the most iconic aster native to Colorado with its bright yellow center surrounded by periwinkle rays. Other asters that grow natively in Colorado include common species like alpine sunflowers, black-eyed Susans, and coneflowers. Rabbitbrush is also a part of the aster family! Plentiful non-native species are the bristle and Canadian thistles, common dandelions, and oxeye daisies.",
            "As the second-largest plant family, the breadth of the Asteraceae complicates ideas about what is native or local. The first instances of aster plants are thought to have originated in Argentina over 50 million years ago, and species from the family can now be found worldwide.",
            "Asters are daisy-like wildflowers that light up Colorado's meadows, foothills, and mountain trails in late summer and fall, in shades of purple, blue, pink, and white.",
            "Each aster \"flower\" is actually a flower head, or capitulum, made of many tiny flowers called florets. Around the edge are ray florets, each with one long petal. In the center are dozens of disk florets which are tiny five-lobed tubes packed tightly together to form the yellow eye.",
            "The two kinds of florets have different jobs. The rays mainly attract pollinators, while the disk florets hold the nectar and pollen. This is why the aster family used to be called Compositae: each head is a composite of many smaller flowers.",
        ],
        whyWeStudyIt:
            "An aster repeats one small unit, the floret, many times and arranges the copies into a larger whole. This structure of small flowers within a larger flower inspires the aster weave draft on our Aster Research page, which connects small pattern units into one bigger pattern.",
        species: [
            {
                name: "Alpine aster",
                scientificName: "Aster alpinus",
                note: "Also called the alpine daisy, it might be the most iconic aster native to Colorado, with its bright yellow center surrounded by periwinkle rays.",
            },
            {
                name: "Porter's aster",
                photo: portersAsterPhoto,
                photoAlt: "White Porter's asters with yellow centers among dry grass",
                photoCredit: { author: "Stephen Hornbeck", license: "CC BY 4.0", href: commons("Symphyotrichum_porteri_158289794_(cropped).jpg") },
                scientificName: "Symphyotrichum porteri",
            },
            {
                name: "Smooth blue aster",
                photo: smoothBlueAsterPhoto,
                photoAlt: "A cluster of pale purple smooth blue asters with yellow centers",
                photoCredit: { author: "Kathleen Houlahan Chayer", license: "CC0", href: commons("Symphyotrichum_laeve_93797924_(cropped).jpg") },
                scientificName: "Symphyotrichum laeve",
            },
            {
                name: "Bigelow's tansyaster",
                photo: bigelowsTansyasterPhoto,
                photoAlt: "Violet Bigelow's tansyasters with golden centers on red rocky ground",
                photoCredit: { author: "Kurtab123", license: "CC0", href: commons("Dieteria_bigelovii_var._commixta.jpg") },
                scientificName: "Dieteria bigelovii",
            },
            {
                name: "Hoary tansyaster",
                photo: hoaryTansyasterPhoto,
                photoAlt: "A lavender hoary tansyaster with an orange-yellow center on a hairy stem",
                photoCredit: { author: "Stan Shebs", license: "CC BY-SA 3.0", href: commons("Dieteria_canescens_var_canescens_2.jpg") },
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
    // TO ADD LATER: lichen (on hold, our mentors asked to take it off the site for now).
    // To show it, remove the "// " from these lines and from the lichen photo imports at the top.
    // The map link goes to iNaturalist's home page for now; swap in a lichen map link when you add it back.
    // {
    //     id: "lichen",
    //     name: "Lichen",
    //     scientificName: "Fruticose lichens: Letharia, Usnea & relatives",
    //     photo: lichenPhoto,
    //     photoAlt: "Branching pale green lichen growing on a tree trunk",
    //     links: [{ label: "Rabbitbrush Research", href: "/rabbitbrush" }],
    //     mapNote: "See where people have spotted lichens around Colorado.",
    //     map: { label: "Lichen map on iNaturalist", href: "https://www.inaturalist.org" },
    //     about: [
    //         "A lichen is a partnership. A fungus builds the body and protects its partner from the environment, while an alga or cyanobacterium living inside makes food through photosynthesis. Together they can live where neither could survive alone.",
    //         "Lichens come in three main growth forms: crusty (crustose), leafy (foliose), and shrubby (fruticose). Fruticose lichens grow as small stalks or strands that split into two again and again, forming tiny branching shrubs, beards, or antlers.",
    //         "In Colorado, lichens cover granite boulders, tree bark, fallen logs, and the forest floor from the foothills to above treeline. Rocky Mountain National Park calls them among the most common, and most overlooked, living things in the park.",
    //     ],
    //     whyWeStudyIt:
    //         "Branching lichens grow by forking: each tip splits into two, and each new tip splits again. This simple rule repeated over and over creates complex forms and it inspires our Branching AdaCAD Operation.",
    //     species: [
    //         {
    //             name: "Wolf lichen",
    //             photo: wolfLichenPhoto,
    //             photoAlt: "Bright yellow-green, branching wolf lichen on a weathered branch",
    //             tag: "Shrubby (fruticose)",
    //             scientificName: "Letharia vulpina",
    //         },
    //         {
    //             name: "Old man's beard",
    //             photo: oldMansBeardPhoto,
    //             photoAlt: "Pale green, hair-like old man's beard lichen hanging from a conifer twig",
    //             photoPosition: "object-[50%_20%]",
    //             tag: "Shrubby (fruticose)",
    //             scientificName: "Usnea spp.",
    //         },
    //         {
    //             name: "Dog lichens",
    //             photo: dogLichenPhoto,
    //             photoAlt: "Gray, leaf-like lobes of dog lichen growing on moss",
    //             scientificName: "Peltigera spp.",
    //             tag: "Leafy (foliose)",
    //         },
    //         {
    //             name: "Firedot lichens",
    //             photo: firedotLichenPhoto,
    //             photoAlt: "A bright orange lichen growing on gray rock",
    //             scientificName: "Caloplaca spp.",
    //             tag: "Crusty (crustose)",
    //         },
    //     ],
    //     funFacts: [
    //         "Lichens grow very slowly, some only a few millimeters a year, so large ones can be hundreds or even thousands of years old.",
    //         "They are often the first living things on bare rock. Some make acids that slowly break rock down into soil which is a process that takes centuries.",
    //         "Wolf lichen contains a yellow pigment called vulpinic acid that is poisonous to meat-eaters. For hundreds of years, people in Europe used it to poison wolves and foxes.",
    //         "Wolf lichen can survive freezing and start photosynthesizing again within about 12 minutes of thawing.",
    //         "Reindeer and caribou rely on Cladonia lichens as a major winter food, and their gut microbes break down the lichens' defensive chemicals.",
    //     ],
    //     traditionalUses: [
    //         "Wolf lichen is the most important lichen dye in North America. Many Indigenous peoples boiled it to make a yellow dye, and the Tlingit used it to dye the yellow in Chilkat blankets, where it also protected the wool from insects.",
    //         "Plateau tribes used wolf lichen as a poultice for swelling, bruises, and sores, and the Blackfoot and Okanagan-Colville drank it as a medicinal tea.",
    //         "Usnea has been used as a remedy for fungal infections, and in Finland to treat wounds and skin problems.",
    //     ],
    //     sources: [
    //         { label: "National Park Service: Lichens of Rocky Mountain National Park", href: "https://www.nps.gov/romo/learn/nature/lichens.htm" },
    //         { label: "Wikipedia: Letharia vulpina", href: "https://en.wikipedia.org/wiki/Letharia_vulpina" },
    //         { label: "Wikipedia: Ethnolichenology", href: "https://en.wikipedia.org/wiki/Ethnolichenology" },
    //     ],
    // },
];

interface OtherPlant {
    name: string;
    scientificName: string;
    note: string;
    photo: StaticImageData;
    photoAlt: string;
    // Optional second photo shown beside the first, splitting the photo area in half.
    photo2?: StaticImageData;
    photo2Alt?: string;
    photoCredit: Credit;
    photo2Credit?: Credit;
    source: PlantLink;
}

// The cards in the "Other Plants to Explore" section.
const otherPlants: OtherPlant[] = [
    {
        name: "Greenthread",
        photo: greenthreadPhoto,
        photoAlt: "A yellow greenthread flower with a dark center",
        photoCredit: { author: "Kumar Appaiah", license: "CC BY-SA 2.0", href: commons("Thelesperma_filifolium_2.jpg") },
        scientificName: "Thelesperma spp.",
        note: "A wildflower found in the high plains, used for both tea and dye. Boiling just the flowers gives yellow, and using more of them pushes the color toward rust.",
        source: { label: "Wild Ones Front Range", href: "https://frontrange.wildones.org/wp-content/images/sites/105/2025/06/Thelesperma-filifolium-full-page-Reduced-File-Size.pdf" },
    },
    {
        name: "Mountain mahogany",
        photo: mountainMahoganyPhoto,
        photoAlt: "A mountain mahogany shrub growing on a rocky hillside",
        photoCredit: { author: "James St. John", license: "CC BY 2.0", href: commons("Cercocarpus_montanus_(mountain_mahogany)_(38634245525).jpg") },
        photo2: mountainMahoganyPlumesPhoto,
        photo2Alt: "Mountain mahogany's long, curled, feathery seed tails",
        photo2Credit: { author: "The Marmot", license: "CC BY 2.0", href: commons("Mountain_Mahogany_(4853764085).jpg") },
        scientificName: "Cercocarpus montanus",
        note: "A foothills shrub whose red bark is boiled to make a reddish-brown dye.",
        source: { label: "Chimney Rock National Monument", href: "https://www.chimneyrockco.org/puebloan-resources/trees-shrubs/" },
    },
    {
        name: "Ponderosa pine",
        photo: ponderosaPinePhoto,
        photoAlt: "Ponderosa pines at Florissant Fossil Beds in Colorado",
        photo2: ponderosaConePhoto,
        photo2Alt: "A ponderosa pine cone with its scales arranged in spirals",
        photoCredit: { author: "James St. John", license: "CC BY 2.0", href: commons("Pinus_ponderosa_(ponderosa_pine_tree)_(Florissant_National_Monument,_Colorado,_USA)_10.jpg") },
        photo2Credit: { author: "Crusier", license: "CC BY-SA 3.0", href: commons("Pinus_ponderosa_cone_Marki.jpg") },
        scientificName: "Pinus ponderosa",
        note: "The scales on its cones grow in two sets of spirals going opposite directions, often 8 one way and 13 the other.",
        source: { label: "Awkward Botany: Pine cones and the Fibonacci sequence", href: "https://awkwardbotany.com/2019/12/25/pine-cones-and-the-fibonacci-sequence/" },
    },
    {
        name: "Broom snakeweed",
        photo: broomSnakeweedPhoto,
        photoAlt: "A cluster of small yellow broom snakeweed flowers",
        photoCredit: { author: "Stan Shebs", license: "CC BY-SA 3.0", href: commons("Gutierrezia_sarothrae_6.jpg") },
        scientificName: "Gutierrezia sarothrae",
        note: "A rabbitbrush look-alike whose small yellow flowers were used by Navajo dyers for yellow. Unlike rabbitbrush, its flower heads have tiny petals around the edge.",
        source: { label: "Bard Graduate Center: Navajo dye recipes", href: "https://exhibitions.bgc.bard.edu/shapedbytheloom/wp-content/uploads/page//SBTL-Educator-Guide_Activity-1-Handouts_FINAL_Sep-2023.pdf" },
    },
    {
        name: "Common sunflower",
        photo: commonSunflowerPhoto,
        photoAlt: "A sunflower with a spiraled brown center against a blue sky",
        photoCredit: { author: "Fir0002", license: "GFDL 1.2", href: commons("Sunflower_sky_backdrop.jpg") },
        scientificName: "Helianthus annuus",
        note: "A giant relative of the asters. The tiny flowers in its center are packed into crisscrossing spirals whose counts are Fibonacci numbers, with each new flower about 137.5° from the last.",
        source: { label: "Algorithmic Botany: Modelling spiral phyllotaxis", href: "https://www.algorithmicbotany.org/papers/modelling-spiral-phyllotaxis.pdf" },
    },
    {
        name: "Soapweed yucca",
        photo: soapweedYuccaPhoto,
        photoAlt: "A soapweed yucca with a tall stalk of cream-colored flowers",
        photoCredit: { author: "daryl_mitchell", license: "CC BY-SA 2.0", href: commons("Yucca_Glauca_Flowers_2_(46783955544).jpg") },
        scientificName: "Yucca glauca",
        note: "A spiky plains plant with two textile uses. Its tough leaf fibers were woven into baskets, mats, sandals, and rope, and its roots were pounded into suds for washing wool and blankets.",
        source: { label: "National Park Service: Soapweed yucca", href: "https://www.nps.gov/articles/000/soapweed-yucca.htm" },
    },
];

function SubHeading({ children }: { children: React.ReactNode }) {
    return <h3 className="font-inconsolata text-lg font-bold text-forest">{children}</h3>;
}

const indexLinks = [
    ...plants.map((plant) => ({ id: plant.id, label: plant.name })),
    { id: "other-plants", label: "Other Plants to Explore" },
    { id: "where-they-grow", label: "Where They Grow" },
];

export default function NativePlantsPage() {
    return (
        <div className="flex flex-col gap-12">
            <PageHeader title="Colorado Native Plants" />

            <nav aria-label="On this page">
                <p className="font-inconsolata font-bold text-forest">On this page</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                    {indexLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className="block font-inconsolata font-semibold text-sm px-3 py-1.5 rounded-md bg-moss text-mint hover:bg-forest transition-colors"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Each section's id is the anchor the home page cards and Pages menu link to; scroll-mt clears the sticky nav. */}
            {plants.map((plant) => (
                <section
                    key={plant.id}
                    id={plant.id}
                    className="scroll-mt-24 rounded-sm bg-mint border border-sage/50 p-6 sm:p-8 flex flex-col gap-6"
                >
                    <div className="flex items-center gap-3">
                        <PlantIcon plantId={plant.id} className="w-12 h-12" />
                        <div>
                            <h2 className="font-inconsolata text-forest text-3xl font-bold">{plant.name}</h2>
                            <p className="font-inconsolata italic text-moss">{plant.scientificName}</p>
                        </div>
                    </div>

                    {/* The main photo floats left so the text wraps around it. */}
                    <div className="flow-root leading-relaxed [&>p]:mb-3 [&>p:last-child]:mb-0">
                        {plant.photo && (
                            <Image
                                src={plant.photo}
                                alt={plant.photoAlt ?? plant.name}
                                sizes="(min-width: 768px) 40vw, 100vw"
                                className="w-full md:w-2/5 h-64 md:h-auto md:aspect-square object-cover rounded-md mb-4 md:float-left md:mr-6 md:mb-3"
                            />
                        )}
                        {plant.about.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="flex flex-col gap-1">
                        <SubHeading>Why we study it</SubHeading>
                        <p className="leading-relaxed">{plant.whyWeStudyIt}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <SubHeading>More about the research</SubHeading>
                        <div className="flex flex-wrap gap-2">
                            {plant.links.map((link) => (
                                <ButtonLink key={link.href} href={link.href}>
                                    {link.label}
                                </ButtonLink>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <SubHeading>Where to find it</SubHeading>
                        <p className="leading-relaxed">{plant.mapNote}</p>
                        <ButtonLink href={plant.map.href}>{plant.map.label}</ButtonLink>
                    </div>

                    {plant.species && (
                        <div className="flex flex-col gap-3">
                            <SubHeading>Some {plant.name.toLowerCase()}s you can find in Colorado</SubHeading>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                                {plant.species.map((species) => (
                                    // A species without a photo (like the featured alpine aster) spans the full row.
                                    <div
                                        key={species.scientificName}
                                        className={species.photo ? "" : "sm:col-span-2"}
                                    >
                                        {species.photo && (
                                            <Image
                                                src={species.photo}
                                                alt={species.photoAlt ?? species.name}
                                                sizes="(min-width: 640px) 50vw, 100vw"
                                                className={`w-full h-48 object-cover rounded-md ${species.photoPosition ?? ""}`}
                                            />
                                        )}
                                        <PhotoCredit credits={[species.photoCredit]} />
                                        <div className="pt-2">
                                            {species.tag && (
                                                <p className="font-inconsolata text-xs uppercase tracking-wide text-moss">{species.tag}</p>
                                            )}
                                            <p className="font-inconsolata font-bold text-forest">{species.name}</p>
                                            <p className="font-inconsolata text-sm italic text-moss">{species.scientificName}</p>
                                            {species.note && <p className="mt-2 text-sm leading-relaxed">{species.note}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <SubHeading>Fun facts</SubHeading>
                            <ul className="list-disc pl-5 flex flex-col gap-2 text-sm leading-relaxed marker:text-moss">
                                {plant.funFacts.map((fact) => (
                                    <li key={fact}>{fact}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                            <SubHeading>Traditional and medicinal uses</SubHeading>
                            <ul className="list-disc pl-5 flex flex-col gap-2 text-sm leading-relaxed marker:text-moss">
                                {plant.traditionalUses.map((use) => (
                                    <li key={use}>{use}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <p className="font-inconsolata text-sm font-bold text-forest">Sources</p>
                        <ul className="mt-1 flex flex-col gap-1 text-sm">
                            {plant.sources.map((source) => (
                                <li key={source.href}>
                                    <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-moss underline hover:text-forest">
                                        {source.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            ))}

            <section id="other-plants" className="scroll-mt-24 rounded-sm bg-mint border border-sage/50 p-6 sm:p-8 flex flex-col gap-4">
                <div>
                    <h2 className="font-inconsolata text-forest text-2xl font-bold">Other Plants to Explore</h2>
                    <p className="mt-1 leading-relaxed">
                        A few more Colorado plants that are interesting to dye with, have interesting patterns, or have been used for weaving.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                    {otherPlants.map((plant) => (
                        <div key={plant.scientificName} className="flex flex-col">
                            {/* Every card's photo area is the same height; a second photo splits it in half. */}
                            <div className="h-44 flex rounded-md overflow-hidden">
                                <Image
                                    src={plant.photo}
                                    alt={plant.photoAlt}
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    className="flex-1 min-w-0 h-full object-cover"
                                />
                                {plant.photo2 && (
                                    <Image
                                        src={plant.photo2}
                                        alt={plant.photo2Alt ?? plant.name}
                                        sizes="(min-width: 1024px) 17vw, (min-width: 640px) 25vw, 50vw"
                                        className="flex-1 min-w-0 h-full object-cover border-l-2 border-white"
                                    />
                                )}
                            </div>
                            <PhotoCredit credits={[plant.photoCredit, plant.photo2Credit]} />
                            <div className="pt-2 flex flex-col flex-1">
                                <p className="font-inconsolata font-bold text-forest">{plant.name}</p>
                                <p className="font-inconsolata text-sm italic text-moss">{plant.scientificName}</p>
                                <p className="mt-2 text-sm leading-relaxed flex-1">{plant.note}</p>
                                <a
                                    href={plant.source.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 text-xs text-moss underline hover:text-forest"
                                >
                                    Source: {plant.source.label}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="where-they-grow" className="scroll-mt-24 rounded-sm bg-mint border border-sage/50 p-6 sm:p-8 flex flex-col gap-4">
                <h2 className="font-inconsolata text-forest text-2xl font-bold">Where They Grow - iNaturalist</h2>
                <p className="leading-relaxed">
                    If you want to know where to find these plants, or any other plant, look on iNaturalist, where people share
                    photos and locations of the plants and animals they spot.
                </p>
                <ButtonLink href="https://www.inaturalist.org">iNaturalist</ButtonLink>
            </section>
        </div>
    );
}
