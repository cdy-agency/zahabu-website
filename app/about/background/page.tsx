import AboutHero from "@/components/about/AboutHero";
import CompanyProfile from "@/components/about/CompanyProfile";
import MissionVision from "@/components/about/MissionVision";
import ContactSection from "@/components/about/ContactSection";
import WhatWeBelieve from "@/components/WhatWeBelieve";
import OurClients from "@/components/about/OurClients";
export default function  (){
return (
  <main className="flex min-h-0 w-full min-w-0 max-w-full flex-1 flex-col overflow-x-clip">
    <AboutHero />
          <CompanyProfile />
          <MissionVision />
           <OurClients />
           <WhatWeBelieve />
          <ContactSection />
     </main>
)
}