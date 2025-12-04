'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { Instrument_Serif } from 'next/font/google';

const instr = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400']
});

// Reusable Project Card Component
const ProjectCard = ({ 
  image, 
  title, 
  description, 
  tags = [], 
  technologies = [], 
  featured = false,
  projectUrl = "#"
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const tagColors = {
    AI: 'bg-purple-100 text-purple-700 border-purple-300',
    ML: 'bg-blue-100 text-blue-700 border-blue-300',
    AUTOMATION: 'bg-green-100 text-green-700 border-green-300',
    DEVELOPMENTS: 'bg-orange-100 text-orange-700 border-orange-300',
    ANALYTICS: 'bg-pink-100 text-pink-700 border-pink-300'
  };

  return (
    <motion.div
      className='relative w-full max-w-md'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Neomorphism Card */}
      <div className='bg-[#F9FAFB] rounded-3xl p-6 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff] transition-all duration-300'>
        
        {/* Image Container with Glassmorphism Effect */}
        <div className='relative w-full h-64 rounded-2xl overflow-hidden mb-4'>
          <img 
            src={image} 
            alt={title}
            className='w-full h-full object-cover'
          />
          
          {/* Glassmorphism Overlay on Hover */}
          <motion.div
            className='absolute inset-0 backdrop-blur-md bg-white/30 flex items-center justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className='bg-[#F66F13] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 shadow-lg hover:bg-[#d45a0a] transition-colors'
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: isHovered ? 1 : 0,
                rotate: isHovered ? 0 : -180
              }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Site
              <ExternalLink size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Filter Tags */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border ${tagColors[tag] || 'bg-gray-100 text-gray-700 border-gray-300'}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Featured Flag */}
        {featured && (
          <motion.div
            className='inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold mb-3 shadow-md'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Star size={16} fill="white" />
            Featured Project
          </motion.div>
        )}

        {/* Project Title */}
        <h3 className={`${instr.className} text-2xl md:text-3xl font-bold text-[#0A2342] mb-3`}>
          {title}
        </h3>

        {/* Project Description */}
        <p className='text-gray-700 leading-relaxed mb-4 text-sm md:text-base'>
          {description}
        </p>

        {/* Technologies Used */}
        <div className='flex flex-wrap gap-2'>
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              className='px-3 py-1.5 rounded-full text-xs font-medium bg-white text-[#0A2342] shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] border border-gray-200'
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff'
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Demo Page showing multiple project cards
function ProjectsShowcase() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      title: 'AI-Powered Analytics Dashboard',
      description: 'A comprehensive analytics platform that leverages machine learning to provide real-time insights and predictive analysis for business intelligence.',
      tags: ['AI', 'ML', 'ANALYTICS'],
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      featured: true,
      projectUrl: 'https://example.com/project1'
    },
    {
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
      title: 'Smart Automation Suite',
      description: 'End-to-end automation solution that streamlines business processes using intelligent workflows and robotic process automation.',
      tags: ['AUTOMATION', 'DEVELOPMENTS'],
      technologies: ['Node.js', 'MongoDB', 'Docker', 'Kubernetes'],
      featured: false,
      projectUrl: 'https://example.com/project2'
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      title: 'Predictive Maintenance System',
      description: 'IoT-enabled predictive maintenance platform using machine learning to forecast equipment failures and optimize maintenance schedules.',
      tags: ['ML', 'ANALYTICS', 'AI'],
      technologies: ['PyTorch', 'FastAPI', 'Vue.js', 'InfluxDB'],
      featured: true,
      projectUrl: 'https://example.com/project3'
    },
    {
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      title: 'Enterprise Development Platform',
      description: 'A robust development environment with integrated CI/CD pipelines, code quality tools, and collaborative features for enterprise teams.',
      tags: ['DEVELOPMENTS', 'AUTOMATION'],
      technologies: ['TypeScript', 'GraphQL', 'Redis', 'Jenkins'],
      featured: false,
      projectUrl: 'https://example.com/project4'
    }
  ];

  return (
    <section className='min-h-screen bg-[#F9FAFB] py-20 px-6 md:px-12 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`${instr.className} text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2342] mb-4`}>
            Our <span className='text-[#F66F13]'>Projects</span>
          </h1>
          <div className="w-24 h-1 bg-[#F66F13] mx-auto rounded-full mb-6"></div>
          <p className='text-gray-700 text-lg md:text-xl max-w-2xl mx-auto'>
            Explore our portfolio of innovative solutions that drive digital transformation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsShowcase;