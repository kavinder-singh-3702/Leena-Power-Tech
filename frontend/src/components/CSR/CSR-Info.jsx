import React from "react";
import Image from "next/image";

const SolarSystemInfo = () => {
  return (
    <div className="bg-white">
      {/* Text Section */}
      <section className="px-4 py-10 md:py-16">
        <div className="max-w-7xl mx-auto text-left text-gray-700">
          <h1 className="font-extrabold text-4xl tracking-wider mb-4">
            CSR @ LPTE
          </h1>
          <p className="text-lg md:text-base leading-relaxed mt-8">
            At Leena Powertech, we firmly believe in giving back to the society.
            Our CSR initiatives are a reflection of this philosophy. Every year,
            during the National Safety Week, we run safety campaign at our sites
            to increase awareness. We have also carried out plantation
            activities in multiple places to tackle global warming and become a
            responsible corporate citizen.
          </p>

          <p className="text-lg md:text-base leading-relaxed mt-8 mb-10">
            Apart from this, we have also been carried out Skill Workshops for
            underprivileged children to help them earn respect and lead an
            independent life. This is in line with our ‘Believe in People’
            principle. We believe that every person is worthy and if provided
            with the right direction, they can break barriers and excel in any
            field.
          </p>
          <button class="px-6 py-2 bg-blue-900 text-white font-medium rounded-md hover:bg-white hover:text-blue-900 border border-blue-900 transition-colors duration-200">
            Download company policy
          </button>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="px-40 py-10 md:py-16 text-center">
        <h2 className="text-4xl tracking-wider font-extrabold text-blue-900 mb-6">
          CSR Activity & Plantation At Satpati{" "}
        </h2>
        <div className="border-t-2 border-gray-300 mb-8"></div>
        <p className="text-lg md:text-base leading-relaxed mt-12 mb-32">
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
      <section className="px-40 py-10 md:py-16 text-center">
        <h2 className="text-4xl tracking-wider font-extrabold text-blue-900 mb-6">
          National Safety Week{" "}
        </h2>
        <div className="border-t-2 border-gray-300 mb-8"></div>
        <p className="text-lg md:text-base leading-relaxed mt-12 mb-32">
          Every year in the month of March, we run campaigns on all our sites to
          make people aware about the SHE(Safety, Health and Environment)
          movement, and to motivate people to create safer workplaces.
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
