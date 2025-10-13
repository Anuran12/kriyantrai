"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  FaBrain,
  FaRobot,
  FaEye,
  FaChartLine,
  FaCogs,
  FaLightbulb,
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

const MachineLearningPage = () => {
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
            Advanced{" "}
            <span className="text-[#0A2342]">Machine Learning Solutions</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Leveraging cutting-edge AI to drive innovation and efficiency for
            your business.
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
            <span className="text-[#0A2342]">Machine Learning Services</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {renderServiceCard({
              icon: <FaBrain className="text-5xl" />,
              title: "Predictive Analytics",
              description:
                "Forecasting future trends and behaviors to enable proactive decision-making.",
            })}
            {renderServiceCard({
              icon: <FaRobot className="text-5xl" />,
              title: "Natural Language Processing (NLP)",
              description:
                "Developing systems that understand, interpret, and generate human language.",
            })}
            {renderServiceCard({
              icon: <FaEye className="text-5xl" />,
              title: "Computer Vision",
              description:
                "Enabling machines to interpret and understand visual information from the world.",
            })}
            {renderServiceCard({
              icon: <FaChartLine className="text-5xl" />,
              title: "Deep Learning Solutions",
              description:
                "Implementing neural networks for complex pattern recognition and advanced AI capabilities.",
            })}
            {renderServiceCard({
              icon: <FaCogs className="text-5xl" />,
              title: "Reinforcement Learning",
              description:
                "Creating intelligent agents that learn optimal behaviors through trial and error.",
            })}
            {renderServiceCard({
              icon: <FaLightbulb className="text-5xl" />,
              title: "ML Model Deployment & Management",
              description:
                "Deploying, monitoring, and managing machine learning models in production environments.",
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
              Featured Machine Learning Works
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {renderFeaturedWorkCard({
              title: "Fraud Detection System",
              description:
                "Developed an ML-powered system that accurately detects and prevents fraudulent transactions in real-time.",
              image: "/file.svg", // Placeholder image
            })}
            {renderFeaturedWorkCard({
              title: "Customer Churn Prediction",
              description:
                "Implemented a model to predict customer churn, allowing for proactive retention strategies and improved customer lifetime value.",
              image: "/file.svg", // Placeholder image
            })}
            {renderFeaturedWorkCard({
              title: "Automated Image Tagging",
              description:
                "Built a computer vision solution for automated image tagging, enhancing content management and search capabilities.",
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
            <span className="text-[#0A2342]">Machine Learning?</span>
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
                Expertise & Innovation
              </h3>
              <p className="text-gray-700 text-lg">
                Our team comprises leading ML engineers and data scientists,
                constantly pushing the boundaries of AI innovation.
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
                Customized Solutions
              </h3>
              <p className="text-gray-700 text-lg">
                We develop bespoke ML models and solutions tailored to your
                specific business challenges and objectives.
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
                Ethical AI Practices
              </h3>
              <p className="text-gray-700 text-lg">
                Committed to responsible AI development, ensuring fairness,
                transparency, and accountability in all our solutions.
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
                End-to-End Support
              </h3>
              <p className="text-gray-700 text-lg">
                From data preparation to model deployment and ongoing
                optimization, we provide comprehensive support every step of the
                way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MachineLearningPage;
