'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { pages } from "@/lib/pages";

export default function Nav() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

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
                        className="font-inconsolata font-semibold px-4 py-2 rounded-md bg-moss hover:bg-sage hover:text-forest transition-colors"
                    >
                        Pages {open ? "▴" : "▾"}
                    </button>

                    {open && (
                        <nav className="absolute right-0 mt-2 w-64 rounded-md bg-mint text-ink shadow-lg border border-sage overflow-hidden">
                            {pages.map((page) => (
                                <Link
                                    key={page.href}
                                    href={page.href}
                                    onClick={() => setOpen(false)}
                                    className={`block px-4 py-3 font-inconsolata border-b border-sage last:border-b-0 transition-colors ${pathname === page.href
                                        ? "bg-sage text-forest font-bold"
                                        : "hover:bg-sage/50"
                                        }`}
                                >
                                    {page.title}
                                </Link>
                            ))}
                        </nav>
                    )}
                </div>
            </div>
        </header>
    );
}
