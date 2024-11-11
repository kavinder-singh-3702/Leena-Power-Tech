"use client";
import React from "react";
import Image from "next/image";

const Sponsors = () => {
  const row1 = [
    "/assets/sponsors/cc1.png",
    "/assets/sponsors/cc2.png",
    "/assets/sponsors/cc3.png",
    "/assets/sponsors/cc4.jpg",
    "/assets/sponsors/cc5.jpg",
    "/assets/sponsors/cc6.jpg",
  ];

  // const row2 = [
  //   "/assets/sponsors/cc7.png",
  //   "/assets/sponsors/cc8.jpg",
  //   "/assets/sponsors/cc9.png",
  //   "/assets/sponsors/cc1.png",
  //   "/assets/sponsors/cc2.png",
  //   "/assets/sponsors/cc3.png",
  // ];

  return (
    <div className="w-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex overflow-hidden w-screen mask-image">
          <div className="flex animate-scrollX">
            {row1.map((el, index) => (
              <div
                key={index}
                className="grid place-items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]"
              >
                <Image
                  height={264}
                  width={264}
                  src={el}
                  alt=""
                  className="object-contain w-full h-full rounded-md aspect-[16/9] p-[5px_20px] shadow-[0px_2px_8px_rgba(99,99,99,0.2)]"
                />
              </div>
            ))}
          </div>
          <div className="flex animate-scrollX">
            {row1.map((el, index) => (
              <div
                key={index}
                className="grid place-items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]"
              >
                <Image
                  height={264}
                  width={264}
                  src={el}
                  alt=""
                  className="object-contain w-full h-full rounded-md aspect-[16/9] p-[5px_20px] shadow-[0px_2px_8px_rgba(99,99,99,0.2)]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
