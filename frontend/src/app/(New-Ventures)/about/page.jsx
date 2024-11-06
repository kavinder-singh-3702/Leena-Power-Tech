import ImageSection from '@/components/About/ImageSection';
import AboutSection from '@/components/About/AboutSection';
import Vision from '@/components/About/Vision';
import Contribution from '@/components/About/Contribution';
import Values from '@/components/About/Values';
import Header from '@/components/About/Header';
export default function AboutPage() {
  return (
    <>
    <Header/>
      <div className="flex pb-10 flex-col md:flex-row bg-white rounded-lg overflow-hidden">
        <ImageSection />
        <AboutSection />
      </div>
      <Contribution/>
      <Vision />
      <Values/>
      {/* <Mapbox/> */}
    </>
  );
}
