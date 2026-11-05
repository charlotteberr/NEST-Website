// Small round decals drawn to look like each plant, keyed by plant id.
const drawings: Record<string, React.ReactNode> = {
    // Upright stems fanning out, topped with clusters of golden flowers.
    rabbitbrush: (
        <>
            <g stroke="#7d8f6c" strokeWidth="1.4" strokeLinecap="round" fill="none">
                <path d="M12 21V9" />
                <path d="M12 18 7 10" />
                <path d="M12 18 17 10" />
                <path d="M12 15.5 4.5 12" />
                <path d="M12 15.5 19.5 12" />
            </g>
            <g fill="#e0b324">
                <circle cx="12" cy="7.2" r="2.3" />
                <circle cx="6.6" cy="8.6" r="2" />
                <circle cx="17.4" cy="8.6" r="2" />
                <circle cx="4" cy="11" r="1.6" />
                <circle cx="20" cy="11" r="1.6" />
            </g>
            <g fill="#c48f12">
                <circle cx="11.2" cy="6.6" r="0.6" />
                <circle cx="12.9" cy="7.8" r="0.6" />
                <circle cx="6.2" cy="8.2" r="0.5" />
                <circle cx="17.8" cy="8.2" r="0.5" />
            </g>
        </>
    ),
    // Purple daisy with a golden center.
    aster: (
        <>
            <g fill="#8b5fc7">
                {Array.from({ length: 14 }, (_, i) => (
                    <ellipse key={i} cx="12" cy="6" rx="1.5" ry="4.6" transform={`rotate(${(360 / 14) * i} 12 12)`} />
                ))}
            </g>
            <circle cx="12" cy="12" r="3.2" fill="#f2c230" />
            <circle cx="12" cy="12" r="1.4" fill="#d9a21b" />
        </>
    ),
    // Pale green fronds that fork again and again, like antlers.
    lichen: (
        <g stroke="#7f9f5c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M12 21v-6" />
            <path d="M12 15 8 10.5" />
            <path d="M12 15l4-4.5" />
            <path d="M8 10.5 6 6.5" />
            <path d="M8 10.5 10.2 7" />
            <path d="M16 10.5 13.8 7" />
            <path d="M16 10.5 18 6.5" />
            <path d="M6 6.5 4.6 3.8" />
            <path d="M6 6.5 7.6 4" />
            <path d="M18 6.5l-1.6-2.5" />
            <path d="M18 6.5l1.4-2.7" />
            <path d="M10.2 7 11 4.4" />
            <path d="M13.8 7 13 4.4" />
        </g>
    ),
};

export default function PlantIcon({ plantId, className = "w-8 h-8" }: { plantId: string; className?: string }) {
    return (
        <span className={`inline-flex shrink-0 items-center justify-center rounded-full bg-white border border-sage p-1 ${className}`}>
            <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
                {drawings[plantId]}
            </svg>
        </span>
    );
}
