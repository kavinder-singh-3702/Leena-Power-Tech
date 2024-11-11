// components/Header.js
"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [showVerticalsDropdown, setShowVerticalsDropdown] = useState(false);
  const [showCareersDropdown, setShowCareersDropdown] = useState(false);
  const [showNewVenturesDropdown, setShowNewVenturesDropdown] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleAboutDropdown = () => setIsAboutDropdownOpen(!isAboutDropdownOpen);
  return (
    <main className="bg-yellow-400 text-white">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center py-4 space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <Link href="#" className="text-black hover:text-white">
          <FaLinkedin size={20} />
        </Link>
        <Link href="#" className="text-black hover:text-white">
          <FaTwitter size={20} />
        </Link>
        <Link href="#" className="text-black hover:text-white">
          <FaFacebook size={20} />
        </Link>
        <Link href="#" className="text-black hover:text-white">
          <FaInstagram size={20} />
        </Link>
        <Link href="#" className="text-black hover:text-white">
          <FaYoutube size={20} />
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-black text-center sm:text-left">
        <span>Call Us: 022 61389100</span>
        <span>Email: info@lptindia.in</span>
      </div>
    </div>
      <header className="flex border-b bg-white font-sans min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between px-4 py-4 sm:px-10 sm:py-6 gap-4 w-full">
        <Link href="#">
          <span className="text-xl font-bold">Logo</span>
        </Link>

        <button
          className="sm:hidden text-black focus:outline-none absolute right-4 z-50"
          style={{ top: isMenuOpen ? '-80px' : '2px' }}
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
 
         <div
          id="collapseMenu"
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } sm:block fixed sm:static top-0 left-0 sm:relative bg-white sm:bg-transparent w-full sm:w-auto h-full sm:h-auto overflow-auto sm:overflow-visible transition-all duration-300 z-40`}
        >
          <ul className="flex flex-col sm:flex-row sm:gap-x-10 p-6 sm:p-0 sm:space-y-0 space-y-4 sm:space-y-0">
            <li className="border-b sm:border-none py-2 sm:py-0">
              <Link
                href="#"
                className="hover:text-blue-600 text-[17px] font-bold text-blue-600 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="group border-b sm:border-none py-2 sm:py-0 relative">
              <button
                className="flex items-center justify-between w-full hover:text-[#007bff] text-gray-600 text-[17px] font-bold sm:w-auto"
                onClick={() => setShowDropdown(!showDropdown)} 
              >
                About Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  />
                </svg>
              </button>
              <ul
                className={`${
                  showDropdown ? 'block' : 'hidden'
                } sm:absolute sm:shadow-lg sm:bg-white sm:space-y-3 sm:top-full sm:left-0 sm:min-w-[250px] z-50`}
              >
                <li className="py-1 sm:border-b sm:py-1">
                  <Link
                    href="/about"
                    className="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    onClick={() => { setIsMenuOpen(false); setShowDropdown(false); }} 
                  >
                    About Us
                  </Link>
                </li>
                <li className="py-1 sm:border-b sm:py-1">
                  <Link
                    href="/directors"
                    className="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    onClick={() => { setIsMenuOpen(false); setShowDropdown(false); }}
                  >
                    Our Team
                  </Link>
                </li>
                <li className="py-1 sm:border-b sm:py-1">
                  <Link
                    href="/awards-recognitions"
                    className="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    onClick={() => { setIsMenuOpen(false); setShowDropdown(false); }}
                  >
                    Awards & Recognitions
                  </Link>
                </li>
              </ul>
            </li>
            <li className="group border-b sm:border-none py-2 sm:py-0 relative">
              <button
                className="flex items-center justify-between w-full hover:text-[#007bff] text-gray-600 text-[17px] font-bold sm:w-auto"
                onClick={() => setShowVerticalsDropdown(!showVerticalsDropdown)}
              >
                Verticals
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name="16"
                    data-original="#000000"
                  />
                </svg>
              </button>
              <ul
                className={`${
                  showVerticalsDropdown ? 'block' : 'hidden'
                } sm:absolute sm:shadow-lg sm:bg-white sm:space-y-3 sm:top-full sm:left-0 sm:min-w-[250px] z-50`}
              >
              <ul className="hidden group-hover:block sm:absolute sm:shadow-lg sm:bg-white sm:space-y-3 sm:top-full sm:left-0 sm:min-w-[250px] z-50">
                <li className="py-2 sm:border-b sm:py-1">
                  <Link
                    href="/mep-works"
                    className="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    onClick={() => { setIsMenuOpen(false); setShowDropdown(false); }}
                  >
                    MEP Works
                  </Link>
                </li>
                <li className="py-2 sm:border-b sm:py-1">
                  <Link
                    href="/transmission"
                    className="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    onClick={() => { setIsMenuOpen(false); setShowDropdown(false); }}
                  >
                    Transmission
                  </Link>
                </li>
                <li className="py-2 sm:border-b sm:py-1">
                  <Link
                    href="/distribution"
                    className="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    onClick={() => { setIsMenuOpen(false); setShowDropdown(false); }}
                  >
                    Distribution
                  </Link>
                </li>
                <li className="py-2 sm:border-b sm:py-1">
                  <Link
                    href="/o-m"
                    className="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    onClick={() => { setIsMenuOpen(false); setShowDropdown(false); }}
                  >
                    O & M
                  </Link>
                </li>
                <li className="py-2 sm:border-b sm:py-1">
                  <Link
                    href="/railways-metro"
                    className="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    onClick={() => { setIsMenuOpen(false); setShowDropdown(false); }}
                  >
                    Railways & Metro
                  </Link>
                </li>
              </ul>
              </ul>
            </li>

            <li className="border-b sm:border-none py-2 sm:py-0">
              <Link
                href="/csr"
                className="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                onClick={() => { setIsMenuOpen(false); setShowDropdown(false); }}
              >
                CSR
              </Link>
            </li>
            <li className="group border-b sm:border-none py-2 sm:py-0 relative">
              <button
                className="flex items-center justify-between w-full hover:text-[#007bff] text-gray-600 text-[17px] font-bold sm:w-auto"
                onClick={() => setShowNewVenturesDropdown(!showNewVenturesDropdown)}
              >
                New Ventures
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name="16"
                    data-original="#000000"
                  />
                </svg>
              </button>
              <ul
                className={`${
                  showNewVenturesDropdown ? 'block' : 'hidden'
                } sm:absolute sm:shadow-lg sm:bg-white sm:space-y-3 sm:top-full sm:left-0 sm:min-w-[250px] z-50`}
              >
              <ul className="hidden group-hover:block sm:absolute sm:shadow-lg sm:bg-white sm:space-y-3 sm:top-full sm:left-0 sm:min-w-[250px] z-50">
                <li className="py-2 sm:border-b sm:py-1">
                  <Link
                    href="/solar-system-installations"
                    className="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    onClick={() => { setIsMenuOpen(false); setShowDropdown(false); }}
                  >
                    Solar Systems Installation
                  </Link>
                </li>
                <li className="py-2 sm:border-b sm:py-1">
                  <Link
                    href="/ecvs"
                    className="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    onClick={() => { setIsMenuOpen(false); setShowDropdown(false); }}
                  >
                    ECVS
                  </Link>
                </li>
                <li className="py-2 sm:border-b sm:py-1">
                  <Link
                    href="/lift-escalators"
                    className="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    onClick={() => { setIsMenuOpen(false); setShowDropdown(false); }}
                  >
                    Lift & Escalators
                  </Link>
                </li>
              </ul>
              </ul>
            </li>

            <li className="group border-b sm:border-none py-2 sm:py-0 relative">
              <button
                className="flex items-center justify-between w-full hover:text-[#007bff] text-gray-600 text-[17px] font-bold sm:w-auto"
                onClick={() => setShowCareersDropdown(!showCareersDropdown)}
              >
                Careers
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name="16"
                    data-original="#000000"
                  />
                </svg>
              </button>
              <ul
                className={`${
                  showCareersDropdown ? 'block' : 'hidden'
                } sm:absolute sm:shadow-lg sm:bg-white sm:space-y-3 sm:top-full sm:left-0 sm:min-w-[250px] z-50`}
              >
              <ul className="hidden group-hover:block sm:absolute sm:shadow-lg sm:bg-white sm:space-y-3 sm:top-full sm:left-0 sm:min-w-[250px] z-50">
                <li className="py-2 sm:border-b sm:py-1">
                  <Link
                    href="/current-vacancy"
                    className="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    onClick={() => { setIsMenuOpen(false); setShowDropdown(false); }}
                  >
                    Current Vacancy
                  </Link>
                </li>
                <li className="py-2 sm:border-b sm:py-1">
                  <Link
                    href="/join-the-team"
                    className="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    onClick={() => { setIsMenuOpen(false); setShowDropdown(false); }}
                  >
                    Join the Team
                  </Link>
                </li>
                <li className="py-2 sm:border-b sm:py-1">
                  <Link
                    href="/hr-initiatives"
                    className="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    onClick={() => { setIsMenuOpen(false); setShowDropdown(false); }}
                  >
                    HR Initiatives
                  </Link>
                </li>
              </ul>
              </ul>
            </li>

            <li className="border-b sm:border-none py-2 sm:py-0">
              <Link
                href="/events"
                className="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                onClick={() => { setIsMenuOpen(false); setShowDropdown(false); }}
              >
                Events
              </Link>
            </li>
            <li className="border-b sm:border-none py-2 sm:py-0">
              <Link
                href="/contact-us"
                className="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
    </header>
    </main>
  );
};

export default Header;
