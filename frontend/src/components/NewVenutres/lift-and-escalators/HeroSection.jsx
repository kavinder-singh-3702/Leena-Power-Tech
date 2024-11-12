import React from "react";

const HeroSection = () => {
  return (
    <>
      <div
        className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/assets/backgrounds/bg-03.webp')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-wide font-extrabold text-white">
            Lift and Escalators
          </h1>
          <div className="w-24 sm:w-28 md:w-36 h-1 sm:h-2 bg-yellow-400 mt-4"></div>
        </div>
      </div>

      <div className="bg-white">
        <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-10 md:py-16">
          <div className="max-w-5xl mx-auto text-left text-gray-700">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 md:mb-8">
              With the increasing modernization of places across the country,
              our company has forayed into the business of lifts and escalators.
              In collaboration with our partners, we provide seamless solutions
              to make places more accessible.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
