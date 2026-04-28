import type { Metadata } from "next";

import OurTeam from "@/components/about/OurTeam";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: "Our Team",
    description:
      "Meet the ZAHABU Solutions leadership and team delivering trusted insurance expertise in Kigali and across Rwanda.",
    path: "/about/team",
    keywords: [
      "ZAHABU team",
      "insurance experts Kigali",
      "leadership Rwanda",
      "insurance professionals",
    ],
  });
}

export default function Page() {
  return (
    <main className="flex min-h-0 w-full min-w-0 max-w-full flex-1 flex-col overflow-x-clip">
      <OurTeam />
    </main>
  );
}
