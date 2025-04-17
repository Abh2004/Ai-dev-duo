import { Instagram, Facebook, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute top-1/3 left-1/4 w-[200px] h-[200px] bg-[#0066FF] rounded-full opacity-[0.03] blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-indigo-500 rounded-full opacity-[0.02] blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Contact Header */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
          <div className="text-right">
            <h3 className="text-xl font-medium text-[#0066FF]">Get in touch</h3>
          </div>
        </motion.div>
        
        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Location card with premium styling */}
            <div className="bg-[#080813] border border-[#1A1A30] rounded-lg p-6 mb-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0066FF] rounded-full opacity-[0.03] blur-[50px] group-hover:opacity-[0.08] transition-opacity duration-500"></div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-[#0A0A15] flex items-center justify-center mr-5 border border-[#1a1a2a]">
                  <MapPin className="h-6 w-6 text-[#0066FF]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-3">Visit Our Office</h4>
                  <p className="text-[#999] leading-relaxed">
                    221 JMD Megapolis, Sohna Road<br />
                    Highway, Sector 48 Gurugram,<br />
                    Haryana India, 122011
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Email card */}
              <div className="bg-[#080813] border border-[#1A1A30] rounded-lg p-6 relative overflow-hidden group">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#0A0A15] flex items-center justify-center mr-4 border border-[#1a1a2a]">
                    <Mail className="h-5 w-5 text-[#0066FF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Email Us</h4>
                    <a href="mailto:contact@aidevduo.com" className="text-[#999] hover:text-[#0066FF] transition-colors">
                      contact@aidevduo.com
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Phone card */}
              <div className="bg-[#080813] border border-[#1A1A30] rounded-lg p-6 relative overflow-hidden group">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#0A0A15] flex items-center justify-center mr-4 border border-[#1a1a2a]">
                    <Phone className="h-5 w-5 text-[#0066FF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Call Us</h4>
                    <a href="tel:+919899500873" className="text-[#999] hover:text-[#0066FF] transition-colors">
                      +91 989 950 0873
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="bg-[#080813] border border-[#1A1A30] rounded-lg p-6 mb-10">
              <h4 className="text-white font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[#0A0A15] flex items-center justify-center border border-[#1a1a2a] text-white"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "#0066FF",
                    borderColor: "#0066FF" 
                  }}
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>
                
                <motion.a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[#0A0A15] flex items-center justify-center border border-[#1a1a2a] text-white"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "#0066FF",
                    borderColor: "#0066FF" 
                  }}
                >
                  <Facebook className="h-5 w-5" />
                </motion.a>
                
                <motion.a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[#0A0A15] flex items-center justify-center border border-[#1a1a2a] text-white"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "#0066FF",
                    borderColor: "#0066FF" 
                  }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
      
      {/* Stylized "Map" Section - A premium stylized alternative to a real map */}
      <div className="container mx-auto px-4 mt-20">
        <motion.div 
          className="bg-[#050510] border border-[#1A1A30] rounded-xl p-8 overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 opacity-30">
            <svg width="100%" height="100%" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Grid pattern */}
              <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0L0 0L0 40" stroke="#1A1A30" strokeWidth="0.5" fill="none" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Stylized roads */}
              <path d="M100,150 C200,130 300,180 400,150 C500,120 600,170 700,140" 
                    stroke="#1A1A30" strokeWidth="5" strokeLinecap="round" fill="none" />
              <path d="M50,100 C150,80 250,120 350,90 C450,60 550,110 650,80 C750,50 850,110 950,70" 
                    stroke="#141425" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M50,200 C150,180 250,220 350,190 C450,160 550,210 650,180 C750,150 850,200 950,170" 
                    stroke="#141425" strokeWidth="2" strokeLinecap="round" fill="none" />
                    
              {/* Decorative elements */}
              <circle cx="400" cy="150" r="8" fill="#0066FF" fillOpacity="0.8" />
              <circle cx="400" cy="150" r="20" stroke="#0066FF" strokeWidth="1" fill="none" />
              <circle cx="400" cy="150" r="35" stroke="#0066FF" strokeWidth="1" fillOpacity="0.1" fill="none" strokeDasharray="2 4" />
            </svg>
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Global Presence</h3>
              <p className="text-[#888] max-w-md mb-6">
                Strategically located in Sector 48, Gurugram - a thriving tech hub in the National Capital Region, 
                we're positioned to serve clients across India and globally.
              </p>
              
              <div className="flex items-start space-x-6">
                <div className="bg-[#080813] px-4 py-3 rounded-lg border border-[#1A1A30]">
                  <p className="text-sm text-[#888] font-medium">Headquarters</p>
                  <p className="text-white">Gurugram, India</p>
                </div>
                
                <div className="bg-[#080813] px-4 py-3 rounded-lg border border-[#1A1A30]">
                  <p className="text-sm text-[#888] font-medium">Time Zone</p>
                  <p className="text-white">GMT +5:30</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 md:mt-0">
              <motion.a
                href="https://maps.google.com/?q=Sector+48,+Gurugram,+Haryana,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#0066FF] text-white font-medium rounded-lg"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 0 20px rgba(0, 102, 255, 0.3)" 
                }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="h-5 w-5 mr-2" />
                View on Google Maps
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
