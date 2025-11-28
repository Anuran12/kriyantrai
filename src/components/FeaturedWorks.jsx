import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Instrument_Serif, Roboto_Serif } from 'next/font/google';
import { useState } from 'react';

  const instr = Instrument_Serif({
      subsets: ['latin'],
      weight: ['400'],
      variable: '--font-instr',
  })
  
  const roboto = Roboto_Serif({
      subsets: ['latin'],
      weight: ['500'],
      variable: '--font-roboto',
  })
  

export default function FeaturedWorks() {
  const [hoveredIndex, setHoveredIndex] = useState(null);



  const projects = [
    {
      id: 1,
      category: "AI & Machine Learning",
      title: "Predictive Analytics Platform",
      description: "An enterprise-grade AI platform that leverages machine learning to forecast market trends and optimize business decisions.",
      techs: ["TensorFlow", "Python", "React", "AWS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      link: "#"
    },
    {
      id: 2,
      category: "Automation & RPA",
      title: "Smart Workflow Automation",
      description: "Intelligent automation solution that streamlines operations, reduces manual tasks, and increases productivity by 300%.",
      techs: ["Node.js", "MongoDB", "Docker", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      link: "#"
    },
    {
      id: 3,
      category: "Computer Vision",
      title: "Real-time Object Detection System",
      description: "Advanced computer vision system for real-time object detection and tracking in manufacturing environments.",
      techs: ["PyTorch", "OpenCV", "FastAPI", "Redis"],
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-black mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest projects and see how we're transforming businesses with innovative AI, ML, and automation solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative h-[300px] rounded-2xl overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Project Image */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-white via-white/50 to-transparent opacity-60" />

              {/* Content Overlay */}
              <motion.div
                className="absolute inset-0 p-4 flex flex-col justify-end"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? 0 : 20
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border-2 border-black">
                  {/* Category */}
                  <span className="text-[10px] font-semibold text-gray-600 uppercase tracking-wider">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-base font-bold text-black mt-1 mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-xs mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.techs.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-black text-white border border-black rounded-full text-[10px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Visit Site Button */}
                  <motion.button
                    className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={14} className="text-white" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Default State - Just Title */}
              <motion.div
                className="absolute bottom-4 left-4 right-4"
                animate={{
                  opacity: hoveredIndex === index ? 0 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-[10px] font-semibold text-gray-800 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-black mt-1">
                  {project.title}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* See All Projects Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See All Projects
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ExternalLink size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
        
      </div>

      <div className= {` h-[60vh] w-full  flex flex-col justify-center items-center gap-3 `}>
        
        <h1 className={`${instr.className} text-5xl md:text-7xl font-normal text-center leading-tight px-4 md:px-0 `}>
            Ready to Transform Your Business?
        </h1>
        <p className={`${instr.className} text-lg md:text-xl w-[60%] text-center`}>
            Let's discuss how our AI, ML, and automation solutions can drive innovation and growth for your organization.
        </p>
        <motion.button 
    className='bg-linear-to-br from-black to-zinc-500 w-[14%] h-16 rounded-full flex justify-evenly items-center relative hover:scale-105 transition-all duration-200 cursor-pointer'
    whileHover="hover"
    initial="initial"
>
    <motion.span 
        className={`${instr.className} w-[65%] h-[90%] text-white text-2xl flex justify-center items-center`}
    >
        Get In Touch
    </motion.span>
    
    <motion.div 
        className='w-[25%] aspect-square rounded-full bg-white flex justify-center items-center overflow-hidden relative'
        variants={{
            initial: { scale: 1 },
            hover: { scale: 1.05 }
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
    >
        <motion.div
            className='absolute'
            variants={{
                initial: { x: 0, opacity: 1 },
                hover: { 
                    x: [0, 50, -50, 0],
                    opacity: [1, 0, 0, 1],
                    transition: {
                        duration: 0.5,
                        times: [0, 0.25, 0.5, 1],
                        ease: "easeInOut"
                    }
                }
            }}
        >
            <ArrowRight size={30} />
        </motion.div>
    </motion.div>
</motion.button>
    </div>
    </div>
  );
}