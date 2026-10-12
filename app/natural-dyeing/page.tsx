import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";

const steps = [1, 2, 3, 4];

export default function NaturalDyeingPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageHeader title="Natural Dyeing" subtitle="The steps of natural dyeing and the reasons for each" />

            <Placeholder title="Introduction" note="What natural dyeing is and an overview of the process." />

            <ol className="flex flex-col gap-6">
                {steps.map((step) => (
                    <li key={step}>
                        <Placeholder title={`Step ${step}`} note="What to do in this step and why." />
                    </li>
                ))}
            </ol>
        </div>
    );
}
