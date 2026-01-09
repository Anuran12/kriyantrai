import React, { useState, useEffect } from 'react';
import { Code, Database, Cpu, Brain, ArrowRight, Check } from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.3) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      id: 1,
      icon: Code,
      title: "DEVELOPMENT",
      description: "We build robust, scalable, and user-friendly applications across multiple platforms.",
      features: [
        "Web Development",
        "Mobile Apps",
        "Desktop Apps",
        "Full-Stack",
        "API Integration"
      ],
      detailedFeatures: [
        { title: "Modern Web Applications", desc: "Responsive, fast, and scalable web solutions using cutting-edge frameworks" },
        { title: "Cross-Platform Mobile", desc: "Native and hybrid mobile apps for iOS and Android platforms" },
        { title: "Enterprise Desktop Solutions", desc: "Powerful desktop applications for complex business workflows" },
        { title: "Full-Stack Expertise", desc: "End-to-end development from database to user interface" }
      ],
      color: "#173876"
    },
    {
      id: 2,
      icon: Database,
      title: "DATA & ANALYTICS",
      description: "We transform raw data into actionable insights, helping businesses make informed decisions.",
      features: [
        "Data Visualization",
        "Dashboards",
        "BI Solutions",
        "Predictive Analytics",
        "Data Processing"
      ],
      detailedFeatures: [
        { title: "Interactive Visualizations", desc: "Transform complex data into intuitive, interactive visual representations" },
        { title: "Real-Time Dashboards", desc: "Live business intelligence dashboards with instant data updates" },
        { title: "Business Intelligence", desc: "Comprehensive BI solutions for strategic decision-making" },
        { title: "Advanced Analytics", desc: "Predictive modeling and statistical analysis for future insights" }
      ],
      color: "#F68F12"
    },
    {
      id: 3,
      icon: Cpu,
      title: "AI & AUTOMATION",
      description: "We leverage artificial intelligence and automation technologies to streamline operations.",
      features: [
        "Workflow Automation",
        "Chatbots",
        "AI Tools",
        "NLP Automation",
        "Media Automation"
      ],
      detailedFeatures: [
        { title: "Intelligent Workflows", desc: "Automate repetitive tasks and optimize business processes with AI" },
        { title: "Conversational AI", desc: "Smart chatbots and virtual assistants for customer engagement" },
        { title: "Custom AI Solutions", desc: "Tailored AI tools designed for your specific business needs" },
        { title: "Natural Language Processing", desc: "Text analysis, sentiment detection, and automated content generation" }
      ],
      color: "#173876"
    },
    {
      id: 4,
      icon: Brain,
      title: "ML & DEEP LEARNING",
      description: "We develop advanced machine learning solutions that solve complex problems.",
      features: [
        "Model Training",
        "Computer Vision",
        "NLP Solutions",
        "Recommenders",
        "Custom ML"
      ],
      detailedFeatures: [
        { title: "Custom Model Development", desc: "Train and deploy machine learning models for specific use cases" },
        { title: "Computer Vision Systems", desc: "Image recognition, object detection, and visual analysis solutions" },
        { title: "Language Understanding", desc: "Advanced NLP for text classification, translation, and summarization" },
        { title: "Recommendation Engines", desc: "Personalized content and product recommendation systems" }
      ],
      color: "#F68F12"
    }
  ];

  const getFeaturePosition = (index, total, radius, offset = 0) => {
    const angle = (index * 360 / total) - 90 + rotation + offset;
    const radian = (angle * Math.PI) / 180;
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius,
      angle: angle
    };
  };

  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #173876 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          transform: `translateY(${scrollY * 0.1}px)`
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#173876] rounded-full blur-3xl opacity-[0.05] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F68F12] rounded-full blur-3xl opacity-[0.05] animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 relative inline-block" style={{ fontFamily: 'Instrument Serif, serif' }}>
            <span className="relative">
              <span className="absolute inset-0 bg-gradient-to-b from-[#173876] to-[#4a6fa5] bg-clip-text text-transparent blur-sm"></span>
              <span className="relative bg-gradient-to-b from-[#173876] to-[#2d5a8f] bg-clip-text text-transparent">
                Our Services
              </span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive solutions powered by cutting-edge technology and innovative thinking
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-32">
          {services.map((service, serviceIndex) => {
            const Icon = service.icon;
            const isActive = activeService === service.id;
            const radius = 140;
            const isEven = serviceIndex % 2 === 0;
            
            return (
              <div
                key={service.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}
                style={{
                  animation: `fadeInScale 0.8s ease-out ${serviceIndex * 0.2}s backwards`
                }}
              >
                {/* Orbital Visualization */}
                <div className={`w-full lg:w-1/2 flex justify-center ${isEven ? 'lg:pr-40' : ''}`}>
                  <div className="relative w-full aspect-square max-w-md">
                    {/* Orbital Rings */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                      {/* Outer decorative ring */}
                      <circle
                        cx="200"
                        cy="200"
                        r={radius + 40}
                        fill="none"
                        stroke={service.color}
                        strokeWidth="1"
                        opacity="0.15"
                        strokeDasharray="5 10"
                      />
                      
                      {/* Main orbital path */}
                      <circle
                        cx="200"
                        cy="200"
                        r={radius}
                        fill="none"
                        stroke={service.color}
                        strokeWidth="2"
                        opacity={isActive ? "0.5" : "0.3"}
                        style={{
                          transition: 'all 0.5s ease'
                        }}
                      />

                      {/* Connection Lines */}
                      {service.features.map((_, index) => {
                        const pos = getFeaturePosition(index, service.features.length, radius);
                        return (
                          <line
                            key={index}
                            x1="200"
                            y1="200"
                            x2={200 + pos.x}
                            y2={200 + pos.y}
                            stroke={service.color}
                            strokeWidth="1"
                            opacity={isActive ? (hoveredFeature === `${service.id}-${index}` ? "0.6" : "0.3") : "0.15"}
                            style={{
                              transition: 'opacity 0.3s ease'
                            }}
                          />
                        );
                      })}

                      {/* Energy Particles on Ring */}
                      {[0, 120, 240].map((offset, i) => {
                        const angle = ((rotation * 2 + offset) % 360) * Math.PI / 180;
                        const x = 200 + Math.cos(angle) * radius;
                        const y = 200 + Math.sin(angle) * radius;
                        return (
                          <circle
                            key={i}
                            cx={x}
                            cy={y}
                            r={isActive ? "4" : "2.5"}
                            fill={service.color}
                            opacity={isActive ? "0.9" : "0.5"}
                            style={{
                              filter: `drop-shadow(0 0 ${isActive ? '6' : '3'}px ${service.color})`,
                              transition: 'all 0.3s ease'
                            }}
                          />
                        );
                      })}
                    </svg>

                    {/* Central Icon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <button
                        onMouseEnter={() => setActiveService(service.id)}
                        onMouseLeave={() => {
                          setActiveService(null);
                          setHoveredFeature(null);
                        }}
                        className="relative group"
                      >
                        <div 
                          className="relative z-10 p-8 rounded-3xl transition-all duration-500"
                          style={{
                            backgroundColor: `${service.color}12`,
                            transform: isActive ? 'scale(1.15) rotate(5deg)' : 'scale(1) rotate(0deg)',
                            boxShadow: isActive ? `0 20px 60px ${service.color}40` : `0 10px 30px ${service.color}20`,
                            border: `2px solid ${service.color}30`
                          }}
                        >
                          <Icon 
                            className="w-16 h-16 transition-all duration-500"
                            style={{
                              color: service.color,
                              filter: isActive ? `drop-shadow(0 0 12px ${service.color})` : `drop-shadow(0 0 6px ${service.color}90)`
                            }}
                          />
                        </div>

                        <div 
                          className="absolute inset-0 rounded-3xl"
                          style={{
                            backgroundColor: service.color,
                            opacity: isActive ? 0.2 : 0.1,
                            animation: 'gentlePulse 3s ease-in-out infinite'
                          }}
                        ></div>

                        <div 
                          className="absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500"
                          style={{
                            backgroundColor: service.color,
                            opacity: isActive ? 0.3 : 0.15
                          }}
                        ></div>
                      </button>
                    </div>

                    {/* Orbital Feature Points */}
                    {service.features.map((feature, index) => {
                      const pos = getFeaturePosition(index, service.features.length, radius);
                      const featureKey = `${service.id}-${index}`;
                      const isHovered = hoveredFeature === featureKey;
                      
                      return (
                        <div
                          key={index}
                          className="absolute top-1/2 left-1/2"
                          style={{
                            transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <div
                            onMouseEnter={() => {
                              setActiveService(service.id);
                              setHoveredFeature(featureKey);
                            }}
                            onMouseLeave={() => setHoveredFeature(null)}
                            className="relative group/feature cursor-pointer"
                          >
                            <div 
                              className="relative z-10 px-4 py-2 rounded-xl font-medium text-sm whitespace-nowrap transition-all duration-300"
                              style={{
                                backgroundColor: isHovered ? service.color : `${service.color}15`,
                                color: isHovered ? 'white' : service.color,
                                transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                                boxShadow: isHovered ? `0 8px 25px ${service.color}50` : `0 2px 10px ${service.color}20`,
                                border: `2px solid ${service.color}${isHovered ? '' : '40'}`,
                                fontWeight: isHovered ? '600' : '500'
                              }}
                            >
                              {feature}
                            </div>

                            <div 
                              className="absolute inset-0 rounded-xl blur-lg transition-opacity duration-300"
                              style={{
                                backgroundColor: service.color,
                                opacity: isHovered ? 0.5 : 0.2
                              }}
                            ></div>

                            {isHovered && (
                              <div 
                                className="absolute w-2 h-2 rounded-full"
                                style={{
                                  backgroundColor: service.color,
                                  top: '50%',
                                  left: '50%',
                                  animation: 'miniOrbit 1.5s linear infinite',
                                  boxShadow: `0 0 8px ${service.color}`
                                }}
                              ></div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Content Section */}
                <div className={`w-full lg:w-1/2 space-y-8 ${!isEven ? 'lg:pl-20' : ''}`}>
                  <div>
                    <h3 
                      className="text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300"
                      style={{
                        color: isActive ? service.color : '#173876',
                        fontFamily: 'Instrument Serif, serif'
                      }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Detailed Features List */}
                  <div className="space-y-4">
                    {service.detailedFeatures.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex gap-4 items-start group hover:translate-x-2 transition-all duration-300"
                        style={{
                          animation: `fadeInLeft 0.6s ease-out ${idx * 0.1}s backwards`
                        }}
                      >
                        <div 
                          className="p-2 rounded-lg transition-all duration-300 mt-1"
                          style={{
                            backgroundColor: `${service.color}15`,
                            border: `2px solid ${service.color}30`
                          }}
                        >
                          <Check 
                            className="w-5 h-5 transition-all duration-300"
                            style={{
                              color: service.color
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <h4 
                            className="font-bold text-lg mb-1 transition-colors duration-300"
                            style={{
                              color: service.color
                            }}
                          >
                            {feature.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button 
                    className="group/btn relative px-8 py-4 rounded-xl font-bold text-white overflow-hidden transition-all duration-500 mt-6"
                    style={{
                      backgroundColor: service.color,
                      transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
                      boxShadow: isActive ? `0 10px 30px ${service.color}50` : `0 4px 15px ${service.color}30`
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2 justify-center">
                      Learn more about {service.title.toLowerCase()}
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gentlePulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.15;
          }
        }

        @keyframes miniOrbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(25px) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(25px) rotate(-360deg);
          }
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
      `}</style>
    </div>
  );
};

export default ServicesSection;