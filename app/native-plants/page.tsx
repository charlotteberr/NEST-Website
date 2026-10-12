import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";

export default function NativePlantsPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageHeader title="Colorado Native Plants" subtitle="The plants we work with" />

            <Placeholder title="Our Plants" note="A profile for each native plant we work with.">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3].map((n) => (
                        <div key={n} className="h-32 rounded-md border-2 border-sage bg-white flex items-center justify-center font-inconsolata text-moss">
                            Plant {n}
                        </div>
                    ))}
                </div>
            </Placeholder>

            <Placeholder title="Where They Grow" note="Interactive map of where the plants are most common." />
            <Placeholder title="Plant Matching Game" note="Match the name or attribute to the plant." />
        </div>
    );
}
