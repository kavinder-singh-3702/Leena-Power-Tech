import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
    
        <div className="absolute top-0 right-0 h-full w-2/3 bg-gradient-to-br from-transparent to-blue-700 opacity-20 transform rotate-6" />
        <div className="absolute bottom-0 left-0 h-full w-2/3 bg-gradient-to-tr from-transparent to-blue-700 opacity-20 transform -rotate-6" />

        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-extrabold tracking-tight mb-2">Services Details</h1>
        <p className="text-lg opacity-80 mb-4">
          Discover our comprehensive range of services crafted to empower your business.
        </p>
        <div className="flex items-center justify-center space-x-2">
        <Link href="/" className="text-white hover:underline">Home</Link>
          <FaChevronRight className="text-sm" />
          <span>Services Details</span>
        </div>
      </div>
      <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-blue-600 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -top-10 -left-10 h-32 w-32 bg-blue-700 opacity-30 rounded-full blur-3xl animate-pulse delay-75" />
    </section>
  );
}
