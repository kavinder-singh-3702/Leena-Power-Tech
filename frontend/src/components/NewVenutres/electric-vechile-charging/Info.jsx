import React from "react";
import Image from "next/image";

const SolarSystemInfo = () => {
  return (
    <div className="bg-white">
      {/* Text Section */}
      <section className=" py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/charging-point.webp"
            className="w-full max-w-[20vw] object-cover rounded-lg shadow-lg"
            width={350} // Limit the image width
            height={300}
            alt="Electric Vehicle Charging Station"
          />
        </div>

        {/* Text Section */}
        <div className="text-left text-gray-700 -translate-x-24">
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            The challenge of increasing pollution and decreasing fuel reserves
            presented the opportunity to invent Electric Vehicles as an
            environment-friendly means of transport.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-8">
            Sharing the vision of the Govt of India to have Electric Vehicles
            for public transport by 2030, LPT is excited to offer Electric
            Mobility Solutions through setting up Electric Vehicle Charging
            Stations (EVCS).
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            Through joint ventures with international partners, LPT EVCS aims at
            re-defining the transport scenario in India.
          </p>
        </div>
      </section>

      {/* Image Gallery Section */}
    </div>
  );
};

export default SolarSystemInfo;
