import type { Metadata } from "next";
import { Gowun_Batang, Nanum_Myeongjo } from "next/font/google";
import localFont from "next/font/local";

import { siteMetadata } from "@/utils/siteMetaData";
import "@style/globals.css";

const bookk = localFont({
  src: "./fonts/bookk_regular.ttf",
  variable: "--font-bookk",
  display: "swap",
});
const nanum_square = localFont({
  src: "./fonts/NanumSquareRoundOTFR.otf",
  variable: "--font-nanum",
  display: "swap",
});
const pretendard = localFont({
  src: "./fonts/Pretendard-Regular.woff",
  variable: "--font-pretendard",
  display: "swap",
});
const gowun_batang = Gowun_Batang({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gowun",
  weight: "400",
});
const nanum_myungjo = Nanum_Myeongjo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-myungjo",
  weight: "400",
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  icons: {
    icon: "/imgs/logo.png",
  },
  //https://nextjs.org/docs/app/api-reference/functions/generate-metadata#opengraph
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` 
        ${pretendard.variable}
        ${nanum_square.variable}
        ${bookk.variable}
        ${gowun_batang.variable}
        ${nanum_myungjo.variable}
        `}
      >
        {children}
      </body>
    </html>
  );
}
