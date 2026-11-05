import Image from "next/image";
import Link from "next/link";
import DraftNote from "@/components/DraftNote";
import PageHeader from "@/components/PageHeader";
import PhotoStepper, { StepPhoto } from "@/components/PhotoStepper";
import Placeholder from "@/components/Placeholder";
import Section from "@/components/Section";
import asterPhoto from "@/app/native-plants/aster-ours.jpg";
import asterDrawing from "./aster-drawing.jpg";

// Text on this page comes from our mentors' aster doc ("Webpage Text"). Yellow [brackets] mark spots they still want to fill in.

// Photos for the click-through: each one adds another flower. Import each photo above and add it here in order, e.g.
// { src: growStep1, alt: "One aster flower stamp", caption: "We start with a single flower." },
const growingPhotos: StepPhoto[] = [];

const ASTER_SOURCE = "https://coloradowildflower.com/wildflower_category/aster/";
const ADACAD = "https://adacad.org";

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

export default function AsterOperationPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageHeader title="Aster AdaCAD Operation" subtitle="Inspired by aster" />

            <Section title="Aster">
                <div className="flex flex-col md:flex-row gap-6">
                    <Image
                        src={asterPhoto}
                        alt="A bush of light purple asters with yellow centers"
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="w-full md:w-2/5 h-72 md:h-auto md:self-start md:aspect-[3/4] object-cover rounded-md border-2 border-sage"
                    />
                    <div className="flex-1 flex flex-col gap-4">
                        <p>
                            Asteraceae is a large and widespread family of plants, trees, and shrubs. The <em>Aster alpinus</em>,
                            or alpine daisy, might be the most iconic aster native to Colorado with its bright yellow center
                            surrounded by light purple petals. Other asters that grow natively in Colorado include common species
                            like Alpine Sunflowers, Black Eyed Susans, and Coneflowers.{" "}
                            <TextLink href="/weaving/branching">Rabbitbrush</TextLink> is also a part of the Aster family!
                            Plentiful non-native species are the Bristle and Canadian Thistles, Common Dandelions, and Oxeye
                            Daisies.
                        </p>
                        <p className="text-sm">
                            Source: <TextLink href={ASTER_SOURCE}>Colorado Wildflowers: Aster family</TextLink>
                        </p>
                        <p>
                            <DraftNote>Description of characteristics, focused on the compound flower structure. Role as pollinator.</DraftNote>
                        </p>
                    </div>
                </div>

                <p>
                    Without realizing it, we encountered several aster species on our first two plant walks including{" "}
                    <em>Arnica cordifolia</em>, Yarrow, <em>Artemisia frigida</em>, and{" "}
                    <TextLink href="/weaving/branching">Rabbitbrush</TextLink>–another of our selected species. Our attention was
                    brought to the Asteraceae family in more detail during our close looking walk at the Denver Botanic Garden.
                    Our botany guide <DraftNote>name</DraftNote> invited us to inspect and describe a series of very
                    different-looking plant species. While they seemed unrelated due to the variety in leaf shape, height, color
                    and flower appearance, she revealed that they were all members of the Aster family!
                </p>
                <p>
                    As the second-largest plant family, the breadth of the Asteraceae complicates ideas about what is native or
                    local. The first instances of Aster plants are thought to have originated in Argentina over 50 million years
                    ago and species from the family can now be found worldwide. The particular geologies and ecologies of
                    Colorado are more important here than the state borders in defining what it means to be local. The Alpine
                    Aster <DraftNote>growing conditions and other locations it grows</DraftNote> while rabbitbrush{" "}
                    <DraftNote>growing conditions and other locations it grows</DraftNote>.{" "}
                    <DraftNote>
                        Something about the interconnectedness of local, native, transplanted/migrated, and global species
                        through shared characteristics...
                    </DraftNote>
                </p>

                <Link
                    href="/native-plants#aster"
                    className="font-inconsolata font-semibold px-4 py-2 rounded-md bg-moss text-mint hover:bg-forest transition-colors w-fit"
                >
                    More about asters on Colorado Native Plants
                </Link>
            </Section>

            <Section title="Translating the Flower Design into a Woven Draft">
                <p>
                    We found the compound flower design of the Aster family–comprised of a cluster of little flowers surrounded
                    by an array of petals <DraftNote>fill in with more technical language?</DraftNote>–to be very charming and
                    it inspired Etta to think about how woven pattern could be designed through a similar logic of clustered and
                    stretched structures.
                </p>
                <p>
                    A weave draft is traditionally a map or instruction key that tells a weaver how to create specific weave
                    structures and patterns through particular loom setups and the steps taken while weaving. The draft brings
                    together the logic of lifting and lowering threads in combinations to create distinct patterns. It shows a
                    graphic representation of the thread interlacements that result from these patterns as a binary black and
                    white draft called the drawdown. Each type of woven structure follows a set of rules or logics
                    characteristic to that structure; for instance the rules that determine the interlacement pattern of a
                    twill are...
                </p>
                <p>
                    Etta thinks about woven structures as pattern units that can be repeated, tiled, rotated, or transformed.
                    These pattern units get combined, or tiled, over and over again to create woven cloth. While the
                    parameters of a harness-based looms restrict the possibilities of these transformations, when abstracted
                    away from the loom as a graphic representation or design for a Jacquard loom (on which each thread can be
                    raised or lowered independently of the others), the possibilities for transformation are less bounded. An
                    overall woven pattern can be reduced down to minimum repeats...
                </p>
                <p>
                    In our weave drafting software, <TextLink href={ADACAD}>AdaCAD</TextLink>, the logics of woven structure
                    are built into what we call &ldquo;operations.&rdquo; Other operations in the software can then be used to
                    modify or transform the seed structure by stretching, flipping, shifting, and repeating it.
                </p>

                <div className="flex flex-col md:flex-row gap-6">
                    <p className="flex-1">
                        Using the logic of a woven structure as a single pattern unit that can be combined and transformed, Etta
                        sketched out the design of the Aster draft design with a cluster of twill pattern units in a three by
                        three grid. This cluster mimicked the <DraftNote>plant center</DraftNote> of Aster flowers. Extending off
                        of each pattern unit around the edge of the grid, she added a twill structure that was stretched by three
                        pattern widths. These stretched structures were like the ray flowers that make up the petals of the
                        Aster.
                    </p>
                    <figure className="md:w-2/5 flex flex-col gap-2">
                        {/* Click to open the full-size drawing. */}
                        <a href={asterDrawing.src} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={asterDrawing}
                                alt="Etta's hand-drawn aster draft on graph paper: a three by three cluster of twill blocks with stretched blocks around the edges, and colored versions below"
                                sizes="(min-width: 768px) 40vw, 100vw"
                                className="w-full h-auto rounded-md border-2 border-sage"
                            />
                        </a>
                        <figcaption className="text-sm text-ink/80">
                            Etta&apos;s hand-drafted sketch of the Aster draft. Click to enlarge.{" "}
                            <DraftNote>better quality scan coming</DraftNote>
                        </figcaption>
                    </figure>
                </div>
            </Section>

            <Section title="Designing the Aster Weave Structure">
                <p>
                    Starting the design process by hand drafting allowed Etta to test out variations of the structure design
                    and its pattern &ldquo;rules.&rdquo; Working within the gridded logic of weaving, the initial
                    &ldquo;cluster&rdquo; of structures were in a three by three square. When the elongated structures extended
                    around the edges, it left empty spaces in the corners of the pattern, which might not be found in the disc
                    design of an Aster flower. Etta sketched out <DraftNote>sentence to be finished</DraftNote>
                </p>

                <SubHeading>Challenges and mistranslations</SubHeading>
                <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-moss">
                    <li>
                        Created an isolated pattern with &ldquo;empty&rdquo; space around it – how to bring it into a cloth
                        design: tiling, first in sketching then with carved and printed stamps
                    </li>
                    <li>Challenge of translating a disc-like design into a gridded form</li>
                </ul>
                <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-moss">
                    <li>
                        Pixel drafting in Photoshop to find the repeat pattern that could then fill the space of a cloth design
                        to be woven on the Jacquard loom
                    </li>
                </ul>

                <PhotoStepper
                    title="Growing the Pattern"
                    photos={growingPhotos}
                    emptyNote="Click-through photos where each click adds another flower, to show how the pattern grows."
                />
            </Section>

            <Placeholder title="Woven Samples" note="Photos of the woven samples from the hand-drafted aster design." />

            <Placeholder title="Designing the AdaCAD Operations" note="From our mentors' doc; still being written.">
                <ul className="list-disc pl-5 flex flex-col gap-1 marker:text-moss">
                    <li>Variables for the Aster operation</li>
                    <li>Development of the tile operation</li>
                </ul>
            </Placeholder>

            <Placeholder title="Woven Samples from the AdaCAD Operations" note="Photos of samples woven from the AdaCAD operations." />
        </div>
    );
}
