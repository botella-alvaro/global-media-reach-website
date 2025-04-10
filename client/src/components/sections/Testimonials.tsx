import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Global Media Reach transformed our digital strategy. Their AdBid platform delivered a 45% increase in ROAS while their team provided exceptional strategic guidance.",
      name: "Sarah Johnson",
      position: "Marketing Director, TechCorp"
    },
    {
      quote: "The DOOH campaign strategy developed by Global Media Reach helped us reach new audiences and increased brand awareness by 67% in key markets.",
      name: "Michael Chen",
      position: "CMO, Retail Giant"
    },
    {
      quote: "Their team's expertise and proprietary technology gave us a competitive edge. We saw conversion rates improve by 38% while reducing our overall CPA.",
      name: "Amanda Rodriguez",
      position: "VP Marketing, E-commerce Inc"
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-[#121212] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
      <div className="absolute top-1/4 right-1/4 w-56 h-56 bg-[rgba(11,110,253,0.2)] rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <span className="inline-block mb-3 px-4 py-1 bg-[#3D2A55] rounded-full text-sm font-medium text-[#3B8EFD]">
            Client Success
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4 text-white">What Our Clients Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from some of the brands who have transformed their digital advertising with our solutions.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-[#222222] rounded-2xl p-8 border border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <Quote className="text-3xl text-[#0B6EFD] opacity-40" size={36} />
              </div>
              <p className="text-gray-300 mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden mr-4 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-500" width="28" height="28">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                    <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
