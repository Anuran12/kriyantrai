"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Filter } from "lucide-react";
import Image from "next/image";

const categories = [
  "All",
  "AI",
  "ML",
  "Automation",
  "Development",
  "Analytics",
];

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    description:
      "A comprehensive analytics dashboard that uses machine learning to provide predictive insights and automated reporting for enterprise clients.",
    category: "AI",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "TensorFlow", "React", "AWS"],
    gradient: "from-[#00D4FF] to-[#0A2342]",
    featured: true,
  },
  {
    id: 2,
    title: "Smart Automation Suite",
    description:
      "End-to-end automation solutions that streamline business processes and reduce operational costs by up to 60% through intelligent workflow optimization.",
    category: "Automation",
    image: "/api/placeholder/600/400",
    technologies: ["Node.js", "Docker", "Kubernetes", "MongoDB"],
    gradient: "from-[#FF6B35] to-[#FF8C42]",
    featured: true,
  },
  {
    id: 3,
    title: "ML-Driven Customer Insights",
    description:
      "Advanced customer segmentation and behavior prediction system using deep learning algorithms to improve marketing effectiveness.",
    category: "ML",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "PyTorch", "FastAPI", "PostgreSQL"],
    gradient: "from-[#0A2342] to-[#00D4FF]",
    featured: true,
  },
  {
    id: 4,
    title: "Intelligent Chatbot Platform",
    description:
      "NLP-powered chatbot solution that provides 24/7 customer support with natural language understanding and contextual responses.",
    category: "AI",
    image: "/api/placeholder/600/400",
    technologies: ["OpenAI API", "Next.js", "Supabase", "Redis"],
    gradient: "from-[#FF8C42] to-[#FF6B35]",
    featured: false,
  },
  {
    id: 5,
    title: "Predictive Maintenance System",
    description:
      "IoT-enabled predictive maintenance platform that uses machine learning to forecast equipment failures and optimize maintenance schedules.",
    category: "ML",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "Scikit-learn", "Vue.js", "InfluxDB"],
    gradient: "from-[#00D4FF] to-[#FF6B35]",
    featured: false,
  },
  {
    id: 6,
    title: "Workflow Automation Engine",
    description:
      "Custom automation engine that integrates with existing business systems to create seamless automated workflows across departments.",
    category: "Automation",
    image: "/api/placeholder/600/400",
    technologies: ["TypeScript", "Node.js", "RabbitMQ", "MySQL"],
    gradient: "from-[#0A2342] to-[#FF8C42]",
    featured: false,
  },
  {
    id: 7,
    title: "Real-time Analytics Dashboard",
    description:
      "Real-time data visualization platform that provides actionable insights through interactive dashboards and automated alerts.",
    category: "Analytics",
    image: "/api/placeholder/600/400",
    technologies: ["React", "D3.js", "WebSocket", "Elasticsearch"],
    gradient: "from-[#FF6B35] to-[#0A2342]",
    featured: false,
  },
  {
    id: 8,
    title: "Mobile App Development Suite",
    description:
      "Cross-platform mobile application with AI-powered features including smart recommendations and personalized user experiences.",
    category: "Development",
    image: "/api/placeholder/600/400",
    technologies: ["React Native", "Firebase", "TensorFlow Lite", "Stripe"],
    gradient: "from-[#FF8C42] to-[#00D4FF]",
    featured: false,
  },
];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === category)
      );
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[calc(50vh)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A2342] via-[#00D4FF]/10 to-[#FF6B35]/10">
          <Image
            src="/Hero.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 z-0 opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2342]/80 to-[#00D4FF]/20 z-10"></div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 drop-shadow-lg">
                Our Transformative Work
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Explore our portfolio of groundbreaking projects where we
                leverage AI, machine learning, and intelligent automation to
                drive unparalleled innovation and deliver measurable impact for
                our clients.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <Filter size={20} className="text-[#0A2342]" />
                <span className="font-semibold text-[#0A2342] text-lg">
                  Filter by Category:
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05, backgroundColor: "#E2E8F0" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-5 py-2 rounded-full font-medium transition-all duration-300 text-base ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-[#0A2342] to-[#00D4FF] text-white shadow-lg transform scale-105"
                        : "bg-gray-100 text-[#64748B] hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-gradient-to-br from-[#F8FAFC] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100"
                  >
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Hover Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                            {project.category}
                          </span>
                          <motion.button
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "rgba(255,255,255,0.4)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                          >
                            <ExternalLink size={18} />
                          </motion.button>
                        </div>

                        <h3 className="text-white text-2xl font-display font-bold mb-2 leading-tight">
                          {project.title}
                        </h3>

                        <p className="text-gray-200 text-sm mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-xs text-white bg-white/30 px-2 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-xs text-white bg-white/30 px-2 py-1 rounded-full">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Gradient border effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                      ></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-[#00D4FF] bg-[#00D4FF]/10 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="text-xs font-bold text-[#FF6B35] flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                            Featured
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-display font-bold text-[#0A2342] mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-[#0A2342] group-hover:to-[#00D4FF] transition-all duration-300">
                        {project.title}
                      </h3>

                      <p className="text-[#64748B] text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-[#64748B] bg-gray-100 px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-xs text-[#64748B] bg-gray-100 px-2 py-1 rounded-full">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* No Results */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-[#64748B] text-lg">
                  No projects found in this category. Try selecting a different
                  filter.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0A2342] to-[#00D4FF] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Partner with Kriyantrai to leverage cutting-edge AI, ML, and
                automation solutions that drive innovation and deliver tangible
                results.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-[#0A2342] font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                Get a Free Consultation
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
