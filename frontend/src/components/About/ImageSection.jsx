import Image from 'next/image';

export default function ImageSection() {
    return (
        <div className="relative w-full md:w-2/4 mt-10 mb-4 ml-20 h-100"> {/* Adjust height as needed */}
            <Image
                src="/assets/banner/image1.jpg"
                alt="Safety Week Campaign"
                fill
                className="rounded-tr-none rounded-br-lg rounded-tl-lg rounded-bl-lg object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    );
}
