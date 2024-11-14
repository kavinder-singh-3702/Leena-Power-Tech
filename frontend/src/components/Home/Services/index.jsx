import React from "react";
import Link from 'next/link';

const services = [
  {
    title: 'Web Development',
    description: 'Crafting stunning, responsive websites.',
    link: '/services/web-development',
    icon: '🌐', 
  },
  {
    title: 'App Development',
    description: 'Building sleek, functional mobile apps.',
    link: '/services/app-development',
    icon: '📱',
  },
  {
    title: 'Server & Cloud Management',
    description: 'Reliable server and cloud solutions.',
    link: '/services/server-cloud',
    icon: '☁️',
  },
  {
    title: 'UI/UX Design',
    description: 'Intelligent solutions for smarter business.',
    link: '/services/ui',
    icon: '🎨',
  },
  {
    title: 'IT Support And Maintenance',
    description: 'Always-on IT support and upkeep.',
    link: '/services/it',
    icon: '🛠️',
  },
  {
    title: 'IT Consulting And Strategy',
    description: 'Strategic IT guidance and solutions.',
    link: '/services/consulting',
    icon: '📈',
  },
  {
    title: 'Data Analytics And BI',
    description: 'Transforming data into actionable insights.',
    link: '/services/data-analytics',
    icon: '📊',
  },
  {
    title: 'Quality Assurance And Testing',
    description: 'Ensuring flawless performance.',
    link: '/services/qa-testing',
    icon: '✅',
  },
];

export default function Services() {
  return (
    <div className="py-16 bg-gradient-to-r from-indigo-50 to-white">
      <div className="text-center mb-12 px-4 sm:px-0">
        <h2 className="text-4xl font-bold text-indigo-800">We Provide The Best Quality</h2>
        <p className="text-gray-600">Our Services</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 lg:px-24">
        {services.map((service) => (
          <Link key={service.title} href={service.link} passHref>
            <div className="relative flex flex-col justify-between p-6 w-full h-72 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 transform hover:scale-105 group">
              <div className="absolute inset-0 bg-blue-500 transform -translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="text-4xl mb-4 text-indigo-500 transition-colors duration-300 group-hover:text-white">{service.icon}</div>
                <h3 className="text-lg font-semibold text-indigo-800 transition-colors duration-300 group-hover:text-white">{service.title}</h3>
                <p className="text-gray-700 line-clamp-2 transition-colors duration-300 group-hover:text-white">{service.description}</p>
              </div>
              <div className="relative z-10 mt-4 text-indigo-600 flex items-center justify-center transition-colors duration-300 group-hover:text-white">
                Read More <span className="ml-2">&rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
