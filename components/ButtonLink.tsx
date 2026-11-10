import Link from "next/link";

// The green button used to move to another page. Links to other sites (starting with "http") open in a new tab.
export default function ButtonLink({ href, children }: { href: string; children: React.ReactNode }) {
    const className = "font-inconsolata font-semibold px-4 py-2 rounded-md bg-moss text-mint hover:bg-forest transition-colors w-fit";
    if (href.startsWith("http")) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {children}
            </a>
        );
    }
    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
}
