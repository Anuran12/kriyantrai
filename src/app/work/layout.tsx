import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work - Kriyantrai Portfolio | AI & ML Projects",
  description:
    "Explore our portfolio of innovative AI, machine learning, and automation projects. See how we've transformed businesses across various industries.",
  keywords: [
    "Portfolio",
    "AI Projects",
    "Machine Learning",
    "Automation Solutions",
    "Case Studies",
    "Tech Projects",
  ],
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
