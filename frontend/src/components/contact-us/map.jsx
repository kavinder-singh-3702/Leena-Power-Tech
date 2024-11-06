import React from "react";

const Location = () => {
  return (
    <div className="py-16 bg-white">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-5xl font-extrabold text-blue-900">Location</h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mt-2"></div>
      </div>

      {/* Embedded Google Map */}
      <div className="flex justify-center">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9841325645564!2d73.07340437499546!3d19.021319945412125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e8fd04a1a01d%3A0x2d07e8d5e621c7b3!2sSai%20Chambers%2C%20Sector%2011%2C%20CBD%20Belapur%2C%20Navi%20Mumbai%2C%20Maharashtra%20400614!5e0!3m2!1sen!2sin!4v1631518749213!5m2!1sen!2sin"
          width="100%"
          height="400"
          className="border-0 rounded-lg shadow-lg max-w-7xl"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
