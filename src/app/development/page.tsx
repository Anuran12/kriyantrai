"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaDesktop,
  FaTools,
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
    <Image
      src={image}
      alt={title}
      width={96} // Assuming w-24 (96px)
      height={96} // Assuming h-24 (96px)
      className="w-24 h-24 object-cover rounded-full mb-4 border-2 border-[#0A2342]"
    />
    <h3 className="text-2xl font-bold text-[#0A2342] mb-2">{title}</h3>
    <p className="text-gray-700 text-base">{description}</p>
  </motion.div>
);

const DevelopmentPage = () => {
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
            Software{" "}
            <span className="text-[#0A2342]">Development Solutions</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Building innovative and scalable software solutions tailored to your
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
            <span className="text-[#0A2342]">
              Software Development Services
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {renderServiceCard({
              icon: <FaCode className="text-5xl" />,
              title: "Web Application Development",
              description:
                "Building robust, scalable, and secure web applications using modern frameworks and technologies.",
            })}
            {renderServiceCard({
              icon: <FaMobileAlt className="text-5xl" />,
              title: "Mobile App Development",
              description:
                "Creating intuitive and high-performance mobile applications for iOS and Android platforms.",
            })}
            {renderServiceCard({
              icon: <FaCloud className="text-5xl" />,
              title: "Cloud-Native Development",
              description:
                "Designing and deploying applications optimized for cloud environments, leveraging services like AWS, Azure, and GCP.",
            })}
            {renderServiceCard({
              icon: <FaDatabase className="text-5xl" />,
              title: "Custom Software Development",
              description:
                "Developing bespoke software solutions tailored to your unique business processes and requirements.",
            })}
            {renderServiceCard({
              icon: <FaDesktop className="text-5xl" />,
              title: "Enterprise Software Solutions",
              description:
                "Building comprehensive software systems to streamline operations and enhance productivity for large organizations.",
            })}
            {renderServiceCard({
              icon: <FaTools className="text-5xl" />,
              title: "API Development & Integration",
              description:
                "Creating secure and efficient APIs to connect disparate systems and enable seamless data exchange.",
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
            <span className="text-[#0A2342]">Featured Development Works</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {renderFeaturedWorkCard({
              title: "E-commerce Platform for Retailer",
              description:
                "Developed a high-performance e-commerce platform, increasing online sales by 30% and improving customer engagement.",
              image: "/file.svg", // Placeholder image
            })}
            {renderFeaturedWorkCard({
              title: "Custom CRM for Service Industry",
              description:
                "Built a tailored CRM system that streamlined client management and improved operational efficiency by 25%.",
              image: "/file.svg", // Placeholder image
            })}
            {renderFeaturedWorkCard({
              title: "Mobile Banking Application",
              description:
                "Created a secure and user-friendly mobile banking app, enhancing customer experience and expanding digital services.",
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
            <span className="text-[#0A2342]">Software Development?</span>
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
                Expert Team
              </h3>
              <p className="text-700 text-lg">
                Our team of experienced developers is proficient in a wide range
                of technologies and committed to delivering excellence.
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
                Agile Methodology
              </h3>
              <p className="text-gray-700 text-lg">
                We adopt an agile development approach, ensuring flexibility,
                transparency, and timely delivery of high-quality software.
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
                Quality Assurance
              </h3>
              <p className="text-gray-700 text-lg">
                Rigorous testing and quality assurance processes are integrated
                into every stage of development to ensure flawless performance.
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
                Post-Launch Support
              </h3>
              <p className="text-gray-700 text-lg">
                Our commitment extends beyond deployment with comprehensive
                support and maintenance to ensure your software runs smoothly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DevelopmentPage;
