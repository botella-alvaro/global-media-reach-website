import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { 
  ChartLine, 
  Code, 
  Monitor, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Target,
  BarChart
} from "lucide-react";
import { gradients, glowEffects } from "@/lib/gradients";
import { useEffect } from "react";

export default function Services() {
  const services = [
    {
      icon: <ChartLine size={32} className="text-gradient-orange-purple" />,
      badge: "STRATEGY",
      badgeColor: "from-[#F05A28] to-[#8E2DE2]",
      title: "Media Strategy, Buying & Advisory",
      description: "Our team of media experts develops custom strategies to optimize your advertising budget and reach the right audiences at the right time.",
      features: [
        "Audience-driven targeting",
        "Cross-channel optimization",
        "Performance analysis"
      ]
    },
    {
      icon: <Code size={32} className="text-gradient-purple-blue" />,
      badge: "TECH",
      badgeColor: "from-[#8E2DE2] to-[#F05A28]",
      title: "Proprietary Technology (AdBid)",
      description: "Our cutting-edge AdBid platform leverages AI and machine learning to optimize campaign performance and maximize ROI.",
      features: [
        "Automated bid management",
        "Real-time analytics",
        "AI-powered recommendations"
      ]
    },
    {
      icon: <Monitor size={32} className="text-gradient-orange-blue" />,
      badge: "DOOH",
      badgeColor: "from-[#F05A28] to-[#8E2DE2]",
      title: "DOOH for Global Brands",
      description: "Leverage Digital Out-of-Home advertising to create impactful experiences that connect with your audience in physical spaces.",
      features: [
        "Programmatic DOOH buying",
        "Location-based targeting",
        "Cross-channel integration"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="services" className="py-28 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#8E2DE2]/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[#F05A28]/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <span className="inline-block mb-3 px-4 py-1 bg-[#3D2A55] rounded-full text-sm font-medium text-[#8E2DE2]">
            Our Services
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-white">What We Do</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our full-stack approach combines strategic expertise, proprietary technology, and creative excellence to deliver exceptional results.
          </p>
        </motion.div>

        {/* Arc-arranged cards */}
        <div className="relative">
          <motion.div 
            className="relative max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              {services.map((service, index) => {
                // Calculate vertical offset for arc layout (only on desktop)
                const yOffset = index === 1 ? -30 : 0;
                
                return (
                  <motion.div 
                    key={index} 
                    className="w-full lg:w-1/3"
                    style={{ y: yOffset }}
                    variants={{
                      hidden: { 
                        opacity: 0, 
                        y: 50 + yOffset 
                      },
                      visible: { 
                        opacity: 1, 
                        y: yOffset,
                        transition: { 
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1] // Custom ease curve for more dynamic motion
                        }
                      }
                    }}
                  >
                    <ServiceCard service={service} index={index} />
                  </motion.div>
                );
              })}
            </div>
            
            {/* Connecting lines between cards (visible only on desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 z-0">
              <svg width="100%" height="40" viewBox="0 0 800 40" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,20 C266,50 533,-10 800,20" stroke="url(#service-line)" strokeWidth="1" strokeDasharray="4 4" />
                <defs>
                  <linearGradient id="service-line" x1="0" y1="0" x2="800" y2="0">
                    <stop offset="0%" stopColor="#F05A28" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#8E2DE2" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#4A00E0" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
        
        {/* Features summary */}
        <motion.div 
          className="mt-20 max-w-xl mx-auto text-center py-8 px-6 bg-[#222]/50 rounded-xl border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F05A28]/10">
              <Zap className="h-5 w-5 text-[#F05A28]" />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8E2DE2]/10">
              <Target className="h-5 w-5 text-[#8E2DE2]" />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4A00E0]/10">
              <BarChart className="h-5 w-5 text-[#4A00E0]" />
            </div>
          </div>
          <h3 className="text-white font-medium text-lg mb-2">End-to-End Solutions</h3>
          <p className="text-gray-400 text-sm">
            Our integrated approach combines strategic insight, proprietary tech, and creative execution for measurable business impact across all channels.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

interface ServiceProps {
  service: {
    icon: React.ReactNode;
    badge: string;
    badgeColor: string;
    title: string;
    description: string;
    features: string[];
  };
  index: number;
}

function ServiceCard({ service, index }: ServiceProps) {
  return (
    <motion.div 
      className="relative bg-[#222222] rounded-2xl p-8 transition-all duration-500 overflow-hidden group h-full transform-gpu perspective-[1000px]"
      whileHover={{
        scale: 1.03,
        rotateY: -5,
        rotateX: 5,
        translateZ: 20,
        boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
        transition: { duration: 0.3 }
      }}
    >
      {/* Mini header badge */}
      <div className="absolute -top-3 left-8 z-20">
        <div className={`px-3 py-1 bg-gradient-to-r ${service.badgeColor} rounded-full text-xs font-medium text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110`}>
          {service.badge}
        </div>
      </div>
      
      {/* Gradient border effect on hover */}
      <div className="absolute inset-0 rounded-2xl border border-gray-800 group-hover:border-transparent group-hover:before:absolute group-hover:before:inset-0 group-hover:before:-z-10 group-hover:before:p-[1px] group-hover:before:bg-gradient-to-r group-hover:before:from-[#F05A28] group-hover:before:to-[#8E2DE2] group-hover:before:rounded-[inherit] group-hover:before:opacity-70"></div>
      
      {/* Top gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8E2DE2]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      {/* Icon with animated pulse */}
      <div className="flex items-center justify-between mb-8 mt-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-full bg-[#222] group-hover:bg-gradient-to-br group-hover:from-black group-hover:to-[#181818] transition-all duration-500"></div>
          <div className="relative z-10">
            {service.icon}
          </div>
          
          {/* Pulse effect behind icon */}
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F05A28]/5 to-[#8E2DE2]/5 blur-sm"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </div>
        
        {/* Illustration placeholder */}
        <div className="w-28 h-28 opacity-70 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#222] to-[#333] flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-r from-[#F05A28]/20 to-[#8E2DE2]/20"></div>
          </div>
        </div>
      </div>
      
      <h3 className="font-poppins font-semibold text-xl mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-[#F05A28] group-hover:to-[#8E2DE2] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{service.title}</h3>
      <p className="text-gray-400 mb-6">
        {service.description}
      </p>
      <ul className="space-y-3 mb-6">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <CheckCircle className="text-[#F05A28] mt-1 mr-2 transition-colors duration-200" size={16} />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="#" 
        className="inline-flex items-center font-medium text-[#8E2DE2] hover:text-[#F05A28] transition-colors duration-300 group-hover:underline"
      >
        Learn more <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" size={16} />
      </a>
    </motion.div>
  );
}