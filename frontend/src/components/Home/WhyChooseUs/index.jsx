// components/WhyChooseUs.js
import { FaThumbsUp, FaHandsHelping, FaTrophy } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section
      className="relative text-center py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/bg-01.webp')", // Replace with your image path
      }}
    >
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">
          Why Choose Us?
        </h2>

        {/* Yellow Divider */}
        <div className="w-16 h-1 bg-yellow-500 mx-auto mb-10"></div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-red-500 text-4xl mb-4 flex justify-center ">
              <FaThumbsUp />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Quality Service
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We work on quality solutions and timely delivery of the projects
              by using the latest technologies and ISO procedures. Our Strengths
              are our qualified engineers, Diversified Experience, and Devoted
              Employees who believe in the company’s mission of ‘Contributors to
              the Nation Building’.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 ">
            <div className="text-yellow-500 text-4xl mb-4  flex justify-center">
              <FaHandsHelping />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Super Support
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Our experienced project management team provides uninterrupted
              operational excellence. They are backed by a professional support
              team working 24x7 on preventive measures and maintenance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-green-500 text-4xl mb-4  flex justify-center">
              <FaTrophy />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Award Winning
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Our team has been recognized for their contributions by
              governments all over the country. We have received prestigious
              awards from the Government of India, the Government of
              Maharashtra, the Government of Jharkhand, the Government of Goa,
              and from many other prestigious institutions and noted
              individuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
