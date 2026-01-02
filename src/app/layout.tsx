import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";

import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sushanto Kumar | MERN Stack & Next.js Developer Portfolio",
  description:
    "I’m Sushanto Kumar, a passionate MERN Stack developer specializing in React.js, Next.js, Tailwind CSS, Node.js, Express.js, and MongoDB. Explore my projects, blogs, and experience building modern web applications.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Sushanto Kumar",
    "Web Developer Portfolio",
    "React Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Full Stack Developer Bangladesh",
    "Tailwind CSS Expert",
    "Node.js Developer",
    "MongoDB Projects",
    "Modern Web Applications",
  ],
  openGraph: {
    title: "Sushanto Kumar | MERN Stack & Next.js Developer Portfolio",
    description:
      "Explore modern full-stack projects and blogs by Sushanto Kumar — a React & Next.js developer from Bangladesh.",
    url: "https://sushantokumar.vercel.app",
    siteName: "Sushanto Kumar Portfolio",
    images: [
      {
        url: "https://sushantokumar.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sushanto Kumar Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://sushantokumar.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="MaDbWmP54uIbI2CW-nwQmC-a5i2R72BuW4jejYD1ap4"
        />
        <meta name="robots" content="follow" />
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sushanto Kumar",
              url: "https://sushantokumar.vercel.app",
              jobTitle: "MERN Stack & Next.js Developer",
              description:
                "Sushanto Kumar — MERN Stack developer specializing in React.js, Next.js, Node.js, Express, and MongoDB.",
              sameAs: [
                "https://github.com/Sushanto171",
                "https://www.linkedin.com/in/sushanto-kumar171/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col dark`}
      >
        <Toaster position="bottom-right" richColors={true} />
        {children}
      </body>
    </html>
  );
}
