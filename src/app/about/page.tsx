"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">
          <Image
            src="/images/about-hero.jpg" // Placeholder image, replace with actual
            alt="About Kriyantrai"
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
              About Kriyantrai
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            >
              Innovating for a smarter, more connected future.
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
                  Get in Touch
                  <ArrowRight className="ml-2" size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#0A2342] mb-12">
              Our Story
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {renderAboutCard(
                "Our Mission",
                "To empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and sustainable growth.",
                "from-[#00D4FF] to-[#0A2342]"
              )}
              {renderAboutCard(
                "Our Vision",
                "To be a global leader in digital transformation, recognized for our expertise, integrity, and commitment to client success.",
                "from-[#FF6B35] to-[#FF8C42]"
              )}
              {renderAboutCard(
                "Our Values",
                "Innovation, Excellence, Collaboration, Integrity, and Customer Centricity are at the core of everything we do.",
                "from-[#0A2342] to-[#00D4FF]"
              )}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#0A2342] mb-6">
              Our Journey So Far
            </h2>
            <p className="text-lg text-[#64748B] max-w-3xl mx-auto mb-12">
              Founded in [Year], Kriyantrai began with a vision to bridge the
              gap between complex technological advancements and practical
              business applications. Over the years, we have grown into a team
              of passionate experts dedicated to delivering exceptional results
              and fostering long-term partnerships.
            </p>
            {/* Timeline or key milestones can be added here */}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#0A2342] mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {renderTeamMember(
                "John Doe",
                "CEO & Founder",
                "/images/team-john.jpg", // Placeholder image
                "John is a visionary leader with over 20 years of experience in the tech industry. His passion for innovation drives Kriyantrai's strategic direction."
              )}
              {renderTeamMember(
                "Jane Smith",
                "Chief Technology Officer",
                "/images/team-jane.jpg", // Placeholder image
                "Jane leads our technology initiatives, bringing a wealth of expertise in AI, machine learning, and software architecture."
              )}
              {renderTeamMember(
                "Peter Jones",
                "Head of Development",
                "/images/team-peter.jpg", // Placeholder image
                "Peter is an expert in full-stack development, ensuring our solutions are robust, scalable, and user-friendly."
              )}
              {renderTeamMember(
                "Sarah Lee",
                "Lead Data Scientist",
                "/images/team-sarah.jpg", // Placeholder image
                "Sarah specializes in transforming complex data into actionable insights, helping clients make informed decisions."
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function renderAboutCard(title: string, description: string, gradient: string) {
  return (
    <motion.div
      className={`bg-gradient-to-r ${gradient} rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-200 hover:border-[#0A2342] transition-all duration-300`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h3 className="text-2xl font-bold text-[#0A2342] mb-4">{title}</h3>
      <p className="text-[#64748B]">{description}</p>
    </motion.div>
  );
}

function renderTeamMember(
  name: string,
  role: string,
  imageSrc: string,
  bio: string
) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 text-center"
    >
      <Image
        src={imageSrc}
        alt={name}
        width={150}
        height={150}
        className="rounded-full mx-auto mb-6 object-cover w-36 h-36"
      />
      <h3 className="text-2xl font-bold text-[#0A2342] mb-2">{name}</h3>
      <p className="text-[#FF6B35] font-semibold mb-4">{role}</p>
      <p className="text-[#64748B] text-sm">{bio}</p>
    </motion.div>
  );
}
