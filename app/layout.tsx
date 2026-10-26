
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Marshellina Putri Agita | Creative Portfolio",
  description:
    "A creative portfolio exploring visual communication, content creation, and collaboration by Marshellina Putri Agita.",
  openGraph: {
    title: "Marshellina Putri Agita | Creative Portfolio",
    description:
      "Visual communication, content creation, and creative collaborations.",
    url: "https://marshellina-putri-agita-portfolio.vercel.app/",
    siteName: "Marshellina Putri Agita",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
