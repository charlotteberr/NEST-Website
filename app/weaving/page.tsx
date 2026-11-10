import ButtonLink from "@/components/ButtonLink";
import PageHeader from "@/components/PageHeader";
import { TextLink } from "@/components/Research";
import Section from "@/components/Section";

const ADACAD = "https://adacad.org";
const ADACAD_DOCS = "https://docs.adacad.org";
const ADACAD_GITHUB = "https://github.com/UnstableDesign/AdaCAD";

export default function WeavingPage() {
    return (
        <div className="flex flex-col gap-10">
            <PageHeader title="AdaCAD" />

            <Section title="About AdaCAD">
                <p>
                    <TextLink href={ADACAD}>AdaCAD</TextLink> is a free, open-source weave drafting tool made by the Unstable
                    Design Lab, a group of researchers at CU Boulder. It runs right in your web browser, so there is nothing to
                    download or install.
                </p>
                <p>
                    Instead of filling in a draft one square at a time, AdaCAD uses parametric design. You build a dataflow by
                    connecting operations, where each operation is a step that takes in a draft or some settings (its
                    parameters) and makes a new draft. Changing a parameter, or anything earlier in the dataflow, changes the
                    final draft. This makes it easy to try out many versions of a pattern quickly, which fits the way we sample.
                </p>
                <p>
                    AdaCAD is built with complex and Jacquard weaving in mind, and it also supports frame, dobby, and direct
                    tie looms. Because it is open source, anyone can add their own operation, which is how the plant-inspired
                    tools from this project are shared.
                </p>
                <div className="flex flex-wrap gap-2">
                    <ButtonLink href={ADACAD}>Open AdaCAD</ButtonLink>
                    <ButtonLink href={ADACAD_DOCS}>AdaCAD docs</ButtonLink>
                    <ButtonLink href={ADACAD_GITHUB}>AdaCAD on GitHub</ButtonLink>
                </div>
            </Section>

            <Section title="Our AdaCAD Operations">
                <p>
                    For this project we designed new operations inspired by our plants. Deanna created an operation that grows
                    an L-system and draws it as a woven figure, inspired by rabbitbrush&apos;s branching. Etta&apos;s aster
                    draft turns the aster&apos;s compound flower into a cluster of pattern units that can be tiled into cloth.
                </p>
                <div className="flex flex-wrap gap-2">
                    <ButtonLink href="/rabbitbrush">Rabbitbrush Research</ButtonLink>
                    <ButtonLink href="/aster">Aster Research</ButtonLink>
                </div>
            </Section>

        </div>
    );
}
