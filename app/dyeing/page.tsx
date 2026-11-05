import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";

const choices = ["Dye", "Mordant", "Fiber"];

export default function DyeingPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageHeader title="Interactive Dyeing" subtitle="See how dyes, mordants, and fibers change the color" />

             <Placeholder title="Interactive Dyeing Game" note="Input different dyes, mordants, and fiber types to see how the color changes" />

            <Placeholder title="Tested Sample Photo" note="Pop-up photo when the combination is one we have tested." />
        </div>
    );
}
