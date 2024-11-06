import Header from "@/components/Common/Header";
import HeroSlider from "@/components/Home/HeroSlider/HeroSlider";
import WelcomeSection from "@/components/Home/WelcomeSection";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Services from "@/components/Home/Services";
import Statistics from "@/components/Home/Statistics";
import Testimonials from "@/components/Home/Testimonials";
import OurClients from "@/components/Home/OurClients";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <WelcomeSection />
      <WhyChooseUs />
      <Services />
      <Statistics />
      <Testimonials />
      <OurClients />
    </>
  );
}
