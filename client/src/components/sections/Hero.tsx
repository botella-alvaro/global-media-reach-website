import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";
import { glowEffects } from "@/lib/gradients";
import { Brain } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-28 overflow-hidden bg-[#121212]">
      {/* Background pattern and overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(45,26,69,0.4)] to-[rgba(26,26,26,0.05)]"></div>
      
      {/* Animated digital brain background */}
      <div className="absolute top-[15%] right-[10%] opacity-10 w-[500px] h-[500px]">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="none" 
            stroke="url(#brain-gradient)" 
            strokeWidth="1" 
            d="M100,21 C149,21 190,61 190,110 C190,159 149,199 100,199 C51,199 10,159 10,110 C10,61 51,21 100,21 Z"
            className="animate-pulse-slow"
          />
          <path 
            fill="none" 
            stroke="url(#brain-gradient2)" 
            strokeWidth="0.5" 
            d="M100,40 C138,40 169,71 169,110 C169,148 138,179 100,179 C62,179 31,148 31,110 C31,71 62,40 100,40 Z"
            className="animate-pulse-slow"
          />
          <path 
            fill="none" 
            stroke="#7928CA" 
            strokeWidth="0.3" 
            strokeDasharray="5,3"
            d="M100,21 C60,50 60,80 50,110 C50,140 60,170 100,199"
          />
          <path 
            fill="none" 
            stroke="#FF6B2B" 
            strokeWidth="0.3" 
            strokeDasharray="5,3"
            d="M100,21 C140,50 140,80 150,110 C150,140 140,170 100,199"
          />
          <defs>
            <linearGradient id="brain-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B2B" />
              <stop offset="100%" stopColor="#7928CA" />
            </linearGradient>
            <linearGradient id="brain-gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7928CA" />
              <stop offset="100%" stopColor="#0B6EFD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 md:pr-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <span className="inline-block mb-3 px-4 py-1 bg-[#3D2A55] rounded-full text-sm font-medium text-[#3B8EFD]">
              Digital Advertising Agency
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-white">
              Your Advertising Agency with a{' '}
              <span className="bg-gradient-to-br from-[#FF6B2B] via-[#FF8B4B] to-[#7928CA] bg-clip-text text-transparent">
                Tech Boutique Touch
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              We combine cutting-edge proprietary technology with a personal, high-performance media approach to deliver exceptional advertising results for global brands.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className={`relative px-8 py-6 bg-gradient-to-r from-[#FF6B2B] to-[#7928CA] rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(255,107,43,0.1)] hover:shadow-[0_0_25px_rgba(255,107,43,0.6)] group overflow-hidden`}
                onClick={() => {
                  const auditSection = document.getElementById("audit");
                  if (auditSection) {
                    auditSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span className="relative z-10">Get a Free Strategy Audit</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#7928CA] to-[#FF6B2B] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-6 rounded-full border-gray-600 hover:border-[#0B6EFD] hover:text-[#0B6EFD] transition-all duration-300"
                onClick={() => {
                  const servicesSection = document.getElementById("services");
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Explore Services
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0"
            initial="hidden"
            animate="visible"
            variants={slideUp}
          >
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[rgba(11,110,253,0.2)] rounded-full blur-3xl"></div>
              <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[rgba(255,107,43,0.2)] rounded-full blur-2xl"></div>
              
              <svg className="relative z-10 rounded-2xl shadow-2xl w-full max-w-lg mx-auto" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="800" height="600" rx="20" fill="#222" />
                <path d="M400 150C323.6 150 250 181.5 250 250C250 318.5 323.6 350 400 350C476.4 350 550 318.5 550 250C550 181.5 476.4 150 400 150Z" fill="url(#paint0_linear)" />
                <path d="M250 300C250 368.5 323.6 400 400 400C476.4 400 550 368.5 550 300" stroke="url(#paint1_linear)" strokeWidth="2" />
                <path d="M300 200C300 188.9 308.9 180 320 180H480C491.0 180 500 188.9 500 200V240C500 251.0 491.0 260 480 260H320C308.9 260 300 251.0 300 240V200Z" fill="#2D1A45" stroke="#0B6EFD" strokeWidth="2" />
                <circle cx="400" cy="450" r="50" fill="url(#paint2_linear)" />
                <line x1="250" y1="490" x2="550" y2="490" stroke="#444" strokeWidth="2" strokeDasharray="10 5" />
                <circle cx="300" cy="490" r="8" fill="#FF6B2B" />
                <circle cx="350" cy="490" r="8" fill="#FF6B2B" />
                <circle cx="400" cy="490" r="8" fill="#0B6EFD" />
                <circle cx="450" cy="490" r="8" fill="#0B6EFD" />
                <circle cx="500" cy="490" r="8" fill="#3D2A55" />
                <defs>
                  <linearGradient id="paint0_linear" x1="250" y1="200" x2="550" y2="300" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3D2A55" />
                    <stop offset="1" stopColor="#0B6EFD" />
                  </linearGradient>
                  <linearGradient id="paint1_linear" x1="250" y1="300" x2="550" y2="300" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF6B2B" />
                    <stop offset="1" stopColor="#0B6EFD" />
                  </linearGradient>
                  <linearGradient id="paint2_linear" x1="350" y1="450" x2="450" y2="450" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF6B2B" />
                    <stop offset="1" stopColor="#0B6EFD" />
                  </linearGradient>
                </defs>
              </svg>
              
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-gradient-to-br from-[#2D1A45] to-[#0B6EFD] rounded-xl -rotate-12 opacity-80"></div>
              <div className="absolute -top-5 -left-5 w-16 h-16 bg-gradient-to-tr from-[#FF6B2B] to-[#0B6EFD] rounded-lg rotate-12 opacity-80"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
