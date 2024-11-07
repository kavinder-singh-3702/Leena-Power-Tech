import Image from "next/image";
import React from "react";

const images = [
  {
    src: "/assets/banner/image1.jpg",
    title: "Maharashtra State Chief Minister",
    description: "Successful completion of ECBC project in Navi Mumbai.",
  },
  {
    src: "/assets/banner/image1.jpg",
    title: "Goa State Award",
    description: "Recognition from the Government of Goa.",
  },
  {
    src: "/assets/banner/image1.jpg",
    title: "Jharkhand State Recognition",
    description: "Award from the Government of Jharkhand.",
  },
];
export default function IntroductionGallery() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Introduction</h2>
        <p className="text-lg text-gray-700 mb-8">
          Our company is one of the leading EPC companies in the country. This
          is demonstrated by the numerous prestigious awards our team has
          received from many governments like the Government of Maharashtra,
          Government of Goa, and the Government of Jharkhand. Here are some of
          the photos of our team receiving accolades.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative group perspective">
              <div className="relative w-full h-64 bg-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden">
                  <Image
                    width={264}
                    height={264}
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-blue-900 text-white p-6 flex flex-col justify-center items-center backface-hidden rotate-y-180">
                  <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
