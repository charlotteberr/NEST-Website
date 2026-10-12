interface PlaceholderProps {
    title: string;
    note?: string;
    children?: React.ReactNode;
    className?: string;
}

// Dashed outline marking where a section's real content will go.
export default function Placeholder({ title, note, children, className = "" }: PlaceholderProps) {
    return (
        <section className={`rounded-lg border-2 border-dashed border-sage bg-mint/60 p-6 flex flex-col gap-3 ${className}`}>
            <h2 className="font-inconsolata text-forest text-2xl font-bold">{title}</h2>
            {note && <p className="font-inconsolata text-sm text-moss italic">TODO: {note}</p>}
            {children}
        </section>
    );
}
