
// import Image from 'next/image';

// export default function Home() {
//   return (
//     <div className="relative w-full h-screen overflow-hidden mb-12">
//       <div className="absolute top-0 left-0 w-full h-full">
//         <Image
//           src="/assets/banner/image2.jpg"
//           alt="Background"
//           fill
//           priority
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           className="z-0 object-cover"
//         />
//       </div>
//       <div className="absolute inset-x-0 top-20 text-center z-10">
//         <h1 className="text-yellow-500 text-4xl font-bold">About Us</h1>
//         <hr className="mx-auto mt-2 w-24 border-yellow-500" />
//       </div>
//     </div>
//   );
// }
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden mb-12">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/assets/banner/image2.jpg"
          alt="Background"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="z-0 object-cover" // This now controls object-fit
        />
      </div>
      <div className="absolute inset-x-0 top-20 text-center z-10">
        <h1 className="text-yellow-500 text-4xl font-bold">About Us</h1>
        <hr className="mx-auto mt-2 w-24 border-yellow-500" />
      </div>
    </div>
  );
}
