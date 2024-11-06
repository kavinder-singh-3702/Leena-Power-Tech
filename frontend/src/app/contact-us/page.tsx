import React from "react";
import HeroSection from "@/components/contact-us/HeroSection";
import Form from "@/components/contact-us/form";
import Map from "@/components/contact-us/map";

export default function page() {
  return (
    <div>
      <HeroSection />
      <Form />
      <Map />
    </div>
  );
}
