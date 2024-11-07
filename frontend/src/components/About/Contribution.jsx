
import Image from 'next/image';
import React from 'react';

const ContributionSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 py-8 px-4 md:px-12 lg:px-24">
      <div className="md:w-1/2 space-y-3">
        <h2 className="text-xl md:text-2xl font-bold text-blue-900">
          Our Contribution In Nation Building
        </h2>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          Over the years, we have helped bring electricity to all parts of the
          country. From developing substations to electrifying buildings, we
          have a versatile team with a strong work ethic. Starting with Navi
          Mumbai, we have expanded to different parts of the country,
          continuously building world-class infrastructure that withstands
          adverse conditions and serves the nation reliably.
        </p>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          With a national focus on renewable energy, our team is exploring new prospects and adapting to advanced technologies. Our company is aligned with PM's Gati Shakti Plan, a 100-lakh crore initiative to develop holistic infrastructure across the country. We believe in this vision and are committed to contributing as much as possible in our field.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-700 transition">
          Download Company Financial Document
        </button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 grid grid-cols-3 gap-1 md:gap-2">
        {[
          "/assets/banner/image1.jpg",
          "/assets/banner/image2.jpg",
          "/assets/banner/image3.jpg",
          "/assets/banner/image4.jpg",
          "/assets/banner/image2.jpg",
          "/assets/banner/image3.jpg",
          "/assets/banner/image4.jpg",
          "/assets/banner/image1.jpg",
          "/assets/banner/image2.jpg",
        ].map((src, index) => (
          <div key={index} className="relative w-full h-20 md:h-28 lg:h-32">
            <Image
              src={src}
              alt={`Contribution image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributionSection;
