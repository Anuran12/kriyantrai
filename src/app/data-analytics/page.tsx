"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Database } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DataAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/data-analytics-hero.jpg" // Placeholder image, replace with actual
          alt="Data & Analytics Services"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] opacity-80 z-10"></div>
        <div className="relative z-20 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-4"
          >
            Data & Analytics Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
          >
            Transforming raw data into actionable insights for strategic
            decision-making.
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
                className="bg-[#0A2342] text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center mx-auto shadow-lg hover:shadow-xl transition-all duration-300"
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
            Our Expertise in Data & Analytics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {renderServiceCard(
              "Data Cleaning & Visualization",
              "Ensuring data accuracy and presenting complex information clearly.",
              [
                "Data Quality Management",
                "Interactive Dashboards",
                "Custom Reports",
                "Infographics & Storytelling",
              ],
              "from-[#FF6B35] to-[#FF8C42]"
            )}
            {renderServiceCard(
              "Dashboard Development",
              "Creating dynamic and insightful dashboards for real-time monitoring.",
              [
                "Power BI Dashboards",
                "Tableau Dashboards",
                "Custom Web Dashboards",
                "KPI Tracking & Reporting",
              ],
              "from-[#00D4FF] to-[#0A2342]"
            )}
            {renderServiceCard(
              "Business Intelligence Solutions",
              "Empowering businesses with data-driven insights for strategic growth.",
              [
                "BI Strategy & Consulting",
                "Data Warehousing",
                "ETL Processes",
                "Ad-hoc Reporting",
              ],
              "from-[#FF8C42] to-[#FF6B35]"
            )}
            {renderServiceCard(
              "Predictive Analytics",
              "Forecasting future trends and behaviors to enable proactive decision-making.",
              [
                "Demand Forecasting",
                "Customer Churn Prediction",
                "Risk Assessment",
                "Fraud Detection",
              ],
              "from-[#0A2342] to-[#00D4FF]"
            )}
            {renderServiceCard(
              "Data Processing",
              "Efficiently collecting, transforming, and managing large datasets.",
              [
                "Big Data Processing (Spark, Hadoop)",
                "Data Lake & Data Warehouse Solutions",
                "Real-time Data Streaming",
                "Data Governance & Security",
              ],
              "from-[#FF6B35] to-[#FF8C42]"
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-[#0A2342] mb-6">
          Why Choose Kriyantrai for Data & Analytics?
        </h2>
        <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
          Our data experts leverage cutting-edge tools and methodologies to
          uncover hidden patterns and provide clear, actionable intelligence. We
          help you harness the full potential of your data to drive innovation
          and achieve your business objectives.
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
        <BarChart3 size={32} className="text-white" />
      </div>
      <h3 className="text-2xl font-bold text-[#0A2342] mb-4">{title}</h3>
      <p className="text-[#64748B] mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-[#64748B]">
            <Database
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
