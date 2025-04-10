import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { 
  SiAmazon, 
  SiSpotify, 
  SiAirbnb, 
  SiSlack, 
  SiUber 
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa6";

export default function Partners() {
  const partners = [
    { icon: <SiAmazon size={40} />, name: "Amazon" },
    { icon: <FaMicrosoft size={40} />, name: "Microsoft" },
    { icon: <SiSpotify size={40} />, name: "Spotify" },
    { icon: <SiAirbnb size={40} />, name: "Airbnb" },
    { icon: <SiSlack size={40} />, name: "Slack" },
    { icon: <SiUber size={40} />, name: "Uber" }
  ];

  return (
    <section className="py-12 bg-[#121212]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2 className="text-lg font-medium text-gray-400">Trusted by leading brands worldwide</h2>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          {partners.map((partner, index) => (
            <div key={index} className="w-24 h-12 flex items-center justify-center">
              <span className="text-gray-500">{partner.icon}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
