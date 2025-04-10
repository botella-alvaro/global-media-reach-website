import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Rocket, Maximize2, Tag, Headphones, RefreshCw, Users } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Rocket className="text-[#3B8EFD]" size={24} />,
      title: "Optimization",
      description: "Continuous campaign optimization using AI-powered algorithms to maximize performance and ROI."
    },
    {
      icon: <Maximize2 className="text-[#3B8EFD]" size={24} />,
      title: "Scale",
      description: "Ability to scale campaigns across multiple channels and markets without sacrificing performance."
    },
    {
      icon: <Tag className="text-[#3B8EFD]" size={24} />,
      title: "Pricing",
      description: "Transparent pricing models with flexible options to meet your business needs and budget."
    },
    {
      icon: <Headphones className="text-[#3B8EFD]" size={24} />,
      title: "Support 24/7",
      description: "Dedicated support team available around the clock to ensure your campaigns run smoothly."
    },
    {
      icon: <RefreshCw className="text-[#3B8EFD]" size={24} />,
      title: "Centralized Investments",
      description: "Manage all your advertising investments from a single platform for better visibility and control."
    },
    {
      icon: <Users className="text-[#3B8EFD]" size={24} />,
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
    <section id="benefits" className="py-20 bg-[#1A1A1A]">
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
              className="bg-[#222222] rounded-2xl p-8 border border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
              variants={itemVariants}
            >
              <div className="w-14 h-14 rounded-full bg-[rgba(61,42,85,0.5)] flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-400">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
