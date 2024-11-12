import React from "react";
import Image from "next/image";

const SolarSystemInfo = () => {
  return (
    <div className="bg-white">
      {/* Text and Image Section */}
      <section className="py-10 md:py-16 px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/charging-point.webp"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[20vw] object-cover rounded-lg shadow-lg"
            width={350}
            height={300}
            alt="Electric Vehicle Charging Station"
          />
        </div>

        {/* Text Section */}
        <div className="text-left text-gray-700 md:ml-4 lg:ml-8">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 md:mb-8">
            The challenge of increasing pollution and decreasing fuel reserves
            presented the opportunity to invent Electric Vehicles as an
            environment-friendly means of transport.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 md:mb-8">
            Sharing the vision of the Govt of India to have Electric Vehicles
            for public transport by 2030, LPT is excited to offer Electric
            Mobility Solutions through setting up Electric Vehicle Charging
            Stations (EVCS).
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Through joint ventures with international partners, LPT EVCS aims at
            re-defining the transport scenario in India.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SolarSystemInfo;
