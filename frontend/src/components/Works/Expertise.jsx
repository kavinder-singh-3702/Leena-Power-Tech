// pages/index.js
import Image from 'next/image';
import expertiseImage from '/public/assets/banner/image6.jpg';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-lg p-8">
        <div className="w-full lg:w-1/4 overflow-hidden rounded-lg shadow-md">
          <Image 
            src={expertiseImage} 
            alt="MEP Project Image" 
            layout="responsive" 
            width={200} 
            height={100} 
            className="rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 text-gray-800">
          <p className="text-gray-600 mb-4">
            MEP Engineering is an integral part of a building. We are responsible for planning and designing MEP systems, including developing policy standards, inspection procedures, and evaluation tools for MEP concerns. Our team specializes in preparing project reports, reviewing, drawing, specification, and cost estimates for the MEP project.
          </p>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Expertise</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">➤</span> Internal & External building electrification
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">➤</span> Captive Power Works
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">➤</span> HVAC System
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">➤</span> Building Management System
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">➤</span> Landscape lighting
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 mr-2">➤</span> Green Building Electrification
            </li>
          </ul>
          <p className="text-gray-600 mt-4">
            We have executed more than 30 major projects costing a total value of more than 150 Cr for clients such as CIDCO, SBI, and IDBI amongst many others.
          </p>
        </div>
      </section>
    </div>
  );
}
