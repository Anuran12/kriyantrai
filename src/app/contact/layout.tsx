import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Kriyantrai - Get In Touch for AI Solutions",
  description:
    "Ready to transform your business with AI and automation? Contact Kriyantrai today. Get a free consultation and discover how we can help.",
  keywords: [
    "Contact",
    "Get Quote",
    "AI Consultation",
    "Business Solutions",
    "Tech Support",
    "Project Inquiry",
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
