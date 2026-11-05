import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";
import PlantIcon from "@/components/PlantIcon";
import { otherPlants, plants } from "@/lib/plants";

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
        <div className="flex flex-col gap-8">
            <PageHeader title="Colorado Native Plants" />

            <nav aria-label="On this page" className="rounded-lg bg-mint border-2 border-sage p-5">
                <p className="font-inconsolata font-bold text-forest">On this page</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                    {indexLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className="block font-inconsolata font-semibold text-sm px-3 py-1.5 rounded-md bg-white border border-sage text-forest hover:border-moss hover:bg-sage/30 transition-colors"
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
                    className="scroll-mt-24 rounded-lg bg-white border-2 border-sage p-6 flex flex-col gap-6"
                >
                    <div className="flex items-center gap-3">
                        <PlantIcon plantId={plant.id} className="w-12 h-12" />
                        <div>
                            <h2 className="font-inconsolata text-forest text-3xl font-bold">{plant.name}</h2>
                            <p className="font-inconsolata italic text-moss">{plant.scientificName}</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        {plant.photo && (
                            <Image
                                src={plant.photo}
                                alt={plant.photoAlt ?? plant.name}
                                sizes="(min-width: 768px) 40vw, 100vw"
                                className="w-full md:w-2/5 h-64 md:h-auto md:self-start md:aspect-square object-cover rounded-md border-2 border-sage"
                            />
                        )}
                        <div className="flex-1 flex flex-col gap-3 leading-relaxed">
                            {plant.about.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-md bg-mint border-l-4 border-moss p-4 flex flex-col gap-1">
                        <SubHeading>Why we study it</SubHeading>
                        <p className="leading-relaxed">{plant.whyWeStudyIt}</p>
                    </div>

                    {plant.species && (
                        <div className="flex flex-col gap-3">
                            <SubHeading>Some {plant.name.toLowerCase()}s you can find in Colorado</SubHeading>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {plant.species.map((species) => (
                                    // A species without a photo (like the featured alpine aster) spans the full row.
                                    <div
                                        key={species.scientificName}
                                        className={`rounded-md border border-sage overflow-hidden ${species.photo ? "" : "sm:col-span-2 bg-mint/60"}`}
                                    >
                                        {species.photo && (
                                            <Image
                                                src={species.photo}
                                                alt={species.photoAlt ?? species.name}
                                                sizes="(min-width: 640px) 50vw, 100vw"
                                                className={`w-full h-48 object-cover ${species.photoPosition ?? ""}`}
                                            />
                                        )}
                                        <div className="p-4">
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

                    <div className="border-t border-sage pt-3">
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

            <section id="other-plants" className="scroll-mt-24 rounded-lg bg-white border-2 border-sage p-6 flex flex-col gap-4">
                <div>
                    <h2 className="font-inconsolata text-forest text-2xl font-bold">Other Plants to Explore</h2>
                    <p className="mt-1 leading-relaxed">
                        A few more Colorado plants that are interesting to dye with, have interesting patterns, or have been used for weaving.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {otherPlants.map((plant) => (
                        <div key={plant.scientificName} className="rounded-md border border-sage overflow-hidden flex flex-col">
                            {/* Every card's photo area is the same height; a second photo splits it in half. */}
                            <div className="h-44 flex">
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
                            <div className="p-4 flex flex-col flex-1">
                                <p className="font-inconsolata text-xs uppercase tracking-wide text-moss">{plant.tag}</p>
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

            <div id="where-they-grow" className="scroll-mt-24">
                <Placeholder title="Where They Grow" note="Interactive map of where the plants are most common." />
            </div>
        </div>
    );
}
