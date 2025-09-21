import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import FeaturedWorkSection from "@/components/sections/FeaturedWorkSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kriyantrai - AI, ML & Automation Solutions | Transform Your Business",
  description:
    "Transforming businesses with AI, Machine Learning, and Automation. We create intelligent solutions that drive innovation, efficiency, and growth. Get started today!",
  keywords: [
    "AI Solutions",
    "Machine Learning",
    "Automation",
    "Business Intelligence",
    "Tech Consulting",
    "Digital Transformation",
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <FeaturedWorkSection />
      </main>
      <Footer />
    </div>
  );
}
