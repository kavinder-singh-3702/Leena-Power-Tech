import React from "react";
import Image from "next/image";

const SolarSystemInfo = () => {
  return (
    <div className="bg-white">
      {/* Text Section */}
      <section className="px-4 py-10 md:py-16">
        <div className="max-w-7xl mx-auto text-left text-gray-700">
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            Unlike gas and coal, solar energy is renewable, clean and
            sustainable. Solar power does not pollute our air or contribute to
            global warming. For many businesses, being `&quot;`green`&quot;` and
            making environmentally-friendly decisions is important to their
            business goals.
          </p>

          <h2 className="text-xl font-semibold mb-4">
            Some Advantages of Solar Energy -
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Renewable Energy Source. Among all the benefits of solar panels,
              the most important thing is that solar energy is a truly renewable
              energy source.
            </li>
            <li>Reduces Electricity Bills.</li>
            <li>Diverse Applications.</li>
            <li>Low Maintenance Costs.</li>
            <li>Technology Development.</li>
          </ul>

          <p className="text-lg md:text-base leading-relaxed mt-8">
            Compared with the approximately 15 GW of solar capacity deployed in
            2020, annual solar deployment is 30 GW on average in the early 2020s
            and grows to 60 GW on average from 2025 to 2030. Similarly
            substantial solar deployment rates continue in the 2030s and beyond.{" "}
            <span className="font-semibold">
              Photovoltaics (PV) and concentrating solar power
            </span>{" "}
            are likely to continue to grow rapidly. The National Renewable
            Energy Laboratory (NREL) projects solar energy could provide 45% of
            the electricity in the United States by 2050 if the energy system is
            fully decarbonized and technology costs are projected to continue to
            be lowered.
          </p>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="px-40 py-10 md:py-16 text-center">
        <h2 className="text-4xl tracking-wider font-bold text-blue-700 mb-6">
          Solar System At Bhoomiputra Bhavan Ulwe
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
