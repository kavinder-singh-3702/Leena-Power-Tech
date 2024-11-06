"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import apiHelper from "@/helpers/apiHelper";

import Slider from "react-slick";
import Image from "next/image";

const data = [
  {
    image: "/assets/banner/image1.jpg",
    title: "Polycrystalline Solar Modules (Half-Cut Cell)",
  },
  {
    image: "/assets/banner/image2.jpg",
    title: "MONO-PERC Halfcut Cell Solar Modules",
  },
  {
    image: "/assets/banner/image3.jpg",
    title: "Bifacial Solar Modules (MONO-PERC)",
  },
  {
    image: "/assets/banner/image4.jpg",
    title: "Solar Panel A",
  },
];

const HeroSlider = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed (ms)
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 4000, // Set auto slide interval to 4000ms (4 seconds)
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="h-auto ">
      <div className="w-full mx-0">
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <div key={index} className="relative w-full h-[82vh] bg-white">
                {" "}
                {/* Increased to 80% viewport height */}
                <div className="w-full h-full relative">
                  <Image
                    alt={item.title}
                    src={item.image}
                    fill
                    className="object-cover" // Makes the image cover the container
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 text-white cursor-pointer bg-yellow-500 p-3 rounded-full"
      style={{ zIndex: 1, top: "50%" }}
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
};

// Custom Previous Arrow component
const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 text-white cursor-pointer bg-yellow-500 p-3 rounded-full"
      style={{ zIndex: 1, top: "50%" }}
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
};

export default HeroSlider;
