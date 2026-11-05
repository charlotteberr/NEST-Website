import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import PhotoRow from "@/components/PhotoRow";
import Placeholder from "@/components/Placeholder";
import Section from "@/components/Section";
import collection1 from "./rabbitbrush_collection1.jpg";
import collection2 from "./rabbitbrush_collection2.jpg";
import inBowl from "./putting_rabbitbrush_in_bowl.jpg";
import potNoFabric from "./rabbitbrush_test1_pot_no_fabric.jpg";
import potFabric from "./rabbitbrush_test1_pot_fabric.jpg";
import dryingRack from "./rabbitbrush_test1_dryingrack.jpg";
import collectingHallRanch from "./rabbitbrush_collecting_hall_ranch.jpg";

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

// Highlighted callout for the dye book our instructions follow.
function BookCallout() {
    return (
        <div className="rounded-lg border-2 border-moss bg-mint p-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
                <p className="font-inconsolata text-xs uppercase tracking-wide text-moss">The book we followed through our research process</p>
                <p className="font-inconsolata text-xl font-bold text-forest">
                    <em>Harvesting Color</em> by Rebecca Burgess
                </p>
            </div>
            <a
                href={HARVESTING_COLOR}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inconsolata font-semibold px-4 py-2 rounded-md bg-moss text-mint hover:bg-forest transition-colors w-fit shrink-0"
            >
                Link to book
            </a>
        </div>
    );
}

function Why({ children }: { children: React.ReactNode }) {
    return (
        <div className="rounded-md bg-mint border-l-4 border-moss p-4">
            <p className="font-inconsolata font-bold text-forest">Why this step matters</p>
            <p className="mt-1">{children}</p>
        </div>
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
                <ButtonLink href="/native-plants#rabbitbrush">More about rabbitbrush</ButtonLink>
            </Section>

            {/* Text from our mentors' rabbitbrush doc. */}
            <Section title="Flower Collection">
                <div className="flex flex-col md:flex-row gap-6">
                    <Image
                        src={collectingHallRanch}
                        alt="Two of us collecting rabbitbrush flowers into a plastic bag beside a trail at Hall Ranch"
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="w-full md:w-2/5 md:self-start h-auto rounded-md border-2 border-sage"
                    />
                    <p className="flex-1">
                        Our first encounter with rabbitbrush was during a community walk with Boulder County Parks and Open
                        Spaces, which prompted us to submit a research request to collect rabbitbrush flowers through the
                        county. Our permit was granted to collect at Hall Ranch in Lyons, and our first visit was during a
                        peak bloom in September when we collected blossoms to do an initial dye test. From these tests, we
                        calculated the weight of blossoms needed to dye a larger quantity of yarn. Our second visit in
                        October had far fewer flowers, so our collection day was spent exploring more of Hall Ranch
                        searching for blossoms to collect.
                    </p>
                </div>
            </Section>

            <Section title="What We Used">
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

            <Section title="Step 0: Choosing Plant and Mordant">
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

            <Section title="Step 1: Plant Collection">
                <Steps>
                    <li>Collect rabbitbrush in late summer or fall, when the flowers are blooming</li>
                    <li>Use clippers to snip the flowering tips, and put them into plastic bags.</li>
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
                        Weigh your plant material at home. More plant matter generally makes a deeper color.
                        <StepPhotos photos={[{ src: inBowl, alt: "Putting the collected rabbitbrush in a bowl" }]} />
                    </li>
                </Steps>
            </Section>

            <Section title="Step 2: Scouring">
                <p>Scouring is a deep clean for your fiber before it touches any mordant or dye. We do it in a pot:</p>
                <Steps>
                    <li>Weigh your dry fiber.</li>
                    <li>
                        Measure your detergent: about <strong>1 tablespoon for every ½ pound of fiber</strong>.
                    </li>
                    <li>Fill your dye pot with enough water for the fiber to move freely, and heat it to about 140–160°F.</li>
                    <li>Stir in the detergent and then push the fiber under the water.</li>
                    <li>
                        Let it soak for <strong>1 hour</strong>, keeping the water in the 140–160°F range. If you&apos;re scouring
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

            <Section title="Step 3: Mordanting">
                <p>We used the same amount for every mordant: alum, tannic acid, iron, and vinegar.</p>
                <Steps>
                    <li>
                        Weigh your dry fiber and measure out mordant equal to <strong>10% of its weight</strong>. For
                        example, 10 ounces of fiber needs 1 ounce of mordant.
                    </li>
                    <li>Fill your pot with water and bring it to a boil. Stir in the mordant until it dissolves completely.</li>
                    <li>Re-wet your fiber in room temperature water.</li>
                    <li>Turn the heat down to a simmer (about 185–200°F), add your wet, scoured fiber, and leave it for <strong>1 hour</strong>.</li>
                    <li>After an hour, drain it and rinse the fiber in cooler water</li>
                    <li>Set out the fiber to dry, or move straight onto the dyeing step</li>
                </Steps>

                <Why>
                    Most plant dyes don&apos;t stick to fiber well on their own. The mordant bonds to the fiber and then to the
                    dye, acting like a bridge that makes the color brighter and helps it hold up to washing and light.
                </Why>
            </Section>

            <Section title="Step 4: Dyeing">
                <Steps>
                    <li>
                        Fill your dye pot with water and add your rabbitbrush.
                        <StepPhotos photos={[{ src: potNoFabric, alt: "Rabbitbrush dye bath in the pot" }]} />
                    </li>
                    <li>Bring it to a boil and let the rabbitbrush boil for <strong>60-90 minutes</strong> until the water turns golden.</li>
                    <li>
                        While the dye boils, soak your mordanted fiber in room-temperature water. Wet fiber pulls in dye
                        more evenly than dry fiber.
                    </li>
                    <li>
                        Turn the heat down to a simmer (about 185–200°F), add your wet fiber, and let it simmer for <strong>60-90 minutes</strong>. Stir gently now and then so the color stays even.
                        <StepPhotos photos={[{ src: potFabric, alt: "Fabric added to the rabbitbrush dye bath" }]} />
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

            <Section title="(Optional) Step 5: After Bath">
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
                    <li>Dissolve the modifier in a pot or bowl of warm water.</li>
                    <li>Dip your dyed fiber and watch it closely. Changes often happen within a few minutes.</li>
                    <li>When you like the color, take it out, rinse it, and hang it to dry.</li>
                </Steps>
                <Why>
                    Many plant dyes are sensitive to pH and metals, so changing the chemistry of the water changes the color
                    the fiber reflects.
                </Why>
            </Section>

            <Placeholder title="Comparing Dye Processes" note="From our mentors' rabbitbrush doc; this section hasn't been written yet." />

            <BookCallout />
        </div>
    );
}
