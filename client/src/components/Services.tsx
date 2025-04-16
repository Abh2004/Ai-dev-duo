import { serviceData } from "@/lib/utils";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import AnimatedText from "./AnimatedText";

export default function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">

        
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
