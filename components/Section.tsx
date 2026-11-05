interface SectionProps {
    title: string;
    id?: string;
    children: React.ReactNode;
}

// A finished content section: the solid counterpart to Placeholder.
export default function Section({ title, id, children }: SectionProps) {
    return (
        <section id={id} className="scroll-mt-24 rounded-lg bg-white border-2 border-sage p-6 flex flex-col gap-4 leading-relaxed">
            <h2 className="font-inconsolata text-forest text-2xl font-bold">{title}</h2>
            {children}
        </section>
    );
}
