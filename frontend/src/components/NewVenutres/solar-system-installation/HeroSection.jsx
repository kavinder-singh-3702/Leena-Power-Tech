import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/assets/backgrounds/bg-01.webp')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wide font-extrabold text-white">
          SOLAR SYSTEM INSTALLATIONS
        </h1>
        <div className="w-20 sm:w-24 md:w-32 h-1 sm:h-2 bg-yellow-400 mt-4"></div>
      </div>
    </div>
  );
};

export default HeroSection;
