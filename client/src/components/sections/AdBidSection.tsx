import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Database } from 'lucide-react';

export default function AdBidSection() {
  return (
    <section id="technology" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.075)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#8E2DE2]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#F05A28]/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block mb-3 px-4 py-1 bg-[#3D2A55] rounded-full text-sm font-medium text-[#F05A28]">
            Our Technology
          </span>
          <h2 className="font-bold text-4xl md:text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#8E2DE2]">
            AdBid: Proprietary Platform
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Our data-driven technology platform delivers superior performance through advanced targeting and real-time optimization.
          </p>
        </div>

        {/* AdBid Platform - Radial Layout */}
        <div className="relative">
          {/* Central Node */}
          <div className="flex justify-center mb-16 md:mb-40">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="absolute -inset-3 rounded-full"
                style={{ 
                  background: "linear-gradient(90deg, #F05A28, #8E2DE2)" 
                }}
                animate={{ 
                  opacity: [0.6, 0.8, 0.6],
                  scale: [0.98, 1.02, 0.98]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
              />
              <motion.div 
                className="absolute -inset-1.5 rounded-full"
                style={{ 
                  background: "linear-gradient(90deg, #F05A28, #8E2DE2)" 
                }}
                animate={{ 
                  opacity: [0.7, 0.9, 0.7],
                  scale: [0.99, 1.01, 0.99]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  delay: 0.5
                }}
              />
              <div className="w-36 h-36 md:w-48 md:h-48 bg-[#0A0A0A] rounded-full flex flex-col items-center justify-center p-4 border border-[#333] z-20 relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 rounded-full opacity-20"
                  style={{ 
                    background: "conic-gradient(from 90deg, #F05A28, #8E2DE2, #F05A28)" 
                  }}
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Zap className="text-[#F05A28] mb-2 w-10 h-10" />
                </motion.div>
                <h3 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#8E2DE2]">
                  AdBid
                </h3>
                <p className="text-sm text-white mt-1 font-medium">
                  AI-Powered Platform
                </p>
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

          {/* Triangle Layout for Benefit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Connector lines - Only visible on desktop */}
            <div className="hidden md:block absolute inset-0 z-0">
              {/* Top connector */}
              <motion.div 
                className="absolute left-1/2 top-0 w-px h-24 -translate-x-1/2 -translate-y-32"
                style={{ background: "linear-gradient(to top, transparent, rgba(240, 90, 40, 0.6))" }}
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: 96, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
              
              {/* Left connector */}
              <motion.div 
                className="absolute left-[16.6%] top-0 transform -translate-y-16 -rotate-45"
                style={{ 
                  height: '1px', 
                  width: '160px',
                  background: "linear-gradient(to left, transparent, rgba(142, 45, 226, 0.6))",
                  transformOrigin: 'center right'
                }}
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 160, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              />
              
              {/* Right connector */}
              <motion.div 
                className="absolute right-[16.6%] top-0 transform -translate-y-16 rotate-45"
                style={{ 
                  height: '1px', 
                  width: '160px',
                  background: "linear-gradient(to right, transparent, rgba(240, 90, 40, 0.6))",
                  transformOrigin: 'center left'
                }}
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 160, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </div>

            {/* Precision Card */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="bg-[#111] rounded-2xl overflow-hidden h-full transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(240,90,40,0.15)] border border-gray-800 group-hover:border-[#F05A28]">
                <div className="p-6 h-full flex flex-col relative group-hover:-translate-y-5 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-[#F05A28] to-[#8E2DE2] w-16 h-16 rounded-xl flex items-center justify-center mb-5 group-hover:animate-pulse transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(240,90,40,0.3)]">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                    >
                      <Target className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Precision</h3>
                  <p className="text-[#F0F0F0] text-sm">
                    Targeting accuracy up to 95% with AI-driven optimization
                  </p>
                  
                  {/* Tooltip that appears on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <Target className="w-10 h-10 text-[#F05A28] mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">Precision</h3>
                    <p className="text-[#F0F0F0] text-sm text-center">
                      Advanced algorithms analyze countless data points in real-time to deliver highly precise targeting, resulting in up to 95% accuracy. This precision dramatically increases engagement and conversion rates while reducing wasteful ad spend.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Performance Card */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="bg-[#111] rounded-2xl overflow-hidden h-full transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(142,45,226,0.15)] border border-gray-800 group-hover:border-[#8E2DE2]">
                <div className="p-6 h-full flex flex-col relative group-hover:-translate-y-5 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-[#8E2DE2] to-[#4a00e0] w-16 h-16 rounded-xl flex items-center justify-center mb-5 group-hover:animate-pulse transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(142,45,226,0.3)]">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                    >
                      <Zap className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Performance</h3>
                  <p className="text-[#F0F0F0] text-sm">
                    40% higher conversion rates compared to traditional platforms
                  </p>
                  
                  {/* Tooltip that appears on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <Zap className="w-10 h-10 text-[#8E2DE2] mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">Performance</h3>
                    <p className="text-[#F0F0F0] text-sm text-center">
                      Our platform outperforms traditional advertising solutions by leveraging machine learning to continuously optimize campaigns in real-time. This dynamic approach results in conversion rates that average 40% higher than industry standards.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Integration Card */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="bg-[#111] rounded-2xl overflow-hidden h-full transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(240,90,40,0.15)] border border-gray-800 group-hover:border-[#F05A28]">
                <div className="p-6 h-full flex flex-col relative group-hover:-translate-y-5 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-[#F05A28] to-[#8E2DE2] w-16 h-16 rounded-xl flex items-center justify-center mb-5 group-hover:animate-pulse transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(240,90,40,0.3)]">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                    >
                      <Database className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Integration</h3>
                  <p className="text-[#F0F0F0] text-sm">
                    Seamless connection with 50+ major ad platforms and data sources
                  </p>
                  
                  {/* Tooltip that appears on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <Database className="w-10 h-10 text-[#F05A28] mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">Integration</h3>
                    <p className="text-[#F0F0F0] text-sm text-center">
                      AdBid connects seamlessly with over 50 major advertising platforms, analytics tools, and data sources. This extensive integration capability enables unified campaign management and comprehensive cross-platform data analysis within a single interface.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}