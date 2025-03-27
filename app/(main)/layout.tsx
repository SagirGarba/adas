import type { Metadata } from "next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "ADAS-P",
  keywords:
    "Adamawa, Agri business, Market linkage, access to finance, Agriculture",
  description: "Adamawa State Agri-business limited",

  icons: {
    icon: "/logo.png",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
