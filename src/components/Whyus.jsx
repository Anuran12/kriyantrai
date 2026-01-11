import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, Layers } from 'lucide-react';

export default function KriyantraiCards() {
  const cards = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay at the forefront of technology, delivering cutting-edge solutions that set industry standards and drive competitive advantage."
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Our solutions are built to grow with your business, ensuring long-term success and seamless expansion as your needs evolve."
    },
    {
      icon: Layers,
      title: "End-to-End Solutions",
      description: "From concept to deployment, we provide comprehensive services that cover every aspect of your digital transformation journey."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className='-mt-6 shadow-2xl shadow-black/10'>
    <div className="min-h-screen bg-[#EBEBEB] py-20 px-6 rounded-t-4xl relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #0474BA 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold text-[#4d6179] mb-4">
            Why Choose Kriyantrai?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just service providers – we're your technology partners. Here's what sets us apart in delivering exceptional results.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 sticky top-32 z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -20,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-white via-slate-50/30 to-white border border-slate-200/50 rounded-3xl p-10 h-full transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-slate-500/15 group-hover:border-slate-300/70 backdrop-blur-sm relative overflow-hidden">
                {/* Modern gradient background effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0474BA]/8 to-[#00A7E1]/8 rounded-full blur-2xl group-hover:from-[#0474BA]/15 group-hover:to-[#00A7E1]/15 transition-all duration-700"></div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-[#4d6179] via-[#0474BA] to-[#4d6179] bg-clip-text text-transparent mb-6 group-hover:from-[#0474BA] group-hover:via-[#00A7E1] group-hover:to-[#FFA630] transition-all duration-500">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-500 mb-8">
                    {card.description}
                  </p>

                  {/* Modern animated accent line */}
                  <motion.div
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="h-0.5 bg-gradient-to-r from-[#0474BA] via-[#00A7E1] to-[#FFA630] rounded-full flex-1"></div>
                    <motion.div
                      className="w-3 h-3 bg-[#FFA630] rounded-full shadow-lg"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    ></motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Enhanced hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0474BA]/8 via-[#00A7E1]/5 to-[#FFA630]/8 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 blur-2xl scale-110"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-20 bg-[#EBEBEB]/80 backdrop-blur-sm rounded-3xl p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {[
            { value: "50+", label: "Projects Completed" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "15+", label: "Expert Team Members" },
            { value: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-white via-slate-50/50 to-white border border-slate-200/50 rounded-3xl hover:bg-gradient-to-br hover:from-[#0474BA] hover:via-[#00A7E1] hover:to-[#FFA630] hover:text-white transition-all duration-700 group shadow-xl shadow-slate-200/30 hover:shadow-2xl hover:shadow-slate-500/20 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-slate-100/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Animated background particles */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#0474BA]/10 to-[#00A7E1]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                <motion.div
                  className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#4d6179] to-[#0474BA] bg-clip-text text-transparent group-hover:text-black transition-all duration-500"
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.3 + index * 0.1
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm font-bold tracking-wider uppercase text-slate-500 group-hover:text-black transition-colors duration-500 leading-tight">
                  {stat.label}
                </div>

                {/* Decorative line */}
                <motion.div
                  className="w-12 h-0.5 bg-gradient-to-r from-[#0474BA] to-[#FFA630] mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
    </div>
  );
}