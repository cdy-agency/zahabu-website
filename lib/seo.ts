import type { Metadata } from "next";

const DEFAULT_SITE_URL = "https://zahabusolutions.rw";

const siteUrlValue = process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;

export const SITE_URL = siteUrlValue.startsWith("http")
  ? siteUrlValue
  : `https://${siteUrlValue}`;

export const SITE_NAME = "ZAHABU Solutions Ltd";

export const DEFAULT_DESCRIPTION =
  "Trusted insurance brokerage and risk advisory services in Kigali, Rwanda.";

export const DEFAULT_KEYWORDS = [
  "ZAHABU Solutions",
  "insurance broker Rwanda",
  "Kigali insurance services",
  "risk advisory Rwanda",
  "auto appraisal",
  "corporate insurance Rwanda",
];

export function absoluteUrl(pathname: string) {
  return new URL(pathname, SITE_URL).toString();
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    keywords: keywords ?? DEFAULT_KEYWORDS,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
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
      title,
      description,
      images: [absoluteUrl("/logo.png")],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
