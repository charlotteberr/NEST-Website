import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import tableAbove from "./table-above.jpg";
import rabbitbrushPhoto from "./native-plants/rabbitbrush_better_closeup.jpg";
import asterPhoto from "./native-plants/aster-ours.jpg";
import deannaPhoto from "./team-photos/deanna.jpg";
import ettaPhoto from "./team-photos/etta.jpg";
import charlottePhoto from "./team-photos/charlotte.jpg";
// import lichenPhoto from "./native-plants/lichen.jpg";

// Everything written on this page is in this file.
// Project Overview text is adapted from our NEST proposal, "Branching Logic: Native Plant Ecologies as Computational and Textile Pattern."

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

// The cards in the "Our Plants" section. Each button links to another page.
const ourPlants = [
  {
    name: "Rabbitbrush",
    scientificName: "Ericameria nauseosa",
    photo: rabbitbrushPhoto,
    photoAlt: "Close-up of rabbitbrush flowers",
    text: "A gray-green shrub that gets covered in small yellow flowers in late summer. It grows in dry, open places all over Colorado, from the plains and roadsides up into the mountains. We use its flowers for natural dyeing, and the way its stems split into smaller branches inspires our branch operation.",
    buttons: [
      { label: "Natural Dyeing", href: "/natural-dyeing" },
      { label: "Rabbitbrush Research", href: "/rabbitbrush" },
      { label: "Characteristics", href: "/native-plants#rabbitbrush" },
    ],
  },
  {
    name: "Aster",
    scientificName: "Asteraceae (the aster family)",
    photo: asterPhoto,
    photoAlt: "A bush of light purple asters with yellow centers",
    text: "What looks like one purple, daisy-like flower is really a head of many tiny flowers, with purple petals around a yellow center. We're studying these small flowers within a larger flower to create a stamping operation that connects small units into one bigger pattern.",
    buttons: [
      { label: "Aster Research", href: "/aster" },
      { label: "Characteristics", href: "/native-plants#aster" },
    ],
  },
  // TO ADD LATER: lichen card. Remove the "// " from these lines and from the lichen photo import at the top.
  // Also change md:grid-cols-2 to md:grid-cols-3 in the Our Plants grid so the three cards sit in one row.
  // {
  //   name: "Lichen",
  //   scientificName: "Fruticose lichens: Letharia, Usnea & relatives",
  //   photo: lichenPhoto,
  //   photoAlt: "Branching pale green lichen growing on a tree trunk",
  //   text: "Not a plant at all, but a fungus and an alga living together as one. Shrubby lichens on Colorado's trees, rocks, and forest floors fork again and again as they grow, and that repeated branching inspires our branch operation.",
  //   buttons: [
  //     { label: "Rabbitbrush Research", href: "/rabbitbrush" },
  //     { label: "Characteristics", href: "/native-plants#lichen" },
  //   ],
  // },
];

// The cards in the "Explore" section at the bottom.
const exploreCards = [
  { title: "AdaCAD", href: "/weaving", text: "More about the AdaCAD design software." },
  { title: "Public Exhibition", href: "/exhibition", text: "Where and when our exhibition is, and what you will see there." },
  { title: "Interactive Dyeing", href: "/dyeing", text: "Pick a dye plant, mordant, and after bath to see the resulting color." },
  { title: "Colorado Native Plants", href: "/native-plants", text: "The native plants we work with, where they grow, and how to recognize them." },
];

