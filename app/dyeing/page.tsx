"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import PhotoCredit, { type Credit } from "@/components/PhotoCredit";
import rabbitbrushPhoto from "@/app/rabbitbrush/rabbitbrush-field.jpg";
import mountainMahoganyPhoto from "@/app/native-plants/other-plants/mountain-mahogany.jpg";
import coreopsisPhoto from "./plants/coreopsis.jpg";
import pricklyPearPhoto from "./plants/prickly-pear.jpg";
import sumacPhoto from "./plants/sumac.jpg";
import sagebrushPhoto from "./plants/sagebrush.jpg";
import oregonGrapePhoto from "./plants/oregon-grape.jpg";
import sunflowerPhoto from "@/app/native-plants/other-plants/common-sunflower.jpg";
import sampleAlum from "@/app/natural-dyeing/dye-examples/alum.jpg";
import sampleIron from "@/app/natural-dyeing/dye-examples/iron.jpg";
import sampleAlumIron from "@/app/natural-dyeing/dye-examples/alum-iron.jpg";
import sampleAlumSodaAsh from "@/app/natural-dyeing/dye-examples/alum-soda-ash.jpg";
import sampleAlumTannin from "@/app/natural-dyeing/dye-examples/alum-tannin.jpg";
import sampleAlumVinegar from "@/app/natural-dyeing/dye-examples/alum-vinegar.jpg";

// Everything written on this page is in this file.
// The colors are estimates to show the idea, not exact results. Real colors also depend on the fiber,
// the water, how much plant you use, and when it was picked.

interface DyePlant {
    id: string;
    name: string;
    part: string;
    photo: StaticImageData;
    photoAlt: string;
    credit?: Credit;
    // The color with an alum mordant (the plant's own color) and with an iron mordant (darker and duller).
    // Copper and tannin mordants are worked out from the alum color.
    colors: { alum: string; iron: string };
}

type MordantId = "alum" | "iron" | "copper" | "tannin";
type Shift = { h: number; s: number; l: number };

