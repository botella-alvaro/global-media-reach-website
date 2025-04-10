import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";
import { Target, PieChart, Crosshair, Database, Zap, BarChart3, Share2 } from "lucide-react";
import { glowEffects } from "@/lib/gradients";

export default function Technology() {
  const techFeatures = [
    {
      icon: <Target className="text-[#3B8EFD]" size={24} />,
      title: "Ad Formats",
      description: "Comprehensive support for all digital ad formats including display, video, native, and interactive ads.",
      rotation: 0,
      distance: 170,
      delay: 0.1
    },
    {
      icon: <PieChart className="text-[#3B8EFD]" size={24} />,
      title: "KPIs",
      description: "Track and optimize toward custom KPIs including viewability, engagement, conversions, and ROAS.",
      rotation: 60,
      distance: 170,
      delay: 0.2
    },
    {
      icon: <Crosshair className="text-[#3B8EFD]" size={24} />,
      title: "Targeting",
      description: "Precision targeting options including demographic, behavioral, contextual, and lookalike audiences.",
      rotation: 120,
      distance: 170, 
      delay: 0.3
    },
    {
      icon: <Database className="text-[#3B8EFD]" size={24} />,
      title: "Data & Audiences",
      description: "Access to premium data sources and audience segments to reach your ideal customers.",
      rotation: 180,
      distance: 170,
      delay: 0.4
    },
    {
      icon: <BarChart3 className="text-[#3B8EFD]" size={24} />,
      title: "Analytics",
      description: "Real-time reporting and analytics dashboard with custom visualizations and insights.",
      rotation: 240,
      distance: 170,
      delay: 0.5
    },
    {
      icon: <Share2 className="text-[#3B8EFD]" size={24} />,
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
          <span className="inline-block mb-3 px-4 py-1 bg-[#3D2A55] rounded-full text-sm font-medium text-[#3B8EFD]">
            Our Technology
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-white">AdBid: Proprietary Platform</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
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
                  className="w-36 h-36 flex items-center justify-center rounded-full bg-gradient-to-br from-[#2D1A45] to-[#0B6EFD] p-1"
                  animate={{ 
                    boxShadow: ['0 0 10px 5px rgba(59,142,253,0.2)', '0 0 20px 10px rgba(59,142,253,0.4)', '0 0 10px 5px rgba(59,142,253,0.2)']
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }}
                >
                  <div className="bg-[#1A1A1A] rounded-full w-full h-full flex flex-col items-center justify-center text-center p-4">
                    <Zap className="text-[#FF6B2B] mb-1" size={24} />
                    <h3 className="font-bold text-xl bg-gradient-to-r from-[#FF6B2B] to-[#0B6EFD] bg-clip-text text-transparent">AdBid</h3>
                    <p className="text-xs text-gray-400">AI-Powered Platform</p>
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
                      className={`bg-[#222222] rounded-xl p-4 border border-gray-800 hover:shadow-[0_0_20px_rgba(59,142,253,0.3)] transition-all duration-300 group ${glowEffects.cardPulse}`}
                    >
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-lg bg-[rgba(61,42,85,0.6)] flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#3D2A55] group-hover:to-[#0B6EFD] transition-all duration-300">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-lg mb-1 text-white">{feature.title}</h3>
                          <p className="text-gray-400 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
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
            <div className="bg-[#222222] rounded-xl p-6 border border-gray-800">
              <h3 className="text-white font-semibold text-xl mb-4 text-center">Platform Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-4 bg-[#1A1A1A] rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3D2A55] to-[#0B6EFD] flex items-center justify-center mb-3">
                    <Target className="text-white" size={20} />
                  </div>
                  <h4 className="text-white text-center font-medium mb-2">Precision</h4>
                  <p className="text-gray-400 text-sm text-center">Targeting accuracy up to 95% with AI-driven optimization</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-[#1A1A1A] rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B2B] to-[#FF8B4B] flex items-center justify-center mb-3">
                    <Zap className="text-white" size={20} />
                  </div>
                  <h4 className="text-white text-center font-medium mb-2">Performance</h4>
                  <p className="text-gray-400 text-sm text-center">40% higher conversion rates compared to traditional platforms</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-[#1A1A1A] rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7928CA] to-[#3B8EFD] flex items-center justify-center mb-3">
                    <Database className="text-white" size={20} />
                  </div>
                  <h4 className="text-white text-center font-medium mb-2">Integration</h4>
                  <p className="text-gray-400 text-sm text-center">Seamless connection with 50+ major ad platforms and data sources</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
