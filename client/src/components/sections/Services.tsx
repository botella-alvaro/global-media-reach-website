import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { ChartLine, Code, Monitor, CheckCircle, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <ChartLine size={28} className="text-[#3B8EFD]" />,
      title: "Media Strategy, Buying & Advisory",
      description: "Our team of media experts develops custom strategies to optimize your advertising budget and reach the right audiences at the right time.",
      features: [
        "Audience-driven targeting",
        "Cross-channel optimization",
        "Performance analysis"
      ]
    },
    {
      icon: <Code size={28} className="text-[#3B8EFD]" />,
      title: "Proprietary Technology (AdBid)",
      description: "Our cutting-edge AdBid platform leverages AI and machine learning to optimize campaign performance and maximize ROI.",
      features: [
        "Automated bid management",
        "Real-time analytics",
        "AI-powered recommendations"
      ]
    },
    {
      icon: <Monitor size={28} className="text-[#3B8EFD]" />,
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
    <section id="services" className="py-20 bg-[#1A1A1A]">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
      className="bg-[#222222] rounded-2xl p-8 border border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
      variants={cardVariants}
    >
      <div className="w-16 h-16 rounded-full bg-[rgba(61,42,85,0.5)] flex items-center justify-center mb-6">
        {service.icon}
      </div>
      <h3 className="font-poppins font-semibold text-xl mb-4 text-white">{service.title}</h3>
      <p className="text-gray-400 mb-6">
        {service.description}
      </p>
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <CheckCircle className="text-[#FF8B4B] mt-1 mr-2" size={16} />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#" className="inline-flex items-center font-medium text-[#0B6EFD] hover:text-[#3B8EFD]">
        Learn more <ArrowRight className="ml-2" size={16} />
      </a>
    </motion.div>
  );
}
