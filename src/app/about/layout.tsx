import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Kriyantrai - AI, ML & Automation Experts",
  description:
    "Learn about Kriyantrai's mission to transform businesses with AI, machine learning, and intelligent automation. Meet our expert team and discover our core values.",
  keywords: [
    "About Kriyantrai",
    "AI Company",
    "Machine Learning Experts",
    "Automation Solutions",
    "Tech Team",
    "Company Values",
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
