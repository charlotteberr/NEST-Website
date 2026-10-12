import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";

export default function WeavingPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageHeader title="Weaving" subtitle="From plant structure to woven pattern" />

            <Placeholder title="Plants & Weaving Patterns" note="The plants' connections to weaving patterns and what we made with them." />

            <Placeholder title="About AdaCAD" note="Information on AdaCAD.">
                <a href="https://adacad.org" target="_blank" className="font-inconsolata text-moss underline w-fit">
                    adacad.org
                </a>
            </Placeholder>

            <Placeholder title="AdaCAD Operations" note="Links and pictures of specific AdaCAD operations." />
        </div>
    );
}
