interface SectionProps {
    title: string;
    id?: string;
    // Draws the section as a square-cornered card, e.g. for each step on the Natural Dyeing page.
    card?: boolean;
    children: React.ReactNode;
}

// A content section: a heading followed by its content. Plain by default, or a card with `card`.
export default function Section({ title, id, card = false, children }: SectionProps) {
    const style = card ? "rounded-sm bg-mint border border-sage/50 p-6 sm:p-8" : "";
    return (
        <section id={id} className={`scroll-mt-24 flex flex-col gap-4 leading-relaxed ${style}`}>
            <h2 className="font-inconsolata text-forest text-2xl font-bold">{title}</h2>
            {children}
        </section>
    );
}
