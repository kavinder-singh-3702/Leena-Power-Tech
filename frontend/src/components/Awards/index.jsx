"use client";
import IntroductionGallery from "@/components/Awards/IntroductionGallery";

import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Awards/Header"), {
  ssr: false, // Optional: set to `true` or remove if you want SSR for this component
});

import Header from "@/components/Awards/Header";
export default function AboutPage() {
  return (
    <>
      <Header />
      <IntroductionGallery />
    </>
  );
}
