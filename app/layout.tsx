import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Insurance Brokerage in Kigali`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: `${SITE_NAME} | Insurance Brokerage in Kigali`,
    description: DEFAULT_DESCRIPTION,
    url: absoluteUrl("/"),
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: absoluteUrl("/logo.png"),
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Insurance Brokerage in Kigali`,
    description: DEFAULT_DESCRIPTION,
    images: [absoluteUrl("/logo.png")],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full min-w-0 max-w-full overflow-x-clip antialiased"
    >
      <body
        className="relative flex min-h-full min-w-0 max-w-full flex-col overflow-x-clip"
        style={{ fontFamily: "'Chillax', sans-serif" }}
      >
        <Navbar />
        <div className="flex min-h-0 min-w-0 max-w-full flex-1 flex-col overflow-x-clip">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
