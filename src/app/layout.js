import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kriyantrai - AI, ML & Automation Solutions | Transform Your Business",
  description: "Kriyantrai offers cutting-edge AI, ML, and automation solutions to revolutionize your business processes. Discover our services and expertise today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}

      </body>
    </html>
  );
}
