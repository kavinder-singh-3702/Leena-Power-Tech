import { UserIcon } from '@heroicons/react/solid';
import Image from 'next/image';
const directors = [
  {
    name: "Mr. Amit Teckchandani",
    title: "Chairman & Managing Director",
    description: "Mr. Amit Teckchandani is the founder and Chairman & Managing Director of Leena Powertech.",
    imageUrl: "/assets/banner/image1.jpg", 
  },
  {
    name: "Mrs. Komal Teckchandani",
    title: "Director of Finance",
    description: "A successful software engineer and our co-founder, Mrs. Komal Teckchandani is the Director of Finance.",
    imageUrl: "/assets/banner/image2.jpg", 
  },
];

export default function DirectorsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="text-center bg-[#00205b]">
        <h2 className="text-3xl font-bold text-yellow-500">Our Directors</h2>
        <div className="flex justify-center mt-4">
          <UserIcon className="h-10 w-10 text-yellow-500" />
        </div>
        <hr className="w-1/3 mx-auto mt-2 border-t-2 border-yellow-500" />
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {directors.map((director, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/4 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <Image
              src={director.imageUrl}
              alt={director.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-blue-900">{director.name}</h3>
              <p className="text-sm font-semibold text-gray-500 mt-1">
                {director.title}
              </p>
              <p className="text-gray-700 mt-4">{director.description}</p>
              <button className="mt-6 bg-yellow-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-yellow-600 transition-colors">
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
