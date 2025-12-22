import React, { useState, useEffect } from 'react';
import { Code, Database, Cpu, Brain, ArrowRight, Zap } from 'lucide-react';

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
      color: "#173876",
      orbitSpeed: 60
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
      color: "#F68F12",
      orbitSpeed: 75
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
      color: "#173876",
      orbitSpeed: 50
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
      color: "#F68F12",
      orbitSpeed: 65
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
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative rounded-t-3xl -mt-4">
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
            Explore our innovative solutions through interactive orbital displays
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {services.map((service, serviceIndex) => {
            const Icon = service.icon;
            const isActive = activeService === service.id;
            const radius = 140;
            
            return (
              <div
                key={service.id}
                className="relative flex flex-col items-center"
                style={{
                  animation: `fadeInScale 0.8s ease-out ${serviceIndex * 0.2}s backwards`
                }}
              >
                {/* Orbital Container */}
                <div className="relative w-full aspect-square max-w-md mx-auto">
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

                    {/* Connection Lines - Always Visible */}
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
                          opacity={isActive ? (hoveredFeature === index ? "0.6" : "0.3") : "0.15"}
                          style={{
                            transition: 'opacity 0.3s ease'
                          }}
                        />
                      );
                    })}

                    {/* Energy Particles on Ring - Always Moving */}
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
                      {/* Icon Container */}
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

                      {/* Pulsing Rings - Always Visible */}
                      <div 
                        className="absolute inset-0 rounded-3xl"
                        style={{
                          backgroundColor: service.color,
                          opacity: isActive ? 0.2 : 0.1,
                          animation: 'gentlePulse 3s ease-in-out infinite'
                        }}
                      ></div>

                      {/* Glow Effect - Always Present */}
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
                    const isHovered = hoveredFeature === index;
                    
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
                            setHoveredFeature(index);
                          }}
                          onMouseLeave={() => setHoveredFeature(null)}
                          className="relative group/feature cursor-pointer"
                        >
                          {/* Feature Node - Always Styled */}
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

                          {/* Feature Glow - Always Present */}
                          <div 
                            className="absolute inset-0 rounded-xl blur-lg transition-opacity duration-300"
                            style={{
                              backgroundColor: service.color,
                              opacity: isHovered ? 0.5 : 0.2
                            }}
                          ></div>

                          {/* Orbiting Mini Particle */}
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

                {/* Title and Description Below */}
                <div className="mt-8 text-center max-w-md">
                  <h3 
                    className="text-2xl lg:text-3xl font-bold mb-3 transition-colors duration-300"
                    style={{
                      color: isActive ? service.color : '#173876'
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <button 
                    className="group/btn relative px-6 py-3 rounded-xl font-bold text-white overflow-hidden transition-all duration-500"
                    style={{
                      backgroundColor: service.color,
                      transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
                      boxShadow: isActive ? `0 10px 30px ${service.color}50` : `0 4px 15px ${service.color}30`
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2 justify-center">
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
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