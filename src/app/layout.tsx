import type { Metadata } from "next";
import { Arimo, Roboto_Mono } from "next/font/google";
import "./globals.scss";
import PrintTitleEffect from "@/components/utils/PrintTitleEffect";
import { DOCUMENT_TITLES } from "@/constants/documentTitles";

const roboto = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: DOCUMENT_TITLES.WEB,
  description: "A resume template using custom styling, made by Andres.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PrintTitleEffect />
      <body className={`${roboto.variable} ${robotoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
