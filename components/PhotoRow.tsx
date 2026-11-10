import Image, { StaticImageData } from "next/image";

interface Photo {
    src: StaticImageData;
    alt: string;
}

// A row of photos that wraps to one column on small screens.
export default function PhotoRow({ photos }: { photos: Photo[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo) => (
                <Image
                    key={photo.alt}
                    src={photo.src}
                    alt={photo.alt}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="w-full h-64 object-cover rounded-md"
                />
            ))}
        </div>
    );
}
