// Who took a photo we didn't take ourselves, and its license.
export interface Credit {
    author: string;
    license: string;
    // The photo's page, e.g. on Wikimedia Commons.
    href: string;
}

// A small "Photo: name, license" line under a photo we didn't take ourselves. Links to the photo's page.
export default function PhotoCredit({ credits }: { credits: (Credit | undefined)[] }) {
    const shown = credits.filter((credit): credit is Credit => !!credit);
    if (shown.length === 0) return null;
    return (
        <p className="mt-1 text-xs text-ink/70">
            {shown.length > 1 ? "Photos: " : "Photo: "}
            {shown.map((credit, i) => (
                <span key={credit.href}>
                    {i > 0 && "; "}
                    <a href={credit.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-forest">
                        {credit.author}
                    </a>
                    , {credit.license}
                </span>
            ))}
        </p>
    );
}
