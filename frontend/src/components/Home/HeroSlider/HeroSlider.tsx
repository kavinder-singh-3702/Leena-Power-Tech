"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Slider from "react-slick";
import Image from "next/image";

interface ArrowProps {
  onClick?: () => void;
}

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="h-auto">
      <div className="w-full mx-0">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="relative w-full h-[82vh] bg-white">
              <div className="w-full h-full relative">
                <Image
                  alt={item.title}
                  src={item.image}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const CustomNextArrow = (props: ArrowProps) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-4 text-white cursor-pointer bg-yellow-500 p-3 rounded-full transform -translate-y-1/2"
      style={{ top: "45%", zIndex: 1 }}
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
};

const CustomPrevArrow = (props: ArrowProps) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-4 text-white cursor-pointer bg-yellow-500 p-3 rounded-full transform -translate-y-1/2"
      style={{ top: "45%", zIndex: 1 }}
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
};

export default HeroSlider;
