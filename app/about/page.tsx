import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import CompanyProfile from "@/components/about/CompanyProfile";
import MissionVision from "@/components/about/MissionVision";
import OurTeam from "@/components/about/OurTeam";
import OurClients from "@/components/about/OurClients";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: "About Us",
    description:
      "Learn about ZAHABU Solutions Ltd, our mission, team, and commitment to trusted insurance solutions across Rwanda.",
    path: "/about",
    keywords: [
      "about ZAHABU",
      "insurance company Rwanda",
      "ZAHABU team",
      "insurance mission and vision",
    ],
  });
}


export default function AboutPage() {
  return (
    <main className="flex min-h-0 w-full min-w-0 max-w-full flex-1 flex-col overflow-x-clip">
      <AboutHero />
      <CompanyProfile />
      <MissionVision />
      <OurTeam />
      <OurClients />
      
    </main>
  );
}