import { motion } from "framer-motion";
import { Link } from "wouter";

export default function AdvancingExperience() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            Advancing beyond your Experience
          </h2>
          
          <p className="text-[#999] text-lg mb-14 leading-relaxed">
            Smart UI and intuitive design is our forte. We customise it for you after proper ideation, research, planning and create something on a 
            blank, canvas which stands out, is minimal and uniquely crafted for your business.
          </p>
          
          <div className="flex justify-center">
            <Link to="/work">
              <motion.button
                className="px-10 py-3 border border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF]/10 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore More Projects
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}