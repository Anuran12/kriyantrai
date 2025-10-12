"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredProjects = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    description:
      "A comprehensive analytics dashboard that uses machine learning to provide predictive insights and automated reporting.",
    image: "/images/projects/project-1.jpg",
    category: "AI & Analytics",
    technologies: ["Python", "TensorFlow", "React", "AWS"],
    gradient: "from-[#00D4FF] to-[#0A2342]",
  },
  {
    id: 2,
    title: "Smart Automation Suite",
    description:
      "End-to-end automation solutions that streamline business processes and reduce operational costs by 60%.",
    image: "/images/projects/project-2.jpg",
    category: "Automation",
    technologies: ["Node.js", "Docker", "Kubernetes", "MongoDB"],
    gradient: "from-[#FF6B35] to-[#FF8C42]",
  },
  {
    id: 3,
    title: "ML-Driven Customer Insights",
    description:
      "Advanced customer segmentation and behavior prediction system using deep learning algorithms.",
    image: "/images/projects/project-3.jpg",
    category: "Machine Learning",
    technologies: ["Python", "PyTorch", "FastAPI", "PostgreSQL"],
    gradient: "from-[#0A2342] to-[#00D4FF]",
  },
];

export default function FeaturedWorkSection() {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#0A2342] mb-6">
            Featured Work
          </h2>
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
            Discover our latest projects and see how we&apos;re transforming
            businesses with innovative AI, ML, and automation solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-gray-900/60 z-10"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm font-medium bg-black/30 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-white p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                    </motion.button>
                  </div>

                  <h3 className="text-white text-xl font-display font-bold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-200 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-white bg-white/20 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gradient border effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/work">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0A2342] to-[#00D4FF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              See All Work
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
