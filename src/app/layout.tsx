import {
  Playfair_Display, Noto_Serif_Display, Open_Sans
} from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Providers } from "./providers";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-title",
});

const notoSerif = Noto_Serif_Display({
  subsets: ["latin"],
  variable: "--font-header",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "3F Community",
  description: "Family, Friends & Fools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${playfair.variable} ${notoSerif.variable} ${openSans.variable} antialiased h-full`}
      >
        <Providers>
          <main className="h-full">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
