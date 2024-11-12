import React from "react";
import Image from "next/image";

const SolarSystemInfo = () => {
  return (
    <div className="bg-white">
      {/* Text Section */}
      <section className="px-4 py-8 md:py-12 lg:py-16">
        <div className="max-w-5xl mx-auto text-left text-gray-700">
          <h1 className="font-extrabold text-3xl sm:text-4xl tracking-wider mb-4">
            CSR @ LPTE
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mt-6">
            At Leena Powertech, we firmly believe in giving back to society. Our
            CSR initiatives are a reflection of this philosophy. Every year,
            during National Safety Week, we run safety campaigns at our sites to
            increase awareness. We have also carried out plantation activities
            in multiple places to tackle global warming and become a responsible
            corporate citizen.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mt-6 mb-8">
            Apart from this, we have also been conducting Skill Workshops for
            underprivileged children to help them earn respect and lead an
            independent life. This is in line with our ‘Believe in People’
            principle. We believe that every person is worthy and if provided
            with the right direction, they can break barriers and excel in any
            field.
          </p>
          <button className="px-6 py-2 bg-blue-900 text-white font-medium rounded-md hover:bg-white hover:text-blue-900 border border-blue-900 transition-colors duration-200">
            Download company policy
          </button>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="px-4 md:px-20 lg:px-40 py-8 md:py-12 lg:py-16 text-center">
        <h2 className="text-3xl sm:text-4xl tracking-wider font-extrabold text-blue-900 mb-6">
          CSR Activity & Plantation At Satpati
        </h2>
        <div className="border-t-2 border-gray-300 mb-8"></div>
        <p className="text-base sm:text-lg leading-relaxed mt-6 md:mt-12 mb-20 md:mb-32">
          During our work in Satpati, our company ran a program that encouraged
          the people of the town to plant trees in their area. Our team visited
          the schools in the area to educate the children about saving our
          environment.
        </p>

        {/* Grid of Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Image
            width={264}
            height={264}
            src="/assets/banner/image1.jpg"
            alt="Solar installation 1"
            className="w-full h-auto rounded-md shadow-lg"
          />
          <Image
            width={264}
            height={264}
            src="/assets/banner/image2.jpg"
            alt="Solar installation 2"
            className="w-full h-auto rounded-md shadow-lg"
          />
          <Image
            width={264}
            height={264}
            src="/assets/banner/image3.jpg"
            alt="Solar installation 3"
            className="w-full h-auto rounded-md shadow-lg"
          />
          <Image
            width={264}
            height={264}
            src="/assets/banner/image4.jpg"
            alt="Solar installation 4"
            className="w-full h-auto rounded-md shadow-lg"
          />
          <Image
            width={264}
            height={264}
            src="/assets/banner/image1.jpg"
            alt="Solar installation 5"
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>
      </section>

      {/* National Safety Week Section */}
      <section className="px-4 md:px-20 lg:px-40 py-8 md:py-12 lg:py-16 text-center">
        <h2 className="text-3xl sm:text-4xl tracking-wider font-extrabold text-blue-900 mb-6">
          National Safety Week
        </h2>
        <div className="border-t-2 border-gray-300 mb-8"></div>
        <p className="text-base sm:text-lg leading-relaxed mt-6 md:mt-12 mb-20 md:mb-32">
          Every year in March, we run campaigns on all our sites to raise
          awareness about the SHE (Safety, Health, and Environment) movement and
          motivate people to create safer workplaces.
        </p>

        {/* Grid of Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Image
            width={264}
            height={264}
            src="/assets/banner/image1.jpg"
            alt="Solar installation 1"
            className="w-full h-auto rounded-md shadow-lg"
          />
          <Image
            width={264}
            height={264}
            src="/assets/banner/image2.jpg"
            alt="Solar installation 2"
            className="w-full h-auto rounded-md shadow-lg"
          />
          <Image
            width={264}
            height={264}
            src="/assets/banner/image3.jpg"
            alt="Solar installation 3"
            className="w-full h-auto rounded-md shadow-lg"
          />
          <Image
            width={264}
            height={264}
            src="/assets/banner/image4.jpg"
            alt="Solar installation 4"
            className="w-full h-auto rounded-md shadow-lg"
          />
          <Image
            width={264}
            height={264}
            src="/assets/banner/image1.jpg"
            alt="Solar installation 5"
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default SolarSystemInfo;
