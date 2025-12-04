'use client';
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, TrendingUp, FileText, Eye, Cpu, Brain, Database, Award, ExternalLink, Shield, Star, Users } from 'lucide-react';
import Footer from '@/components/Footer';

// Define the custom class for font-serif
const instr = { className: 'font-serif' };

// Project Card Component
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

  // Updated tag colors for Machine Learning context
  const tagColors = {
    PREDICTION: 'bg-purple-100 text-purple-700 border-purple-300',
    FRAUD: 'bg-red-100 text-red-700 border-red-300',
    CV: 'bg-cyan-100 text-cyan-700 border-cyan-300',
    NLP: 'bg-emerald-100 text-emerald-700 border-emerald-300',
    DL: 'bg-blue-100 text-blue-700 border-blue-300',
    MLOPS: 'bg-orange-100 text-orange-700 border-orange-300'
  };

  return (
    <motion.div
      className='relative w-full'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='bg-[#F9FAFB] rounded-3xl p-6 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff] transition-all duration-300'>
        
        <div className='relative w-full h-64 rounded-2xl overflow-hidden mb-4'>
          {/* NOTE: Placeholder images are used here. Replace with actual project images. */}
          <img 
            src={image} 
            alt={title}
            className='w-full h-full object-cover'
          />
          
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
              View Case Study
              <ExternalLink size={20} />
            </motion.a>
          </motion.div>
        </div>

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

        <h3 className={`${instr.className} text-2xl md:text-3xl font-bold text-[#0A2342] mb-3`}>
          {title}
        </h3>

        <p className='text-gray-700 leading-relaxed mb-4 text-sm md:text-base'>
          {description}
        </p>

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

function Page() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  // Updated services for Machine Learning
  const services = [
    {
      title: "Predictive Analytics",
      description: "Forecasting future trends and behaviors to enable proactive decision-making.",
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Natural Language Processing (NLP)",
      description: "Developing systems that understand, interpret, and generate human language.",
      icon: FileText,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Computer Vision",
      description: "Enabling machines to interpret and understand visual information from the world.",
      icon: Eye,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Deep Learning Solutions",
      description: "Implementing neural networks for complex pattern recognition and advanced AI capabilities.",
      icon: Brain,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Reinforcement Learning",
      description: "Creating intelligent agents that learn optimal behaviors through trial and error.",
      icon: Cpu,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "ML Model Deployment & Management",
      description: "Deploying, monitoring, and managing machine learning models in production environments (MLOps).",
      icon: Database,
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  // Updated projects for Machine Learning
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1629904853893-c2c62c2f2115?w=800&q=80',
      title: "Fraud Detection System",
      description: "Developed an ML-powered system that accurately detects and prevents fraudulent transactions in real-time.",
      tags: ['FRAUD', 'DL', 'PREDICTION'],
      technologies: ['PyTorch', 'Spark', 'Kafka', 'GCP'],
      featured: true,
      projectUrl: "#"
    },
    {
      image: 'https://images.unsplash.com/photo-1606761003444-245f78b7a42a?w=800&q=80',
      title: "Customer Churn Prediction",
      description: "Implemented a model to predict customer churn, allowing for proactive retention strategies and improved customer lifetime value.",
      tags: ['PREDICTION', 'ML'],
      technologies: ['Scikit-learn', 'PostgreSQL', 'Tableau', 'Airflow'],
      featured: false,
      projectUrl: "#"
    },
    {
      image: 'https://images.unsplash.com/photo-1555547900-51c6b12d5966?w=800&q=80',
      title: "Automated Image Tagging",
      description: "Built a computer vision solution for automated image tagging, enhancing content management and search capabilities.",
      tags: ['CV', 'DL', 'AI'],
      technologies: ['TensorFlow', 'OpenCV', 'AWS Sagemaker', 'Python'],
      featured: true,
      projectUrl: "#"
    }
  ];

  // Updated reasons for Machine Learning
  const reasons = [
    {
      icon: Users,
      title: "Expertise & Innovation",
      description: "Our team comprises leading ML engineers and data scientists, constantly pushing the boundaries of AI innovation."
    },
    {
      icon: Cpu,
      title: "Customized Solutions",
      description: "We develop bespoke ML models and solutions tailored to your specific business challenges and objectives."
    },
    {
      icon: Shield,
      title: "Ethical AI Practices",
      description: "Committed to responsible AI development, ensuring fairness, transparency, and accountability in all our solutions."
    },
    {
      icon: Award,
      title: "End-to-End Support",
      description: "From data preparation to model deployment and ongoing optimization, we provide comprehensive support every step of the way."
    }
  ];

  return (
    <section className='bg-[#F9FAFB]'>
      {/* Hero Section */}
      <div className='relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-24'>
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#F66F13]/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1.2, 1, 1.2]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#0A2342]/20 to-transparent rounded-full blur-3xl"
          />
        </div>

        <motion.div
          style={{ opacity, scale }}
          className='relative z-10 max-w-5xl text-center'
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8"
          >
            <Brain size={18} className="text-[#F66F13]" />
            <span className="text-sm font-semibold text-[#0A2342]">Advanced AI & Machine Learning</span>
          </motion.div>

          <motion.h1
            className={`${instr.className} text-5xl md:text-6xl lg:text-7xl text-[#0A2342] mb-6 leading-tight font-bold`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Machine Learning
            <span className="block mt-2 bg-gradient-to-r from-[#F66F13] to-[#0A2342] bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h1>
          
          <motion.p
            className='text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Leveraging cutting-edge AI to drive innovation and efficiency for your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='group bg-[#F66F13] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3'
            onClick={()=>{router.push('/contact')}}
            >
              Get a Free Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-white text-[#0A2342] px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200'
            onClick={()=>{router.push('/work')}}
            >
              View Case Studies
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
          >
            {[
              { number: "98%", label: "Model Accuracy" },
              { number: "25+", label: "ML Engineers" },
              { number: "10M+", label: "Real-time Predictions" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#F66F13] mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className='services-section py-32 px-6 md:px-12 lg:px-24 bg-white'>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className={`${instr.className} text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2342] mb-4`}>
              Our Machine Learning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge ML expertise to solve your most complex business challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon size={32} className="text-white" />
                    </motion.div>

                    <h3 className={`${instr.className} text-2xl font-bold text-[#0A2342] mb-4 group-hover:text-[#F66F13] transition-colors`}>
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <motion.div
                      className="inline-flex items-center gap-2 text-[#F66F13] font-semibold group-hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight size={18} />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Works Section */}
      <div className='featured-works py-32 px-6 md:px-12 lg:px-24 bg-[#F9FAFB]'>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className={`${instr.className} text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2342] mb-4`}>
              Our Featured Machine Learning Works
            </h2>
            <div className="w-24 h-1 bg-[#F66F13] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600">
              Transformative solutions driven by advanced ML models
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='why-choose-us py-32 px-6 md:px-12 lg:px-24 bg-white'>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className={`${instr.className} text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2342] mb-4`}>
              Why Choose Kriyantrai for Machine Learning?
            </h2>
            <div className="w-24 h-1 bg-[#F66F13] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#F66F13] to-[#0A2342] flex items-center justify-center shadow-lg"
                  >
                    <Icon size={32} className="text-white" />
                  </motion.div>
                  <div>
                    <h3 className={`${instr.className} text-2xl font-bold text-[#0A2342] mb-3`}>
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Page;