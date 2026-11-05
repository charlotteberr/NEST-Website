'use client';

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export interface StepPhoto {
    src: StaticImageData;
    alt: string;
    caption?: string;
}

interface PhotoStepperProps {
    title: string;
    photos: StepPhoto[];
    // Shown while there are no photos yet.
    emptyNote?: string;
}

// Click through photos one at a time, e.g. adding one more flower to the pattern with each click.
export default function PhotoStepper({ title, photos, emptyNote }: PhotoStepperProps) {
    const [index, setIndex] = useState(0);

    if (photos.length === 0) {
        return (
            <div className="rounded-lg border-2 border-dashed border-sage bg-mint/60 p-6 flex flex-col gap-3">
                <h3 className="font-inconsolata text-lg font-bold text-forest">{title}</h3>
                <div className="h-48 rounded-md bg-white/60 border border-sage flex items-center justify-center font-inconsolata text-sm italic text-moss">
                    Photos coming soon
                </div>
                {emptyNote && <p className="font-inconsolata text-sm text-moss italic">TODO: {emptyNote}</p>}
            </div>
        );
    }

    const photo = photos[index];
    const last = photos.length - 1;
    const button =
        "font-inconsolata font-semibold text-sm px-3 py-1.5 rounded-md bg-moss text-mint hover:bg-forest transition-colors disabled:opacity-40 disabled:hover:bg-moss";

    return (
        <div className="rounded-lg border-2 border-sage bg-white p-4 flex flex-col gap-3">
            <h3 className="font-inconsolata text-lg font-bold text-forest">{title}</h3>
            <Image
                src={photo.src}
                alt={photo.alt}
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="w-full max-h-[32rem] object-contain rounded-md bg-mint"
            />
            {photo.caption && <p className="text-sm text-ink/80">{photo.caption}</p>}
            <div className="flex items-center justify-between gap-3">
                <button className={button} onClick={() => setIndex(index - 1)} disabled={index === 0}>
                    Back
                </button>
                <span className="font-inconsolata text-sm text-moss">
                    {index + 1} of {photos.length}
                </span>
                <button className={button} onClick={() => setIndex(index + 1)} disabled={index === last}>
                    Add a flower
                </button>
            </div>
        </div>
    );
}
