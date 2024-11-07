import React from "react";
import HeroSection from "@/components/NewVenutres/distribution/HeroSection";
import DistributionInfo from "@/components/NewVenutres/distribution/DistributionInfo";
import ImageInfo from "@/components/NewVenutres/distribution/ImageInfo";
export default function page() {
  return (
    <div>
      <HeroSection />
      <DistributionInfo />
      <ImageInfo/>
    </div>
  );
}
