"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Code, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/development-hero.jpg"
          alt="Development Services"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2342] to-[#00D4FF] opacity-80 z-10"></div>
        <div className="relative z-20 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-4"
          >
            Development Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
          >
            Crafting innovative and robust digital solutions tailored to your
            business needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF6B35] text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center mx-auto shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#0A2342] mb-12">
            Our Expertise in Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {renderServiceCard(
              "Web Development",
              "Building responsive, high-performance websites and web applications.",
              [
                "Frontend Development (React, Angular, Vue)",
                "Backend Development (Node.js, Python, Ruby)",
                "CMS Development (WordPress, Shopify)",
                "E-commerce Solutions",
              ],
              "from-[#00D4FF] to-[#0A2342]"
            )}
            {renderServiceCard(
              "Mobile App Development",
              "Creating intuitive and engaging mobile experiences for iOS and Android.",
              [
                "Native iOS Development (Swift, Objective-C)",
                "Native Android Development (Kotlin, Java)",
                "Cross-Platform (React Native, Flutter)",
                "UI/UX Design for Mobile",
              ],
              "from-[#FF6B35] to-[#FF8C42]"
            )}
            {renderServiceCard(
              "Desktop Application Development",
              "Developing powerful and efficient desktop applications for various operating systems.",
              [
                "Windows Applications",
                "macOS Applications",
                "Linux Applications",
                "Cross-Platform Desktop Apps (Electron)",
              ],
              "from-[#0A2342] to-[#00D4FF]"
            )}
            {renderServiceCard(
              "Full-Stack Solutions",
              "Delivering end-to-end development, covering both frontend and backend.",
              [
                "Database Design & Management",
                "Server-Side Logic",
                "API Development",
                "Cloud Deployment & Hosting",
              ],
              "from-[#FF8C42] to-[#FF6B35]"
            )}
            {renderServiceCard(
              "API Integration",
              "Seamlessly connecting your applications with third-party services and systems.",
              [
                "RESTful API Development",
                "Third-Party API Integration",
                "Payment Gateway Integration",
                "Custom API Solutions",
              ],
              "from-[#00D4FF] to-[#0A2342]"
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-[#0A2342] mb-6">
          Why Choose Kriyantrai for Development?
        </h2>
        <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
          We combine technical expertise with creative problem-solving to
          deliver solutions that not only meet your requirements but also exceed
          your expectations. Our agile approach ensures transparency and
          flexibility throughout the development lifecycle.
        </p>
      </section>
      <Footer />
    </div>
  );
}

function renderServiceCard(
  title: string,
  description: string,
  features: string[],
  gradient: string
) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
    >
      <div
        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-md`}
      >
        <Code size={32} className="text-white" />
      </div>
      <h3 className="text-2xl font-bold text-[#0A2342] mb-4">{title}</h3>
      <p className="text-[#64748B] mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-[#64748B]">
            <Zap
              size={18}
              className={`mr-3 text-transparent bg-clip-text bg-gradient-to-br ${gradient}`}
            />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
