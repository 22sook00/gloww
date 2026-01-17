import type { Metadata } from "next";
import { Nanum_Myeongjo, Amiri } from "next/font/google";
import localFont from "next/font/local";

import { siteMetadata } from "@/utils/siteMetaData";
import "@/style/globals.css";

const bookk = localFont({
  src: "./fonts/bookk_regular.ttf",
  variable: "--font-bookk",
  display: "swap",
  adjustFontFallback: false,
});
const nanum_square = localFont({
  src: "./fonts/NanumSquareRoundOTFR.otf",
  variable: "--font-nanum",
  display: "swap",
  adjustFontFallback: false,
});
const pretendard = localFont({
  src: "./fonts/Pretendard-Regular.woff",
  variable: "--font-pretendard",
  display: "swap",
  adjustFontFallback: false,
});
const amiri = Amiri({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-amiri",
  weight: "400",
  adjustFontFallback: false,
});

const nanum_myungjo = Nanum_Myeongjo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-myungjo",
  weight: "400",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  icons: {
    icon: "/imgs/logo.png",
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [
      {
        url: "imgs/mainSample8.jpg",
        alt: "thumbnail",
      },
    ],
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
      <head>
        <title>{siteMetadata.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={siteMetadata.siteUrl} />

        <meta name="description" content={siteMetadata.description} />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:url" content={siteMetadata.siteUrl} />
        <meta property="og:site_name" content={siteMetadata.title} />
        <meta
          property="og:image"
          //content="https://wedding-thumbnail.s3.ap-northeast-2.amazonaws.com/KakaoTalk_Photo_2024-07-31-22-50-45.jpeg"
          content="https://glow-wedding-card.s3.us-east-2.amazonaws.com/cdn/img_thumbnail.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteMetadata.title} />
        <meta name="twitter:description" content={siteMetadata.description} />
        <meta
          name="twitter:image"
          content="https://glow-wedding-card.s3.us-east-2.amazonaws.com/cdn/img_thumbnail.jpeg"
        />

        <meta property="og:image:alt" content="thumbnail" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:type" content="website" />
        <meta name="author" content="Gloww Wedding" />
      </head>
      <body
        className={`
      ${pretendard.variable}
      ${nanum_square.variable}
      ${bookk.variable}
      ${amiri.variable}
      ${nanum_myungjo.variable}
      `}
      >
        {children}
      </body>
    </html>
  );
}
