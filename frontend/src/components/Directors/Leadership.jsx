
import { UserIcon } from '@heroicons/react/solid';
import Image from 'next/image';
export default function Leadership() {
  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <div className="w-full bg-[#00205b] flex justify-center py-4">
        <h1 className="text-yellow-500 text-3xl font-bold tracking-wide flex items-center gap-2">
          <UserIcon className="h-6 w-6 text-yellow-500" />
          Our Leadership
        </h1>
      </div>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 mt-6">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <Image
              src="/assets/banner/image1.jpg"
              alt="CEO"
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-blue-900 text-xl font-semibold">Mr. Natwar Jha</h2>
          <p className="text-gray-500 text-sm">CEO</p>
          <p className="text-gray-700 text-center mt-2">
            Mr. Natwar Jha, Chief Executive Officer, has immense experience in his field.
          </p>
          <button className="mt-4 bg-yellow-500 text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-yellow-600 transition">
            READ MORE...
          </button>
        </div>
      </div>
    </div>
  );
}
