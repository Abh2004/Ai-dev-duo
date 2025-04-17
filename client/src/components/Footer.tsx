import { Link } from "wouter";
import { motion } from "framer-motion";

// Modern Footer Social Icon Component
const SocialIcon = ({ children, color = "#0066FF" }: { children: React.ReactNode, color?: string }) => (
  <motion.div 
    className="w-11 h-11 rounded-full bg-[#0c0c15] flex items-center justify-center cursor-pointer border border-[#1a1a2a]"
    whileHover={{ 
      scale: 1.1, 
      backgroundColor: color,
      borderColor: color,
      boxShadow: `0 0 15px ${color}50`,
      transition: { duration: 0.2 }
    }}
  >
    {children}
  </motion.div>
);

// Technology link component with enhanced hover effect
const TechLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <motion.li
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
  >
    <a 
      href={href} 
      className="text-[#999] hover:text-white transition-colors duration-300 flex items-center gap-1.5 group"
    >
      <span className="w-0 h-[1px] bg-[#0066FF] group-hover:w-2 transition-all duration-300"></span>
      {children}
    </a>
  </motion.li>
);

// Modern column header with gradient underline
const ColumnHeader = ({ title }: { title: string }) => (
  <div className="relative mb-6">
    <h4 className="text-white font-medium text-xl">
      {title}
    </h4>
    <div className="absolute -bottom-2 left-0 w-12 h-[2px] bg-gradient-to-r from-[#0066FF] to-[#0066FF]/20"></div>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#030308] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radial background glow */}
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-[#0066FF] rounded-full opacity-[0.02] blur-[100px]"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Subtle particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.05,
              filter: 'blur(1px)'
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + Math.random() * 10,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      {/* Footer main content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        {/* Top footer section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-20">
          {/* Company info column - spans 2 columns */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.img 
                src="/images/ai-devduo-logo.svg" 
                alt="Ai DevDuo" 
                className="h-12 w-auto mb-6"
                whileHover={{ scale: 1.02 }}
              />
              
              <p className="text-[#999] mb-6 leading-relaxed">
                We design and develop cutting-edge digital solutions for businesses 
                looking to innovate and transform their digital presence. Our team combines 
                technical expertise with creative excellence.
              </p>
              
              <div className="flex space-x-4">
                <SocialIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </SocialIcon>
                
                <SocialIcon color="#1DA1F2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </SocialIcon>
                
                <SocialIcon color="#0077B5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </SocialIcon>
                
                <SocialIcon color="#E4405F">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </SocialIcon>
              </div>
            </motion.div>
          </div>
          
          {/* Mobile Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ColumnHeader title="Mobile" />
            <ul className="space-y-3">
              <TechLink href="#">Android Apps</TechLink>
              <TechLink href="#">iPhone Apps</TechLink>
              <TechLink href="#">Hybrid Apps</TechLink>
              <TechLink href="#">Swift</TechLink>
              <TechLink href="#">Kotlin</TechLink>
            </ul>
          </motion.div>
          
          {/* Web Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ColumnHeader title="Web" />
            <ul className="space-y-3">
              <TechLink href="#">React Js</TechLink>
              <TechLink href="#">Angular Js</TechLink>
              <TechLink href="#">Vue Js</TechLink>
              <TechLink href="#">Java</TechLink>
              <TechLink href="#">WordPress</TechLink>
            </ul>
          </motion.div>
          
          {/* Combined Game & IOT Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ColumnHeader title="Technologies" />
            <ul className="space-y-3">
              <TechLink href="#">Unity 3D</TechLink>
              <TechLink href="#">AR/VR</TechLink>
              <TechLink href="#">AI and ML</TechLink>
              <TechLink href="#">Robotics</TechLink>
              <TechLink href="#">IoT Solutions</TechLink>
            </ul>
          </motion.div>
          
          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ColumnHeader title="Company" />
            <ul className="space-y-3">
              <TechLink href="#">About Us</TechLink>
              <TechLink href="#">Our Work</TechLink>
              <TechLink href="#">Services</TechLink>
              <TechLink href="#">Careers</TechLink>
              <TechLink href="#contact">Contact</TechLink>
            </ul>
          </motion.div>
        </div>
        
        {/* Contact info section */}
        <div className="border-t border-[#111] py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-full bg-[#0A0A15] flex items-center justify-center mr-4 border border-[#1a1a2a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Office Location</h4>
                <p className="text-[#888] text-sm">Sector 48, Gurgaon, Haryana 122001</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-10 h-10 rounded-full bg-[#0A0A15] flex items-center justify-center mr-4 border border-[#1a1a2a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Email Us</h4>
                <p className="text-[#888] text-sm">info@aidevduo.com</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-10 h-10 rounded-full bg-[#0A0A15] flex items-center justify-center mr-4 border border-[#1a1a2a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Call Us</h4>
                <p className="text-[#888] text-sm">+91 1234567890</p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Newsletter section with premium styling */}
        <div className="border-t border-[#111] py-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="mb-6 md:mb-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-white text-2xl font-semibold mb-2">Stay Connected</h3>
              <p className="text-[#888] max-w-md">Subscribe to our newsletter for the latest insights and updates</p>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#0A0A15] border border-[#1a1a2a] text-white px-4 py-3 rounded-l-md focus:outline-none focus:border-[#0066FF] w-full md:w-64"
                />
                <motion.button
                  className="bg-[#0066FF] text-white px-6 py-3 rounded-r-md whitespace-nowrap"
                  whileHover={{ 
                    backgroundColor: "#0055DD",
                    boxShadow: "0 0 15px rgba(0, 102, 255, 0.5)" 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom bar with copyright and navigation links */}
        <div className="border-t border-[#111] py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-[#666] text-sm mb-4 md:mb-0">
              © 2025 Ai DevDuo Technologies. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/" className="text-[#777] hover:text-[#0066FF] text-sm transition-colors duration-300">
                Home
              </Link>
              <Link to="/services" className="text-[#777] hover:text-[#0066FF] text-sm transition-colors duration-300">
                Services
              </Link>
              <Link to="/company" className="text-[#777] hover:text-[#0066FF] text-sm transition-colors duration-300">
                Company
              </Link>
              <Link to="/work" className="text-[#777] hover:text-[#0066FF] text-sm transition-colors duration-300">
                Work
              </Link>
              <Link to="/contact" className="text-[#777] hover:text-[#0066FF] text-sm transition-colors duration-300">
                Contact
              </Link>
              <a href="#" className="text-[#777] hover:text-[#0066FF] text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-[#777] hover:text-[#0066FF] text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
