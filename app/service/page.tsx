import type { Metadata } from "next";

import ServicesPage from "@/components/mainpageServices/MainpageServices";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: "Services",
    description:
      "Explore ZAHABU Solutions insurance brokerage services, risk advisory, and tailored coverage solutions for individuals and businesses.",
    path: "/service",
    keywords: [
      "insurance services Rwanda",
      "brokerage services Kigali",
      "risk advisory services",
      "corporate insurance solutions",
    ],
  });
}

export default function ServicePage() {
  return (
    <main className="flex min-h-0 w-full min-w-0 max-w-full flex-1 flex-col overflow-x-clip">
      <ServicesPage />
    </main>
  );
}