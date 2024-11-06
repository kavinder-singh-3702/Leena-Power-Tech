import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="text-center p-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-6 relative inline-block">
        Our Services
        <div className="w-16 h-1 bg-yellow-500 mt-2 mx-auto"></div>
      </h2>
      <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* First Column */}
        <div className="grid grid-rows-2 gap-6">
          <div className="relative group">
            <Image
              width={264}
              height={264}
              src="/assets/banner/image1.jpg"
              alt="Transmission"
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-lg font-semibold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Transmission
            </div>
          </div>
          <div className="relative group">
            <Image
              width={264}
              height={264}
              src="/assets/banner/image4.jpg"
              alt="O & M"
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-lg font-semibold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              O & M
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="relative group row-span-2">
          <Image
            width={264}
            height={528} // Double the height to cover 2 rows
            src="/assets/banner/image2.jpg"
            alt="MEP Works"
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-lg font-semibold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            MEP Works
          </div>
        </div>

        {/* Third Column */}
        <div className="grid grid-rows-2 gap-6">
          <div className="relative group">
            <Image
              width={264}
              height={264}
              src="/assets/banner/image3.jpg"
              alt="Distribution"
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-lg font-semibold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Distribution
            </div>
          </div>
          <div className="relative group">
            <Image
              width={264}
              height={264}
              src="/assets/banner/image1.jpg"
              alt="Railways & Metro"
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-lg font-semibold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Railways & Metro
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