const researchQuestions = [
  {
    question: "How does sampling function as a cross-disciplinary methodology?",
    text: "In weaving, sampling is the material exploration that precedes a finished cloth. In software design, it is the sketch that tests a system's behavior before it is built out. This project treats sampling not as a prelude to \"real\" or \"final\" work but as a shared practice that resists pre-determined outcomes and keeps discovery possible.",
  },
  {
    question: "How do generative design tools facilitate or foreclose open inquiry?",
    text: "Parametric and generative tools carry assumptions about what a \"design\" is and how it is reached. We examine those assumptions by building native plant-inspired weave drafting tools inside an open source weave drafting software tool oriented toward plurality and surprise rather than a deterministic outcome.",
  },
  {
    question: "What designs emerge from tools inspired by plant systems?",
    text: "Natural systems, like those of plant structure, growth, and ecology, are often seen as distinct from our human-designed digital tools. This research explores what unexpected designs may emerge when the patterns and structures of these natural systems are applied to digital algorithms and then translated again into woven textile.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <PageHeader
        title="Branching Logic"
        subtitle="Native Plant Ecologies as Computational and Textile Pattern"
      />

      <Section title="Project Overview">
        <figure className="flex flex-col gap-2">
          <Image
            src={tableAbove}
            alt="A table seen from above, covered in woven samples, aster drafts and stamp tilings on graph paper, rabbitbrush herbarium prints, a sketchbook, and rabbitbrush-dyed yarn and silk beside the Harvesting Color book"
            sizes="(min-width: 1024px) 64rem, 100vw"
            priority
            className="w-full h-auto rounded-md"
          />
        </figure>

        <p>
          This project is an investigation into Colorado native plants as both subject matter and methodological guide.
          Working across textile craft, computational design, and local botany, the project asks: what can we understand
          about the innate logic of living systems when viewed through lenses of craft and computation? We orient our
          interdisciplinary practices toward discovery and curiosity, exploring plants of the Front Range and identifying a
          set of native species to deeply investigate, attending to their physical structure, natural dye properties,
          medicinal uses, and climate vulnerability.
        </p>
        <p>
          Through material engagement in cloth and computational design in code, the project produces a public exhibition
          featuring a collection of woven samples inspired by local flora and a multilayer woven textile installation, this
          interactive website, and open-source generative weave drafting tools based on local plants.
        </p>

        <SubHeading>Research questions</SubHeading>
        <ul className="flex flex-col gap-4">
          {researchQuestions.map((item) => (
            <li key={item.question}>
              <p className="font-semibold text-forest">{item.question}</p>
              <p className="mt-1">{item.text}</p>
            </li>
          ))}
        </ul>

        <SubHeading>What we&apos;re making</SubHeading>
        <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-moss">
          <li>
            <strong>
              <TextLink href="/exhibition">A public exhibition</TextLink>
            </strong>
            : a display of our work at the Boulder Public Library, showing our thought process alongside woven
            examples and the plants that inspired them.
          </li>
          <li>
            <strong>An interactive website</strong>: this site, a public digital companion documenting the
            plant–pattern–weave relationships in the project, including each featured native species&apos; visual
            qualities, dye properties, medicinal uses, and climate status.
          </li>
          <li>
            <strong>Open-source software tools</strong>: all design tools created through this project are free and online
            for others to use and explore in their work, hosted through{" "}
            <TextLink href="https://adacad.org">AdaCAD</TextLink>, a weaving design tool made and maintained by researchers
            at CU Boulder.
          </li>
        </ul>

        <SubHeading>Our team</SubHeading>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-4 items-start">
            <Image src={deannaPhoto} alt="Deanna Gelosi" sizes="112px" className="w-28 h-28 shrink-0 rounded-md object-cover" />
            <p>
              <strong>Deanna Gelosi</strong> (MS in Computer Science, ATLAS PhD Student) brings expertise in designing
              software tools for creative craft practices that facilitate material and computational discovery, and prior
              work experience in public science engagement in informal science spaces.
            </p>
          </li>
          <li className="flex gap-4 items-start">
            <Image src={ettaPhoto} alt="Etta Sandry" sizes="112px" className="w-28 h-28 shrink-0 rounded-md object-cover" />
            <p>
              <strong>Etta Sandry</strong> (MFA in Fibre &amp; Material Practices, ATLAS PhD Student) brings a developed
              interdisciplinary art practice rooted in weaving, a deep investment in craft sample-making as experimental
              praxis, and a material sensibility attuned to structures that disrupt and complicate weaving&apos;s binary form.
            </p>
          </li>
          <li className="flex gap-4 items-start">
            <Image src={charlottePhoto} alt="Charlotte Bertanzetti" sizes="112px" className="w-28 h-28 shrink-0 rounded-md object-cover" />
            <p>
              <strong>Charlotte Bertanzetti</strong> (Computer Science undergraduate) brings a
              background in fiber arts and designing computational tools for weaving.
            </p>
          </li>
        </ul>
      </Section>

      <section className="flex flex-col gap-4">
        <h2 className="font-inconsolata text-forest text-2xl font-bold">Our Plants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ourPlants.map((plant) => (
            <article key={plant.name} className="rounded-lg bg-white border-2 border-sage overflow-hidden flex flex-col">
              <Image
                src={plant.photo}
                alt={plant.photoAlt}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="font-inconsolata text-xl font-bold text-forest">{plant.name}</h3>
                  <p className="font-inconsolata text-sm italic text-moss">{plant.scientificName}</p>
                </div>
                <p className="text-sm text-ink/80">{plant.text}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {plant.buttons.map((button) => (
                    <Link
                      key={button.href}
                      href={button.href}
                      className="font-inconsolata font-semibold text-sm px-3 py-1.5 rounded-md bg-moss text-mint hover:bg-forest transition-colors"
                    >
                      {button.label}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Section title="NEST">
        <p>
          Branching Logic is a 2026 Graduate Summer Fellowship project from{" "}
          <TextLink href="https://www.colorado.edu/nest/">NEST Studio for the Arts</TextLink>, awarded in partnership with
          SPIKE. NEST (Nature, Environment, Science &amp; Technology) Studio for the Arts is a campus-wide initiative within
          CU Boulder&apos;s Grand Challenge that explores the interrelation, generative overlaps, and productive differences
          between arts-based and science-based disciplines.
        </p>
        <div className="flex flex-wrap gap-2">
          <ButtonLink href="https://www.colorado.edu/nest/fellows">NEST Fellows</ButtonLink>
          <ButtonLink href="https://www.colorado.edu/nest/about-nest">About NEST</ButtonLink>
        </div>
      </Section>
      {/* Acknowledgements: add a person or group as another <li>...</li> in the list. */}
      <Section title="Acknowledgements">
        <p>We would like to thank:</p>
        <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-moss">
          <li>
            <strong>Amber Horning</strong>, Collections Manager, University of Colorado Herbarium
          </li>
          <li>
            <strong>David Hirt, Raquel Robles,</strong> and the Volunteer Guides at Boulder County Parks &amp; Open Space
          </li>
          <li>
            <strong>Jacob Watts</strong> and <strong>Erin Manzitto-Tripp</strong>, Ecology and Evolutionary Biology,
            University of Colorado Boulder
          </li>
          <li>
            <strong>Erin Espelie, Joanne Marras Tate,</strong> and <strong>Tara Knight</strong> at NEST Studio for the
            Arts, and the NEST/SPIKE Summer Graduate Student Fellowship
          </li>
          <li>The Unstable Design Lab</li>
          <li>The ATLAS Institute</li>
        </ul>
      </Section>

      <section className="flex flex-col gap-4">
        <h2 className="font-inconsolata text-forest text-2xl font-bold">Explore</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {exploreCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="rounded-sm bg-white border-2 border-sage p-5 hover:border-moss hover:shadow-md transition"
            >
              <p className="font-inconsolata text-lg font-bold text-forest">{card.title}</p>
              <p className="mt-1 text-sm text-ink/80">{card.text}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
