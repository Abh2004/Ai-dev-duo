import { motion } from "framer-motion";
import { Shield, TrendingUp, Award } from "lucide-react";

const values = [
  {
    icon: <Shield className="w-10 h-10 text-[#0066FF]" />,
    title: "Right IT Consultants",
    description: "We focus on a broad range of activities, like competitive analysis, corporate strategy, operations management; our core value is to tell you what is right for your business."
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-[#0066FF]" />,
    title: "Growing Together",
    description: "We partner with like-minded businesses to help improve and drive efficiency in business processes, operations and believe in growing together."
  },
  {
    icon: <Award className="w-10 h-10 text-[#0066FF]" />,
    title: "With Top-Notch Apps",
    description: "Our best in class mobile and web apps can transform your customer experience and service, apart from increasing your product sales and business visibility."
  }
];

export default function WhatWeStandFor() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What we stand for
          </h2>
          
          <p className="text-[#999] max-w-3xl mx-auto">
            Troibits focuses on high quality customer experience, satisfaction and honesty. We have the 
            confidence in our ability to digitally transform our customer's lives and business.
          </p>
        </motion.div>
        
        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 rounded-full border border-[#333] flex items-center justify-center mb-6">
                {value.icon}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">
                {value.title}
              </h3>
              
              <p className="text-[#999] leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}