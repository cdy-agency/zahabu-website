import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import CompanyProfile from "@/components/about/CompanyProfile";
import MissionVision from "@/components/about/MissionVision";
// import ContactSection from "@/components/about/ContactSection";
import WhatWeBelieve from "@/components/WhatWeBelieve";
import OurClients from "@/components/about/OurClients";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: "Our Background",
    description:
      "Discover the background, values, and client-focused approach that guide ZAHABU Solutions Ltd in Rwanda.",
    path: "/about/background",
    keywords: [
      "ZAHABU background",
      "insurance values Rwanda",
      "company mission Kigali",
      "trusted insurance partner",
    ],
  });
}

export default function Page() {
  return (
    <main className="flex min-h-0 w-full min-w-0 max-w-full flex-1 flex-col overflow-x-clip">
      <AboutHero />
      <CompanyProfile />
      <MissionVision />
      <OurClients />
      <WhatWeBelieve />
      {/* <ContactSection /> */}
    </main>
  );
}