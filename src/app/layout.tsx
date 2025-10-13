import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kriyantrai - AI, ML & Automation Solutions",
  description:
    "Transforming businesses with AI, Machine Learning, Automation, Web & App Development, and Business Analytics. Innovative solutions for modern enterprises.",
  keywords: [
    "AI",
    "Machine Learning",
    "Automation",
    "Web Development",
    "App Development",
    "Business Analytics",
    "Kriyantrai",
  ],
  authors: [{ name: "Kriyantrai" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