// Ordered around the color wheel: yellow, orange, pink, red-brown, tan, green, blue, purple.
const plants: DyePlant[] = [
    {
        id: "rabbitbrush",
        name: "Rabbitbrush",
        part: "Flowers",
        photo: rabbitbrushPhoto,
        photoAlt: "Rabbitbrush in yellow bloom",
        colors: { alum: "#d9dc8a", iron: "#8f8a68" },
    },
    {
        id: "coreopsis",
        name: "Plains coreopsis",
        part: "Flowers",
        photo: coreopsisPhoto,
        photoAlt: "Golden plains coreopsis flowers with dark red centers",
        credit: {
            author: "OKJaguar",
            license: "CC BY 4.0",
            href: "https://commons.wikimedia.org/wiki/File:Golden_Tickseed_(Coreopsis_tinctoria),_Salina,_Oklahoma,_USA.jpg",
        },
        colors: { alum: "#d9752b", iron: "#6e5a32" },
    },
    {
        id: "prickly-pear",
        name: "Prickly pear cactus",
        part: "Fruit",
        photo: pricklyPearPhoto,
        photoAlt: "Prickly pear cactus pads with clusters of ripe pink fruit",
        credit: {
            author: "PattayaPatrol",
            license: "CC BY-SA 4.0",
            href: "https://commons.wikimedia.org/wiki/File:DFC_0437_Prickly_pear_cactus_pads_dotted_with_clusters_of_pinkish_fruit_ready_for_harvest.jpg",
        },
        colors: { alum: "#c4547e", iron: "#6e4a5c" },
    },
    {
        id: "mountain-mahogany",
        name: "Mountain mahogany",
        part: "Bark",
        photo: mountainMahoganyPhoto,
        photoAlt: "A mountain mahogany shrub",
        credit: {
            author: "James St. John",
            license: "CC BY 2.0",
            href: "https://commons.wikimedia.org/wiki/File:Cercocarpus_montanus_(mountain_mahogany)_(38634245525).jpg",
        },
        colors: { alum: "#a65e44", iron: "#5f453d" },
    },
    {
        id: "sumac",
        name: "Skunkbush sumac",
        part: "Leaves",
        photo: sumacPhoto,
        photoAlt: "Skunkbush sumac leaves turning orange and red in fall",
        credit: {
            author: "USFWS Mountain-Prairie",
            license: "public domain",
            href: "https://commons.wikimedia.org/wiki/File:Skunkbush_sumac_(Rhus_trilobata)_on_Seedskadee_National_Wildlife_Refuge_(37332909495).jpg",
        },
        // Sumac is full of tannin, so iron turns it almost black.
        colors: { alum: "#b89a6a", iron: "#4a4744" },
    },
    {
        id: "sagebrush",
        name: "Sagebrush",
        part: "Leaves",
        photo: sagebrushPhoto,
        photoAlt: "A silvery sagebrush shrub",
        credit: { author: "Stan Shebs", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Artemisia_tridentata_1.jpg" },
        colors: { alum: "#8fa35a", iron: "#56603f" },
    },
    {
        id: "oregon-grape",
        name: "Oregon grape",
        part: "Berries",
        photo: oregonGrapePhoto,
        photoAlt: "Creeping Oregon grape with clusters of dusty blue berries",
        credit: { author: "Stephen Lea", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:MahoniaRepensBerriesUtah.jpg" },
        colors: { alum: "#5d6fa8", iron: "#46506a" },
    },
    {
        id: "sunflower",
        name: "Hopi dye sunflower",
        part: "Seeds",
        photo: sunflowerPhoto,
        photoAlt: "A sunflower with a spiraled brown center against a blue sky",
        credit: { author: "Fir0002", license: "GFDL 1.2", href: "https://commons.wikimedia.org/wiki/File:Sunflower_sky_backdrop.jpg" },
        // A variety of the common sunflower, a Colorado wildflower. The Hopi use its dark seeds to dye purple.
        colors: { alum: "#6b4a7e", iron: "#3f4256" },
    },
];

// Soda ash and vinegar aren't mordants: they only change the pH, so they're after baths only.
const mordants: { id: MordantId; name: string; note: string; fromAlum?: Shift }[] = [
    { id: "alum", name: "Alum", note: "The most common mordant. Keeps the plant's own color." },
    { id: "iron", name: "Iron", note: "Darkens and dulls the color." },
    { id: "copper", name: "Copper", note: "Deepens the color and shifts it toward green. It's toxic, so use it carefully.", fromAlum: { h: 6, s: -0.15, l: -0.06 } },
    { id: "tannin", name: "Tannin", note: "Often used for cotton and other plant fibers. Makes the color softer and browner.", fromAlum: { h: -4, s: -0.2, l: -0.04 } },
];

// Each after bath nudges the color: hue in degrees, saturation and lightness from 0 to 1.
// Except for copper, these come from our real rabbitbrush silk samples, compared with the alum-only sample.
const afterBaths: { id: string; name: string; note: string; shift: Shift }[] = [
    { id: "none", name: "None", note: "No after bath.", shift: { h: 0, s: 0, l: 0 } },
    // We haven't dyed with a copper after bath yet, so this one is an estimate, not measured.
    { id: "copper", name: "Copper", note: "Deepens the color and shifts it toward green.", shift: { h: 8, s: -0.08, l: -0.08 } },
    { id: "iron", name: "Iron", note: "Darkens and dulls the color a lot.", shift: { h: 3, s: -0.34, l: -0.27 } },
    { id: "soda-ash", name: "Soda ash", note: "Makes the bath alkaline, which warms and deepens the color.", shift: { h: -7, s: 0.03, l: -0.11 } },
    { id: "tannin", name: "Tannin", note: "Softens the color toward cream.", shift: { h: -2, s: -0.19, l: 0.01 } },
    { id: "vinegar", name: "Vinegar", note: "Makes the bath acidic, which softens the color.", shift: { h: 7, s: -0.23, l: 0.01 } },
];

// The color before any after bath, as hex for alum and iron or as an alum color plus a shift.
function mordantColor(plant: DyePlant, mordant: (typeof mordants)[number]) {
    if (mordant.id === "alum" || mordant.id === "iron") return plant.colors[mordant.id];
    return shiftColor(plant.colors.alum, mordant.fromAlum!, "hex");
}

// Silk samples we really dyed, shown on the Natural Dyeing page. Keyed by "plant/mordant/after bath".
const realSamples: Record<string, StaticImageData> = {
    "rabbitbrush/alum/none": sampleAlum,
    "rabbitbrush/iron/none": sampleIron,
    "rabbitbrush/alum/iron": sampleAlumIron,
    "rabbitbrush/alum/soda-ash": sampleAlumSodaAsh,
    "rabbitbrush/alum/tannin": sampleAlumTannin,
    "rabbitbrush/alum/vinegar": sampleAlumVinegar,
};

function shiftColor(hex: string, shift: Shift, format: "hsl" | "hex" = "hsl") {
    const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    const d = max - min;
    const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
    let h = 0;
    if (d !== 0) {
        if (max === r) h = 60 * (((g - b) / d) % 6);
        else if (max === g) h = 60 * ((b - r) / d + 2);
        else h = 60 * ((r - g) / d + 4);
    }
    const clamp = (v: number) => Math.min(1, Math.max(0, v));
    // Saturation and lightness change in proportion to the rabbitbrush alum color the shifts were measured on,
    // so darker or duller plants don't turn gray.
    const [nh, ns, nl] = [(h + shift.h + 360) % 360, clamp(s * (1 + shift.s / 0.54)), clamp(l * (1 + shift.l / 0.7))];
    if (format === "hsl") return `hsl(${nh} ${ns * 100}% ${nl * 100}%)`;
    // Back to hex, so a shifted color can be shifted again by an after bath.
    const f = (n: number) => {
        const k = (n + nh / 30) % 12;
        const v = nl - ns * Math.min(nl, 1 - nl) * Math.max(-1, Math.min(k - 3, 9 - k, 1));
        return Math.round(v * 255).toString(16).padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

function StepHeading({ number, children }: { number: number; children: React.ReactNode }) {
    return (
        <h2 className="font-inconsolata text-forest text-2xl font-bold">
            {number}. {children}
        </h2>
    );
}

// A choice card that gets highlighted when it's selected.
function ChoiceCard({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={selected}
            className={`text-left rounded-md border-2 overflow-hidden transition-colors ${
                selected ? "border-forest bg-mint ring-2 ring-moss" : "border-sage bg-white hover:border-moss"
            }`}
        >
            {children}
        </button>
    );
}

export default function DyeingPage() {
    const [plantId, setPlantId] = useState<string | null>(null);
    const [mordantId, setMordantId] = useState<MordantId | null>(null);
    const [afterBathId, setAfterBathId] = useState("none");

    const plant = plants.find((p) => p.id === plantId);
    const mordant = mordants.find((m) => m.id === mordantId);
    const afterBath = afterBaths.find((a) => a.id === afterBathId)!;
    const color = plant && mordant ? shiftColor(mordantColor(plant, mordant), afterBath.shift) : null;
    const realSample = plant && mordant ? realSamples[`${plant.id}/${mordant.id}/${afterBath.id}`] : undefined;

    return (
        <div className="flex flex-col gap-10">
            <PageHeader title="Interactive Dyeing" subtitle="See how dyes, mordants, and after baths change the color" />

            <section className="flex flex-col gap-4">
                <StepHeading number={1}>Choose a dye plant</StepHeading>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {plants.map((p) => (
                        <ChoiceCard key={p.id} selected={p.id === plantId} onClick={() => setPlantId(p.id)}>
                            <Image src={p.photo} alt={p.photoAlt} sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw" className="w-full h-28 object-cover" />
                            <div className="p-3">
                                <p className="font-inconsolata font-bold text-forest">{p.name}</p>
                                <p className="text-sm text-moss">Dye from its {p.part.toLowerCase()}</p>
                            </div>
                        </ChoiceCard>
                    ))}
                </div>
                <PhotoCredit credits={plants.map((p) => p.credit)} />
            </section>

            <section className="flex flex-col gap-4">
                <StepHeading number={2}>Choose a mordant</StepHeading>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {mordants.map((m) => (
                        <ChoiceCard key={m.id} selected={m.id === mordantId} onClick={() => setMordantId(m.id)}>
                            <div className="p-4">
                                <p className="font-inconsolata font-bold text-forest">{m.name}</p>
                                <p className="text-sm">{m.note}</p>
                            </div>
                        </ChoiceCard>
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-4">
                <StepHeading number={3}>Choose an after bath (optional)</StepHeading>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {afterBaths.map((a) => (
                        <ChoiceCard key={a.id} selected={a.id === afterBathId} onClick={() => setAfterBathId(a.id)}>
                            <div className="p-4">
                                <p className="font-inconsolata font-bold text-forest">{a.name}</p>
                                <p className="text-sm">{a.note}</p>
                            </div>
                        </ChoiceCard>
                    ))}
                </div>
            </section>

            <section className="rounded-sm bg-mint border border-sage/50 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:items-center">
                <div
                    className="w-40 h-40 shrink-0 rounded-sm border-2 border-sage flex items-center justify-center text-center text-sm text-moss p-3 transition-colors"
                    style={color ? { backgroundColor: color } : undefined}
                >
                    {!color && "Choose a dye and a mordant"}
                </div>
                <div className="flex flex-col gap-2 leading-relaxed">
                    <h2 className="font-inconsolata text-forest text-2xl font-bold">Your color</h2>
                    {plant && mordant ? (
                        <p>
                            <strong>{plant.name}</strong> with an <strong>{mordant.name.toLowerCase()}</strong> mordant
                            {afterBath.id === "none" ? " and no after bath." : <> and a <strong>{afterBath.name.toLowerCase()}</strong> after bath.</>}
                        </p>
                    ) : (
                        <p>Pick a dye plant and a mordant to see the color. The after bath is optional.</p>
                    )}
                    <p className="text-sm text-ink/70">
                        If we haven&apos;t actually dyed this combination, the color is just an estimate of how the final color
                        will turn out. Colors will also look different on different fibers, and can change with the water and
                        how much plant you use.
                    </p>
                </div>
            </section>

            <section className="rounded-sm bg-mint border border-sage/50 p-6 sm:p-8 flex flex-col gap-4 leading-relaxed">
                <h2 className="font-inconsolata text-forest text-2xl font-bold">Real Sample</h2>
                {realSample && plant && mordant ? (
                    <>
                        <p>
                            We dyed this one! Here is our real silk sample. See all of our samples on the{" "}
                            <Link href="/natural-dyeing#comparing" className="text-moss underline hover:text-forest">
                                Natural Dyeing
                            </Link>{" "}
                            page.
                        </p>
                        <Image
                            src={realSample}
                            alt={`Silk dyed with ${plant.name.toLowerCase()}, ${mordant.name.toLowerCase()} mordant, ${afterBath.id === "none" ? "no after bath" : `${afterBath.name.toLowerCase()} after bath`}`}
                            sizes="(min-width: 640px) 400px, 90vw"
                            className="h-56 sm:h-72 w-auto max-w-full object-contain self-start rounded-sm"
                        />
                    </>
                ) : (
                    <p>If you choose something we have already dyed, a photo of our real sample will pop up here.</p>
                )}
            </section>
        </div>
    );
}
