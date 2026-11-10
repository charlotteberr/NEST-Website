import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import PageHeader from "@/components/PageHeader";
import { Cite, Reference, ReferenceList, SubHeading, TextLink } from "@/components/Research";
import Section from "@/components/Section";
import rabbitbrushField from "./rabbitbrush-field.jpg";
import lsystemFigure from "./lsystem-figure.jpg";
import lsystemSamples from "./lsystem-samples.jpg";
import collectingHallRanch from "./rabbitbrush_collecting_hall_ranch.jpg";
import hallRanchOctober from "./hall_ranch_october.jpg";

// Text on this page comes from our mentors' rabbitbrush doc ("rabbitbrush-text").

const ABOP = "https://algorithmicbotany.org/papers/#abop";

const NPS: Reference = { number: 1, href: "https://www.nps.gov/colm/learn/nature/rabbitbrush.htm", children: "National Park Service: Rabbitbrush" };
const USDA_DYES: Reference = { number: 2, href: "https://www.fs.usda.gov/wildflowers/ethnobotany/dyes.shtml", children: "USDA Forest Service: Plant Dyes" };

const references: Reference[] = [
    NPS,
    USDA_DYES,
    {
        children: (
            <>
                Lindenmayer, A. (1968). Mathematical models for cellular interactions in development.{" "}
                <em>Journal of Theoretical Biology</em>, 18(3), 280–315.
            </>
        ),
    },
    {
        children: (
            <>
                Prusinkiewicz, P., and Lindenmayer, A. (1990). <em>The Algorithmic Beauty of Plants</em>. Springer-Verlag.
            </>
        ),
    },
];

