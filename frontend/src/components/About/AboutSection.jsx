
"use client";
import { useEffect } from 'react';

export default function AboutSection() {
  useEffect(() => {
    const aboutSection = document.querySelector('.about-section');
    aboutSection.classList.add('animate-slide-in');
  }, []);

  return (
    <div className="relative w-full md:w-[35%] md:h-[50%] p-4 pr-6 pb-4 bg-white border border-gray-400 sharp-corner about-section mt-4 md:mt-24 md:-ml-14 md:mr-6">
      <h2 className="text-blue-800 text-xl font-bold mb-3">About Us</h2>
      <p className="text-gray-700 leading-relaxed text-sm mb-2">
        LPTE was started in 1995 and has been built on the strong foundations of experience, expertise, and technological insight. Our aim is to transform the landscape of Navi Mumbai and operate at a pan-India level. We do this by delivering end-to-end solutions in Engineering Procurement & Construction businesses related to power infrastructure. Over the years, we have worked in various fields like Power distribution & Transmission, MEP projects, Railways & Metro.
      </p>
      <p className="text-gray-700 leading-relaxed text-sm mb-0">
        We mainly work with government departments, state electricity departments, public development, and utilities authorities like CIDCO, Kerala State Electricity Board, Jharkhand Bijli Vitran Nigam Limited, and Bihar State Electricity board to name a few. Having executed huge turnkey projects and amassing a vast experience of 25 years, we are now moving forward and expanding our services in the upcoming fields of Electric Vehicle infrastructure and Solar Installations.
      </p>

      <style jsx>{`
        .sharp-corner {
          border-radius: 0;
        }
        .animate-slide-in {
          animation: slideIn 1s ease-out forwards;
        }

        @keyframes slideIn {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
