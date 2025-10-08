import HeroSection from "@/components/home/HeroSection";
import SectorsSection from "@/components/home/SectorsSection";
import CountriesSection from "@/components/home/CountriesSection";
import ServicesSection from "@/components/home/ServicesSection";
import ImpactSection from "@/components/home/ImpactSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SectorsSection />
      <CountriesSection />
      <ServicesSection />
      <ImpactSection />
    </div>
  );
}
