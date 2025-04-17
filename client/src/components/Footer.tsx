import { Link } from "wouter";
import { motion } from "framer-motion";

// Social icon component with hover effect
const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <motion.div 
    className="w-9 h-9 rounded-full bg-[#0A0A15] flex items-center justify-center cursor-pointer border border-[#1A1A2A]"
    whileHover={{ 
      scale: 1.1, 
      backgroundColor: "#0066FF",
      borderColor: "#0066FF",
      boxShadow: "0 0 15px rgba(0, 102, 255, 0.3)",
      transition: { duration: 0.2 }
    }}
  >
    {children}
  </motion.div>
);

// Navigation link with animated hover effect
const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }}>
    <Link 
      to={to} 
      className="text-[#777] hover:text-[#0066FF] text-sm transition-all duration-300 relative group"
    >
      {children}
      <motion.span 
        className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#0066FF] group-hover:w-full transition-all duration-300"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
      ></motion.span>
    </Link>
  </motion.div>
);

// Tech link component with enhanced animation
const TechLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <motion.li 
    initial={{ opacity: 0.9, x: 0 }}
    whileHover={{ 
      x: 5,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 15 
      } 
    }}
  >
    <a 
      href={href} 
      className="text-[#999] hover:text-white transition-all duration-300 text-sm flex items-center group"
    >
      <motion.span 
        className="w-0 h-[1px] bg-[#0066FF] mr-0 group-hover:mr-2 group-hover:w-3 transition-all duration-300"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      ></motion.span>
      {children}
    </a>
  </motion.li>
);

export default function Footer() {
  return (
    <footer className="bg-[#030308] relative overflow-hidden">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-[#0066FF] rounded-full opacity-[0.02] blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Company Information */}
          <div className="md:col-span-1">
            <motion.img 
              src="/images/ai-devduo-logo.svg" 
              alt="Ai DevDuo" 
              className="h-10 w-auto mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            
            <p className="text-[#999] text-sm mb-5 max-w-xs">
              We design and develop cutting-edge digital solutions for businesses 
              looking to innovate and transform their digital presence.
            </p>
            
            <div className="flex space-x-3">
              <SocialIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </SocialIcon>
              
              <SocialIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </SocialIcon>
              
              <SocialIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </SocialIcon>
              
              <SocialIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </SocialIcon>
            </div>
          </div>
          
          {/* Quick Links - Mobile, Web, Tech, Company */}
          <div>
            <h4 className="text-white text-base font-medium mb-4 relative">
              Mobile
              <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-[#0066FF]"></span>
            </h4>
            <ul className="space-y-2">
              <TechLink href="#">Android Apps</TechLink>
              <TechLink href="#">iPhone Apps</TechLink>
              <TechLink href="#">Hybrid Apps</TechLink>
              <TechLink href="#">Swift</TechLink>
              <TechLink href="#">Kotlin</TechLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-base font-medium mb-4 relative">
              Web
              <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-[#0066FF]"></span>
            </h4>
            <ul className="space-y-2">
              <TechLink href="#">React Js</TechLink>
              <TechLink href="#">Angular Js</TechLink>
              <TechLink href="#">Vue Js</TechLink>
              <TechLink href="#">Java</TechLink>
              <TechLink href="#">WordPress</TechLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-base font-medium mb-4 relative">
              Company
              <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-[#0066FF]"></span>
            </h4>
            <ul className="space-y-2">
              <TechLink href="#">About Us</TechLink>
              <TechLink href="#">Our Work</TechLink>
              <TechLink href="#">Services</TechLink>
              <TechLink href="#">Careers</TechLink>
              <TechLink href="#">Contact</TechLink>
            </ul>
          </div>
        </div>
        
        {/* Contact info section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-[#060610] rounded-lg p-6">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[#0A0A15] flex items-center justify-center mr-4 border border-[#1a1a2a]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium">Office Location</h4>
              <p className="text-[#888] text-xs">Sector 48, Gurgaon, Haryana 122001</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[#0A0A15] flex items-center justify-center mr-4 border border-[#1a1a2a]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium">Email Us</h4>
              <p className="text-[#888] text-xs">info@aidevduo.com</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[#0A0A15] flex items-center justify-center mr-4 border border-[#1a1a2a]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium">Call Us</h4>
              <p className="text-[#888] text-xs">+91 1234567890</p>
            </div>
          </div>
        </div>
        
        {/* Newsletter & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#111] pt-8">
          <div className="mb-6 md:mb-0 flex flex-col md:flex-row items-center md:items-start gap-4">
            <p className="text-[#666] text-sm">
              © 2025 Ai DevDuo Technologies. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/company">Company</NavLink>
            <NavLink to="/work">Work</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }}>
              <a href="#" className="text-[#777] hover:text-[#0066FF] text-sm transition-all duration-300 relative group">
                Privacy Policy
                <motion.span 
                  className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#0066FF] group-hover:w-full transition-all duration-300"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                ></motion.span>
              </a>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }}>
              <a href="#" className="text-[#777] hover:text-[#0066FF] text-sm transition-all duration-300 relative group">
                Terms of Service
                <motion.span 
                  className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#0066FF] group-hover:w-full transition-all duration-300"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                ></motion.span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
