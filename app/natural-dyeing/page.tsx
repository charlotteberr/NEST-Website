import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Image, { StaticImageData } from "next/image";
import PhotoRow from "@/components/PhotoRow";
import Section from "@/components/Section";
import collection1 from "./rabbitbrush_collection1.jpg";
import collection2 from "./rabbitbrush_collection2.jpg";
import inBowl from "./putting_rabbitbrush_in_bowl.jpg";
import potNoFabric from "./rabbitbrush_test1_pot_no_fabric.jpg";
import potFabric from "./rabbitbrush_test1_pot_fabric.jpg";
import dryingRack from "./rabbitbrush_test1_dryingrack.jpg";
import blossomsAndYarn from "./dye_blossoms_and_yarn.jpg";
import potBlossoms from "./dye_pot_blossoms.jpg";
import potYarn from "./dye_pot_yarn.jpg";
import yarnLifted from "./dyed_yarn_lifted.jpg";
import swatchAlum from "./dye-examples/alum.jpg";
import swatchIron from "./dye-examples/iron.jpg";
import swatchAlumIron from "./dye-examples/alum-iron.jpg";
import swatchAlumSodaAsh from "./dye-examples/alum-soda-ash.jpg";
import swatchAlumTannin from "./dye-examples/alum-tannin.jpg";
import swatchAlumVinegar from "./dye-examples/alum-vinegar.jpg";
import silkAfterbaths from "./silk_afterbaths.jpg";

const DHARMA_DETERGENT = "https://www.dharmatrading.com/products/dharma-dyers-detergent";
const DHARMA_NATURAL_DYEING = "https://www.dharmatrading.com/collections/all-natural-dyeing-products";
const HARVESTING_COLOR = "https://www.amazon.com/dp/B01N0BQS12";

function SubHeading({ children }: { children: React.ReactNode }) {
    return <h3 className="font-inconsolata text-lg font-bold text-forest">{children}</h3>;
}

function Steps({ children }: { children: React.ReactNode }) {
    return <ol className="list-decimal pl-6 flex flex-col gap-2 marker:font-inconsolata marker:font-bold marker:text-moss">{children}</ol>;
}

function StepPhotos({ photos }: { photos: React.ComponentProps<typeof PhotoRow>["photos"] }) {
    return (
        <div className="mt-3 mb-2">
            <PhotoRow photos={photos} />
        </div>
    );
}

// A simple line about the dye book our instructions follow.
function BookCallout() {
    return (
        <p>
            The book we followed through our research process is{" "}
            <ExternalLink href={HARVESTING_COLOR}>
                <em>Harvesting Color</em> by Rebecca Burgess
            </ExternalLink>
            .
        </p>
    );
}

// Photos with a short caption under each one.
function CaptionedPhotos({
    photos,
    className,
    aspect = "aspect-[3/4]",
}: {
    photos: { src: StaticImageData; alt: string; caption?: string }[];
    className: string;
    aspect?: string;
}) {
    return (
        <div className={`grid gap-4 ${className}`}>
            {photos.map((photo) => (
                <figure key={photo.alt} className="flex flex-col gap-2">
                    <Image
                        src={photo.src}
                        alt={photo.alt}
                        sizes="(min-width: 768px) 25vw, 50vw"
                        className={`w-full ${aspect} object-cover rounded-md`}
                    />
                    {photo.caption && <figcaption className="text-sm text-ink/80">{photo.caption}</figcaption>}
                </figure>
            ))}
        </div>
    );
}

// Our rabbitbrush-dyed silk samples. Each is labeled with its mordant and after bath (if any).
const mordantOnlySwatches = [
    { src: swatchAlum, mordant: "Alum", afterBath: "None" },
    { src: swatchIron, mordant: "Iron", afterBath: "None" },
];
const afterBathSwatches = [
    { src: swatchAlumIron, mordant: "Alum", afterBath: "Iron" },
    { src: swatchAlumSodaAsh, mordant: "Alum", afterBath: "Soda ash" },
    { src: swatchAlumTannin, mordant: "Alum", afterBath: "Tannin" },
    { src: swatchAlumVinegar, mordant: "Alum", afterBath: "Vinegar" },
];

