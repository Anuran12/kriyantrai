"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  FaChartBar,
  FaTachometerAlt,
  FaLightbulb,
  FaBrain,
  FaDatabase,
  FaSearch,
} from "react-icons/fa";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const renderServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-200 hover:border-[#0A2342] transition-all duration-300"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    <div className="text-[#0A2342] mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-[#0A2342] mb-2">{title}</h3>
    <p className="text-gray-700 text-base">{description}</p>
  </motion.div>
);

interface FeaturedWorkCardProps {
  title: string;
  description: string;
  image: string; // Path to the image
}

const renderFeaturedWorkCard = ({
  title,
  description,
  image,
}: FeaturedWorkCardProps) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-200 hover:border-[#0A2342] transition-all duration-300"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    <img
      src={image}
      alt={title}
      className="w-24 h-24 object-cover rounded-full mb-4 border-2 border-[#0A2342]"
    />
    <h3 className="text-2xl font-bold text-[#0A2342] mb-2">{title}</h3>
    <p className="text-gray-700 text-base">{description}</p>
  </motion.div>
);

const DataAnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Hero.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
        </div>
        <div className="relative z-10 p-8 max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-[#0A2342]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Data <span className="text-[#0A2342]">& Analytics Solutions</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Unlocking insights and driving informed decisions with advanced data
            analytics.
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
                className="bg-[#0A2342] hover:bg-[#0A2342]/90 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Get a Free Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-extrabold text-center mb-16 text-[#0A2342]"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Our{" "}
            <span className="text-[#0A2342]">Data & Analytics Services</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {renderServiceCard({
              icon: <FaChartBar className="text-5xl" />,
              title: "Business Intelligence (BI)",
              description:
                "Transforming raw data into meaningful and actionable insights for strategic decision-making.",
            })}
            {renderServiceCard({
              icon: <FaTachometerAlt className="text-5xl" />,
              title: "Data Visualization & Dashboards",
              description:
                "Creating interactive dashboards and visualizations to present complex data in an understandable format.",
            })}
            {renderServiceCard({
              icon: <FaLightbulb className="text-5xl" />,
              title: "Predictive Analytics",
              description:
                "Utilizing statistical algorithms and machine learning techniques to forecast future outcomes and trends.",
            })}
            {renderServiceCard({
              icon: <FaBrain className="text-5xl" />,
              title: "Machine Learning for Data",
              description:
                "Implementing ML models to uncover patterns, automate decision-making, and enhance data-driven strategies.",
            })}
            {renderServiceCard({
              icon: <FaDatabase className="text-5xl" />,
              title: "Big Data Solutions",
              description:
                "Designing and implementing scalable solutions for managing, processing, and analyzing large volumes of data.",
            })}
            {renderServiceCard({
              icon: <FaSearch className="text-5xl" />,
              title: "Data Strategy & Consulting",
              description:
                "Developing comprehensive data strategies and providing expert consultation to maximize your data's potential.",
            })}
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-20 px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-extrabold text-center mb-16 text-[#0A2342]"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Our{" "}
            <span className="text-[#0A2342]">
              Featured Data & Analytics Works
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {renderFeaturedWorkCard({
              title: "Customer Churn Prediction System",
              description:
                "Developed a predictive model that identified at-risk customers, leading to a 15% reduction in churn rate for an e-commerce client.",
              image: "/file.svg", // Placeholder image
            })}
            {renderFeaturedWorkCard({
              title: "Sales Performance Dashboard",
              description:
                "Created an interactive BI dashboard providing real-time sales insights, enabling a 10% increase in sales efficiency.",
              image: "/file.svg", // Placeholder image
            })}
            {renderFeaturedWorkCard({
              title: "Supply Chain Optimization",
              description:
                "Implemented a big data solution to analyze supply chain logistics, resulting in a 20% reduction in operational costs.",
              image: "/file.svg", // Placeholder image
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-extrabold mb-12 text-[#0A2342]"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Kriyantrai for{" "}
            <span className="text-[#0A2342]">Data & Analytics?</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-[#0A2342] mb-4">
                Deep Expertise
              </h3>
              <p className="text-gray-700 text-lg">
                Our team comprises seasoned data scientists and analysts with a
                proven track record of delivering impactful solutions.
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-[#0A2342] mb-4">
                Actionable Insights
              </h3>
              <p className="text-gray-700 text-lg">
                We go beyond raw data, providing clear, actionable insights that
                empower you to make informed business decisions.
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-[#0A2342] mb-4">
                Cutting-Edge Technology
              </h3>
              <p className="text-gray-700 text-lg">
                We leverage the latest tools and technologies in data science,
                machine learning, and big data to deliver superior results.
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-[#0A2342] mb-4">
                Customized Solutions
              </h3>
              <p className="text-gray-700 text-lg">
                Every solution is tailored to your unique business needs and
                goals, ensuring maximum relevance and impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DataAnalyticsPage;
