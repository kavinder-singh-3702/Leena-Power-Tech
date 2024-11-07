import React from "react";
import HeroSection from "@/components/NewVenutres/transmission/HeroSection";
import TransmissionInfo from "@/components/NewVenutres/transmission/TransmissionInfo";
import ImageInfo from "@/components/NewVenutres/transmission/ImageInfo";
export default function page() {
  return (
    <div>
      <HeroSection />
      <TransmissionInfo />
      <ImageInfo/>
    </div>
  );
}
