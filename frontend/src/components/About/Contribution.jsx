// // components/ContributionSection.js

// import Image from 'next/image';
// import React from 'react';

// const ContributionSection = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 py-12 px-8 md:px-16 lg:px-32">
//       {/* Text Content */}
//       <div className="md:w-1/2 space-y-4">
//         <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Our Contribution In Nation Building</h2>
//         <p className="text-gray-700 leading-relaxed">
//           Over the years we have helped bring electricity to all parts of the country. From developing substations to electrifying buildings, we have a versatile team with a strong work ethic. We started with Navi Mumbai as our target and over the years we have expanded our scope. Now, we are in different parts of the country and are working continuously to build world-class infrastructure for our nation. Our infrastructure has stood the test of time and nature. Even in adverse conditions, we were able to deliver satisfactory services.
//         </p>
//         <p className="text-gray-700 leading-relaxed">
//           With the focus of the nation moving towards renewable energy, our team is looking onto new prospects and adapting to new technology. Our company is aligned with PM's Gati Shakti Plan, a 100lac crore master plan to develop holistic infrastructure in the country. We truly believe in the vision and plan to contribute as much as we can in our field.
//         </p>
//         <button className="mt-4 px-6 py-2 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-700 transition">
//           Download Company financial document
//         </button>
//       </div>
//       src="/assets/banner/image1.jpg"
//       {/* Image Grid */}
//       <div className="md:w-1/2 mt-8 md:mt-0 grid grid-cols-3 gap-2 md:gap-4">
//         {['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg', '/images/image4.jpg', '/images/image5.jpg', '/images/image6.jpg', '/images/image7.jpg', '/images/image8.jpg', '/images/image9.jpg'].map((src, index) => (
//           <div key={index} className="w-full h-24 md:h-32 lg:h-40 relative">
//             <Image src={src} alt={`Contribution image ${index + 1}`} layout="fill" objectFit="cover" className="rounded-md" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ContributionSection;
// components/ContributionSection.js

import Image from 'next/image';
import React from 'react';

const ContributionSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 py-12 px-8 md:px-16 lg:px-32">
      {/* Text Content */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Our Contribution In Nation Building</h2>
        <p className="text-gray-700 leading-relaxed">
          Over the years we have helped bring electricity to all parts of the country. From developing substations to electrifying buildings, we have a versatile team with a strong work ethic. We started with Navi Mumbai as our target and over the years we have expanded our scope. Now, we are in different parts of the country and are working continuously to build world-class infrastructure for our nation. Our infrastructure has stood the test of time and nature. Even in adverse conditions, we were able to deliver satisfactory services.
        </p>
        <p className="text-gray-700 leading-relaxed">
          With the focus of the nation moving towards renewable energy, our team is looking onto new prospects and adapting to new technology. Our company is aligned with PM's Gati Shakti Plan, a 100lac crore master plan to develop holistic infrastructure in the country. We truly believe in the vision and plan to contribute as much as we can in our field.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-700 transition">
          Download Company financial document
        </button>
      </div>

      {/* Image Grid */}
      <div className="md:w-1/2 mt-8 md:mt-0 grid grid-cols-3 gap-2 md:gap-4">
        {['/assets/banner/image1.jpg', '/assets/banner/image2.jpg', '/assets/banner/image3.jpg', '/assets/banner/image4.jpg', '/assets/banner/image2.jpg', '/assets/banner/image3.jpg', '/assets/banner/image4.jpg', '/assets/banner/image1.jpg', '/assets/banner/image2.jpg'].map((src, index) => (
          <div key={index} className="w-full h-24 md:h-32 lg:h-40 relative">
            <Image src={src} alt={`Contribution image ${index + 1}`} layout="fill" objectFit="cover" className="rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributionSection;