function Swatches({ swatches }: { swatches: { src: StaticImageData; mordant: string; afterBath: string }[] }) {
    return (
        // Every photo is the same height, so the long strips show up wider than the squares and rows wrap as needed.
        <div className="flex flex-wrap gap-x-4 gap-y-6">
            {swatches.map((swatch) => (
                <figure key={swatch.src.src} className="flex flex-col gap-2">
                    <a href={swatch.src.src} target="_blank" rel="noopener noreferrer">
                        <Image
                            src={swatch.src}
                            alt={`Silk dyed with rabbitbrush, mordanted with ${swatch.mordant.toLowerCase()}${swatch.afterBath === "None" ? "" : ` and dipped in a ${swatch.afterBath.toLowerCase()} after bath`}`}
                            sizes="(min-width: 640px) 360px, 90vw"
                            className="h-40 sm:h-48 w-auto"
                        />
                    </a>
                    <figcaption className="text-sm">
                        <ul>
                            <li>
                                <span className="font-inconsolata font-bold text-forest">Mordant:</span> {swatch.mordant}
                            </li>
                            <li>
                                <span className="font-inconsolata font-bold text-forest">After bath:</span> {swatch.afterBath}
                            </li>
                        </ul>
                    </figcaption>
                </figure>
            ))}
        </div>
    );
}

function Why({ children }: { children: React.ReactNode }) {
    return (
        <p>
            <span className="font-inconsolata font-bold text-forest">Why this step matters: </span>
            {children}
        </p>
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

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-moss underline hover:text-forest">
            {children}
        </a>
    );
}

