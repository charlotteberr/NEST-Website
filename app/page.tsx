import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";
import PlantCard from "@/components/PlantCard";
import Section from "@/components/Section";
import proposalFigure from "./proposal-figure1.jpg";
import { pages } from "@/lib/pages";
import { plants } from "@/lib/plants";

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
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Branching Logic"
        subtitle="Native Plant Ecologies as Computational and Textile Pattern"
      />

      <Section title="Project Overview">
        <figure className="flex flex-col gap-2">
          <Image
            src={proposalFigure}
            alt="Three panels: (a) a ponderosa pine on a mountainside, (b) a branching tree draft in AdaCAD, and (c) a multilayer woven textile"
            sizes="(min-width: 1024px) 64rem, 100vw"
            className="w-full h-auto rounded-md border-2 border-sage"
          />
          <figcaption className="text-sm text-ink/80">
            (a) A Ponderosa pine (<TextLink href="https://conps.org/gymnosperms/">CoNPS</TextLink>) showcases branching form
            that (b) could be encoded through algorithmic design for weave drafting (
            <TextLink href="https://adacad.org">AdaCAD</TextLink>), and (c) woven as a multilayer textile (
            <TextLink href="https://ettasandry.com/Dodecaweave">Etta Sandry, Dodecaweave</TextLink>).
          </figcaption>
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
          interactive website, open-source generative weave drafting tools based on local plants, and a series of community
          workshops.
        </p>

        <SubHeading>Research questions</SubHeading>
        <ul className="flex flex-col gap-3">
          {researchQuestions.map((item) => (
            <li key={item.question} className="rounded-md bg-mint border-l-4 border-moss p-4">
              <p className="font-inconsolata font-bold text-forest">{item.question}</p>
              <p className="mt-1 text-sm">{item.text}</p>
            </li>
          ))}
        </ul>

        <SubHeading>What we&apos;re making</SubHeading>
        <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-moss">
          <li>
            <strong>A public exhibition</strong> featuring a multilayer woven textile that takes the form of branching and
            layered plant structures derived through generative computation. Woven samples are placed alongside an
            animation of the software tool used to create them, offering visitors a &ldquo;peek behind the curtain&rdquo;
            into how the work was made.
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
          <li>
            <strong>
              <TextLink href="/workshop">Community workshops</TextLink>
            </strong>
            , such as a natural dye workshop using plants featured in the research or a pattern-making workshop, open to
            the CU and broader Boulder community.
          </li>
        </ul>

        <SubHeading>Our team</SubHeading>
        <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-moss">
          <li>
            <strong>Deanna Gelosi</strong> (MS in Computer Science, ATLAS PhD Student) brings expertise in designing
            software tools for creative craft practices that facilitate material and computational discovery, and prior
            work experience in public science engagement in informal science spaces.
          </li>
          <li>
            <strong>Etta Sandry</strong> (MFA in Fibre &amp; Material Practices, ATLAS PhD Student) brings a developed
            interdisciplinary art practice rooted in weaving, a deep investment in craft sample-making as experimental
            praxis, and a material sensibility attuned to structures that disrupt and complicate weaving&apos;s binary form.
          </li>
          <li>
            <strong>Charlotte Bertanzetti</strong> (Computer Science undergraduate) is from Thornton, CO and brings a
            background in fiber arts and designing computational tools for weaving.
          </li>
        </ul>
      </Section>

      <section className="flex flex-col gap-4">
        <h2 className="font-inconsolata text-forest text-2xl font-bold">Our Plants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Placeholder title="NEST" note="Links to NEST." />
        <Placeholder title="Acknowledgements" note="People and groups to thank." />
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="font-inconsolata text-forest text-2xl font-bold">Explore</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pages.filter((page) => page.explore).map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-lg bg-white border-2 border-sage p-5 hover:border-moss hover:shadow-md transition"
            >
              <p className="font-inconsolata text-lg font-bold text-forest">{page.title}</p>
              <p className="mt-1 text-sm text-ink/80">{page.blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
