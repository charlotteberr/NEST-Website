import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";

export default function WeavingPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageHeader title="AdaCAD" subtitle="From plant structure to woven pattern" />

            <Placeholder title="Plants & Weaving Patterns" note="The plants' connections to weaving patterns and what we made with them." />

            <Placeholder title="About AdaCAD" note="Information on AdaCAD.">
                <a href="https://adacad.org" target="_blank" className="font-inconsolata text-moss underline w-fit">
                    adacad.org
                </a>
            </Placeholder>

            <Placeholder title="AdaCAD Operations" note="Links and pictures of specific AdaCAD operations.">
                <div className="flex flex-wrap gap-3">
                    <Link
                        href="/weaving/branching"
                        className="font-inconsolata font-semibold px-4 py-2 rounded-md bg-moss text-mint hover:bg-forest transition-colors"
                    >
                        Branching AdaCAD Operation
                    </Link>
                    <Link
                        href="/weaving/aster"
                        className="font-inconsolata font-semibold px-4 py-2 rounded-md bg-moss text-mint hover:bg-forest transition-colors"
                    >
                        Aster AdaCAD Operation
                    </Link>
                </div>
            </Placeholder>
        </div>
    );
}
