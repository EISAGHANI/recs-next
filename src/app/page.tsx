import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import SectorsSection from "@/components/home/SectorsSection";
import ApproachSection from "@/components/home/ApproachSection";
import CountriesSection from "@/components/home/CountriesSection";
import TeamSection from "@/components/home/TeamSection";
import ImpactSection from "@/components/home/ImpactSection";
import PartnersSection from "@/components/home/PartnersSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SectorsSection />
      <ApproachSection />
      <CountriesSection />
      <TeamSection />
      <ImpactSection />
      <PartnersSection />
    </div>
  );
}
