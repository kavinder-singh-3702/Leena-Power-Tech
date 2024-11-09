import React from "react";
const Opportunities = () => {
  return (
    <div className="min-h-screen bg-white flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold text-blue-800 mb-6">
            Opportunities In LPTE
          </h1>
          <p className="text-gray-700 mb-6">
            LPTE is a professionally managed EPC company with employment policies and systems that radiate from a single principle &quot;Believe in people&quot;. People are our most valued assets and strength. At LPTE we believe that taking care of our team and encouraging them is an important part of our culture...
          </p>
          <p className="text-gray-700 mb-6">
            To be a part of our team, all you need to do is to send us your resume to:
            <a href="mailto:careers@lpteindia.in" className="text-blue-600"> careers@lpteindia.in </a> &amp;
            <a href="mailto:hr@lpteindia.in" className="text-blue-600"> hr@lpteindia.in </a>
          </p>
          <h2 className="text-2xl font-semibold text-red-700 mt-8">Important Notice</h2>
          <p className="text-red-600 mt-4">
            LPTE has a merit-based employee selection practice. LPTE does not charge any security deposit or any kind of fees from the prospective job seekers, either fresh or experienced...
          </p>
        </div>
        <div className="bg-gradient-to-b from-blue-700 to-blue-500 p-8 rounded-lg shadow-lg text-white">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name *" className="p-3 bg-white text-black rounded-md w-full"/>
              <input type="text" placeholder="Last Name *" className="p-3 bg-white text-black rounded-md w-full"/>
            </div>
            <input type="email" placeholder="Email *" className="p-3 bg-white text-black rounded-md w-full"/>
            <input type="tel" placeholder="Phone *" className="p-3 bg-white text-black rounded-md w-full"/>
            <select className="p-3 bg-white text-black rounded-md w-full">
              <option value="">Select Country *</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="India">India</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="China">China</option>
              <option value="Japan">Japan</option>
              <option value="Brazil">Brazil</option>
              <option value="Mexico">Mexico</option>
            </select>
            <textarea placeholder="Message" className="p-3 bg-white text-black rounded-md w-full"></textarea>
            <div>
              <label className="text-white mb-2 block">Upload Resume* </label>
              <input type="file" className="p-3 bg-white text-black rounded-md w-full"/>
            </div>
            <button className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition duration-200">
              SUBMIT FORM
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
