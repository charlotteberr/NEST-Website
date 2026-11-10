import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export default function ExhibitionPage() {
    return (
        <div className="flex flex-col gap-8">
            <PageHeader title="Public Exhibition" />

            <Section title="What You'll See There">
                <p>
                    Our exhibition at the Boulder Public Library is a display of the work behind Branching Logic, following
                    each idea from a Colorado plant to a finished piece of cloth.
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-moss">
                    <li>
                        <strong>Our thought process:</strong> the sketches, hand-drawn drafts, carved stamps, and notes we
                        used to turn the shapes and growth patterns of plants into weave designs.
                    </li>
                    <li>
                        <strong>Woven examples:</strong> samples woven from those designs, including the aster pattern and
                        the branching L-system designs inspired by rabbitbrush.
                    </li>
                    <li>
                        <strong>The plants that inspired them:</strong> the Colorado native plants behind each design, like
                        rabbitbrush and asters.
                    </li>
                </ul>
            </Section>

            <Section title="Location">
                <p>
                    Boulder Public Library
                    <br />
                    1001 Arapahoe Avenue, Boulder, CO 80302
                </p>
            </Section>

            <Section title="Dates">
                <p>2027, exact months TBD</p>
            </Section>
        </div>
    );
}
