import React from "react";
import Image from "next/image";

const SolarSystemInfo = () => {
  return (
    <div className="bg-white">
      <section className="px-40 py-10 md:py-16 text-center">
        <div className="border-t-2 border-gray-300 mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="text-center">
            <Image
              width={264}
              height={264}
              src="/assets/banner/image1.jpg"
              alt="Spaghetti Housing Kharghar"
              className="w-full h-auto rounded-md shadow-lg"
            />
            <p className="mt-2 text-blue-800 font-semibold">Spaghetti Housing Kharghar</p>
          </div>
          <div className="text-center">
            <Image
              width={264}
              height={264}
              src="/assets/banner/image2.jpg"
              alt="Kharghar"
              className="w-full h-auto rounded-md shadow-lg"
            />
            <p className="mt-2 text-blue-800 font-semibold">Kharghar</p>
          </div>
          <div className="text-center">
            <Image
              width={264}
              height={264}
              src="/assets/banner/image3.jpg"
              alt="Agri Koli Bhavan"
              className="w-full h-auto rounded-md shadow-lg"
            />
            <p className="mt-2 text-blue-800 font-semibold">Agri Koli Bhavan</p>
          </div>
          <div className="text-center">
            <Image
              width={264}
              height={264}
              src="/assets/banner/image4.jpg"
              alt="Gram Vikas Bhavan"
              className="w-full h-auto rounded-md shadow-lg"
            />
            <p className="mt-2 text-blue-800 font-semibold">Gram Vikas Bhavan</p>
          </div>
          <div className="text-center">
            <Image
              width={264}
              height={264}
              src="/assets/banner/image1.jpg"
              alt="Central Park Kharghar"
              className="w-full h-auto rounded-md shadow-lg"
            />
            <p className="mt-2 text-blue-800 font-semibold">Central Park Kharghar</p>
          </div>
          <div className="text-center">
            <Image
              width={264}
              height={264}
              src="/assets/banner/image1.jpg"
              alt="Palghar DHQ"
              className="w-full h-auto rounded-md shadow-lg"
            />
            <p className="mt-2 text-blue-800 font-semibold">Palghar DHQ</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolarSystemInfo;