export default function RabbitbrushResearchPage() {
    return (
        <div className="flex flex-col gap-10">
            <PageHeader title="Rabbitbrush Research" />

            <Section title="What Is Rabbitbrush">
                <div className="flex flex-col md:flex-row gap-6">
                    <Image
                        src={rabbitbrushField}
                        alt="Rabbitbrush in full yellow bloom in a field below the foothills"
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="w-full md:w-2/5 md:self-start aspect-square object-cover rounded-md"
                    />
                    <div className="flex-1 flex flex-col gap-4">
                        <p>
                            Rabbitbrush is a member of the Asteraceae family with
                            branching stems that form a rounded crown of small yellow flowers in late summer and early fall. Most
                            species grow between three and five feet tall and are found from California to Kansas, Canada to
                            Texas. Rabbitbrush grows well in disturbed areas, such as abandoned agricultural, graze, or fire
                            zones, and is an important pioneering species to help others reestablish.
                            <Cite reference={NPS} />{" "}
                            Its flowers and stems can be used to create{" "}
                            natural dye.
                            <Cite reference={USDA_DYES} />
                        </p>
                        <p>
                            In our work, we explored rabbitbrush through its growth pattern and through its natural dye
                            properties.
                        </p>
                        <ButtonLink href="/native-plants#rabbitbrush">Rabbitbrush Characteristics</ButtonLink>
                    </div>
                </div>
            </Section>

            <Section title="Natural Dye">
                {/* Flower Collection text is from our mentors' rabbitbrush doc. The photos sit to the right of both parts. */}
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 flex flex-col gap-4">
                        <SubHeading>Flower Collection</SubHeading>
                        <p>
                        We first identified rabbitbrush as a species of interest in the early stages of our plant selection
                        when flipping through a natural dye book that identifies dye species by growth region. Rabbitbrush
                        showed up again when researching local plants that might be illustrated by{" "}
                        <TextLink href="#growth-patterns">L-systems</TextLink>. We encountered it live during a community
                        walk with Boulder County Parks and Open Spaces, which prompted us to submit a research request to
                        collect rabbitbrush flowers through the county. Our permit was granted to collect at Hall Ranch in
                        Lyons, and our first visit was during a peak bloom in September when we collected blossoms to do an
                        initial dye test. From these tests, we calculated the weight of blossoms needed to dye a larger
                        quantity of yarn. The tests also revealed that rabbitbrush dye produced a lovely butter yellow color on
                        silk and cotton and a bright gold when used with wool. We returned to Hall Ranch in October with the
                        intention to collect a large quantity of blossoms for a larger volume of dye but discovered that the
                        season had peaked and the rabbitbrush plants had far fewer flowers. Our collection day was spent
                        exploring more of Hall Ranch searching for enough blossoms for all that we wanted to dye.
                        </p>

                        <SubHeading>Dyeing</SubHeading>
                        <p>
                            We dyed cotton and wool yarn to use as warp and weft in a weaving project, and samples of silk
                            fabric to test colors. Following the rabbitbrush recipe in <em>Harvesting Color</em>, we used a 3:1
                            ratio of rabbitbrush blossoms to fiber weight. Our 10.16 oz of silk, warp yarn, and weft needed
                            1.905 lb of blossoms. We mordanted most of the fiber with alum, simmered it in the dye for 90
                            minutes, and let it sit in the pot for 36 hours to deepen the color.
                        </p>
                        <ButtonLink href="/natural-dyeing">More about our natural dyeing research</ButtonLink>
                    </div>
                    <div className="w-full md:w-2/5 md:self-start flex flex-col gap-4">
                        <Image
                            src={collectingHallRanch}
                            alt="Two of us collecting rabbitbrush flowers into a plastic bag beside a trail at Hall Ranch in September"
                            sizes="(min-width: 768px) 40vw, 100vw"
                            className="w-full h-auto rounded-md"
                        />
                        <Image
                            src={hallRanchOctober}
                            alt="A trail at Hall Ranch in October, with rabbitbrush past its bloom and foothills behind"
                            sizes="(min-width: 768px) 40vw, 100vw"
                            className="w-full aspect-[4/3] object-cover rounded-md"
                        />
                    </div>
                </div>

            </Section>

            <Section title="Growth Patterns" id="growth-patterns">
                <p>
                    Our sampling explorations inspired by rabbitbrush growth branched in two directions and approaches to
                    translating plant logics into cloth. The first is inspired by an algorithmic approach to modeling plant
                    growth called L-systems, generating a rabbitbrush branching design and applying woven structures at
                    different generation levels.
                </p>

                <SubHeading>L-System</SubHeading>
                <p>
                    One branching logic we explored was L-systems, a formal grammar developed by Hungarian biologist
                    Astrid Lindenmayer used to model growth, first in simple multicellular organisms and later in whole
                    plants [Lindenmayer 1968; Prusinkiewicz and Lindenmayer 1990]. Deanna led this exploration by
                    creating an AdaCAD operation that grows an L-system and draws it as a woven figure. In an L-system,
                    each generation rewrites every segment of the previous one, so the plant grows longer, gains side
                    branches, and branches one level deeper. A third-generation plant therefore has two more levels of
                    branching than a first-generation plant.
                </p>

                <figure className="flex flex-col gap-2">
                    <Image
                        src={lsystemFigure}
                        alt="Six plant-like branching figures drawn by L-systems, each labeled with its rewriting rules"
                        sizes="(min-width: 1024px) 64rem, 100vw"
                        className="w-full h-auto rounded-md"
                    />
                    <figcaption className="text-sm text-ink/80">
                        Plant-like structures generated by L-systems, rearranged into one row from Figure 1.24 in Prusinkiewicz and Lindenmayer,{" "}
                        <TextLink href={ABOP}>
                            <em>The Algorithmic Beauty of Plants</em>
                        </TextLink>{" "}
                        (1990).
                    </figcaption>
                </figure>

                <figure className="flex flex-col gap-2">
                    <a href={lsystemSamples.src} target="_blank" rel="noopener noreferrer">
                        <Image
                            src={lsystemSamples}
                            alt="Two long woven L-system samples, one blue and one black, with close-ups of outlined areas on each side"
                            sizes="(min-width: 1024px) 64rem, 100vw"
                            className="w-full h-auto rounded-md"
                        />
                    </a>
                    <figcaption className="text-sm text-ink/80">
                        The blue sample (top) and black sample (bottom), with close-ups of the outlined areas.
                    </figcaption>
                </figure>

                <p>
                    Her first sample (blue) varied branch thickness across second- and third-generation designs, with twill
                    branches on a twill ground. It showed that a thicker branch resolved best in a second-generation design, but
                    the same thickness in a third-generation design lost its resolution, as the branches crowded into one
                    another. The sample also taught her about the loom. The weft packed at about half the density of the warp, so
                    every figure wove roughly twice as tall as drawn. Areas of plain weave in the design also wove as unwanted
                    stripes.
                </p>
                <p>
                    The second sample (black) built on these lessons. Scaling proportions were adjusted, and each branching
                    depth (trunk, main branches, twigs) was given its own structure, stepping from a dense satin at the trunk to
                    finer twills at the twigs. Pairing depth with structure also let branch thickness step down with depth, so
                    the twigs could become much finer than the trunk. We changed the weft to black to strengthen the contrast
                    between the ground and the branches. Together, these changes resolved the third-generation designs: the
                    twigs now separate into distinct shapes instead of merging.
                </p>
            </Section>

            <Section title="References">
                <ReferenceList references={references} />
            </Section>
        </div>
    );
}
