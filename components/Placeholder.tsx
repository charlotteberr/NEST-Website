interface PlaceholderProps {
    title: string;
    note?: string;
    children?: React.ReactNode;
    className?: string;
}

// A section whose real content isn't written yet: just the heading and a note about what goes there.
export default function Placeholder({ title, note, children, className = "" }: PlaceholderProps) {
    return (
        <section className={`flex flex-col gap-3 ${className}`}>
            <h2 className="font-inconsolata text-forest text-2xl font-bold">{title}</h2>
            {note && <p className="leading-relaxed">[Placeholder: {note}]</p>}
            {children}
        </section>
    );
}
