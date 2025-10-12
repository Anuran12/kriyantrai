"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  FaRobot,
  FaComments,
  FaBrain,
  FaLanguage,
  FaVideo,
  FaCogs,
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

const AIAutomationPage = () => {
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
            AI & <span className="text-[#0A2342]">Automation Solutions</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Transforming businesses with intelligent automation and artificial
            intelligence.
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
            Our <span className="text-[#0A2342]">AI & Automation Services</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {renderServiceCard({
              icon: <FaRobot className="text-5xl" />,
              title: "Robotic Process Automation (RPA)",
              description:
                "Automating repetitive tasks to improve efficiency and reduce operational costs.",
            })}
            {renderServiceCard({
              icon: <FaComments className="text-5xl" />,
              title: "AI-Powered Chatbots & Virtual Assistants",
              description:
                "Enhancing customer service and engagement with intelligent conversational agents.",
            })}
            {renderServiceCard({
              icon: <FaBrain className="text-5xl" />,
              title: "Machine Learning Integration",
              description:
                "Integrating advanced ML models into your existing systems for predictive analytics and decision-making.",
            })}
            {renderServiceCard({
              icon: <FaLanguage className="text-5xl" />,
              title: "Natural Language Processing (NLP)",
              description:
                "Developing solutions that understand, interpret, and generate human language for various applications.",
            })}
            {renderServiceCard({
              icon: <FaVideo className="text-5xl" />,
              title: "Computer Vision Solutions",
              description:
                "Implementing AI to interpret and make decisions based on visual data for tasks like object recognition and analysis.",
            })}
            {renderServiceCard({
              icon: <FaCogs className="text-5xl" />,
              title: "Custom AI Development",
              description:
                "Building bespoke AI solutions tailored to your unique business challenges and opportunities.",
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
              Featured AI & Automation Works
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {renderFeaturedWorkCard({
              title: "Automated Customer Support Chatbot",
              description:
                "Developed an AI-powered chatbot that handles 70% of customer inquiries, significantly reducing response times and improving satisfaction.",
              image: "/file.svg", // Placeholder image
            })}
            {renderFeaturedWorkCard({
              title: "Intelligent Document Processing",
              description:
                "Implemented an RPA solution with ML for automated extraction and processing of data from various document types, boosting operational efficiency.",
              image: "/file.svg", // Placeholder image
            })}
            {renderFeaturedWorkCard({
              title: "Predictive Maintenance System",
              description:
                "Created an AI system that predicts equipment failures before they occur, leading to a 25% reduction in downtime for manufacturing clients.",
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
            <span className="text-[#0A2342]">AI & Automation?</span>
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
                Innovation at Core
              </h3>
              <p className="text-gray-700 text-lg">
                We leverage the latest AI and automation technologies to deliver
                innovative solutions that drive real business value.
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
                Tailored Strategies
              </h3>
              <p className="text-gray-700 text-lg">
                Our approach is customized to your specific needs, ensuring
                solutions that perfectly align with your business objectives.
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
                End-to-End Implementation
              </h3>
              <p className="text-gray-700 text-lg">
                From conceptualization to deployment and ongoing support, we
                provide comprehensive assistance throughout your AI and
                automation journey.
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
                Measurable Impact
              </h3>
              <p className="text-gray-700 text-lg">
                We focus on delivering solutions that provide tangible results,
                improving efficiency, and driving growth for your business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AIAutomationPage;
