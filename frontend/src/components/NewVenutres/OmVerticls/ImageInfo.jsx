import React from "react";
import Image from "next/image";

const SolarSystemInfo = () => {
  return (
    <div className="bg-white">
      <section className="px-4 sm:px-10 md:px-20 lg:px-40 py-10 md:py-16 text-center">
        <div className="border-t-2 border-gray-300 mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { src: "/assets/banner/image1.jpg", alt: "Spaghetti Housing Kharghar", label: "Spaghetti Housing Kharghar" },
            { src: "/assets/banner/image2.jpg", alt: "Kharghar", label: "Kharghar" },
            { src: "/assets/banner/image3.jpg", alt: "Agri Koli Bhavan", label: "Agri Koli Bhavan" },
            { src: "/assets/banner/image4.jpg", alt: "Gram Vikas Bhavan", label: "Gram Vikas Bhavan" },
            { src: "/assets/banner/image1.jpg", alt: "Central Park Kharghar", label: "Central Park Kharghar" },
            { src: "/assets/banner/image1.jpg", alt: "Palghar DHQ", label: "Palghar DHQ" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <Image
                src={item.src}
                alt={item.alt}
                width={264}
                height={264}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-auto rounded-md shadow-lg"
              />
              <p className="mt-2 text-blue-800 font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SolarSystemInfo;
