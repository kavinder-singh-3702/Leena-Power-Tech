"use client";

import { FaLightbulb, FaRocket, FaCheckCircle } from 'react-icons/fa';
import { MdDevices, MdSecurity } from 'react-icons/md';
import { useState } from 'react';

export default function WebDevelopment() {
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-6 lg:px-12">
      <aside className="bg-gray-100 p-6 w-full lg:w-1/4 border-r border-gray-200 rounded-lg lg:mr-6 mb-8 lg:mb-0 shadow-lg transition-colors duration-300 hover:text-white">
        <h2 className="text-lg font-bold mb-6 text-gray-800 hover:text-white">Our Services</h2>
        <ul className="space-y-4">
          {[
            "Web Development",
            "App Development",
            "Server & Cloud Management",
            "AI and Machine Learning Solutions",
            "Blockchain Solutions",
            "Cybersecurity Solutions",
            "Data Analytics and BI",
            "Quality Assurance and Testing",
            "IT Support and Maintenance",
            "IT Consulting and Strategy",
            "UX/UI Design",
          ].map((service, index) => (
            <li
              key={index}
              className="text-blue-500 hover:text-blue-200 hover:bg-blue-700 rounded-lg p-2 transition duration-300"
            >
              <a href="#">{service}</a>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-gray-700">
          <h3 className="font-semibold mb-3 text-gray-800">Opening Hours</h3>
          <p>Mon - Fri: 10:00 AM - 6:00 PM</p>
          <p>Sat - Sun: Closed</p>
          <p className="font-bold mt-2">Emergency: 24/7</p>
        </div>
      </aside>
      <div className="w-full lg:w-3/4 space-y-8">
        <section className="relative bg-white rounded-lg shadow-lg p-6">
          <img src="/assets/banner/image2.jpg" alt="Web Development Illustration" className="w-full h-40 object-cover mb-4 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Web Development</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Our web development services deliver custom, responsive websites that captivate users. Our solutions are scalable and tailored to fit your business goals, focusing on aesthetics, functionality, and user experience.
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <FaLightbulb className="text-blue-500 text-4xl mr-4 transition-transform duration-300 transform hover:rotate-12" />,
              title: "Customizable Solutions",
              description: "Designed uniquely for your business needs.",
            },
            {
              icon: <MdDevices className="text-blue-500 text-4xl mr-4 transition-transform duration-300 transform hover:scale-110" />,
              title: "Responsive Design",
              description: "Seamlessly adaptable to any device.",
            },
            {
              icon: <FaRocket className="text-blue-500 text-4xl mr-4 transition-transform duration-300 transform hover:-rotate-6" />,
              title: "SEO-friendly Development",
              description: "Enhance your online visibility.",
            },
            {
              icon: <MdSecurity className="text-blue-500 text-4xl mr-4 transition-transform duration-300 transform hover:scale-110" />,
              title: "Seamless Integration",
              description: "Effortlessly fits into your systems.",
            },
          ].map((feature, index) => (
            <div key={index} className="flex items-start p-6 border border-gray-200 rounded-lg shadow-lg bg-white transition-shadow duration-300 hover:shadow-xl">
              {feature.icon}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="flex flex-col lg:flex-row p-6 rounded-lg">
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
            <img src="/assets/banner/image2.jpg" alt="QA & Testing Illustration" className="w-full max-w-md" />
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Choose Our QA & Testing</h2>
            <p className="text-gray-600 mb-4">Ensuring Flawless Application Performance</p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Comprehensive testing strategies
              </li>
              <li className="flex items-center text-gray-700">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Automated testing tools
              </li>
              <li className="flex items-center text-gray-700">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Experienced QA team
              </li>
              <li className="flex items-center text-gray-700">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Regression testing for stable releases
              </li>
            </ul>
          </div>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Web Development FAQs</h2>
          <div className="space-y-4">
            {[
              {
                question: "What Technologies Do You Use For Web Development?",
                answer: "We use modern technologies such as React, Next.js, Node.js, and other cutting-edge tools to create dynamic, high-performance applications.",
              },
              {
                question: "How Long Does It Take To Develop A Website?",
                answer: "Timelines vary based on project scope, typically ranging from a few weeks to a few months depending on complexity.",
              },
              {
                question: "Do You Provide Maintenance After The Website Is Launched?",
                answer: "Absolutely. We offer comprehensive support and maintenance to keep your site updated and secure.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button onClick={() => toggleFaq(index)} className="flex justify-between w-full text-left text-gray-800 font-semibold py-3 hover:text-blue-600">
                  {faq.question}
                  <span>{faqOpen === index ? '-' : '+'}</span>
                </button>
                {faqOpen === index && <p className="text-gray-600 pl-4 mt-2">{faq.answer.replace(/"/g, '&quot;')}</p>}
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: "They provided exceptional service; our website is faster and more engaging than ever.",
                author: "John Doe, CEO of TechCorp",
              },
              {
                quote: "Professional team with extensive expertise in web development. Highly recommended!",
                author: "Jane Smith, Founder of Creatix",
              },
            ].map((testimonial, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
                <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
                <p className="text-gray-800 font-semibold mt-3">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
