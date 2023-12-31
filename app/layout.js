"use client";

import { AppProvider } from "@/context/context";
import Footer from "./components/Footer";
import NavbarBottom from "./components/navbarBottom";
import NavbarTop from "./components/navbarTop";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <ThemeProvider>
            <NavbarTop />
            {children}
            <NavbarBottom />
            <Footer />
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
