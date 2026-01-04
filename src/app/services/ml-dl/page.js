'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, FileText, Eye, Cpu, Brain, Database, Award, ExternalLink, Shield, Star, Users } from 'lucide-react';
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
      title: "Predictive Analytics",
      description: "Forecasting future trends and behaviors to enable proactive decision-making.",
      icon: TrendingUp,
      color: "#153776"
    },
    {
      title: "Natural Language Processing",
      description: "Developing systems that understand, interpret, and generate human language.",
      icon: FileText,
      color: "#F67C0E"
    },
    {
      title: "Computer Vision",
      description: "Enabling machines to interpret and understand visual information from the world.",
      icon: Eye,
      color: "#153776"
    },
    {
      title: "Deep Learning Solutions",
      description: "Implementing neural networks for complex pattern recognition and advanced AI.",
      icon: Brain,
      color: "#F67C0E"
    },
    {
      title: "Reinforcement Learning",
      description: "Creating intelligent agents that learn optimal behaviors through trial and error.",
      icon: Cpu,
      color: "#153776"
    },
    {
      title: "ML Model Management",
      description: "Deploying and managing machine learning models in production (MLOps).",
      icon: Database,
      color: "#F67C0E"
    }
  ];

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1629904853893-c2c62c2f2115?w=800&q=80',
      title: "Fraud Detection System",
      description: "ML-powered system that accurately detects and prevents fraudulent transactions in real-time.",
      tags: ['FRAUD', 'DL'],
      technologies: ['PyTorch', 'Spark', 'Kafka', 'GCP', 'Python'],
      featured: true,
      client: "Financial Services",
      metrics: { 'Fraud': '-85%', 'Accuracy': '99.2%', 'Speed': '<100ms' },
      projectUrl: "#"
    },
    {
      image: 'https://images.unsplash.com/photo-1606761003444-245f78b7a42a?w=800&q=80',
      title: "Customer Churn Prediction",
      description: "Model to predict customer churn, allowing for proactive retention strategies.",
      tags: ['PREDICTION', 'ML'],
      technologies: ['Scikit-learn', 'PostgreSQL', 'Tableau', 'Airflow'],
      featured: false,
      client: "Telecom Provider",
      metrics: { 'Retention': '+18%', 'Accuracy': '91%', 'ROI': '300%' },
      projectUrl: "#"
    },
    {
      image: 'https://images.unsplash.com/photo-1555547900-51c6b12d5966?w=800&q=80',
      title: "Automated Image Tagging",
      description: "Computer vision solution for automated image tagging, enhancing content management.",
      tags: ['CV', 'DL'],
      technologies: ['TensorFlow', 'OpenCV', 'AWS Sagemaker', 'Python', 'Docker'],
      featured: true,
      client: "Media Company",
      metrics: { 'Speed': '1000x', 'Accuracy': '96%', 'Tags': '10M+' },
      projectUrl: "#"
    }
  ];

  const reasons = [
    {
      icon: Users,
      title: "Expertise & Innovation",
      description: "Leading ML engineers and data scientists constantly pushing the boundaries of AI innovation."
    },
    {
      icon: Cpu,
      title: "Customized Solutions",
      description: "Bespoke ML models and solutions tailored to your specific business challenges and objectives."
    },
    {
      icon: Shield,
      title: "Ethical AI Practices",
      description: "Committed to responsible AI development, ensuring fairness, transparency, and accountability."
    },
    {
      icon: Award,
      title: "End-to-End Support",
      description: "From data preparation to model deployment and optimization, comprehensive support at every step."
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
              <Brain size={16} />
              ADVANCED AI & MACHINE LEARNING
            </motion.div>
            
            <h1 className={`${instr.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight`}>
              Machine Learning
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
              Leveraging cutting-edge AI to drive innovation and efficiency for your business. Transform your operations with intelligent machine learning solutions.
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
                { number: "98%", label: "Model Accuracy" },
                { number: "25+", label: "ML Engineers" },
                { number: "10M+", label: "Real-time Predictions" }
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
              Our Machine Learning Services
            </h2>
            <div className="w-24 h-1 bg-[#F67C0E] mx-auto rounded-full mb-4"></div>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Cutting-edge ML expertise to solve your most complex business challenges
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
              Featured Machine Learning Projects
            </h2>
            <div className="w-24 h-1 bg-[#F67C0E] mx-auto rounded-full mb-4"></div>
            <p className='text-lg text-gray-600'>
              Transformative solutions driven by advanced ML models
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
              Why Choose Kriyantrai for Machine Learning?
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