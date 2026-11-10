import Link from "next/link";

// Shared styling for the Aster Research and Rabbitbrush Research pages, so both pages look the same.
// These only style things; all the words come from the pages.

export function SubHeading({ children }: { children: React.ReactNode }) {
    return <h3 className="font-inconsolata text-lg font-bold text-forest">{children}</h3>;
}

// An inline link in a sentence: opens other sites in a new tab, and stays in the site for paths like "/aster".
export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
    const className = "text-moss underline hover:text-forest";
    return href.startsWith("http") ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
            {children}
        </a>
    ) : (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
}

export interface Reference {
    // Shown as a superscript number in the text with <Cite>, and in front of the reference.
    number?: number;
    href?: string;
    children: React.ReactNode;
}

// A superscript citation number that links to the source.
export function Cite({ reference }: { reference: Reference }) {
    return (
        <sup>
            {reference.href ? <TextLink href={reference.href}>{reference.number}</TextLink> : reference.number}
        </sup>
    );
}

// The list of references at the bottom of a research page. The page writes the references and the heading.
export function ReferenceList({ references }: { references: Reference[] }) {
    return (
        <ul className="flex flex-col gap-2 text-sm">
            {references.map((reference, i) => (
                <li key={i}>
                    {reference.number && <sup>{reference.number} </sup>}
                    {reference.href ? <TextLink href={reference.href}>{reference.children}</TextLink> : reference.children}
                </li>
            ))}
        </ul>
    );
}
