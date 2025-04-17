import { Link } from "wouter";
import { motion } from "framer-motion";
import ContactMap from "./ContactMap";

// Footer icons
const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <motion.div 
    className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center cursor-pointer"
    whileHover={{ 
      scale: 1.1, 
      backgroundColor: "#0066FF",
      transition: { duration: 0.2 }
    }}
  >
    {children}
  </motion.div>
);

// Footer link component with hover animation
const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <motion.li
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <a 
      href={href} 
      className="text-[#888] hover:text-[#0066FF] transition-colors duration-300 flex items-center gap-2 group"
    >
      <span className="w-0 h-[1px] bg-[#0066FF] group-hover:w-3 transition-all duration-300"></span>
      {children}
    </a>
  </motion.li>
);

// Column header component
const ColumnHeader = ({ title }: { title: string }) => (
  <div className="relative mb-6">
    <h4 className="text-white font-medium text-lg">
      {title}
    </h4>
    <div className="absolute -bottom-2 left-0 w-6 h-[2px] bg-[#0066FF]"></div>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#050508] pt-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial background */}
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-[#0066FF] rounded-full opacity-[0.03] blur-[100px]"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Map section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold mb-2">Visit Our Office</h3>
            <p className="text-[#888] max-w-xl mx-auto">
              Our headquarters is located in the heart of the tech district
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <ContactMap />
          </div>
        </div>
      
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16 border-t border-[#111] pt-16">
          {/* Mobile Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <ColumnHeader title="Mobile" />
            <ul className="space-y-3">
              <FooterLink href="#">Android Apps</FooterLink>
              <FooterLink href="#">iPhone Apps</FooterLink>
              <FooterLink href="#">Hybrid Apps</FooterLink>
              <FooterLink href="#">Swift</FooterLink>
              <FooterLink href="#">Kotlin</FooterLink>
            </ul>
          </motion.div>
          
          {/* Web Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <ColumnHeader title="Web" />
            <ul className="space-y-3">
              <FooterLink href="#">React Js</FooterLink>
              <FooterLink href="#">Angular Js</FooterLink>
              <FooterLink href="#">Vue Js</FooterLink>
              <FooterLink href="#">Java</FooterLink>
              <FooterLink href="#">WordPress</FooterLink>
            </ul>
          </motion.div>
          
          {/* Game Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <ColumnHeader title="Game" />
            <ul className="space-y-3">
              <FooterLink href="#">Unity 3D</FooterLink>
              <FooterLink href="#">Unreal Engine</FooterLink>
              <FooterLink href="#">Augmented Reality</FooterLink>
              <FooterLink href="#">Virtual Reality</FooterLink>
              <FooterLink href="#">Metaverse</FooterLink>
            </ul>
          </motion.div>
          
          {/* IOT Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <ColumnHeader title="IOT" />
            <ul className="space-y-3">
              <FooterLink href="#">Automation</FooterLink>
              <FooterLink href="#">Connected Hardware</FooterLink>
              <FooterLink href="#">AI and ML</FooterLink>
              <FooterLink href="#">Robotics</FooterLink>
              <FooterLink href="#">Drone Tech</FooterLink>
            </ul>
          </motion.div>
          
          {/* Quicklinks Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <ColumnHeader title="Quicklinks" />
            <ul className="space-y-3">
              <FooterLink href="#">Services</FooterLink>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Our Work</FooterLink>
              <FooterLink href="#">Company Policy</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </motion.div>
        </div>

        {/* Contact & newsletter section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 border-t border-[#111] pt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ColumnHeader title="Contact Us" />
            <div className="space-y-4 text-[#888]">
              <p className="flex items-start gap-3">
                <span className="text-[#0066FF]">📍</span>
                <span>Sector 48, Gurgaon, Haryana 122001</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#0066FF]">📧</span>
                <span>info@aidevduo.com</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#0066FF]">📱</span>
                <span>+91 1234567890</span>
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ColumnHeader title="Stay Updated" />
            <p className="text-[#888] mb-4">Subscribe to our newsletter for the latest updates and insights</p>
            
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-[#111] border border-[#222] text-[#888] px-4 py-3 rounded-l-md focus:outline-none focus:border-[#0066FF] w-full"
              />
              <motion.button
                className="bg-[#0066FF] text-white px-6 py-3 rounded-r-md"
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
        
        {/* Bottom bar with copyright and links */}
        <div className="border-t border-[#111] py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <motion.img 
                src="/images/ai-devduo-logo.svg" 
                alt="Ai DevDuo" 
                className="h-10 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </div>
            
            <p className="text-[#666] text-sm">
              © 2025 Ai DevDuo Technologies. All rights reserved.
            </p>
            
            <div className="flex space-x-3">
              <SocialIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </SocialIcon>
              
              <SocialIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </SocialIcon>
              
              <SocialIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </SocialIcon>
              
              <SocialIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </SocialIcon>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-center gap-x-6 gap-y-2 mt-6">
            <Link to="/" className="text-[#666] hover:text-[#0066FF] text-sm transition-colors duration-300">
              Home
            </Link>
            <Link to="/services" className="text-[#666] hover:text-[#0066FF] text-sm transition-colors duration-300">
              Services
            </Link>
            <Link to="/company" className="text-[#666] hover:text-[#0066FF] text-sm transition-colors duration-300">
              Company
            </Link>
            <Link to="/work" className="text-[#666] hover:text-[#0066FF] text-sm transition-colors duration-300">
              Work
            </Link>
            <Link to="/contact" className="text-[#666] hover:text-[#0066FF] text-sm transition-colors duration-300">
              Contact
            </Link>
            <a href="#" className="text-[#666] hover:text-[#0066FF] text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-[#666] hover:text-[#0066FF] text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
