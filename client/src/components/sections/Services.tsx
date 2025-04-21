import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { 
  LineChart, 
  Code2, 
  MonitorSmartphone, 
  CheckCircle, 
  ArrowRight,
  Activity,
  Bot,
  Target,
  Cpu,
  Layers,
  Shuffle
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <LineChart size={36} className="text-white" />,
      badge: "STRATEGY",
      title: "Media Strategy, Buying & Advisory",
      description: "Our team of media experts develops custom strategies to optimize your advertising budget and reach the right audiences at the right time.",
      features: [
        "Audience-driven targeting",
        "Cross-channel optimization",
        "Performance analysis"
      ],
      highlights: [
        {
          icon: <Target size={20} />,
          text: "Precision targeting"
        },
        {
          icon: <Activity size={20} />,
          text: "Performance optimization"
        },
        {
          icon: <Shuffle size={20} />,
          text: "Cross-channel approach"
        }
      ]
    },
    {
      icon: <Cpu size={36} className="text-white" />,
      badge: "TECH",
      title: "Proprietary Technology (AdBid)",
      description: "Our cutting-edge AdBid platform leverages AI and machine learning to optimize campaign performance and maximize ROI.",
      features: [
        "Automated bid management",
        "Real-time analytics",
        "AI-powered recommendations"
      ],
      highlights: [
        {
          icon: <Bot size={20} />,
          text: "AI-driven optimization"
        },
        {
          icon: <Activity size={20} />,
          text: "Real-time performance"
        },
        {
          icon: <Code2 size={20} />,
          text: "Proprietary algorithms"
        }
      ]
    },
    {
      icon: <MonitorSmartphone size={36} className="text-white" />,
      badge: "DOOH",
      title: "DOOH for Global Brands",
      description: "Leverage Digital Out-of-Home advertising to create impactful experiences that connect with your audience in physical spaces.",
      features: [
        "Programmatic DOOH buying",
        "Location-based targeting",
        "Cross-channel integration"
      ],
      highlights: [
        {
          icon: <Layers size={20} />,
          text: "Programmatic buying"
        },
        {
          icon: <Target size={20} />,
          text: "Location-based targeting"
        },
        {
          icon: <Shuffle size={20} />,
          text: "Cross-channel integration"
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-28 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#8E2DE2]/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[#F05A28]/5 blur-3xl"></div>
      
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.075)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <span className="inline-block mb-3 px-4 py-1 bg-[#3D2A55] rounded-full text-sm font-medium text-[#F05A28]">
            Our Expertise
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-5xl mb-4 text-white bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] bg-clip-text text-transparent">What We Do</h2>
          <p className="text-gray-200 max-w-2xl mx-auto font-medium">
            Our full-stack approach combines strategic expertise, proprietary technology, and creative excellence to deliver exceptional results.
          </p>
        </motion.div>

        {/* Service Cards - 3 Column Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
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
    badge: string;
    title: string;
    description: string;
    features: string[];
    highlights: {
      icon: React.ReactNode;
      text: string;
    }[];
  };
}

function ServiceCard({ service }: ServiceProps) {
  return (
    <motion.div 
      className="h-full"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
      }}
    >
      <div className="relative bg-[#121212] border border-gray-800 rounded-xl overflow-hidden h-full group transform-gpu transition-all duration-300 hover:shadow-[0_0_30px_rgba(142,45,226,0.15)]">
        {/* Badge Header */}
        <div className="w-full h-1.5 bg-gradient-to-r from-[#F05A28] to-[#8E2DE2]"></div>
        
        {/* Card Content */}
        <div className="p-8">
          {/* Service Label */}
          <div className="flex items-center mb-6">
            <div className="px-3 py-1 bg-[#1E1E1E] border border-gray-700 rounded-md">
              <span className="text-xs font-bold tracking-wider text-[#F05A28]">{service.badge}</span>
            </div>
          </div>
          
          {/* Icon & Title Section */}
          <div className="flex items-start mb-6">
            <div className="w-16 h-16 rounded-xl bg-[#1E1E1E] border border-gray-800 flex items-center justify-center mr-5 overflow-hidden group-hover:border-[#8E2DE2]/30 transition-colors duration-300 relative">
              {/* Icon */}
              <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </div>
              
              {/* Glow effect on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-[#F05A28]/10 to-[#8E2DE2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.3, 0] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white leading-tight mb-2 group-hover:bg-gradient-to-r group-hover:from-[#F05A28] group-hover:to-[#8E2DE2] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{service.title}</h3>
              <p className="text-white text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
          
          {/* Feature List */}
          <div className="mb-8">
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <CheckCircle className="text-[#F05A28] mr-3 flex-shrink-0" size={18} />
                  <span className="text-white font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Highlights Section */}
          <div className="border-t border-gray-800 pt-6 mt-6">
            <div className="grid grid-cols-3 gap-3">
              {service.highlights.map((highlight, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group/item">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 bg-[#1E1E1E] border border-gray-800 group-hover/item:border-[#F05A28]/30 transition-all duration-300">
                    <div className="text-[#F05A28] group-hover/item:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                  </div>
                  <span className="text-white text-xs font-medium">{highlight.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Learn More Link */}
          <div className="mt-6">
            <a 
              href="#" 
              className="inline-flex items-center font-medium text-[#8E2DE2] hover:text-[#F05A28] transition-colors duration-300 group-hover:underline"
            >
              Learn more <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" size={16} />
            </a>
          </div>
        </div>
        
        {/* Gradient corners for decorative effect */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-transparent group-hover:border-[#F05A28]/30 rounded-tl-lg transition-all duration-300"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-transparent group-hover:border-[#8E2DE2]/30 rounded-br-lg transition-all duration-300"></div>
      </div>
    </motion.div>
  );
}