import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import WelcomeSection from "@/components/WelcomeSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import OurClients from "@/components/OurClients";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <WelcomeSection />
      <WhyChooseUs />
      <Services />
      <Statistics />
      <Testimonials />
      <OurClients />
      <Footer />
    </>
  );
}
