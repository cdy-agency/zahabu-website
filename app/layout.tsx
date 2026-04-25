import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "ZAHABU | Solutions Ltd",
  description: "The Trusted Source For Independent Auto Appraisal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full min-w-0 max-w-full overflow-x-clip antialiased">
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
