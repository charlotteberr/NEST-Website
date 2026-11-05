// Highlights a spot our mentors' docs marked as still to be filled in, e.g. "[name]".
// Search the code for <DraftNote to find every one that is left.
export default function DraftNote({ children }: { children: React.ReactNode }) {
    return (
        <span className="rounded bg-yellow-100 border border-dashed border-yellow-500 px-1 font-inconsolata text-sm text-yellow-900">
            [{children}]
        </span>
    );
}
