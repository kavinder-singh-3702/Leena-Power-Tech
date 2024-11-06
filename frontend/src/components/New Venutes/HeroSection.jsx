import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative h-[90vh] bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/assets/backgrounds/bg-01.webp')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl tracking-wide font-extrabold text-white">
          SOLAR SYSTEM INSTALLATIONS
        </h1>
        <div className="w-32 h-2 bg-yellow-400 mt-4"></div>
      </div>
    </div>
  );
};

export default HeroSection;
