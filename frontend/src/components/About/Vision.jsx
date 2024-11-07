// import Image from 'next/image';
// import { FaEye, FaHandshake } from 'react-icons/fa';

// export default function VisionMissionSection() {
//     return (
//         <section className="flex flex-col md:flex-row items-center justify-center my-16 px-6 md:px-20 mt-20">
//             <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
//                 <div className="w-48 h-48 md:w-64 md:h-64 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden relative">
//                     <Image
//                       src="/assets/banner/image1.jpg"
//                       alt="Vision and Mission"
//                       fill
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                       className="object-cover rounded-full"
//                     />
//                 </div>
//             </div>
//             <div className="w-full md:w-2/5 bg-white rounded-lg shadow-lg p-8 space-y-6">
//                 <h2 className="text-2xl font-bold text-blue-900 text-center md:text-left">Vision & Mission</h2>
//                 <div className="h-1 w-16 bg-yellow-500 mx-auto md:mx-0 mb-6"></div>

//                 <div className="space-y-4">
//                     <div className="flex items-start space-x-4">
//                         <FaEye className="text-blue-800 w-20 h-20" />
//                         <div>
//                             <h3 className="text-md font-semibold text-blue-900">Vision</h3>
//                             <p className="text-gray-700">
//                                 To become a leading EPC company across PAN-India, (Distribution, Transmission, Railway Electrification, MEP, and O&M).
//                             </p>
//                         </div>
//                     </div>
//                     <div className="flex items-start space-x-4">
//                         <FaHandshake className="text-blue-800 w-20 h-20" />
//                         <div>
//                             <h3 className="text-md font-semibold text-blue-900">Mission</h3>
//                             <ul className="text-gray-700 list-disc list-inside space-y-1 text-sm">
//                                 <li>To adopt practices that strengthen our core.</li>
//                                 <li>Setting High Standards with Services, Reliability, and Integrity in our Business.</li>
//                                 <li>Identify individuals with drive who will be able to run with us during the next 6-8 years.</li>
//                                 <li>Define processes and hierarchy to improve efficiency and make people responsible for their work.</li>
//                                 <li>Create a positive and entrepreneurial atmosphere in the company.</li>
//                                 <li>Define processes that are natural and people can carry out easily.</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
// import Image from 'next/image';
// import { FaEye, FaHandshake } from 'react-icons/fa';

// export default function VisionMissionSection() {
//     return (
//         <section className="flex flex-col md:flex-row items-center justify-center my-16 px-6 md:px-20 mt-20">
//             <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
//                 <div className="w-48 md:w-64 aspect-square bg-blue-100 rounded-full flex items-center justify-center overflow-hidden relative">
//                     <Image
//                       src="/assets/banner/image1.jpg"
//                       alt="Vision and Mission"
//                       fill
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                       className="object-cover rounded-full"
//                     />
//                 </div>
//             </div>
//             <div className="w-full md:w-2/5 bg-white rounded-lg shadow-lg p-8 space-y-6">
//                 <h2 className="text-2xl font-bold text-blue-900 text-center md:text-left">Vision & Mission</h2>
//                 <div className="h-1 w-16 bg-yellow-500 mx-auto md:mx-0 mb-6"></div>

//                 <div className="space-y-4">
//                     <div className="flex items-start space-x-4">
//                         <FaEye className="text-blue-800 w-20 h-20" />
//                         <div>
//                             <h3 className="text-md font-semibold text-blue-900">Vision</h3>
//                             <p className="text-gray-700">
//                                 To become a leading EPC company across PAN-India, (Distribution, Transmission, Railway Electrification, MEP, and O&M).
//                             </p>
//                         </div>
//                     </div>
//                     <div className="flex items-start space-x-4">
//                         <FaHandshake className="text-blue-800 w-20 h-20" />
//                         <div>
//                             <h3 className="text-md font-semibold text-blue-900">Mission</h3>
//                             <ul className="text-gray-700 list-disc list-inside space-y-1 text-sm">
//                                 <li>To adopt practices that strengthen our core.</li>
//                                 <li>Setting High Standards with Services, Reliability, and Integrity in our Business.</li>
//                                 <li>Identify individuals with drive who will be able to run with us during the next 6-8 years.</li>
//                                 <li>Define processes and hierarchy to improve efficiency and make people responsible for their work.</li>
//                                 <li>Create a positive and entrepreneurial atmosphere in the company.</li>
//                                 <li>Define processes that are natural and people can carry out easily.</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
import Image from 'next/image';
import { FaEye, FaHandshake } from 'react-icons/fa';

export default function VisionMissionSection() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center my-16 px-6 md:px-20 mt-20">
            <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
                <div className="relative w-48 md:w-64 h-48 md:h-64 bg-blue-100 rounded-full overflow-hidden flex items-center justify-center">
                    <Image
                      src="/assets/banner/image1.jpg"
                      alt="Vision and Mission"
                      fill // Use fill directly instead of layout="fill"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-full"
                    />
                </div>
            </div>
            <div className="w-full md:w-2/5 bg-white rounded-lg shadow-lg p-8 space-y-6">
                <h2 className="text-2xl font-bold text-blue-900 text-center md:text-left">Vision & Mission</h2>
                <div className="h-1 w-16 bg-yellow-500 mx-auto md:mx-0 mb-6"></div>

                <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                        <FaEye className="text-blue-800 w-20 h-20" />
                        <div>
                            <h3 className="text-md font-semibold text-blue-900">Vision</h3>
                            <p className="text-gray-700">
                                To become a leading EPC company across PAN-India, (Distribution, Transmission, Railway Electrification, MEP, and O&M).
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <FaHandshake className="text-blue-800 w-20 h-20" />
                        <div>
                            <h3 className="text-md font-semibold text-blue-900">Mission</h3>
                            <ul className="text-gray-700 list-disc list-inside space-y-1 text-sm">
                                <li>To adopt practices that strengthen our core.</li>
                                <li>Setting High Standards with Services, Reliability, and Integrity in our Business.</li>
                                <li>Identify individuals with drive who will be able to run with us during the next 6-8 years.</li>
                                <li>Define processes and hierarchy to improve efficiency and make people responsible for their work.</li>
                                <li>Create a positive and entrepreneurial atmosphere in the company.</li>
                                <li>Define processes that are natural and people can carry out easily.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
