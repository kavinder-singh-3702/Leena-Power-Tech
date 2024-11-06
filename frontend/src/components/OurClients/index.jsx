import React from "react";
import Slide from "./slide";

const OurClients = () => {
  return (
    <section className="bg-blue-50 py-16 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Clients</h2>
        <div className="w-16 h-1 bg-yellow-500 mt-2 mx-auto mb-4"></div>
        <p className="text-gray-700 text-lg mb-12">
          See some of our satisfied clients over the world.
        </p>
      </div>
      {/* Placeholder for Partner Logos Component */}
      <div className="mt-8">
        {/* Replace this div with your partner logos component */}
        <Slide />
      </div>
    </section>
  );
};

export default OurClients;
