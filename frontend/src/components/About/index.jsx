"use client";

import ImageSection from "@/components/About/ImageSection";
import AboutSection from "@/components/About/AboutSection";
import Vision from "@/components/About/Vision";
import Contribution from "@/components/About/Contribution";
import Values from "@/components/About/Values";

import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/About/Header"), {
  ssr: false, // Optional: Set to `true` if you want server-side rendering for this component
});

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="flex pb-10 flex-col md:flex-row bg-white rounded-lg overflow-hidden">
        <ImageSection />
        <AboutSection />
      </div>
      <Contribution />
      <Vision />
      <Values />
    </>
  );
}
