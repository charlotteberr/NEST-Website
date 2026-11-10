import Image, { StaticImageData } from "next/image";
import ButtonLink from "@/components/ButtonLink";
import PageHeader from "@/components/PageHeader";
import { Cite, Reference, ReferenceList, TextLink } from "@/components/Research";
import Section from "@/components/Section";
import asterCloseup from "./aster-closeup.jpg";
import asterDrawing from "./aster-drawing.jpg";
import stampTiling from "./stamp-tiling.jpg";
import asterPattern from "./aster-pattern.jpg";
import sampleNoCorners1 from "./sample-no-corners-1.jpg";
import sampleNoCorners2 from "./sample-no-corners-2.jpg";
import sampleCorners1 from "./sample-corners-1.jpg";
import sampleCorners2 from "./sample-corners-2.jpg";
// import variation1 from "./variation-1.jpg";
// import variation2 from "./variation-2.jpg";
// import adacadAsterOperations from "./adacad-aster-operations.jpg";
// import adacadWorkspace from "./adacad-workspace.jpg";
// import operationInput from "./operation-1-input.png";
// import operationAster from "./operation-2-aster.png";
// import operationStamping from "./operation-3-stamping.png";
// import operationFull from "./operation-4-full.png";

// Text on this page comes from our mentors' aster doc ("Webpage Text").

// For the "to add later" section below.
// Photos for "Growing the Pattern", shown left to right: the steps of the Aster AdaCAD operation. Edit the captions here.
// const growingPhotos = [
//     { src: operationInput, caption: "1. What was put into the aster operation", alt: "A small black and white draft of a rounded, disc-like shape" },
//     { src: operationAster, caption: "2. What the AdaCAD Aster operation output", alt: "The aster draft made by the operation: a woven flower with a checkered center and stretched petal structures around it" },
//     { src: operationStamping, caption: "3. The stamping pattern to stamp the aster in", alt: "A grid of small black dots in diagonal rows, marking where each aster is stamped" },
//     { src: operationFull, caption: "4. The full pattern", alt: "The full woven pattern: asters stamped in diagonal rows across the cloth" },
// ];

// const ADACAD = "https://adacad.org";

const COLORADO_WILDFLOWERS: Reference = { number: 1, href: "https://coloradowildflower.com/wildflower_category/aster/", children: "Colorado Wildflowers: Aster family" };
const BRITANNICA: Reference = { number: 2, href: "https://www.britannica.com/plant/Asteraceae", children: "Encyclopaedia Britannica: Asteraceae" };

const references: Reference[] = [COLORADO_WILDFLOWERS, BRITANNICA];

// A photo that opens full size when clicked, with a caption under it.
function Figure({ src, alt, caption, sizes = "(min-width: 1024px) 64rem, 100vw" }: { src: StaticImageData; alt: string; caption: React.ReactNode; sizes?: string }) {
    return (
        <figure className="flex flex-col gap-2">
            <a href={src.src} target="_blank" rel="noopener noreferrer">
                <Image src={src} alt={alt} sizes={sizes} className="w-full h-auto rounded-md" />
            </a>
            <figcaption className="text-sm text-ink/80">{caption}</figcaption>
        </figure>
    );
}

// Woven sample photos stacked with no gap, so the two halves read as one sample.
function SampleStack({ photos, caption }: { photos: { src: StaticImageData; alt: string }[]; caption: React.ReactNode }) {
    return (
        <figure className="flex flex-col gap-2">
            <div className="flex flex-col rounded-md overflow-hidden">
                {photos.map((photo) => (
                    <a key={photo.src.src} href={photo.src.src} target="_blank" rel="noopener noreferrer">
                        <Image src={photo.src} alt={photo.alt} sizes="(min-width: 1024px) 64rem, 100vw" className="w-full h-auto" />
                    </a>
                ))}
            </div>
            <figcaption className="text-sm text-ink/80">{caption}</figcaption>
        </figure>
    );
}

