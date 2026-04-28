import type { Metadata } from "next";

import ContactPage from "@/components/ContactUs/ContactUS";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    title: "Contact Us",
    description:
      "Contact ZAHABU Solutions Ltd in Kigali for insurance advice, claims support, and tailored brokerage assistance.",
    path: "/contact",
    keywords: [
      "contact ZAHABU",
      "insurance broker contact Kigali",
      "Rwanda insurance support",
      "claims assistance Rwanda",
    ],
  });
}

export default function Page() {
  return (
    <main className="flex min-h-0 w-full min-w-0 max-w-full flex-1 flex-col overflow-x-clip">
      <ContactPage />
    </main>
  );
}