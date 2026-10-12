interface PageHeaderProps {
    title: string;
    subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
    return (
        <div className="w-full mb-10 pb-6 border-b-2 border-moss">
            <h1 className="font-inconsolata text-forest text-4xl font-semibold">{title}</h1>
            {subtitle && (
                <p className="mt-2 sm:pl-8 font-inconsolata text-moss text-xl font-semibold">{subtitle}</p>
            )}
        </div>
    );
}
