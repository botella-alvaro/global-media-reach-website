import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { 
  Rocket, 
  Maximize2, 
  Tag, 
  Headphones, 
  RefreshCw, 
  Users,
  ArrowUpRight,
  ZapOff,
  LineChart,
  ShieldCheck,
  Globe,
  Clock
} from "lucide-react";
import { glowEffects } from "@/lib/gradients";

export default function Benefits() {
  const benefits = [
    {
      icon: <Rocket className="text-gradient-purple-blue" size={28} />,
      bgClass: "bg-gradient-to-br from-[#3D2A55]/10 to-[#0B6EFD]/10",
      borderClass: "border-t border-l border-[#3D2A55]/30",
      title: "Optimization",
      description: "Continuous campaign optimization using AI-powered algorithms to maximize performance and ROI."
    },
    {
      icon: <Maximize2 className="text-gradient-orange-purple" size={28} />,
      bgClass: "bg-gradient-to-br from-[#FF6B2B]/10 to-[#7928CA]/10",
      borderClass: "border-t border-l border-[#FF6B2B]/30",
      title: "Scale",
      description: "Ability to scale campaigns across multiple channels and markets without sacrificing performance."
    },
    {
      icon: <Tag className="text-gradient-orange-blue" size={28} />,
      bgClass: "bg-gradient-to-br from-[#FF6B2B]/10 to-[#0B6EFD]/10",
      borderClass: "border-t border-l border-[#FF6B2B]/30",
      title: "Pricing",
      description: "Transparent pricing models with flexible options to meet your business needs and budget."
    },
    {
      icon: <Headphones className="text-gradient-purple-blue" size={28} />,
      bgClass: "bg-gradient-to-br from-[#7928CA]/10 to-[#0B6EFD]/10",
      borderClass: "border-t border-l border-[#7928CA]/30",
      title: "Support 24/7",
      description: "Dedicated support team available around the clock to ensure your campaigns run smoothly."
    },
    {
      icon: <RefreshCw className="text-gradient-orange-purple" size={28} />,
      bgClass: "bg-gradient-to-br from-[#FF6B2B]/10 to-[#7928CA]/10",
      borderClass: "border-t border-l border-[#FF6B2B]/30",
      title: "Centralized Investments",
      description: "Manage all your advertising investments from a single platform for better visibility and control."
    },
    {
      icon: <Users className="text-gradient-purple-blue" size={28} />,
      bgClass: "bg-gradient-to-br from-[#3D2A55]/10 to-[#0B6EFD]/10",
      borderClass: "border-t border-l border-[#3D2A55]/30",
      title: "Large Audiences",
      description: "Access to extensive audience networks across digital channels for maximum reach and impact."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="benefits" className="py-24 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <span className="inline-block mb-3 px-4 py-1 bg-[#3D2A55] rounded-full text-sm font-medium text-[#3B8EFD]">
            Why Choose Us
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-white">Our Key Benefits</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We deliver exceptional results through our unique combination of technology, expertise, and personalized service.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-[#222222] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              {/* Custom gradient background and border */}
              <div className={`absolute inset-0 ${benefit.bgClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className={`absolute inset-0 rounded-2xl ${benefit.borderClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Top right corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#222222] to-transparent z-0"></div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="text-gray-600" size={16} />
              </div>
              
              {/* Icon with gradient glow */}
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 rounded-xl relative flex items-center justify-center">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#222222] to-[#1A1A1A] group-hover:from-[rgba(61,42,85,0.2)] group-hover:to-transparent transition-all duration-300"></div>
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    {benefit.icon}
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm bg-gradient-to-br from-[#3D2A55]/30 to-[#0B6EFD]/20"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-poppins font-semibold text-xl mb-3 text-white group-hover:bg-gradient-to-r group-hover:from-[#FF6B2B] group-hover:to-[#0B6EFD] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{benefit.title}</h3>
                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* CSS for text gradients added to global index.css instead */}
    </section>
  );
}
