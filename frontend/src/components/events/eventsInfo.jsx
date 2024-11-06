import React from "react";
import Image from "next/image";

const SolarSystemInfo = () => {
  return (
    <div className="bg-white">
      {/* Text Section */}
      <section className="px-4 py-10 md:py-16">
        <div className="max-w-7xl mx-auto text-left text-gray-700">
          <p className="text-lg md:text-base leading-relaxed mt-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            modi, eius corrupti quas blanditiis numquam error, eum omnis
            reiciendis veniam totam quibusdam iusto corporis. Adipisci
            voluptatum sed hic rem error nihil sint odio consequatur tenetur
            nesciunt minus dolorum minima excepturi rerum, dicta quo explicabo
            voluptate. Architecto fuga vitae ipsam animi!
          </p>

          <p className="text-lg md:text-base leading-relaxed mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rem
            sint quo autem voluptates doloribus dolores neque. Consequuntur quos
            delectus alias odit consectetur impedit nihil earum, saepe illo
            eius, iure commodi explicabo temporibus dolor repellendus labore
            veritatis necessitatibus perspiciatis asperiores maiores maxime
            provident deserunt? Alias nihil natus sapiente. Aliquid optio rerum
            iste itaque rem tenetur ut voluptatibus, amet ex accusantium
            mollitia quod officia sunt, debitis, aliquam esse est voluptates
            beatae!
          </p>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="px-40 py-10 md:py-16 text-center">
        <h2 className="text-4xl tracking-wider font-bold text-blue-700 mb-6">
          Leena Power Tech Events
        </h2>
        <div className="border-t-2 border-gray-300 mb-8"></div>

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
