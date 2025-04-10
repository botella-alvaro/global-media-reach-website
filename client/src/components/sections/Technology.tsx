import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";
import { Target, PieChart, Crosshair, Database, Zap, BarChart3, Share2 } from "lucide-react";
import { gradients, glowEffects } from "@/lib/gradients";

export default function Technology() {
  const techFeatures = [
    {
      icon: <Target className="text-white" size={24} />,
      color: "from-[#F05A28] to-[#8E2DE2]",
      title: "Ad Formats",
      description: "Comprehensive support for all digital ad formats including display, video, native, and interactive ads.",
      rotation: 0,
      distance: 170,
      delay: 0.1
    },
    {
      icon: <PieChart className="text-white" size={24} />,
      color: "from-[#8E2DE2] to-[#4A00E0]",
      title: "KPIs",
      description: "Track and optimize toward custom KPIs including viewability, engagement, conversions, and ROAS.",
      rotation: 60,
      distance: 170,
      delay: 0.2
    },
    {
      icon: <Crosshair className="text-white" size={24} />,
      color: "from-[#F05A28] to-[#4A00E0]",
      title: "Targeting",
      description: "Precision targeting options including demographic, behavioral, contextual, and lookalike audiences.",
      rotation: 120,
      distance: 170, 
      delay: 0.3
    },
    {
      icon: <Database className="text-white" size={24} />,
      color: "from-[#8E2DE2] to-[#4A00E0]",
      title: "Data & Audiences",
      description: "Access to premium data sources and audience segments to reach your ideal customers.",
      rotation: 180,
      distance: 170,
      delay: 0.4
    },
    {
      icon: <BarChart3 className="text-white" size={24} />,
      color: "from-[#F05A28] to-[#8E2DE2]",
      title: "Analytics",
      description: "Real-time reporting and analytics dashboard with custom visualizations and insights.",
      rotation: 240,
      distance: 170,
      delay: 0.5
    },
    {
      icon: <Share2 className="text-gradient-orange-blue" size={24} />,
      color: "from-[#F05A28] to-[#4A00E0]",
      title: "Integrations",
      description: "Seamless integrations with major ad platforms, analytics tools, and marketing automation systems.",
      rotation: 300,
      distance: 170,
      delay: 0.6
    }
  ];

  return (
    <section id="technology" className="py-24 bg-[#121212] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[rgba(61,42,85,0.2)] rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <span className="inline-block mb-3 px-4 py-1 bg-[#3D2A55] rounded-full text-sm font-medium text-[#F05A28]">
            Our Technology
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-white bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] bg-clip-text text-transparent">AdBid: Proprietary Platform</h2>
          <p className="text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Our data-driven technology platform delivers superior performance through advanced targeting and real-time optimization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 items-center">
          <motion.div 
            className="relative mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            {/* Radial AdBid diagram with features in a circle */}
            <div className="relative w-full max-w-4xl aspect-square mx-auto">
              {/* Center AdBid logo/pulse */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div 
                  className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-br from-[#F05A28] to-[#8E2DE2] p-[2px]"
                  animate={{ 
                    boxShadow: ['0 0 10px 5px rgba(240,90,40,0.15)', '0 0 25px 10px rgba(142,45,226,0.25)', '0 0 10px 5px rgba(240,90,40,0.15)']
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }}
                >
                  {/* Extra ring for enhanced effect */}
                  <motion.div
                    className="absolute inset-[-3px] rounded-full border border-[#F05A28]/30"
                    animate={{ 
                      opacity: [0.2, 0.6, 0.2],
                      scale: [0.98, 1.01, 0.98]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      repeatType: 'reverse'
                    }}
                  />
                  <motion.div
                    className="absolute inset-[-6px] rounded-full border border-[#8E2DE2]/20"
                    animate={{ 
                      opacity: [0.1, 0.4, 0.1],
                      scale: [0.97, 1.02, 0.97]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      repeatType: 'reverse',
                      delay: 0.5
                    }}
                  />
                  
                  {/* Inner content */}
                  <div className="bg-[#12121A] rounded-full w-full h-full flex flex-col items-center justify-center text-center p-4 border-2 border-[#F05A28]/20">
                    <Zap className="text-[#F05A28] mb-2" size={28} />
                    <h3 className="font-bold text-2xl bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] bg-clip-text text-transparent">AdBid</h3>
                    <p className="text-sm text-white font-medium mt-1">AI-Powered Platform</p>
                    
                    {/* Animated dots showing activity */}
                    <div className="flex space-x-1.5 mt-3">
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-[#F05A28]"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-[#8E2DE2]"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      />
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-[#F05A28]"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Circular connector lines */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-gray-800 opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border-dashed border border-[#3B8EFD] opacity-20"></div>

              {/* Features positioned in a circle around the center */}
              {techFeatures.map((feature, index) => {
                // Calculate position on the circle
                const angle = (feature.rotation * Math.PI) / 180;
                const posX = Math.cos(angle) * feature.distance; 
                const posY = Math.sin(angle) * feature.distance;
                
                return (
                  <motion.div
                    key={index}
                    className="absolute top-1/2 left-1/2 w-64 z-10"
                    style={{ 
                      transform: `translate(calc(-50% + ${posX}px), calc(-50% + ${posY}px))` 
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: feature.delay,
                      duration: 0.5
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div 
                      className={`relative bg-[#222222] rounded-xl p-4 border border-gray-800 hover:shadow-[0_0_25px_rgba(142,45,226,0.3)] transition-all duration-300 group ${glowEffects.cardPulse}`}
                    >
                      {/* Neon edge effect on hover */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 blur-[2px] -z-10 transition-opacity duration-300`}></div>
                      
                      <div className="flex items-start">
                        <div className={`relative w-10 h-10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 bg-gradient-to-br ${feature.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300 ${glowEffects.neonRing}`}>
                          <div className="z-10">
                            {feature.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium text-lg mb-1 text-white group-hover:bg-gradient-to-r group-hover:from-[#F05A28] group-hover:to-[#8E2DE2] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{feature.title}</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Barely visible corner accents */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-transparent group-hover:border-[#F05A28]/30 rounded-tl-xl transition-all duration-300"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-transparent group-hover:border-[#8E2DE2]/30 rounded-br-xl transition-all duration-300"></div>
                    </div>
                    
                    {/* Connection line to center */}
                    <div 
                      className="absolute top-1/2 left-1/2 w-[calc(100%-20px)] h-[2px] bg-gradient-to-r from-[rgba(255,107,43,0.3)] to-[rgba(11,110,253,0.3)] origin-left z-0"
                      style={{ 
                        transform: `rotate(${feature.rotation + 180}deg)`,
                        transformOrigin: 'left center'
                      }}
                    ></div>
                  </motion.div>
                );
              })}
              
              {/* Background elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[rgba(45,26,69,0.05)] to-[rgba(11,110,253,0.05)]"></div>
            </div>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <div className="bg-[#222222] rounded-xl p-8 border border-gray-800 shadow-lg">
              <h3 className="text-white font-semibold text-xl mb-6 text-center bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] bg-clip-text text-transparent">Platform Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-5 bg-[#1A1A1A] rounded-lg hover:bg-[#1A1A1A]/80 transition-all duration-300 hover:shadow-[0_10px_25px_-5px_rgba(142,45,226,0.15)]">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F05A28] to-[#8E2DE2] flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(240,90,40,0.2)]">
                    <Target className="text-white" size={22} />
                  </div>
                  <h4 className="text-white text-center font-medium mb-2 text-lg">Precision</h4>
                  <p className="text-gray-400 text-sm text-center leading-relaxed">Targeting accuracy up to 95% with AI-driven optimization</p>
                </div>
                <div className="flex flex-col items-center p-5 bg-[#1A1A1A] rounded-lg hover:bg-[#1A1A1A]/80 transition-all duration-300 hover:shadow-[0_10px_25px_-5px_rgba(240,90,40,0.15)]">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8E2DE2] to-[#4A00E0] flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(142,45,226,0.2)]">
                    <Zap className="text-white" size={22} />
                  </div>
                  <h4 className="text-white text-center font-medium mb-2 text-lg">Performance</h4>
                  <p className="text-gray-400 text-sm text-center leading-relaxed">40% higher conversion rates compared to traditional platforms</p>
                </div>
                <div className="flex flex-col items-center p-5 bg-[#1A1A1A] rounded-lg hover:bg-[#1A1A1A]/80 transition-all duration-300 hover:shadow-[0_10px_25px_-5px_rgba(142,45,226,0.15)]">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F05A28] to-[#4A00E0] flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(240,90,40,0.2)]">
                    <Database className="text-white" size={22} />
                  </div>
                  <h4 className="text-white text-center font-medium mb-2 text-lg">Integration</h4>
                  <p className="text-gray-400 text-sm text-center leading-relaxed">Seamless connection with 50+ major ad platforms and data sources</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
