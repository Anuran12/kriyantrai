'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, PieChart, TrendingUp, Brain, Database, Lightbulb, Users, Target, Cpu, Award, ExternalLink, Star } from 'lucide-react';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

const instr = { className: 'font-serif' };

// Compact Project Card
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
      className='relative w-full h-full'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100'>
        
        <div className='relative w-full h-48 overflow-hidden'>
          <motion.img 
            src={image} 
            alt={title}
            className='w-full h-full object-cover'
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.5 }}
          />
          
          <div className='absolute inset-0 bg-gradient-to-t from-[#153776]/80 via-[#153776]/20 to-transparent' />
          
          {featured && (
            <div className='absolute top-3 right-3 flex items-center gap-1.5 bg-[#F67C0E] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg'>
              <Star size={12} fill="white" />
              FEATURED
            </div>
          )}

          <div className='absolute bottom-3 left-3 flex flex-wrap gap-1.5'>
            {tags.slice(0, 2).map((tag, index) => (
              <span key={index} className='px-2.5 py-1 rounded text-xs font-semibold bg-white/95 text-[#153776] backdrop-blur-sm'>
                {tag}
              </span>
            ))}
          </div>

          <motion.div
            className='absolute inset-0 bg-[#153776]/95 backdrop-blur-sm flex flex-col items-center justify-center gap-3 p-4'
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
              animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Case Study
              <ExternalLink size={16} />
            </motion.a>
            
            {metrics && (
              <motion.div
                className='flex gap-4 text-white text-xs'
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
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

        <div className='p-4 flex flex-col flex-grow'>
          {client && (
            <div className='text-xs text-gray-500 mb-2 font-medium'>
              <span className='text-[#F67C0E]'>CLIENT:</span> {client}
            </div>
          )}

          <h3 className={`${instr.className} text-lg font-bold text-[#153776] mb-2 line-clamp-2 hover:text-[#F67C0E] transition-colors`}>
            {title}
          </h3>

          <p className='text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed flex-grow'>
            {description}
          </p>

          <div className='flex flex-wrap gap-1.5 pt-3 border-t border-gray-100'>
            {technologies.slice(0, 4).map((tech, index) => (
              <span key={index} className='px-2 py-1 rounded text-xs font-medium bg-[#F9FAFB] text-[#153776] hover:bg-[#153776] hover:text-white transition-colors'>
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

function Page() {
  const router = useRouter();

  const services = [
    {
      title: "Business Intelligence (BI)",
      description: "Transforming raw data into meaningful insights for strategic decision-making.",
      icon: BarChart3,
      color: "#153776"
    },
    {
      title: "Data Visualization & Dashboards",
      description: "Creating interactive dashboards presenting complex data in understandable formats.",
      icon: PieChart,
      color: "#F67C0E"
    },
    {
      title: "Predictive Analytics",
      description: "Utilizing ML techniques to forecast future outcomes and business trends.",
      icon: TrendingUp,
      color: "#153776"
    },
    {
      title: "Machine Learning for Data",
      description: "Implementing ML models to uncover patterns and automate decision-making.",
      icon: Brain,
      color: "#F67C0E"
    },
    {
      title: "Big Data Solutions",
      description: "Scalable solutions for managing and analyzing large volumes of data.",
      icon: Database,
      color: "#153776"
    },
    {
      title: "Data Strategy & Consulting",
      description: "Comprehensive data strategies to maximize your data's potential.",
      icon: Lightbulb,
      color: "#F67C0E"
    }
  ];

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      title: "Customer Churn Prediction",
      description: "Predictive model identifying at-risk customers, leading to 15% reduction in churn rate.",
      tags: ['PREDICTION', 'ML'],
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'PostgreSQL', 'Apache Airflow'],
      featured: true,
      client: "E-commerce Platform",
      metrics: { 'Churn': '-15%', 'Revenue': '+$2M', 'Accuracy': '92%' },
      projectUrl: "#"
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      title: "Sales Performance Dashboard",
      description: "Interactive BI dashboard providing real-time sales insights, enabling 10% increase in efficiency.",
      tags: ['BI', 'ANALYTICS'],
      technologies: ['Power BI', 'SQL', 'Azure', 'DAX'],
      featured: false,
      client: "Retail Corporation",
      metrics: { 'Efficiency': '+10%', 'Users': '500+', 'ROI': '250%' },
      projectUrl: "#"
    },
    {
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
      title: "Supply Chain Optimization",
      description: "Big data solution analyzing logistics, resulting in 20% reduction in operational costs.",
      tags: ['BIGDATA', 'ANALYTICS'],
      technologies: ['Apache Spark', 'Hadoop', 'Kafka', 'MongoDB', 'Python'],
      featured: true,
      client: "Manufacturing Corp",
      metrics: { 'Cost': '-20%', 'Speed': '+35%', 'Data': '100TB+' },
      projectUrl: "#"
    }
  ];

  const reasons = [
    {
      icon: Users,
      title: "Deep Expertise",
      description: "Seasoned data scientists and analysts with proven track record of delivering impactful solutions."
    },
    {
      icon: Target,
      title: "Actionable Insights",
      description: "Clear, actionable insights that empower you to make informed business decisions confidently."
    },
    {
      icon: Cpu,
      title: "Cutting-Edge Technology",
      description: "Latest tools in data science, machine learning, and big data to deliver superior results."
    },
    {
      icon: Award,
      title: "Customized Solutions",
      description: "Every solution tailored to your unique business needs ensuring maximum relevance and impact."
    }
  ];

  return (
    <div className='bg-[#F9FAFB]'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-[#153776] via-[#1a4489] to-[#153776] py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden'>
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute inset-0' style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className='max-w-6xl mx-auto text-center relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold mb-6 mt-10'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <BarChart3 size={16} />
              ADVANCED DATA ANALYTICS
            </motion.div>
            
            <h1 className={`${instr.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight`}>
              Data & Analytics
              <br />
              <span className='bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent'>Solutions</span>
            </h1>
            
            <motion.div 
              className="w-24 h-1 bg-white/80 mx-auto rounded-full mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
            
            <p className='text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8'>
              Unlocking insights and driving informed decisions with advanced data analytics. Transform your data into your most valuable business asset.
            </p>

            <motion.div
              className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-16'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button
                onClick={() => router.push('/contact')}
                className='bg-white text-[#153776] px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-all flex items-center gap-2'
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </button>
              
              <button
                onClick={() => router.push('/work')}
                className='bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all'
              >
                View Case Studies
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className='grid grid-cols-3 gap-8 max-w-2xl mx-auto'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { number: "1B+", label: "Data Points Analyzed" },
                { number: "85%", label: "Accuracy Rate" },
                { number: "50+", label: "Analytics Projects" }
              ].map((stat, index) => (
                <div key={index} className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-white mb-1'>{stat.number}</div>
                  <div className='text-sm text-white/80'>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-20 px-6 md:px-12 lg:px-24 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`${instr.className} text-3xl md:text-4xl lg:text-5xl font-bold text-[#153776] mb-4`}>
              Our Data & Analytics Services
            </h2>
            <div className="w-24 h-1 bg-[#F67C0E] mx-auto rounded-full mb-4"></div>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Comprehensive solutions to unlock the full potential of your data
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className='bg-[#F9FAFB] rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className='w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all'
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <Icon size={24} style={{ color: service.color }} />
                  </div>

                  <h3 className={`${instr.className} text-xl font-bold text-[#153776] mb-3 group-hover:text-[#F67C0E] transition-colors`}>
                    {service.title}
                  </h3>

                  <p className='text-sm text-gray-600 leading-relaxed mb-4'>
                    {service.description}
                  </p>

                  <div className='inline-flex items-center gap-2 text-[#F67C0E] font-semibold text-sm'>
                    Learn More
                    <ArrowRight size={16} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className='py-20 px-6 md:px-12 lg:px-24 bg-[#F9FAFB]'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`${instr.className} text-3xl md:text-4xl lg:text-5xl font-bold text-[#153776] mb-4`}>
              Featured Data & Analytics Projects
            </h2>
            <div className="w-24 h-1 bg-[#F67C0E] mx-auto rounded-full mb-4"></div>
            <p className='text-lg text-gray-600'>
              Real-world impact delivered through data-driven solutions
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='py-20 px-6 md:px-12 lg:px-24 bg-white'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`${instr.className} text-3xl md:text-4xl lg:text-5xl font-bold text-[#153776] mb-4`}>
              Why Choose Kriyantrai for Data & Analytics?
            </h2>
            <div className="w-24 h-1 bg-[#F67C0E] mx-auto rounded-full"></div>
          </motion.div>

          <div className='grid md:grid-cols-2 gap-8'>
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  className='flex gap-4 items-start bg-[#F9FAFB] rounded-lg p-6 border border-gray-100'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className='shrink-0 w-12 h-12 rounded-lg bg-[#153776] flex items-center justify-center'>
                    <Icon size={24} className='text-white' />
                  </div>
                  <div>
                    <h3 className={`${instr.className} text-xl font-bold text-[#153776] mb-2`}>
                      {reason.title}
                    </h3>
                    <p className='text-sm text-gray-600 leading-relaxed'>{reason.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default Page;