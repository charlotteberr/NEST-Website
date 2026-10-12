import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";
import { pages } from "@/lib/pages";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Branching Logic"
        subtitle="Native Plant Ecologies as Computational and Textile Pattern"
      />

      <Placeholder title="Project Overview" note="Brief overview of the project." />
      <Placeholder title="Plants as the Entry Point" note="How the plants were the entry point for the project." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Placeholder title="Workshops" note="Information on the workshop(s)." />
        <Placeholder title="NEST" note="Links to NEST." />
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="font-inconsolata text-forest text-2xl font-bold">Explore</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pages.filter((page) => page.href !== "/").map((page) => (
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