export default function AsterResearchPage() {
    return (
        <div className="flex flex-col gap-10">
            <PageHeader title="Aster Research" />

            <Section title="What Is Aster">
                <div className="flex flex-col md:flex-row gap-6">
                    <Image
                        src={asterCloseup}
                        alt="Close-up of light purple asters with yellow centers"
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="w-full md:w-2/5 md:self-start aspect-square object-cover rounded-md"
                    />
                    <div className="flex-1 flex flex-col gap-4">
                        <p>
                            Asteraceae is a large and widespread family of plants, trees, and shrubs. The <em>Aster alpinus</em>,
                            or alpine daisy, might be the most iconic aster native to Colorado with its bright yellow center
                            surrounded by periwinkle rays. Other asters that grow natively in Colorado include common species
                            like Alpine Sunflowers, Black Eyed Susans, and Coneflowers. Plentiful non-native species are the
                            Bristle and Canadian Thistles, Common Dandelions, and Oxeye Daisies.
                            <Cite reference={COLORADO_WILDFLOWERS} />
                        </p>
                        <p>
                            Asters are characterized by their compound flowers or &ldquo;inflorescence.&rdquo; What appears to
                            be a single bloom is actually composed of a circular cluster of florets or disk flowers surrounded
                            by petal-like ray flowers. Some species have flowers composed of only disk flowers (thistles) or
                            only ray flowers (dandelions). Asters are generalist pollinators: composed of relatively small
                            flowers, the nectar that the flower provides is easy to access for many kinds of insects. A single
                            inflorescence will be visited by several different kinds of insects and the pollen is readily
                            available on the surface of the flower for easy transfer.
                            <Cite reference={BRITANNICA} />
                        </p>
                    </div>
                </div>

                <p>
                    Without realizing it, we encountered several aster species on our first two plant walks including{" "}
                    <em>Arnica cordifolia</em>, Yarrow, <em>Artemisia frigida</em>, and{" "}
                    <TextLink href="/rabbitbrush">Rabbitbrush</TextLink>–another of our selected species. Our attention was
                    brought to the Asteraceae family in more detail during our close-looking walk at the Denver Botanic Garden.
                    Our botany guide invited us to inspect and describe a series of very different-looking plant species. While
                    they seemed unrelated due to the variety in leaf shape, height, color and flower appearance, she revealed
                    that they were all members of the Aster family!
                </p>
                <p>
                    As the second-largest plant family, the breadth of the Asteraceae complicates ideas about what is native or
                    local. The first instances of Aster plants are thought to have originated in Argentina over 50 million years
                    ago and species from the family can now be found worldwide.
                    <Cite reference={BRITANNICA} /> The particular geologies and ecologies of the front range region are more
                    important here than the state borders in defining what it means to be local.
                </p>

                <div className="flex flex-wrap gap-2">
                    <ButtonLink href="/native-plants#aster">More about asters</ButtonLink>
                </div>
            </Section>

            <Section title="Translating the Flower Design into a Woven Draft">
                <p>
                    We found the compound flower design of the Aster family–comprised of a cluster of little flowers encircled
                    by ray flowers–to be very charming and it inspired Etta to think about how woven pattern could be designed
                    through a similar logic of clustered and stretched weave structures.
                </p>
                {/* The sketch floats right so the text wraps around it. */}
                <div className="flow-root [&>p]:mb-4">
                    <figure className="mb-4 md:float-right md:w-2/5 md:ml-6 flex flex-col gap-2">
                        {/* Click to open the full-size drawing. */}
                        <a href={asterDrawing.src} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={asterDrawing}
                                alt="Etta's hand-drawn aster draft on graph paper: a three by three cluster of twill blocks with stretched blocks around the edges, and colored versions below"
                                sizes="(min-width: 768px) 40vw, 100vw"
                                className="w-full h-auto rounded-md"
                            />
                        </a>
                        <figcaption className="text-sm text-ink/80">
                            Etta&apos;s hand-drafted sketch of the Aster draft.
                        </figcaption>
                    </figure>
                    <p>
                        A weave draft is traditionally a map or instruction key that tells a weaver how to create specific weave
                        structures and patterns through particular loom setups and the steps taken while weaving. The draft brings
                        together the logic of lifting and lowering threads in combinations to create distinct patterns. It shows a
                        graphic representation of the thread interlacements that result from these patterns as a binary black and
                        white draft called the drawdown.
                    </p>
                    <p>
                        Etta thinks about woven structures as pattern units that can be repeated, rotated, and transformed. These
                        pattern units get combined, or tiled, over and over again to create woven cloth. While the parameters of
                        harness-based looms create conditions for the possibilities of these transformations, when abstracted
                        away from the loom as a graphic representation or a design for a Jacquard loom (on which each thread can
                        be raised or lowered independently of the others), the possibilities for transformation are less
                        bounded.
                    </p>
                    <p>
                        Using the logic of a woven structure as a single pattern unit that can be combined and transformed, Etta
                        sketched out the Aster draft design with a cluster of single twill pattern units in a three-by-three
                        grid. This cluster mimicked the central disk flowers of Asters. Extending off each pattern unit around
                        the edge of the grid, she added a twill structure that was stretched by three pattern widths. These
                        stretched structures were like the ray flowers that appear as the petals of the Aster.
                    </p>
                </div>
            </Section>

            <Section title="Designing the Aster Weave Structure">
                <p>
                    Starting the design process by hand drafting allowed Etta to test out variations of the structure design
                    and its pattern &ldquo;rules.&rdquo; Working within the gridded logic of weaving, she started with an initial
                    central cluster of structures in a three-by-three square. When the elongated structures extended around the
                    edges, it left empty spaces in the corners of the pattern, which might not be found in the disc design of
                    an Aster flower. Etta sketched out what it might look like to add stretched structures in the corners of
                    the design: should one enlarged structure fill the whole corner? could two stretched structures overlap
                    and combine?
                </p>
                <p>
                    The resulting over-all design was cross-shaped, an isolated pattern with &ldquo;empty&rdquo; space around
                    it. This creates a problem in woven cloth design where areas without interlacement result in warp and weft
                    &ldquo;floats.&rdquo; After sketching out the initial pattern design, based on the Aster logic, the
                    resulting non-rectangular structure raised a new question about how to bring the Aster pattern into an
                    overall cloth design. To explore this, Etta returned to her stamping practice. She carved a stamp that
                    depicted the over-all Aster design in miniature. The stamp allowed her to play with different ways of
                    tiling the pattern together. Finding a rectangular pattern repeat allowed her to then draft details of
                    the pattern in Photoshop so that it could be used to fill the space of a cloth design and be woven on the
                    Jacquard loom.
                </p>

                {/* The stamp tiling with the small drafted pattern beside it, as in Etta's doc. */}
                <div className="flex flex-col sm:flex-row gap-6 sm:items-start">
                    <div className="flex-1">
                        <Figure
                            src={stampTiling}
                            alt="Rows of cross-shaped aster stamps printed in blue and purple on graph paper, fitted together into a tiled pattern"
                            caption="Tiling the Aster design with Etta's carved stamp."
                        />
                    </div>
                    <figure className="w-40 shrink-0 flex flex-col gap-2">
                        <Image
                            src={asterPattern}
                            alt="A small black and white square of the drafted aster pattern, made of diagonal twill lines"
                            sizes="160px"
                            className="w-40 h-40 rounded-md"
                        />
                        <figcaption className="text-sm text-ink/80">[Placeholder: caption.]</figcaption>
                    </figure>
                </div>

                <SampleStack
                    photos={[
                        { src: sampleNoCorners1, alt: "A woven strip in black, white, and red showing the aster design without corner petals" },
                        { src: sampleNoCorners2, alt: "Woven aster samples in peach and magenta wefts without corner petals" },
                    ]}
                    caption={<>Woven samples of the initial aster design with no corner &ldquo;petals.&rdquo;</>}
                />
                <SampleStack
                    photos={[
                        { src: sampleCorners1, alt: "Woven aster samples in peach and magenta wefts with corner petals and visible floats" },
                        { src: sampleCorners2, alt: "A woven strip in black, white, and red showing the aster design with corner petals and loose floats" },
                    ]}
                    caption={
                        <>
                            Woven samples of the aster design that includes corner &ldquo;petals.&rdquo; Each pattern unit
                            doesn&apos;t quite &ldquo;fit&rdquo; when tiled together. The gaps in the pattern lead to warp and
                            weft floats in the resulting woven cloth.
                        </>
                    }
                />
            </Section>

            {/* TO ADD LATER: Etta's doc marks everything from here on as "To add later". Delete this line and the
                matching end line below (and un-comment the imports and lists for it at the top) to show it again.

            <Section title="Variations on the Aster Design and Designing the AdaCAD Operations">
                <p>
                    In our weave drafting software, <TextLink href={ADACAD}>AdaCAD</TextLink>, the logics of woven structure
                    are built into what we call &ldquo;operations.&rdquo; Other operations in the software can then be used to
                    modify or transform the seed structure by stretching, flipping, shifting, and repeating it.
                </p>
                <p>[Placeholder: variables for the Aster operation.]</p>
                <p>[Placeholder: development of the tile operation.]</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Figure
                        src={variation1}
                        alt="Overlapping aster designs drawn in purple, pink, and orange on graph paper, with a gray draft beside them"
                        caption="[Placeholder: caption.]"
                        sizes="(min-width: 768px) 50vw, 100vw"
                    />
                    <Figure
                        src={variation2}
                        alt="Aster designs drawn in green, teal, and pink on graph paper, with a gray draft beside them"
                        caption="[Placeholder: caption.]"
                        sizes="(min-width: 768px) 50vw, 100vw"
                    />
                </div>
                <Figure
                    src={adacadAsterOperations}
                    alt="Four aster operations in AdaCAD, each fed by the same twill and set with different variables"
                    caption="[Placeholder: caption.]"
                />
                <Figure
                    src={adacadWorkspace}
                    alt="The AdaCAD workspace with many aster and stamp motif operations connected together, and a full aster pattern on the right"
                    caption="[Placeholder: caption.]"
                />

                <SubHeading>Growing the Pattern</SubHeading>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {growingPhotos.map((step) => (
                        <figure key={step.caption} className="flex flex-col gap-2">
                            <a href={step.src.src} target="_blank" rel="noopener noreferrer" className="h-60 bg-white rounded-md flex items-center justify-center p-2">
                                <Image
                                    src={step.src}
                                    alt={step.alt}
                                    sizes="(min-width: 768px) 25vw, 50vw"
                                    className="max-h-full w-auto object-contain [image-rendering:pixelated]"
                                />
                            </a>
                            <figcaption className="text-sm text-ink/80">{step.caption}</figcaption>
                        </figure>
                    ))}
                </div>
            </Section>

            END OF "TO ADD LATER" */}

            <Section title="References">
                <ReferenceList references={references} />
            </Section>
        </div>
    );
}
