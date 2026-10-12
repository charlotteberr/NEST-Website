import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";

export default function WorkshopPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageHeader title="Workshop" subtitle="Join us to dye and weave with native plants" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Placeholder title="Location" note="Where the workshop is held." />
                <Placeholder title="Date & Sign-Up" note="When it is and how to attend." />
            </div>

            <Placeholder title="What We'll Teach" note="What will be shown and taught at the workshop." />
        </div>
    );
}
