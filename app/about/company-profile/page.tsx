import type { Metadata } from "next";

import CompanyProfileDocuments from "@/components/about/CompanyProfileDocuments";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: "Company Profile Documents",
    description:
      "Access official company profile documents and regulatory resources from ZAHABU Solutions Ltd.",
    path: "/about/company-profile",
    keywords: [
      "ZAHABU company profile",
      "insurance documents Rwanda",
      "BNR licensed brokers",
      "company resources",
    ],
  });
}

export default function Page() {
  return <CompanyProfileDocuments />;
}
