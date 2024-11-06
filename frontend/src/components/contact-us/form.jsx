import React from "react";
import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="bg-white py-16 flex justify-center items-center">
      {/* Main Container with Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-7xl w-full">
        {/* Left Image Section */}
        <div className="flex justify-center items-center p-10">
          <Image
            src="/worker.png" // Replace with your correct path to the image
            alt="Worker Illustration"
            width={600} // Adjust width and height as necessary
            height={600}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Form Section */}
        <div className="bg-blue-900 text-white p-10 rounded-lg flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2 text-center">Get In Touch</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6"></div>

          {/* Form */}
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="bg-blue-900 border-b border-gray-300 focus:outline-none focus:border-yellow-400 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="sr-only">
                Phone no.
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Phone no."
                className="bg-blue-900 border-b border-gray-300 focus:outline-none focus:border-yellow-400 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="bg-blue-900 border-b border-gray-300 focus:outline-none focus:border-yellow-400 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                rows="3"
                className="bg-blue-900 border-b border-gray-300 focus:outline-none focus:border-yellow-400 py-2 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-yellow-400 text-blue-900 font-semibold px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-200"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
