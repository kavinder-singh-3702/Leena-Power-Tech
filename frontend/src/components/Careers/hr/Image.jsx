
import Image from 'next/image';
import { FaBusinessTime, FaCalculator, FaMoneyBill, FaUserTie, FaProjectDiagram, FaTasks, FaShoppingCart } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="rounded-xl p-8 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        
        <div className="relative w-full md:w-1/2 hidden md:block">
          <div
            className="absolute top-[-15px] left-[-15px] w-full h-full border-t-4 border-l-4 border-blue-800 rounded-lg"
            style={{ width: '60%', height: '70%' }}
          ></div>
          <div
            className="absolute bottom-[-15px] right-[0px] w-full h-full border-b-4 border-r-4 border-blue-800 rounded-lg"
            style={{ width: '70%', height: '70%' }}
          ></div>
          <Image
            src="/assets/banner/image1.jpg"
            alt="Train Workshop"
            width={400}
            height={280}
            className="rounded-lg"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 w-full md:w-1/2 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 space-x-0 md:space-x-2">
            <FaBusinessTime className="text-blue-800 text-xl" />
            <span className="text-sm font-medium text-gray-700">Business Development</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 space-x-0 md:space-x-2">
            <FaCalculator className="text-blue-800 text-xl" />
            <span className="text-sm font-medium text-gray-700">Estimation</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 space-x-0 md:space-x-2">
            <FaMoneyBill className="text-blue-800 text-xl" />
            <span className="text-sm font-medium text-gray-700">Account & Finance</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 space-x-0 md:space-x-2">
            <FaUserTie className="text-blue-800 text-xl" />
            <span className="text-sm font-medium text-gray-700">Human Resource and Admin</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 space-x-0 md:space-x-2">
            <FaProjectDiagram className="text-blue-800 text-xl" />
            <span className="text-sm font-medium text-gray-700">Project</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 space-x-0 md:space-x-2">
            <FaTasks className="text-blue-800 text-xl" />
            <span className="text-sm font-medium text-gray-700">Project Planning</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 space-x-0 md:space-x-2">
            <FaShoppingCart className="text-blue-800 text-xl" />
            <span className="text-sm font-medium text-gray-700">Procurement</span>
          </div>
        </div>
      </div>
    </div>
  );
}