export default function NaturalDyeingPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageHeader title="Natural Dyeing" subtitle="Following the steps of natural dyeing with rabbitbrush" />

            <Section title="Introduction">
                <p>
                    Natural dyeing is the craft of coloring fiber with plants, insects, and minerals instead of synthetic
                    chemicals. Plant material is boiled in water to pull out its color, and fiber is soaked in that dye bath
                    until it takes on the color. A mordant, usually a mineral salt, helps the color bond to the fiber so it
                    lasts through washing and sunlight.
                </p>

                <SubHeading>A brief history</SubHeading>
                <p>
                    For most of human history, every dyed fiber got its color from nature. Dyers boiled roots, leaves, and
                    bark like madder, indigo, and woad, crushed insects like cochineal, and collected shellfish for purple.
                    People have alos used mordants for thousands of years. The earliest clear evidence comes from Egypt between
                    about 2200 and 1500 BCE.
                </p>
                <p>
                    That changed in 1856, when 18-year-old chemist William Henry Perkin was trying to make the malaria drug
                    quinine and accidentally created a purple dye from coal tar, which he called mauveine. Synthetic dyes were
                    cheaper, faster, and more consistent, and within a few decades they replaced most natural dyes. Today,
                    natural dyeing is having a revival among artists and makers who want slower, more local, and less toxic
                    ways to make color.
                </p>

                <SubHeading>Dyeing with rabbitbrush</SubHeading>
                <p>
                    Rabbitbrush is a classic dye plant. Navajo and other Indigenous dyers have
                    boiled its flowers with alum to make a warm yellow for wool. Because it blooms
                    in late summer and fall and grows in huge stands along Colorado&apos;s roadsides and open spaces, it is
                    easy to find and gather.
                </p>
                <p>
                    Throughout the instructions below, we use rabbitbrush as our example dye plant, along with photos from
                    our own dyeing. With alum, it gives soft and warm yellows. Iron
                    can push yellow dye baths toward deeper yellows and olives, though results vary from plant to plant, so
                    it&apos;s worth testing on a small sample first.
                </p>
                <ButtonLink href="/native-plants#rabbitbrush">Rabbitbrush Characteristics</ButtonLink>
            </Section>

            {/* Text from our mentors' rabbitbrush doc. */}
            <Section title="The Dyeing Process">
                <p>
                    Natural dye involves a process of preparing fiber, extracting color from dye stuff, and then dyeing the
                    fiber. Different fiber types, mordants, and modifiers can produce different color results from the same dye
                    plant. In our exploration of rabbitbrush, we dyed quantities of cotton and wool yarn to use as warp and weft
                    in a weaving project and samples of silk fabric to test color varieties. Prior to dyeing, the fiber had to
                    be prepared by scouring to remove any dirt, oil, or chemical coating left from its production. We then
                    mordanted the fiber to prepare it to take on the dye. A mordant is a metal or mineral that fixes with the
                    fiber to allow the dye to chemically bond with it. Mordanting the fiber prior to dyeing it contributes to a
                    deeper and more long-lasting color. We mordanted most of our fiber with alum sulfate which results in a
                    brighter color. Different mordants and modifiers, like iron, tannin, acids, and bases can be used to alter
                    the color after dye.
                </p>
                <p>
                    Dye is extracted by bringing a quantity of the dye stuff (calculated by volume) to boil. The scoured and
                    mordanted fiber can then be added to be dyed. In our process, we followed the rabbitbrush dye recipe in{" "}
                    <em>Harvesting Color</em> to calculate a 3:1 ratio of rabbitbrush blossoms to our fiber weight. Our silk
                    samples, warp yarn, and weft material, added up to a total of 10.16oz, so we needed a total of 1.905lb
                    rabbitbrush blossoms. The first time we collected, there was ample rabbitbrush, but we weren&apos;t entirely
                    sure how much to collect. We collected a good amount, but after removing just the flower heads, it
                    wasn&apos;t enough to dye everything we needed. The second time we went out was later in the season, and
                    it was hard to find blooming rabbitbrush because most of it had dried. We collected as much as we
                    possibly could, along with some from our front yards and along bike trails, to get enough to dye
                    everything we needed. We brought the rabbitbrush blossoms to a boil in a large pot of water, then added our fiber, and let
                    it simmer for 90 minutes. We then let it cool down in the pot and sit for 36 hours before removing it in
                    the hopes of deepening the color.
                </p>
                <ButtonLink href="#comparing">See our finished rabbitbrush dyed pieces</ButtonLink>
                <CaptionedPhotos
                    className="grid-cols-2 md:grid-cols-4"
                    photos={[
                        { src: blossomsAndYarn, alt: "A bowl of trimmed rabbitbrush blossoms beside undyed yarn and the Harvesting Color book" },
                        { src: potBlossoms, alt: "Rabbitbrush blossoms in a pot of water on a hot plate" },
                        { src: potYarn, alt: "Yarn simmering in the yellow rabbitbrush dye bath" },
                        { src: yarnLifted, alt: "Gold dyed yarn lifted out of the dye pot" },
                    ]}
                />
            </Section>

            <Section card title="What We Used">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <SubHeading>Tools</SubHeading>
                        <ul className="list-disc pl-5 flex flex-col gap-1 marker:text-moss">
                            <li>Clippers and plastic bags, for collecting plants</li>
                            <li>A kitchen scale</li>
                            <li>Measuring spoons</li>
                            <li>Bowls</li>
                            <li>A hot plate</li>
                            <li>A strainer</li>
                            <li>
                                A large pot
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-2">
                        <SubHeading>Supplies</SubHeading>
                        <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-moss">
                            <li>
                                <strong>Detergent for scouring:</strong> we used{" "}
                                <ExternalLink href={DHARMA_DETERGENT}>Dharma Dyer&apos;s Detergent</ExternalLink> from
                                Dharma Trading Co., but any gentle, pH-neutral detergent will work.
                            </li>
                            <li>
                                <strong>Mordants and modifiers:</strong> also from{" "}
                                <ExternalLink href={DHARMA_NATURAL_DYEING}>Dharma Trading Co.</ExternalLink>
                                <ul className="list-[circle] pl-5 mt-1 flex flex-col gap-1">
                                    <li><strong>Alum:</strong> the gentlest, most common mordant. It keeps colors bright.</li>
                                    <li><strong>Tannic acid:</strong> a plant-based mordant that deepens and warms colors.</li>
                                    <li><strong>Iron:</strong> darkens and &quot;saddens&quot; colors, and can turn yellows green.</li>
                                    <li><strong>Vinegar:</strong> an acid we used as a mordant. It can also shift and brighten colors in an after bath.</li>
                                    <li><strong>Soda ash:</strong> an alkali that can shift colors in an after bath.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            <Section card title="Step 0: Choosing Plant and Mordant">
                <p>
                    The plant decides the family of color you&apos;ll get, and the mordant fine-tunes it. The same rabbitbrush
                    dye bath can make bright yellow with alum or a darker olive with iron.
                </p>
                <p className="font-inconsolata text-forest">Need ideas? Explore these pages:</p>
                <div className="flex flex-wrap gap-3">
                    <ButtonLink href="/dyeing">Interactive Dyeing</ButtonLink>
                    <ButtonLink href="/native-plants">Colorado Native Plants</ButtonLink>
                </div>
            </Section>

            <Section card title="Step 1: Plant Collection">
                <Steps>
                    <li>Collect rabbitbrush in late summer or fall, when the flowers are blooming</li>
                    <li>
                        Use clippers to snip the flowering tips, and put them into plastic bags. Cut just above a node, where
                        a branch splits off, to help the plant keep growing.
                    </li>
                    <li>
                        Only take a small portion from each plant, and only gather where collecting is allowed. Rabbitbrush
                        is an important late-season plant for pollinaters.
                        <StepPhotos
                            photos={[
                                { src: collection1, alt: "Collecting rabbitbrush" },
                                { src: collection2, alt: "Collecting rabbitbrush, continued" },
                            ]}
                        />
                    </li>
                    <li>
                        Weigh your plant material at home. You need about <strong>3 times as much rabbitbrush as dry fiber</strong>,
                        by weight, after trimming off the long stems. For example, 1 to 2 pounds of fiber needs about 3 to 6 pounds
                        of blossoms. More plant matter generally makes a deeper color.
                        <StepPhotos photos={[{ src: inBowl, alt: "Putting the collected rabbitbrush in a bowl" }]} />
                    </li>
                </Steps>
            </Section>

            <Section card title="Step 2: Scouring">
                <p>Scouring is a deep clean for your fiber before it touches any mordant or dye. We do it in a pot:</p>
                <Steps>
                    <li>Weigh your dry fiber.</li>
                    <li>
                        Measure your detergent: about <strong>1 tablespoon for every ½ pound of fiber</strong>.
                    </li>
                    <li>Fill your dye pot with enough water for the fiber to move freely, and heat it to about 160°F.</li>
                    <li>Stir in the detergent and then push the fiber under the water.</li>
                    <li>
                        Let it simmer for <strong>1 hour</strong>, keeping the water around 160°F. If you&apos;re scouring
                        wool, don&apos;t stir or agitate it, or it can felt.
                    </li>
                    <li>After an hour, drain it and rinse the fiber in cooler water</li>
                    <li>Set out the fiber to dry, or move straight onto the mordanting step</li>
                </Steps>
                <Why>
                    New fiber carries natural oils, waxes, dirt, and factory finishes. These block
                    mordant and dye from soaking in evenly, which leads to blotchy, pale, or fading color.
                </Why>
            </Section>

            <Section card title="Step 3: Mordanting">
                <p>We used the same amount for every mordant: alum, tannic acid, iron, and vinegar.</p>
                <Steps>
                    <li>
                        Weigh your dry fiber and measure out mordant equal to <strong>10% of its weight</strong>. For
                        example, 10 ounces of fiber needs 1 ounce of mordant. With alum, we also added soda ash at{" "}
                        <strong>6% of the fiber&apos;s weight</strong>.
                    </li>
                    <li>Fill your pot with water and bring it to a boil. Stir in the mordant until it dissolves completely.</li>
                    <li>Re-wet your fiber in room temperature water.</li>
                    <li>Turn the heat down to a simmer (about 185–200°F), add your wet, scoured fiber, and leave it for <strong>1 hour</strong>.</li>
                    <li>
                        After an hour, take the fiber out and rinse it in water about the same temperature as the pot. A big
                        change in temperature can make wool felt.
                    </li>
                    <li>Set out the fiber to dry, or move straight onto the dyeing step</li>
                </Steps>

                <Why>
                    Most plant dyes don&apos;t stick to fiber well on their own. The mordant bonds to the fiber and then to the
                    dye, acting like a bridge that makes the color brighter and helps it hold up to washing and light.
                </Why>
            </Section>

            <Section card title="Step 4: Dyeing">
                <Steps>
                    <li>
                        Fill your dye pot with enough water for the fiber to move around, and add your rabbitbrush.
                        <StepPhotos photos={[{ src: potNoFabric, alt: "Rabbitbrush dye bath in the pot" }]} />
                    </li>
                    <li>Bring it to a boil, until the water turns golden.</li>
                    <li>
                        While the dye boils, soak your mordanted fiber in room-temperature water. Wet fiber pulls in dye
                        more evenly than dry fiber.
                    </li>
                    <li>
                        Turn the heat down to a simmer, add your wet fiber, and let it simmer for <strong>90 minutes</strong>. Stir gently now and then so the color stays even.
                        <StepPhotos photos={[{ src: potFabric, alt: "Fabric added to the rabbitbrush dye bath" }]} />
                    </li>
                    <li>
                        For a deeper color, turn off the heat and let the fiber sit in the dye overnight, or for a day or
                        two.
                    </li>
                    <li>Take the fiber out and let it cool to room temperature before rinsing it in cool water.</li>
                    <li>
                        Hang it to dry out of direct sunlight.
                        <StepPhotos photos={[{ src: dryingRack, alt: "Dyed fabric drying on a rack" }]} />
                    </li>
                </Steps>
                <Why>
                    Boiling draws color out of the plant&apos;s cells and into the water. Pre-soaking the fiber lets the
                    dye soak in evenly instead of blotching, and a long, gentle simmer gives the dye time to bond with the
                    mordanted fiber.
                </Why>
            </Section>

            <Section card title="(Optional) Step 5: After Bath">
                <p>
                    An after bath, or modifier, is a quick dip that shifts the color of fiber you&apos;ve already dyed. It&apos;s a
                    great way to get several colors from one dye pot. Try it on a small sample first.
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-moss">
                    <li>
                        <strong>Iron</strong> darkens and dulls color, and can turn rabbitbrush yellow toward olive green.
                    </li>
                    <li>
                        <strong>Soda ash</strong> makes the bath alkaline, which can brighten yellows or shift them warmer.
                    </li>
                    <li>
                        <strong>Vinegar</strong> makes the bath acidic, which can brighten or warm yellows and oranges.
                    </li>
                </ul>
                <Steps>
                    <li>Dissolve the modifier in a pot or bowl of hot water.</li>
                    <li>
                        Dip your dyed fiber and watch it closely. We took our silk out of the dye pot after about 1¼ hours and
                        left it in each after bath for about <strong>10 minutes</strong>.
                    </li>
                    <li>When you like the color, take it out, rinse it, and hang it to dry.</li>
                </Steps>
                <SubHeading>How much we used for our silk samples</SubHeading>
                <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-moss">
                    <li>
                        <strong>Vinegar:</strong> 1 teaspoon in warm water for 0.14 oz of silk. We used a little over 2 teaspoons
                        because the vinegar in our lab was diluted.
                    </li>
                    <li>
                        <strong>Iron:</strong> 0.01 oz of iron solution for 0.07 oz of silk. We brought the water to a boil,
                        added the iron, and turned it down to a simmer.
                    </li>
                    <li>
                        <strong>Soda ash:</strong> about ¼ teaspoon dissolved in water from a kettle, for 0.14 oz of silk.
                    </li>
                    <li>
                        <strong>Tannin:</strong> 1½ teaspoons in ¼ gallon of water from a kettle, for 0.07 oz of silk.
                    </li>
                </ul>
                <figure className="flex flex-col gap-2 md:w-2/3">
                    <Image
                        src={silkAfterbaths}
                        alt="Dyed silk in three bowls of afterbaths: vinegar, tannin, and soda ash"
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="w-full h-auto rounded-md"
                    />
                    <figcaption className="text-sm text-ink/80">
                        Modifying dyed silk in afterbaths: vinegar (acid), tannin, and soda ash (base)
                    </figcaption>
                </figure>
                <Why>
                    Many plant dyes are sensitive to pH and metals, so changing the chemistry of the water changes the color
                    the fiber reflects.
                </Why>
            </Section>

            <Section card id="comparing" title="Comparing Dye Processes with Rabbitbrush">
                <p>
                    All samples are silk dyed in the same rabbitbrush dye bath.
                </p>
                <SubHeading>Mordant only</SubHeading>
                <Swatches swatches={mordantOnlySwatches} />
                <SubHeading>Alum mordant, then an after bath</SubHeading>
                <Swatches swatches={afterBathSwatches} />
            </Section>

            <BookCallout />
        </div>
    );
}
