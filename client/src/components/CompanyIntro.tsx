import { motion } from "framer-motion";
import { Link } from "wouter";

// Service items that will redirect to the services page
const serviceItems = [
  "Startup Acceleration",
  "Mobile App Development",
  "Website Development",
  "Enterprise App Development",
  "Product Design and Branding", 
  "Next Gen Technology",
  "Growth Marketing",
  "Software Maintenance"
];

export default function CompanyIntro() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column - Company Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              We are <br />
              <span className="text-white">A </span>
              <span className="text-[#0066FF]">Creative</span>
              <span className="text-white"> Company</span>
            </h2>
            
            <h3 className="text-xl text-[#999] mb-8">
              Delivering interactive experiences and creating new standards
            </h3>
            
            <div className="text-[#999] leading-relaxed space-y-4">
              <p>
                Troibits Infotech is a leading app development company that specializes in creating intuitive, 
                user-friendly smart apps to transform businesses. We stay ahead of the curve by keeping up-to-date 
                with the latest trends and technologies, such as Internet of Things, business automation, 
                content management system (CMS), customer relationship management (CRM), point of sale 
                systems (POS), search engine optimization (SEO), and marketing strategy.
              </p>
              
              <p>
                We take a collaborative and transparent approach to every project, working closely with our clients to 
                understand their goals and challenges. With our attention to detail, professionalism, and 
                commitment to excellence, we have earned a reputation as a trusted partner for businesses of 
                all sizes. Let Troibits Infotech help you unlock the full potential of your business with our forte in 
                design and app development, along with our comprehensive suite of services. Contact us today 
                to learn more about how we can help you achieve your digital transformation goals.
              </p>
            </div>
            
            <div className="mt-8">
              <Link to="/contact">
                <motion.button
                  className="px-6 py-3 border border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF]/10 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Let's Chat
                </motion.button>
              </Link>
            </div>
          </motion.div>
          
          {/* Right column - Services */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl text-[#0066FF] font-semibold mb-8">
              What We Do
            </h2>
            
            <div className="space-y-4">
              {serviceItems.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="border-b border-[#333] pb-4"
                >
                  <Link to={`/services`} className="text-lg hover:text-[#0066FF] transition-colors duration-300">
                    {service}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}