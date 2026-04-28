import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PartnersStrip from "@/components/PartnersStrip";

import InsuranceClasses from "@/components/services/InsuranceClasses";
import OurServices from "@/components/services/OurServices";
import SectorsWeServe from "@/components/services/SectorsWeServe";
import { SITE_NAME, absoluteUrl, buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: "Home",
    description:
      "ZAHABU Solutions Ltd delivers tailored insurance brokerage, appraisal, and risk support services in Kigali, Rwanda.",
    path: "/",
    keywords: [
      "ZAHABU homepage",
      "insurance brokerage Kigali",
      "risk management Rwanda",
      "auto appraisal Rwanda",
    ],
  });
}

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/logo.png"),
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: absoluteUrl("/"),
    potentialAction: {
      "@type": "SearchAction",
      target: `${absoluteUrl("/")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    image: absoluteUrl("/logo.png"),
    url: absoluteUrl("/"),
    telephone: "+250788381630",
    address: {
      "@type": "PostalAddress",
      streetAddress: "KG 2 Ave, Gate Number 33",
      addressLocality: "Kigali",
      addressCountry: "RW",
    },
    areaServed: "Rwanda",
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main className="flex min-h-0 w-full min-w-0 max-w-full flex-1 flex-col overflow-x-clip">
        <HeroSection />
        <PartnersStrip />
        <OurServices />
        <InsuranceClasses />
        <SectorsWeServe />
        <WhyChooseUs />
      </main>
    </>
  );
}