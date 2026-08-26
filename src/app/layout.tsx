import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yousef Mostafa Ahmed — Flutter Developer",
  description:
    "Portfolio of Yousef Mostafa Ahmed — Flutter Developer, Mobile Application Developer, and CS Graduate from Alexandria, Egypt. Specialized in Clean Architecture, Bloc, Firebase, and REST API integration.",
  keywords: [
    "Yousef Mostafa Ahmed",
    "Flutter Developer",
    "Mobile App Developer",
    "Flutter Egypt",
    "Dart Developer",
    "Clean Architecture",
    "Bloc",
    "Firebase",
    "Portfolio",
    "Alexandria Egypt",
  ],
  authors: [{ name: "Yousef Mostafa Ahmed" }],
  creator: "Yousef Mostafa Ahmed",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Yousef Mostafa Ahmed — Flutter Developer",
    description:
      "Flutter Developer & Mobile Application Developer building elegant, high-performance mobile experiences. CS Graduate, Ranked 2nd in class.",
    siteName: "Yousef Mostafa Ahmed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yousef Mostafa Ahmed — Flutter Developer",
    description: "Flutter Developer building elegant mobile experiences from Alexandria, Egypt.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#050A14" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
