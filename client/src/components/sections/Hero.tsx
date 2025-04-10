import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";
import { gradients, glowEffects } from "@/lib/gradients";

export default function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-28 overflow-hidden bg-[#121212]">
      {/* Background pattern and overlay - more subtle */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(142,45,226,0.2)] to-[rgba(26,26,26,0.05)]"></div>
      
      {/* Polygonal Brain Visual */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-15 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          {/* Brain cortex outer shape */}
          <g className="animate-pulse-slow">
            <path 
              fill="none" 
              stroke="url(#brain-gradient)" 
              strokeWidth="1.5" 
              strokeLinejoin="round"
              d="M400,100 C520,100 600,200 650,300 C700,400 680,550 580,650 C480,750 320,750 220,650 C120,550 100,400 150,300 C200,200 280,100 400,100 Z"
              opacity="0.4"
            />
            
            {/* Neural network lines */}
            <path fill="none" stroke="#F05A28" strokeWidth="0.5" d="M400,100 L300,200 L400,300 L500,250 L600,300" opacity="0.5" />
            <path fill="none" stroke="#8E2DE2" strokeWidth="0.5" d="M400,100 L500,150 L450,250 L350,200 L250,300" opacity="0.5" />
            <path fill="none" stroke="#F05A28" strokeWidth="0.5" d="M220,650 L300,550 L400,600 L500,500 L580,650" opacity="0.5" />
            <path fill="none" stroke="#8E2DE2" strokeWidth="0.5" d="M150,300 L250,400 L200,500 L300,550" opacity="0.5" />
            <path fill="none" stroke="#F05A28" strokeWidth="0.5" d="M650,300 L550,350 L600,450 L500,500" opacity="0.5" />
            
            {/* Neural connection points */}
            {[
              [300, 200], [400, 300], [500, 250], [600, 300], [500, 150], [450, 250], [350, 200], 
              [250, 300], [300, 550], [400, 600], [500, 500], [250, 400], [200, 500], [550, 350], [600, 450]
            ].map((point, i) => (
              <circle 
                key={i} 
                cx={point[0]} 
                cy={point[1]} 
                r={Math.random() * 2 + 2} 
                fill={i % 2 === 0 ? "#F05A28" : "#8E2DE2"} 
                opacity={Math.random() * 0.5 + 0.3}
                className={i % 3 === 0 ? "animate-pulse-slow" : ""}
              />
            ))}
            
            {/* Data flow pulses along neural paths */}
            <circle cx="400" cy="100" r="4" fill="#F05A28">
              <animate 
                attributeName="opacity" 
                values="0;0.8;0" 
                dur="4s" 
                repeatCount="indefinite" 
                begin="0s" 
              />
            </circle>
            <circle cx="580" cy="650" r="4" fill="#8E2DE2">
              <animate 
                attributeName="opacity" 
                values="0;0.8;0" 
                dur="4s" 
                repeatCount="indefinite" 
                begin="1s" 
              />
            </circle>
            <circle cx="150" cy="300" r="4" fill="#F05A28">
              <animate 
                attributeName="opacity" 
                values="0;0.8;0" 
                dur="4s" 
                repeatCount="indefinite" 
                begin="2s" 
              />
            </circle>
          </g>
          
          {/* Brain regions/polygons */}
          <g className="animate-pulse-slow" opacity="0.2">
            <polygon points="400,100 300,200 400,300 500,250" fill="url(#poly1)" />
            <polygon points="300,200 250,300 350,350 400,300" fill="url(#poly2)" />
            <polygon points="400,300 350,350 400,450 500,400 500,250" fill="url(#poly3)" />
            <polygon points="250,300 150,300 200,500 350,350" fill="url(#poly4)" />
            <polygon points="500,250 500,400 600,450 650,300" fill="url(#poly5)" />
            <polygon points="350,350 200,500 300,550 400,450" fill="url(#poly6)" />
            <polygon points="400,450 300,550 400,600 500,500" fill="url(#poly7)" />
            <polygon points="500,400 500,500 600,450" fill="url(#poly8)" />
          </g>
          
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="brain-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F05A28" />
              <stop offset="100%" stopColor="#8E2DE2" />
            </linearGradient>
            <linearGradient id="poly1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F05A28" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8E2DE2" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="poly2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8E2DE2" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#F05A28" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="poly3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F05A28" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8E2DE2" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="poly4" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8E2DE2" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#F05A28" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="poly5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F05A28" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#8E2DE2" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="poly6" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8E2DE2" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#F05A28" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="poly7" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F05A28" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8E2DE2" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="poly8" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8E2DE2" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#F05A28" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Animated data pulse circles */}
      <div className="absolute bottom-10 right-10 w-40 h-40 opacity-20">
        <div className="absolute inset-0 rounded-full bg-[#8E2DE2] animate-pulse-slow"></div>
      </div>
      <div className="absolute top-20 left-20 w-20 h-20 opacity-10">
        <div className="absolute inset-0 rounded-full bg-[#F05A28] animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 md:pr-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <span className="inline-block mb-3 px-4 py-1 bg-[#3D2A55] rounded-full text-sm font-medium text-[#8E2DE2]">
              Digital Advertising Agency
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-white">
              Your Advertising Agency with a{' '}
              <span className="bg-gradient-to-br from-[#F05A28] via-[#FF8B4B] to-[#8E2DE2] bg-clip-text text-transparent">
                Tech Boutique Touch
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              We combine cutting-edge proprietary technology with a personal, high-performance media approach to deliver exceptional advertising results for global brands.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className={`relative px-8 py-6 bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_15px_rgba(240,90,40,0.1)] hover:shadow-[0_0_20px_rgba(142,45,226,0.4)] group overflow-hidden`}
                onClick={() => {
                  const auditSection = document.getElementById("audit");
                  if (auditSection) {
                    auditSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span className="relative z-10">Get a Free Strategy Audit</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#8E2DE2] to-[#F05A28] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-6 rounded-full border-gray-600 hover:border-[#8E2DE2] hover:text-[#8E2DE2] transition-all duration-300"
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
            <div className="relative mx-auto max-w-lg">
              {/* Visualization of data flow - abstract representation of advertising tech */}
              <div className="relative aspect-square">
                {/* Glowing orbs */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[rgba(142,45,226,0.15)] rounded-full blur-3xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.25, 0.15]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute top-1/4 right-1/4 w-32 h-32 bg-[rgba(240,90,40,0.15)] rounded-full blur-2xl"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.15, 0.3, 0.15]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                
                {/* Data visualization canvas */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Central circular platform */}
                    <circle cx="200" cy="200" r="80" fill="url(#main-gradient)" fillOpacity="0.1" />
                    <circle cx="200" cy="200" r="80" stroke="url(#main-gradient)" strokeWidth="1" strokeDasharray="2 4" />
                    
                    {/* Data flow lines */}
                    <path d="M200,120 C240,120 270,150 280,190" stroke="#F05A28" strokeWidth="1" strokeDasharray="3 3">
                      <animate attributeName="stroke-dashoffset" from="0" to="24" dur="4s" repeatCount="indefinite" />
                    </path>
                    <path d="M280,190 C290,230 270,270 240,290" stroke="#F05A28" strokeWidth="1" strokeDasharray="3 3">
                      <animate attributeName="stroke-dashoffset" from="0" to="24" dur="4s" repeatCount="indefinite" />
                    </path>
                    <path d="M240,290 C210,310 170,310 140,290" stroke="#8E2DE2" strokeWidth="1" strokeDasharray="3 3">
                      <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="4s" repeatCount="indefinite" />
                    </path>
                    <path d="M140,290 C110,270 90,230 100,190" stroke="#8E2DE2" strokeWidth="1" strokeDasharray="3 3">
                      <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="4s" repeatCount="indefinite" />
                    </path>
                    <path d="M100,190 C110,150 140,120 180,120" stroke="#8E2DE2" strokeWidth="1" strokeDasharray="3 3">
                      <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="4s" repeatCount="indefinite" />
                    </path>
                    
                    {/* Connection nodes */}
                    <g>
                      <circle cx="200" cy="120" r="6" fill="#F05A28" />
                      <circle cx="280" cy="190" r="6" fill="#F05A28" />
                      <circle cx="240" cy="290" r="6" fill="#8E2DE2" />
                      <circle cx="140" cy="290" r="6" fill="#8E2DE2" />
                      <circle cx="100" cy="190" r="6" fill="#8E2DE2" />
                    </g>
                    
                    {/* Data points */}
                    <g>
                      {Array.from({ length: 24 }).map((_, i) => {
                        const angle = (i * Math.PI * 2) / 24;
                        const radius = 120;
                        const x = 200 + Math.cos(angle) * radius;
                        const y = 200 + Math.sin(angle) * radius;
                        const delay = i * 0.15;
                        return (
                          <circle key={i} cx={x} cy={y} r="2" fill={i % 2 === 0 ? "#F05A28" : "#8E2DE2"}>
                            <animate
                              attributeName="opacity"
                              values="0;0.8;0"
                              dur="3s"
                              repeatCount="indefinite"
                              begin={`${delay}s`}
                            />
                          </circle>
                        );
                      })}
                    </g>
                    
                    {/* Central element */}
                    <g>
                      <circle cx="200" cy="200" r="30" fill="url(#center-gradient)" />
                      <circle cx="200" cy="200" r="15" fill="#121212" />
                      <path d="M190,200 L210,200 M200,190 L200,210" stroke="#F05A28" strokeWidth="2" />
                    </g>
                    
                    {/* Gradients */}
                    <defs>
                      <linearGradient id="main-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F05A28" />
                        <stop offset="100%" stopColor="#8E2DE2" />
                      </linearGradient>
                      <radialGradient id="center-gradient" cx="200" cy="200" r="30" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#8E2DE2" />
                        <stop offset="100%" stopColor="#F05A28" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-gradient-to-br from-[#4A00E0] to-[#8E2DE2] rounded-xl -rotate-12 opacity-80"></div>
                <div className="absolute -top-5 -left-5 w-16 h-16 bg-gradient-to-tr from-[#F05A28] to-[#8E2DE2] rounded-lg rotate-12 opacity-80"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}