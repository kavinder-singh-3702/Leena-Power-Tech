
import Image from 'next/image';
export default function ImageSection() {
    return (
        <div className="relative w-full md:w-2/4 mt-10 mb-4 ml-20">
        <Image
          src="/assets/banner/image1.jpg"
          alt="Safety Week Campaign"
          layout="responsive"
          className="rounded-tr-none rounded-br-lg rounded-tl-lg rounded-bl-lg"
          width={300}
          height={200}
        />
      </div>
    );
  }