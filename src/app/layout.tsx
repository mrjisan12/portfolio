import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — Software Engineer`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Software Engineer Bangladesh",
    "Backend Developer Bangladesh",
    "Django Developer Bangladesh",
    "Laravel Developer Bangladesh",
    "React Developer Bangladesh",
    "AI Engineer Bangladesh",
    "Md Mizanur Rahman",
    "Full Stack Developer Dhaka",
    "Python Developer Bangladesh",
    "PostgreSQL Developer Bangladesh",
    "University of Asia Pacific CSE",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — Software Engineer`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — Software Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — Software Engineer`,
    description: SITE_CONFIG.description,
    images: ["/og-image.jpg"],
    creator: "@mizanur_rahman",
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_CONFIG.name,
  jobTitle: "Software Engineer",
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  email: SITE_CONFIG.email,
  telephone: SITE_CONFIG.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "Bangladesh",
  },
  sameAs: [SITE_CONFIG.github, SITE_CONFIG.linkedin],
  knowsAbout: [
    "Django",
    "Laravel",
    "React",
    "Next.js",
    "PostgreSQL",
    "Python",
    "Machine Learning",
    "REST APIs",
    "Backend Engineering",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Asia Pacific",
  },
  worksFor: {
    "@type": "Organization",
    name: "Innovation Lab 360",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#030712" />
      </head>
      <body className="bg-[#030712] text-[#F8FAFC] antialiased font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
