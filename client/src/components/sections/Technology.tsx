import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";
import { Target, PieChart, Crosshair, Database } from "lucide-react";

export default function Technology() {
  const techFeatures = [
    {
      icon: <Target className="text-[#3B8EFD]" />,
      title: "Ad Formats",
      description: "Comprehensive support for all digital ad formats including display, video, native, and interactive ads."
    },
    {
      icon: <PieChart className="text-[#3B8EFD]" />,
      title: "KPIs",
      description: "Track and optimize toward custom KPIs including viewability, engagement, conversions, and ROAS."
    },
    {
      icon: <Crosshair className="text-[#3B8EFD]" />,
      title: "Targeting",
      description: "Precision targeting options including demographic, behavioral, contextual, and lookalike audiences."
    },
    {
      icon: <Database className="text-[#3B8EFD]" />,
      title: "Data & Audiences",
      description: "Access to premium data sources and audience segments to reach your ideal customers."
    }
  ];

  return (
    <section id="technology" className="py-20 bg-[#121212] relative overflow-hidden">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <div className="space-y-6">
              {techFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-[#222222] rounded-xl p-6 border border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-[rgba(61,42,85,0.6)] flex items-center justify-center mr-4 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-xl mb-2 text-white">{feature.title}</h3>
                      <p className="text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideUp}
          >
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#FF6B2B] to-[#0B6EFD] rounded-xl -rotate-12 opacity-80"></div>
              
              <svg className="rounded-2xl border border-gray-800 shadow-2xl relative z-10" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="500" height="400" rx="12" fill="#222" />
                <rect x="50" y="50" width="400" height="60" rx="8" fill="#2D1A45" />
                <rect x="70" y="70" width="200" height="20" rx="4" fill="#0B6EFD" fillOpacity="0.6" />
                <rect x="50" y="130" width="190" height="220" rx="8" fill="#222" stroke="#333" strokeWidth="1" />
                <rect x="260" y="130" width="190" height="220" rx="8" fill="#222" stroke="#333" strokeWidth="1" />
                <circle cx="120" cy="180" r="40" fill="url(#tech_grad1)" />
                <rect x="80" y="240" width="130" height="10" rx="2" fill="#444" />
                <rect x="80" y="260" width="130" height="10" rx="2" fill="#444" />
                <rect x="80" y="280" width="130" height="10" rx="2" fill="#444" />
                <rect x="80" y="300" width="80" height="10" rx="2" fill="#444" />
                <path d="M330 160 L370 200 L410 180 L450 160" stroke="#FF6B2B" strokeWidth="3" strokeLinecap="round" />
                <path d="M330 180 L370 220 L410 200 L450 190" stroke="#0B6EFD" strokeWidth="3" strokeLinecap="round" />
                <circle cx="330" cy="160" r="4" fill="#FF6B2B" />
                <circle cx="370" cy="200" r="4" fill="#FF6B2B" />
                <circle cx="410" cy="180" r="4" fill="#FF6B2B" />
                <circle cx="450" cy="160" r="4" fill="#FF6B2B" />
                <circle cx="330" cy="180" r="4" fill="#0B6EFD" />
                <circle cx="370" cy="220" r="4" fill="#0B6EFD" />
                <circle cx="410" cy="200" r="4" fill="#0B6EFD" />
                <circle cx="450" cy="190" r="4" fill="#0B6EFD" />
                <rect x="330" y="250" width="100" height="70" rx="8" fill="#2D1A45" />
                <rect x="345" y="265" width="70" height="10" rx="2" fill="#FFF" fillOpacity="0.7" />
                <rect x="345" y="285" width="70" height="10" rx="2" fill="#FFF" fillOpacity="0.5" />
                <defs>
                  <linearGradient id="tech_grad1" x1="80" y1="150" x2="160" y2="210" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2D1A45" />
                    <stop offset="1" stopColor="#0B6EFD" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-tr from-[#2D1A45] to-[#0B6EFD] rounded-lg rotate-12 opacity-80"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
