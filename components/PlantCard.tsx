import Image from "next/image";
import Link from "next/link";
import { Plant } from "@/lib/plants";

// A home page card for one plant, linking to its focus pages and its native plants section.
export default function PlantCard({ plant }: { plant: Plant }) {
    return (
        <article className="rounded-lg bg-white border-2 border-sage overflow-hidden flex flex-col">
            {plant.photo ? (
                <Image
                    src={plant.photo}
                    alt={plant.photoAlt ?? plant.name}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="w-full h-48 object-cover"
                />
            ) : (
                <div className="h-48 bg-mint flex items-center justify-center font-inconsolata text-sm italic text-moss">
                    Photo coming soon
                </div>
            )}

            <div className="p-5 flex flex-col gap-3 flex-1">
                <div>
                    <h3 className="font-inconsolata text-xl font-bold text-forest">{plant.name}</h3>
                    <p className="font-inconsolata text-sm italic text-moss">{plant.scientificName}</p>
                </div>
                <p className="text-sm text-ink/80">{plant.summary}</p>

                <div className="flex flex-wrap gap-2">
                    {plant.links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="font-inconsolata font-semibold text-sm px-3 py-1.5 rounded-md bg-moss text-mint hover:bg-forest transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <Link
                    href={`/native-plants#${plant.id}`}
                    className="mt-auto pt-2 font-inconsolata text-sm text-moss underline hover:text-forest w-fit"
                >
                    More about {plant.name}
                </Link>
            </div>
        </article>
    );
}
