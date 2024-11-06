// components/Header.js
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaChevronDown,
} from "react-icons/fa";

const Header = () => {
  return (
    <main className="bg-yellow-400 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Social Media Icons */}
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
        {/* Contact Info */}
        <div className="flex space-x-8 text-black">
          <span>Call Us: 022 61389100</span>
          <span>Email: info@lptindia.in</span>
        </div>
      </div>
      <header class="flex border-b bg-white font-sans min-h-[70px] tracking-wide relative z-50">
        <div class="flex flex-wrap items-center justify-between px-10 py-10 gap-4 w-full">
          <a href="javascript:void(0)">
            <Image width={264} height={20} src="" alt="logo" class="w-36" />
          </a>

          <div
            id="collapseMenu"
            class="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              class="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <ul class="lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li class="max-lg:border-b max-lg:py-3">
                <a
                  href="javascript:void(0)"
                  class="hover:text-blue-600 text-[17px] font-bold text-blue-600 block"
                >
                  Home
                </a>
              </li>
              <li class="group max-lg:border-b max-lg:py-3 relative">
                <a
                  href="javascript:void(0)"
                  class="hover:text-[#007bff] text-gray-600 text-[17px] font-bold lg:hover:fill-[#007bff] block"
                >
                  About Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    class="ml-1 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </a>
                <ul class="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                  <li class="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      class="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    >
                      About Us
                    </a>
                  </li>
                  <li class="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      class="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    >
                      Our Team
                    </a>
                  </li>
                  <li class="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      class="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    >
                      Awards & Recognizations
                    </a>
                  </li>
                </ul>
              </li>

              {/* Verticals */}
              <li class="group max-lg:border-b max-lg:py-3 relative">
                <a
                  href="javascript:void(0)"
                  class="hover:text-[#007bff] text-gray-600 text-[17px] font-bold lg:hover:fill-[#007bff] block"
                >
                  Verticals
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    class="ml-1 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </a>
                <ul class="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                  <li class="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      class="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    >
                      MEP Works
                    </a>
                  </li>
                  <li class="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      class="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    >
                      Transmisson
                    </a>
                  </li>
                  <li class="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      class="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    >
                      Distribution
                    </a>
                  </li>
                  <li class="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      class="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    >
                      O & M
                    </a>
                  </li>
                </ul>
              </li>

              {/* New Ventures */}

              <li class="group max-lg:border-b max-lg:py-3 relative">
                <a
                  href="javascript:void(0)"
                  class="hover:text-[#007bff] text-gray-600 text-[17px] font-bold lg:hover:fill-[#007bff] block"
                >
                  New Ventures
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    class="ml-1 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </a>
                <ul class="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                  <li class="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      class="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    >
                      Solar Systems Installation
                    </a>
                  </li>
                  <li class="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      class="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    >
                      ECVS
                    </a>
                  </li>
                  <li class="border-b py-2 ">
                    <a
                      href="javascript:void(0)"
                      class="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                    >
                      Lift & Escalators
                    </a>
                  </li>
                </ul>
              </li>
              <li class="max-lg:border-b max-lg:py-3">
                <a
                  href="javascript:void(0)"
                  class="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                >
                  CSR
                </a>
              </li>

              <li class="max-lg:border-b max-lg:py-3">
                <a
                  href="javascript:void(0)"
                  class="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                >
                  Careers
                </a>
              </li>
              <li class="max-lg:border-b max-lg:py-3">
                <a
                  href="javascript:void(0)"
                  class="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                >
                  Events
                </a>
              </li>
              <li class="max-lg:border-b max-lg:py-3">
                <a
                  href="javascript:void(0)"
                  class="hover:text-[#007bff] text-gray-600 text-[17px] font-bold block"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Header;
