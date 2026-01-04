'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, Filter, TrendingUp, Award, Users } from 'lucide-react';
import { Instrument_Serif } from 'next/font/google';
import Footer from '@/components/Footer';

const instr = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400']
});

// Compact Professional Project Card
const ProjectCard = ({ 
  image, 
  title, 
  description, 
  tags = [], 
  technologies = [], 
  featured = false,
  projectUrl = "#",
  client,
  metrics
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      className='relative w-full h-full'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100'>
        
        {/* Compact Image Section */}
        <div className='relative w-full h-48 overflow-hidden group/img'>
          <motion.img 
            src={image} 
            alt={title}
            className='w-full h-full object-cover'
            animate={{
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Gradient Overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-[#153776]/80 via-[#153776]/20 to-transparent' />
          
          {/* Featured Badge */}
          {featured && (
            <motion.div
              className='absolute top-3 right-3 flex items-center gap-1.5 bg-[#F67C0E] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg'
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Star size={12} fill="white" />
              FEATURED
            </motion.div>
          )}

          {/* Tags */}
          <div className='absolute bottom-3 left-3 flex flex-wrap gap-1.5'>
            {tags.slice(0, 2).map((tag, index) => (
              <motion.span
                key={index}
                className='px-2.5 py-1 rounded text-xs font-semibold bg-white/95 text-[#153776] backdrop-blur-sm'
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Hover Overlay */}
          <motion.div
            className='absolute inset-0 bg-[#153776]/95 flex flex-col items-center justify-center gap-3 p-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className='bg-[#F67C0E] text-white px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 shadow-lg hover:bg-[#e56d00] transition-colors text-sm'
              initial={{ y: 10, opacity: 0 }}
              animate={{ 
                y: isHovered ? 0 : 10,
                opacity: isHovered ? 1 : 0
              }}
              transition={{ delay: 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Project
              <ExternalLink size={16} />
            </motion.a>
            
            {/* Compact Metrics */}
            {metrics && (
              <motion.div
                className='flex gap-4 text-white text-xs'
                initial={{ y: 10, opacity: 0 }}
                animate={{ 
                  y: isHovered ? 0 : 10,
                  opacity: isHovered ? 1 : 0
                }}
                transition={{ delay: 0.1 }}
              >
                {Object.entries(metrics).slice(0, 3).map(([key, value], idx) => (
                  <div key={idx} className='text-center'>
                    <div className='font-bold text-[#F67C0E]'>{value}</div>
                    <div className='text-xs opacity-90'>{key}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Compact Content Section */}
        <div className='p-4 flex flex-col flex-grow'>
          
          {/* Client */}
          {client && (
            <div className='text-xs text-gray-500 mb-2 font-medium'>
              <span className='text-[#F67C0E]'>CLIENT:</span> {client}
            </div>
          )}

          {/* Title */}
          <h3 className={`${instr.className} text-lg font-bold text-[#153776] mb-2 line-clamp-2 hover:text-[#F67C0E] transition-colors`}>
            {title}
          </h3>

          {/* Description */}
          <p className='text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed flex-grow'>
            {description}
          </p>

          {/* Technologies */}
          <div className='flex flex-wrap gap-1.5 pt-3 border-t border-gray-100'>
            {technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className='px-2 py-1 rounded text-xs font-medium bg-[#F9FAFB] text-[#153776] hover:bg-[#153776] hover:text-white transition-colors'
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className='px-2 py-1 rounded text-xs font-medium text-gray-400'>
                +{technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Projects Showcase
function ProjectsShowcase() {
  const categories = ['ALL', 'AI', 'ML', 'AUTOMATION', 'DEVELOPMENTS', 'ANALYTICS'];
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      title: 'Enterprise AI Analytics Platform',
      description: 'Comprehensive AI-driven analytics solution processing 10TB+ data daily with real-time insights and predictive modeling for Fortune 500 financial services client.',
      tags: ['AI', 'ANALYTICS'],
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Kubernetes', 'Kafka'],
      featured: true,
      client: 'Fortune 500 Financial',
      metrics: { 'ROI': '340%', 'Uptime': '99.99%', 'Users': '50K+' },
      projectUrl: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
      title: 'Intelligent Process Automation',
      description: 'End-to-end RPA solution automating 120+ business processes with 85% reduction in manual processing time.',
      tags: ['AUTOMATION', 'DEVELOPMENTS'],
      technologies: ['Node.js', 'MongoDB', 'Docker', 'Kubernetes', 'RabbitMQ'],
      featured: false,
      client: 'Global Manufacturing',
      metrics: { 'Saved': '$2.4M', 'Efficiency': '+85%' },
      projectUrl: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      title: 'IoT Predictive Maintenance',
      description: 'Machine learning platform predicting equipment failures 14 days in advance across 50+ manufacturing sites.',
      tags: ['ML', 'ANALYTICS'],
      technologies: ['PyTorch', 'FastAPI', 'Vue.js', 'InfluxDB', 'Azure IoT'],
      featured: true,
      client: 'Industrial Equipment',
      metrics: { 'Downtime': '-78%', 'Sites': '50+' },
      projectUrl: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      title: 'Cloud Development Platform',
      description: 'Scalable enterprise environment with integrated CI/CD pipelines accelerating releases by 10x.',
      tags: ['DEVELOPMENTS', 'AUTOMATION'],
      technologies: ['TypeScript', 'GraphQL', 'Redis', 'Jenkins', 'AWS'],
      featured: false,
      client: 'Tech Unicorn',
      metrics: { 'Speed': '10x', 'Teams': '25' },
      projectUrl: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
      title: 'Computer Vision QC System',
      description: 'Deep learning visual inspection achieving 99.7% defect detection accuracy at 10K items per hour.',
      tags: ['AI', 'ML'],
      technologies: ['Python', 'OpenCV', 'Keras', 'Flask', 'NVIDIA Triton'],
      featured: false,
      client: 'Electronics Manufacturer',
      metrics: { 'Accuracy': '99.7%', 'Speed': '10K/hr' },
      projectUrl: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      title: 'Real-Time Data Pipeline',
      description: 'High-throughput analytics engine processing 50M+ events per second with sub-100ms latency.',
      tags: ['ANALYTICS', 'DEVELOPMENTS'],
      technologies: ['Kafka', 'Spark', 'Elasticsearch', 'D3.js', 'Cassandra'],
      featured: true,
      client: 'Payment Network',
      metrics: { 'Events': '50M/s', 'Latency': '<100ms' },
      projectUrl: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
      title: 'Multi-Cloud Orchestration',
      description: 'Infrastructure automation managing 5,000+ resources across AWS, Azure, and GCP.',
      tags: ['AUTOMATION', 'DEVELOPMENTS'],
      technologies: ['Terraform', 'AWS', 'Azure', 'Python', 'Ansible'],
      featured: false,
      client: 'SaaS Enterprise',
      metrics: { 'Cost': '-42%', 'Resources': '5K+' },
      projectUrl: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      title: 'Customer Intelligence Engine',
      description: 'ML platform analyzing 200M+ interactions to predict churn and lifetime value.',
      tags: ['ML', 'ANALYTICS'],
      technologies: ['Scikit-learn', 'Pandas', 'React', 'MySQL', 'Airflow'],
      featured: false,
      client: 'E-Commerce Platform',
      metrics: { 'Retention': '+34%', 'Revenue': '+28%' },
      projectUrl: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
      title: 'Blockchain Supply Chain',
      description: 'Distributed ledger solution for end-to-end supply chain transparency and traceability.',
      tags: ['DEVELOPMENTS', 'AUTOMATION'],
      technologies: ['Solidity', 'Ethereum', 'Web3.js', 'Node.js', 'MongoDB'],
      featured: false,
      client: 'Logistics Corp',
      metrics: { 'Transparency': '100%', 'Fraud': '-95%' },
      projectUrl: '#'
    }
  ];

  const filteredProjects = selectedCategory === 'ALL' 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedCategory));

  return (
    <div className='w-full bg-[#F9FAFB]'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-[#153776] via-[#1a4489] to-[#153776] py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden'>
        {/* Subtle Background Pattern */}
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute inset-0' style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className='max-w-7xl mx-auto relative z-10 mt-10'>
          <motion.div
            className='text-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold mb-6'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Award size={16} />
              PORTFOLIO SHOWCASE
            </motion.div>
            
            <h1 className={`${instr.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4`}>
              Delivering Excellence in
              <br />
              <span className='text-[#F67C0E]'>Enterprise Solutions</span>
            </h1>
            
            <motion.div 
              className="w-24 h-1 bg-[#F67C0E] mx-auto rounded-full mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
            
            <p className='text-white/90 text-lg max-w-3xl mx-auto leading-relaxed'>
              Transforming businesses through innovative technology solutions. Each project showcases our commitment to quality, efficiency, and measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Projects Section */}
      <section className='py-12 px-6 md:px-12 lg:px-24'>
        <div className='max-w-7xl mx-auto'>
          
          {/* Filter Bar */}
          <motion.div
            className='mb-10'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='bg-white rounded-xl shadow-md p-6 border border-gray-100'>
              <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
                
                {/* Filter Title */}
                <div className='flex items-center gap-3'>
                  <div className='p-2 rounded-lg bg-[#153776]/5'>
                    <Filter className='text-[#153776]' size={20} />
                  </div>
                  <div>
                    <h2 className='text-lg font-bold text-[#153776]'>Filter Projects</h2>
                    <p className='text-sm text-gray-500'>
                      Showing <span className='font-semibold text-[#F67C0E]'>{filteredProjects.length}</span> of {projects.length}
                    </p>
                  </div>
                </div>

                {/* Category Buttons */}
                <div className='flex flex-wrap gap-2 justify-center'>
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-[#153776] text-white shadow-md'
                          : 'bg-[#F9FAFB] text-[#153776] hover:bg-gray-100'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projects Grid - 3 Columns */}
          <motion.div 
            layout 
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={`${selectedCategory}-${index}`} {...project} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              className='text-center py-20'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className='text-6xl mb-4'>🔍</div>
              <h3 className='text-2xl font-bold text-[#153776] mb-2'>No Projects Found</h3>
              <p className='text-gray-500 mb-6'>Try selecting a different category</p>
              <button
                onClick={() => setSelectedCategory('ALL')}
                className='px-6 py-3 rounded-lg bg-[#F67C0E] text-white font-semibold hover:bg-[#e56d00] transition-colors'
              >
                View All Projects
              </button>
            </motion.div>
          )}
        </div>
      </section>
      
      <Footer/>
    </div>
  );
}

export default ProjectsShowcase;