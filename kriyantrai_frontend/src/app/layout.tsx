import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const antigravityFont = Outfit({
  variable: "--font-antigravity",
  subsets: ["latin"],
});

import InteractiveBackground from "@/components/InteractiveBackground";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Kriyantrai",
  description: "Kriyantrai specializes in Artificial Intelligence, Machine Learning, and Automation services, delivering scalable AI solutions, intelligent applications, and advanced data systems."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${antigravityFont.variable} antialiased`}
        suppressHydrationWarning
      >
        <InteractiveBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
