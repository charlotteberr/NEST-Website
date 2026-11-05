import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";
import Section from "@/components/Section";
import rabbitbrushField from "./rabbitbrush-field.jpg";
import lsystemFigure from "./lsystem-figure.jpg";
import lsystemSamples from "./lsystem-samples.jpg";

// Text on this page comes from our mentors' rabbitbrush doc ("rabbitbrush-text").

const ABOP = "https://algorithmicbotany.org/papers/#abop";

function SubHeading({ children }: { children: React.ReactNode }) {
    return <h3 className="font-inconsolata text-lg font-bold text-forest">{children}</h3>;
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
    const className = "text-moss underline hover:text-forest";
    return href.startsWith("http") ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
            {children}
        </a>
    ) : (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
}

function ButtonLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="font-inconsolata font-semibold px-4 py-2 rounded-md bg-moss text-mint hover:bg-forest transition-colors w-fit"
        >
            {children}
        </Link>
    );
}

export default function BranchingOperationPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageHeader title="Branching AdaCAD Operation" subtitle="Inspired by rabbitbrush" />

            <Section title="What Is Rabbitbrush">
                <div className="flex flex-col md:flex-row gap-6">
                    <Image
                        src={rabbitbrushField}
                        alt="Rabbitbrush in full yellow bloom in a field below the foothills"
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="w-full md:w-2/5 md:self-start h-auto rounded-md border-2 border-sage"
                    />
                    <div className="flex-1 flex flex-col gap-4">
                        <p>
                            Rabbitbrush is a member of the <TextLink href="/weaving/aster">Asteraceae family</TextLink> with
                            branching stems that form a rounded crown of small yellow flowers in late summer and early fall. Most
                            species grow between three and five feet tall and are found from California to Kansas, Canada to
                            Texas. Rabbitbrush grows well in disturbed areas, such as abandoned agricultural, graze, or fire
                            zones, and is an important pioneering species to help others reestablish.
                            <sup>
                                <TextLink href="https://www.nps.gov/colm/learn/nature/rabbitbrush.htm">1</TextLink>
                            </sup>{" "}
                            Its flowers and stems can be used to create{" "}
                            <TextLink href="/natural-dyeing">natural dye</TextLink>.
                            <sup>
                                <TextLink href="https://www.fs.usda.gov/wildflowers/ethnobotany/dyes.shtml">2</TextLink>
                            </sup>
                        </p>
                        <p>
                            In our work, we explored rabbitbrush through its growth pattern and through its natural dye
                            properties.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <ButtonLink href="/native-plants#rabbitbrush">More about rabbitbrush</ButtonLink>
                            <ButtonLink href="/natural-dyeing">Natural Dyeing</ButtonLink>
                        </div>
                    </div>
                </div>
            </Section>

            <Section title="Growth Patterns">
                <p>
                    Our sampling explorations inspired by rabbitbrush growth branched in two directions and approaches to
                    designing for woven structures. The first is inspired by an algorithmic approach to modeling plant growth
                    called L-systems, generating a rabbitbrush branching design and applying woven structures at different
                    generation levels. The second is through reinterpreting branching structure-first by nesting woven
                    structures.
                </p>

                <SubHeading>L-System</SubHeading>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 flex flex-col gap-4">
                        <p>
                            One branching logic we explored was L-systems, a formal grammar developed by Hungarian biologist
                            Astrid Lindenmayer used to model growth, first in simple multicellular organisms and later in whole
                            plants [Lindenmayer 1968; Prusinkiewicz and Lindenmayer 1990]. Deanna led this exploration by
                            creating an AdaCAD operation that grows an L-system and draws it as a woven figure. In an L-system,
                            each generation rewrites every segment of the previous one, so the plant grows longer, gains side
                            branches, and branches one level deeper. A third-generation plant therefore has two more levels of
                            branching than a first-generation plant.
                        </p>
                    </div>
                    <figure className="md:w-2/5 flex flex-col gap-2">
                        <Image
                            src={lsystemFigure}
                            alt="Six plant-like branching figures drawn by L-systems, each labeled with its rewriting rules"
                            sizes="(min-width: 768px) 40vw, 100vw"
                            className="w-full h-auto rounded-md border-2 border-sage"
                        />
                        <figcaption className="text-sm text-ink/80">
                            Plant-like structures generated by L-systems. Figure 1.24 from Prusinkiewicz and Lindenmayer,{" "}
                            <TextLink href={ABOP}>
                                <em>The Algorithmic Beauty of Plants</em>
                            </TextLink>{" "}
                            (1990).
                        </figcaption>
                    </figure>
                </div>

                <figure className="flex flex-col gap-2">
                    <a href={lsystemSamples.src} target="_blank" rel="noopener noreferrer">
                        <Image
                            src={lsystemSamples}
                            alt="Two long woven L-system samples, one blue and one black, with close-ups of outlined areas on each side"
                            sizes="(min-width: 1024px) 64rem, 100vw"
                            className="w-full h-auto rounded-md border-2 border-sage"
                        />
                    </a>
                    <figcaption className="text-sm text-ink/80">
                        The blue sample (top) and black sample (bottom), with close-ups of the outlined areas. Click to enlarge.
                    </figcaption>
                </figure>

                <p>
                    Her first sample (blue) varied branch thickness across second- and third-generation designs, with twill
                    branches on a twill ground. It showed that a thicker branch resolved best in a second-generation design, but
                    the same thickness in a third-generation design lost its resolution, as the branches crowded into one
                    another. The sample also taught us about the loom. The weft packed at about half the density of the warp, so
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

            <Placeholder title="Nested Structures" note="From our mentors' rabbitbrush doc; this section hasn't been written yet." />

            <Section title="References">
                <ul className="flex flex-col gap-2 text-sm">
                    <li>
                        <sup>1</sup>{" "}
                        <TextLink href="https://www.nps.gov/colm/learn/nature/rabbitbrush.htm">
                            National Park Service: Rabbitbrush
                        </TextLink>
                    </li>
                    <li>
                        <sup>2</sup>{" "}
                        <TextLink href="https://www.fs.usda.gov/wildflowers/ethnobotany/dyes.shtml">
                            USDA Forest Service: Plant Dyes
                        </TextLink>
                    </li>
                    <li>
                        Lindenmayer, A. (1968). Mathematical models for cellular interactions in development.{" "}
                        <em>Journal of Theoretical Biology</em>, 18(3), 280–315.
                    </li>
                    <li>
                        Prusinkiewicz, P., and Lindenmayer, A. (1990). <em>The Algorithmic Beauty of Plants</em>. Springer-Verlag.
                    </li>
                </ul>
            </Section>
        </div>
    );
}
