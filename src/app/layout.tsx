import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

/* Source Sans Pro is distributed on Google Fonts as Source Sans 3. */
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://logicdatasolutions.com"),
  title: {
    default: "Logic Data Solutions: AI That Works, Built on Data You Can Trust",
    template: "%s | Logic Data Solutions",
  },
  description:
    "Custom AI (assistants, automation, and apps) for small and growing businesses, built by an engineer with deep enterprise data roots so it holds up in the real world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} ${sourceSans.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-red focus:px-4 focus:py-2 focus:text-offwhite"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
