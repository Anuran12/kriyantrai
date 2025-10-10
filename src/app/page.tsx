import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AnimatedServicesShowcase from "@/components/sections/AnimatedServicesShowcase";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import FeaturedWorkSection from "@/components/sections/FeaturedWorkSection";
import CompanyDescriptionSection from "@/components/sections/CompanyDescriptionSection";
import CTABannerSection from "@/components/sections/CTABannerSection";
// import LogoSliderSection from "@/components/sections/LogoSliderSection";
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
        <AnimatedServicesShowcase />
        <WhyChooseUsSection />
        <FeaturedWorkSection />
        <CTABannerSection />
        {/* <LogoSliderSection /> */}
      </main>
      <Footer />
    </div>
  );
}
