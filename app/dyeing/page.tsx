import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";

const choices = ["Dye", "Mordant", "Fiber"];

export default function DyeingPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageHeader title="Interactive Dyeing" subtitle="See how dyes, mordants, and fibers change the color" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Placeholder title="Choose Your Combination" note="Fill in option lists; wire up color logic.">
                    {choices.map((choice) => (
                        <label key={choice} className="flex flex-col gap-1 font-inconsolata text-forest">
                            {choice}
                            <select disabled className="rounded-md border border-sage bg-white px-3 py-2 text-ink">
                                <option>Select a {choice.toLowerCase()}…</option>
                            </select>
                        </label>
                    ))}
                </Placeholder>

                <Placeholder title="Resulting Color" note="Swatch updates based on the selected combination.">
                    <div className="h-40 rounded-md border-2 border-sage bg-white" />
                </Placeholder>
            </div>

            <Placeholder title="Tested Sample Photo" note="Pop-up photo when the combination is one we have tested." />
        </div>
    );
}
