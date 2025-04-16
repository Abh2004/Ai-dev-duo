import ServiceDetails from "@/components/ServiceDetails";
import ThemeCube from "@/components/ThemeCube";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <main className="pt-24 relative bg-black">
      {/* Background Elements */}
      <ThemeCube className="absolute top-40 -left-20" opacity={0.03} />
      <ThemeCube className="absolute top-60 right-10" opacity={0.02} />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white">Your End-to-End </span>
            <span className="text-[#0066FF]">Technology Partner</span>
          </motion.h1>
          
          <motion.p 
            className="text-[#999] text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We are your extended team who keeps digitizing your business and moves the software development 
            and marketing process quickly to exponentially grow your business by introducing latest innovations, 
            reducing management time and increasing efficiency.
          </motion.p>
        </div>
      </div>
      
      {/* Interactive Service Details Section */}
      <ServiceDetails />
    </main>
  );
}