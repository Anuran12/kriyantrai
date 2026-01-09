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
    <div className='-mt-6 shadow-2xl shadow-black/90'>
    <div className="min-h-screen bg-white py-20 px-6 rounded-t-4xl">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent mb-4">
            Why Choose Kriyantrai?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We're not just service providers – we're your technology partners. Here's what sets us apart in delivering exceptional results.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -15,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 border border-slate-200/60 rounded-3xl p-8 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-slate-900/20 group-hover:border-slate-300/80 backdrop-blur-sm">
                {/* Icon Container */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-emerald-500/30"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <card.icon className="text-white" size={32} strokeWidth={2} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {card.description}
                </p>

                {/* Animated Underline */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mt-6 rounded-full shadow-sm"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                />
              </div>

              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-teal-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {[
            { value: "50+", label: "Projects Completed" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "15+", label: "Expert Team Members" },
            { value: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 border border-slate-200/60 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-slate-50 hover:bg-gradient-to-br hover:from-slate-800 hover:to-slate-900 hover:text-white transition-all duration-500 group shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-900/30"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-5xl font-bold mb-3 text-slate-800 group-hover:text-white transition-colors duration-500"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.2 + index * 0.1
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm font-semibold tracking-wide uppercase text-slate-600 group-hover:text-slate-300 transition-colors duration-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
    </div>
  );
}