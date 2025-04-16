import { serviceData } from "@/lib/utils";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import AnimatedText from "./AnimatedText";

export default function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-center mb-8">
            <div className="w-1/3"></div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-1/3 flex items-center justify-center"
            >
              <span className="text-white font-medium mr-2">Our Services</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-white"
              >
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </motion.div>
            <div className="w-1/3"></div>
          </div>
        
          <AnimatedText 
            text="What we do?" 
            tagName="h2"
            className="text-3xl md:text-5xl font-bold mb-4 text-center mx-auto"
            duration={0.05}
          />
          
          <motion.p 
            className="text-[#AAAAAA] max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Your search for end-to-end technology partner ends here. We are 
            Top-Rated on Clutch, Google and the trusted choice of Fortune 500 Companies.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                hoverDetails={service.hoverDetails}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
