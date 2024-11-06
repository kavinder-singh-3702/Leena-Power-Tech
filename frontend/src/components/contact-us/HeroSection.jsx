import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative h-[90vh] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/assets/backgrounds/bg-06.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl tracking-wide font-extrabold text-white">
            Contact Us
          </h1>
          <div className="w-32 h-2 bg-yellow-400 mt-4"></div>
        </div>

        {/* Cards Section Positioned Over Hero Section */}
        <div className="absolute inset-x-0 top-3/4 transform -translate-y-1/2 flex justify-center">
          <div className="flex flex-col md:flex-row gap-8 px-4">
            {/* Address Card */}
            <div className="bg-white p-6 w-80 h-48 rounded-lg shadow-lg flex flex-col items-center text-center">
              <FaMapMarkerAlt className="text-blue-900 text-3xl mb-4" />
              <h2 className="text-lg font-semibold text-blue-900 mb-2">
                Address
              </h2>
              <p className="text-gray-700 text-sm">
                13-15, Ground Floor, Sai Chambers, Sector-11, C.B.D Belapur,
                Navi Mumbai - 400614
              </p>
            </div>

            {/* Telephone Card */}
            <div className="bg-white p-6 w-80 h-48 rounded-lg shadow-lg flex flex-col items-center text-center">
              <FaPhoneAlt className="text-blue-900 text-3xl mb-4" />
              <h2 className="text-lg font-semibold text-blue-900 mb-2">
                Telephone
              </h2>
              <p className="text-gray-700 text-sm">022 61389100</p>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 w-80 h-48 rounded-lg shadow-lg flex flex-col items-center text-center">
              <FaEnvelope className="text-blue-900 text-3xl mb-4" />
              <h2 className="text-lg font-semibold text-blue-900 mb-2">
                Email
              </h2>
              <p className="text-gray-700 text-sm">info@lptindia.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
