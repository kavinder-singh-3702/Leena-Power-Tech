import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative h-[70vh] bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/assets/banner/image8.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wide font-extrabold text-white">
          Operation & Maintenance
        </h1>
        <div className="w-24 sm:w-32 h-2 bg-yellow-400 mt-4"></div>
      </div>
    </div>
  );
};

export default HeroSection;
