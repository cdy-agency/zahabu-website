import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PartnersStrip from "@/components/PartnersStrip";

import InsuranceClasses from "@/components/services/InsuranceClasses";
import OurServices from "@/components/services/OurServices";
import SectorsWeServe from "@/components/services/SectorsWeServe";

export default function Home() {
  return (
    <main className="flex min-h-0 w-full min-w-0 max-w-full flex-1 flex-col overflow-x-clip">
      <HeroSection />
      <PartnersStrip />
      <OurServices/>
      <InsuranceClasses/>
      <SectorsWeServe/>
      {/* <ServicesSection /> */}
      <WhyChooseUs />
      
    </main>
  );
}