"use client";
import React from "react";
import dynamic from "next/dynamic";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Slider dynamically with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const testimonials = [
  {
    name: "Mr. G. S. Gill",
    title: "Managing Director",
    company: "CIDCO",
    image: "/assets/testimonials/test-01.jpg",
    text: "I have had the pleasure to work on a few projects with LPTE. I have seen them execute the projects in a planned manner and they have delivered the desired results while sticking to the strict timelines. Its work has been instrumental in electrifying the city.",
  },
  {
    name: "Mr. Sanjay Chotalia",
    title: "Chief Engineer (Special Projects)",
    company: "CIDCO",
    image: "/assets/testimonials/test-02.jpg",
    text: "LPTE is a company that has always adhered to quality standards. Out of their many distinctive features, I was highly pleased with the way they plan things and anticipate the different challenges. It was nice to work with a company that works round the clock to satisfy the requirements of its clients.",
  },
  {
    name: "Mr. Suresh Ganeshkar",
    title: "Chief Engineer",
    company: "MSEDC",
    image: "/assets/testimonials/test-01.jpg",
    text: "I have worked with many contracting companies, but LPTE has always stood out. The company's core values of integrity, accountability, and teamwork have always helped in challenging times. LPTE's work has improved customer satisfaction and made a greater impact on society.",
  },
  {
    name: "Ms. Priya Sharma",
    title: "Project Manager",
    company: "TechCorp",
    image: "/assets/testimonials/test-02.jpg",
    text: "Working with LPTE was an amazing experience. They delivered on time, every time, and their professionalism was unmatched. I look forward to future collaborations with their talented team.",
  },
  {
    name: "Mr. Arjun Mehta",
    title: "CEO",
    company: "Innovate Ltd",
    image: "/assets/testimonials/test-01.jpg",
    text: "LPTE’s attention to detail and commitment to quality sets them apart. Our project was challenging, but they met every requirement and went above and beyond to ensure success.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="py-12 px-5 text-center bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 relative inline-block">
        Testimonials
        <div className="w-16 h-1 bg-yellow-500 mt-2 mx-auto"></div>
      </h2>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3">
              {" "}
              {/* Added horizontal padding here */}
              <div className="p-6 bg-white rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-blue-900"
                  />
                </div>
                <p className="text-gray-700 text-lg italic mb-4">
                  <FaQuoteLeft className="inline text-yellow-500 mr-2" />
                  {testimonial.text}
                </p>
                <h3 className="text-blue-900 font-bold">{testimonial.name}</h3>
                <p className="text-yellow-600">{testimonial.title}</p>
                <p className="text-gray-600">({testimonial.company})</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute bottom-0 right-10 text-gray-500 hover:text-blue-900 cursor-pointer z-10"
    >
      <FaChevronRight className="text-3xl" />
    </div>
  );
};

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute bottom-0 left-10 text-gray-500 hover:text-blue-900 cursor-pointer z-10"
    >
      <FaChevronLeft className="text-3xl" />
    </div>
  );
};

export default Testimonials;
