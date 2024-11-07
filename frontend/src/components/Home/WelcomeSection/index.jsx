// components/WelcomeSection.js
const WelcomeSection = () => {
  return (
    <section className="bg-white text-center py-20 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2 leading-snug">
          WELCOME TO LEENA POWERTECH
        </h2>

        {/* Yellow Divider */}
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6 mt-4"></div>

        {/* Description */}
        <p className="text-gray-700 text-[3vh] md:text-xl leading-relaxed mb-10">
          Partnering in the country`&apos;`s progress in developing electrical
          distribution infrastructure, Leena Powertech Engineers Pvt Ltd (LPTE)
          is an integrated EPC company specializing in Turnkey Electrical
          Engineering Services.
          <br />
          <br />
          Our work spans sectors like Power Transmission, Distribution, Building
          Electrification, Railway Electrification, Renewable Energy (Solar),
          and Electric Vehicle Charging Station Systems.
        </p>

        {/* Read More Button */}
        <button className="bg-yellow-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-yellow-600 transition duration-300">
          READ MORE
        </button>
      </div>
    </section>
  );
};

export default WelcomeSection;
