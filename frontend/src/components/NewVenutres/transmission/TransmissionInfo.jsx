
import Image from 'next/image';
import substationImg from '/public/assets/banner/image1.jpg';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-base mb-6 text-gray-700 leading-relaxed">
        LPTE is capable of proficiently erecting GIS, AIS, and EHV substations, designing AC traction HV Substation of 110/220/400 KV, constructing 110/220 KV Tower & monopole Transmission Lines, and laying EHV cabling.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-10 md:ml-10">
        <div className="w-full md:w-1/3 lg:w-1/4">
          <Image 
            src={substationImg} 
            alt="Substation Image" 
            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" 
            layout="responsive" 
            width={500} 
            height={300} 
          />
        </div>
        <div className="w-full md:w-1/2">
          <ul className="space-y-3 text-gray-700">
            {[
              "EHV Substation",
              "Designing of AC traction, HV Substation of 110/220/400 KV",
              "33 KV Indoor/Outdoor Substation",
              "Unitized Substation",
              "Transmission Lines",
              "GIS Substation",
              "33/11 KV L.T. Overhead & Underground Network"
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 19.4l-6.4-6.4 1.4-1.4L9 16.6l10-10 1.4 1.4-11.4 11.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-sm font-semibold">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
