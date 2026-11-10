'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import PlantIcon from "@/components/PlantIcon";

// The Pages menu shows on every page, so its links live here.
// Each plant gets a group of links; plantId picks its little drawing from PlantIcon.
const plantMenus = [
    {
        plantId: "rabbitbrush",
        name: "Rabbitbrush",
        links: [
            { label: "Natural Dyeing", href: "/natural-dyeing" },
            { label: "Rabbitbrush Research", href: "/rabbitbrush" },
            { label: "Characteristics", href: "/native-plants#rabbitbrush" },
        ],
    },
    {
        plantId: "aster",
        name: "Aster",
        links: [
            { label: "Aster Research", href: "/aster" },
            { label: "Characteristics", href: "/native-plants#aster" },
        ],
    },
    // TO ADD LATER: lichen. Remove the "// " from these lines to add it to the menu.
    // {
    //     plantId: "lichen",
    //     name: "Lichen",
    //     links: [
    //         { label: "Rabbitbrush Research", href: "/rabbitbrush" },
    //         { label: "Characteristics", href: "/native-plants#lichen" },
    //     ],
    // },
];

const exploreLinks = [
    { label: "AdaCAD", href: "/weaving" },
    { label: "Public Exhibition", href: "/exhibition" },
    { label: "Interactive Dyeing", href: "/dyeing" },
    { label: "Colorado Native Plants", href: "/native-plants" },
];

interface MenuLinkProps {
    href: string;
    pathname: string;
    onNavigate: () => void;
    className?: string;
    children: React.ReactNode;
}

function MenuLink({ href, pathname, onNavigate, className = "", children }: MenuLinkProps) {
    return (
        <Link
            href={href}
            onClick={onNavigate}
            className={`block px-4 py-2 font-inconsolata transition-colors ${pathname === href
                ? "bg-sage text-forest font-bold"
                : "hover:bg-sage/50"
                } ${className}`}
        >
            {children}
        </Link>
    );
}

export default function Nav() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const close = () => setOpen(false);

    // Close the dropdown on outside click or Escape
    useEffect(() => {
        if (!open) return;
        const onClick = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
        };
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("mousedown", onClick);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("mousedown", onClick);
            document.removeEventListener("keydown", onKey);
        };
    }, [open]);

    return (
        <header className="sticky top-0 z-50 w-full bg-forest text-mint shadow-md">
            <div className="max-w-5xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="font-inconsolata text-xl sm:text-2xl font-bold tracking-wide">
                    BRANCHING LOGIC
                </Link>

                <div className="relative" ref={menuRef}>
                    <button
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                        aria-haspopup="true"
                        aria-label="Pages"
                        title="Pages"
                        className="p-2 rounded-md bg-moss hover:bg-sage hover:text-forest transition-colors"
                    >
                        {/* Branching sprig icon; tilts when the menu is open */}
                        <svg
                            viewBox="0 0 24 24"
                            className={`w-6 h-6 transition-transform ${open ? "rotate-12" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M12 22V6" />
                            <path d="M12 13c-3.5 0-6-2.2-6-6 3.5 0 6 2.2 6 6z" />
                            <path d="M12 10c0-3.8 2.5-6 6-6 0 3.8-2.5 6-6 6z" />
                            <path d="M12 18c3.5 0 6-2.2 6-6-3.5 0-6 2.2-6 6z" />
                        </svg>
                    </button>

                    {open && (
                        <nav className="absolute right-0 mt-2 w-72 max-h-[calc(100vh-5rem)] overflow-y-auto rounded-md bg-mint text-ink shadow-lg border border-sage">
                            <MenuLink href="/" pathname={pathname} onNavigate={close} className="border-b border-sage">
                                Home
                            </MenuLink>

                            {plantMenus.map((plant) => (
                                <div key={plant.plantId} className="border-b border-sage py-1">
                                    <p className="flex items-center gap-2 px-4 py-2 font-inconsolata font-bold text-forest">
                                        <PlantIcon plantId={plant.plantId} />
                                        {plant.name}
                                    </p>
                                    {plant.links.map((link) => (
                                        <MenuLink key={link.href} href={link.href} pathname={pathname} onNavigate={close} className="pl-14 text-sm">
                                            {link.label}
                                        </MenuLink>
                                    ))}
                                </div>
                            ))}

                            <div className="py-1">
                                <p className="px-4 py-2 font-inconsolata font-bold text-forest">Explore</p>
                                {exploreLinks.map((link) => (
                                    <MenuLink key={link.href} href={link.href} pathname={pathname} onNavigate={close} className="pl-14 text-sm">
                                        {link.label}
                                    </MenuLink>
                                ))}
                            </div>
                        </nav>
                    )}
                </div>
            </div>
        </header>
    );
}
