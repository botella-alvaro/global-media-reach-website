import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { ChartLine, Code, Monitor, CheckCircle, ArrowRight, Lightbulb, Database, Globe } from "lucide-react";
import { glowEffects } from "@/lib/gradients";

export default function Services() {
  const services = [
    {
      icon: <ChartLine size={32} className="text-[#3B8EFD]" />,
      illustration: <LightIllustration />,
      title: "Media Strategy, Buying & Advisory",
      description: "Our team of media experts develops custom strategies to optimize your advertising budget and reach the right audiences at the right time.",
      features: [
        "Audience-driven targeting",
        "Cross-channel optimization",
        "Performance analysis"
      ]
    },
    {
      icon: <Code size={32} className="text-[#3B8EFD]" />,
      illustration: <CodeIllustration />,
      title: "Proprietary Technology (AdBid)",
      description: "Our cutting-edge AdBid platform leverages AI and machine learning to optimize campaign performance and maximize ROI.",
      features: [
        "Automated bid management",
        "Real-time analytics",
        "AI-powered recommendations"
      ]
    },
    {
      icon: <Monitor size={32} className="text-[#3B8EFD]" />,
      illustration: <DOOHIllustration />,
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
    <section id="services" className="py-24 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <span className="inline-block mb-3 px-4 py-1 bg-[#3D2A55] rounded-full text-sm font-medium text-[#3B8EFD]">
            Our Services
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-white">What We Do</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our full-stack approach combines strategic expertise, proprietary technology, and creative excellence to deliver exceptional results.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface ServiceProps {
  service: {
    icon: React.ReactNode;
    illustration: React.ReactNode;
    title: string;
    description: string;
    features: string[];
  };
}

function ServiceCard({ service }: ServiceProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="relative bg-[#222222] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] overflow-hidden group"
      variants={cardVariants}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      {/* Gradient border effect on hover */}
      <div className="absolute inset-0 rounded-2xl border border-gray-800 group-hover:border-transparent group-hover:before:absolute group-hover:before:inset-0 group-hover:before:-z-10 group-hover:before:p-[1px] group-hover:before:bg-gradient-to-r group-hover:before:from-[#FF6B2B] group-hover:before:to-[#0B6EFD] group-hover:before:rounded-[inherit] group-hover:before:opacity-70"></div>
      
      {/* Top gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2D1A45]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
      
      {/* Icon and illustration */}
      <div className="flex items-center justify-between mb-6">
        <div className={`w-16 h-16 rounded-full bg-[rgba(61,42,85,0.5)] flex items-center justify-center relative ${glowEffects.iconGlow}`}>
          {service.icon}
        </div>
        <div className="w-24 h-24 opacity-70 group-hover:opacity-100 transition-opacity">
          {service.illustration}
        </div>
      </div>
      
      <h3 className="font-poppins font-semibold text-xl mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-[#FF6B2B] group-hover:to-[#0B6EFD] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{service.title}</h3>
      <p className="text-gray-400 mb-6">
        {service.description}
      </p>
      <ul className="space-y-3 mb-6">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <CheckCircle className="text-[#FF8B4B] group-hover:text-[#FF6B2B] mt-1 mr-2 transition-colors duration-200" size={16} />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#" className="inline-flex items-center font-medium text-[#0B6EFD] hover:text-[#3B8EFD] group-hover:text-[#FF6B2B] transition-colors duration-300">
        Learn more <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" size={16} />
      </a>
    </motion.div>
  );
}

// Custom illustrations for service cards
function LightIllustration() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="50" stroke="url(#light-gradient)" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="60" cy="60" r="30" fill="url(#light-radial)" fillOpacity="0.2" />
      <path d="M60 25V40" stroke="#FF6B2B" strokeWidth="2" strokeLinecap="round" />
      <path d="M60 80V95" stroke="#FF6B2B" strokeWidth="2" strokeLinecap="round" />
      <path d="M25 60H40" stroke="#0B6EFD" strokeWidth="2" strokeLinecap="round" />
      <path d="M80 60H95" stroke="#0B6EFD" strokeWidth="2" strokeLinecap="round" />
      <path d="M36 36L46 46" stroke="#7928CA" strokeWidth="2" strokeLinecap="round" />
      <path d="M74 74L84 84" stroke="#7928CA" strokeWidth="2" strokeLinecap="round" />
      <path d="M36 84L46 74" stroke="#FF8B4B" strokeWidth="2" strokeLinecap="round" />
      <path d="M74 46L84 36" stroke="#FF8B4B" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="light-gradient" x1="10" y1="10" x2="110" y2="110" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6B2B" />
          <stop offset="1" stopColor="#0B6EFD" />
        </linearGradient>
        <radialGradient id="light-radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(90) scale(30)">
          <stop stopColor="#FF6B2B" />
          <stop offset="1" stopColor="#0B6EFD" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function CodeIllustration() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="30" width="80" height="60" rx="4" stroke="url(#code-gradient)" strokeWidth="2" />
      <path d="M45 50L35 60L45 70" stroke="#0B6EFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M75 50L85 60L75 70" stroke="#FF6B2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M65 45L55 75" stroke="#7928CA" strokeWidth="2" strokeLinecap="round" />
      <rect x="30" y="20" width="60" height="10" rx="2" fill="#222" stroke="#444" strokeWidth="1" />
      <circle cx="35" cy="25" r="2" fill="#FF6B2B" />
      <circle cx="42" cy="25" r="2" fill="#FF8B4B" />
      <circle cx="49" cy="25" r="2" fill="#0B6EFD" />
      <defs>
        <linearGradient id="code-gradient" x1="20" y1="30" x2="100" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6B2B" />
          <stop offset="1" stopColor="#0B6EFD" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function DOOHIllustration() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="20" width="70" height="50" rx="2" stroke="#444" strokeWidth="2" />
      <rect x="30" y="25" width="60" height="40" rx="1" fill="url(#dooh-gradient)" fillOpacity="0.3" />
      <path d="M60 70V90" stroke="#444" strokeWidth="2" />
      <path d="M45 90H75" stroke="#444" strokeWidth="2" strokeLinecap="round" />
      <circle cx="45" cy="45" r="8" fill="#FF6B2B" fillOpacity="0.6" />
      <circle cx="75" cy="45" r="8" fill="#0B6EFD" fillOpacity="0.6" />
      <path d="M50 38H70" stroke="#7928CA" strokeWidth="2" strokeLinecap="round" />
      <path d="M50 45H70" stroke="#7928CA" strokeWidth="2" strokeLinecap="round" />
      <path d="M50 52H70" stroke="#7928CA" strokeWidth="2" strokeLinecap="round" />
      <rect x="15" y="95" width="90" height="5" rx="2" fill="#333" />
      <defs>
        <linearGradient id="dooh-gradient" x1="30" y1="25" x2="90" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6B2B" />
          <stop offset="1" stopColor="#0B6EFD" />
        </linearGradient>
      </defs>
    </svg>
  );
}
