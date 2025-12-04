'use client';
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Cloud, Wrench, Building2, Puzzle, Users, Zap, Shield, Headphones, Sparkles, CheckCircle2, TrendingUp, ExternalLink, Star } from 'lucide-react';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

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

  const tagColors = {
    AI: 'bg-purple-100 text-purple-700 border-purple-300',
    ML: 'bg-blue-100 text-blue-700 border-blue-300',
    AUTOMATION: 'bg-green-100 text-green-700 border-green-300',
    DEVELOPMENTS: 'bg-orange-100 text-orange-700 border-orange-300',
    ANALYTICS: 'bg-pink-100 text-pink-700 border-pink-300',
    ECOMMERCE: 'bg-indigo-100 text-indigo-700 border-indigo-300',
    CRM: 'bg-cyan-100 text-cyan-700 border-cyan-300',
    FINTECH: 'bg-emerald-100 text-emerald-700 border-emerald-300'
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
              Visit Site
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
    const router = useRouter();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const services = [
    {
      title: "Web Application Development",
      description: "Building robust, scalable, and secure web applications using modern frameworks and technologies.",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile App Development",
      description: "Creating intuitive and high-performance mobile applications for iOS and Android platforms.",
      icon: Smartphone,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud-Native Development",
      description: "Designing and deploying applications optimized for cloud environments, leveraging AWS, Azure, and GCP.",
      icon: Cloud,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Custom Software Development",
      description: "Developing bespoke software solutions tailored to your unique business processes and requirements.",
      icon: Wrench,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Enterprise Software Solutions",
      description: "Building comprehensive software systems to streamline operations and enhance productivity for large organizations.",
      icon: Building2,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "API Development & Integration",
      description: "Creating secure and efficient APIs to connect disparate systems and enable seamless data exchange.",
      icon: Puzzle,
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      title: "E-commerce Platform for Retailer",
      description: "Developed a high-performance e-commerce platform, increasing online sales by 30% and improving customer engagement.",
      tags: ['ECOMMERCE', 'DEVELOPMENTS'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      featured: true,
      projectUrl: "#"
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      title: "Custom CRM for Service Industry",
      description: "Built a tailored CRM system that streamlined client management and improved operational efficiency by 25%.",
      tags: ['CRM', 'AUTOMATION'],
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis'],
      featured: false,
      projectUrl: "#"
    },
    {
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      title: "Mobile Banking Application",
      description: "Created a secure and user-friendly mobile banking app, enhancing customer experience and expanding digital services.",
      tags: ['FINTECH', 'DEVELOPMENTS'],
      technologies: ['React Native', 'Firebase', 'AWS', 'Plaid'],
      featured: true,
      projectUrl: "#"
    }
  ];

  const reasons = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team of experienced developers is proficient in a wide range of technologies and committed to delivering excellence."
    },
    {
      icon: Zap,
      title: "Agile Methodology",
      description: "We adopt an agile development approach, ensuring flexibility, transparency, and timely delivery of high-quality software."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and quality assurance processes are integrated into every stage of development to ensure flawless performance."
    },
    {
      icon: Headphones,
      title: "Post-Launch Support",
      description: "Our commitment extends beyond deployment with comprehensive support and maintenance to ensure your software runs smoothly."
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
            <Sparkles size={18} className="text-[#F66F13]" />
            <span className="text-sm font-semibold text-[#0A2342]">Premium Software Development</span>
          </motion.div>

          <motion.h1
            className={`${instr.className} text-5xl md:text-6xl lg:text-7xl text-[#0A2342] mb-6 leading-tight font-bold`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Software Development
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
            Building innovative and scalable software solutions tailored to your business needs
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
              onClick={()=> {router.push('/contact')}}
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
              View Our Work
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
              { number: "100+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "98%", label: "Success Rate" }
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
              Our Software Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to power your digital transformation
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
              Our Featured Development Works
            </h2>
            <div className="w-24 h-1 bg-[#F66F13] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600">
              Success stories from our recent projects
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
              Why Choose Kriyantrai?
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