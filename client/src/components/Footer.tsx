import { Link } from "wouter";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#222222] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#0066FF] rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-white font-bold text-xl">Troibits</span>
            </div>
            <p className="text-[#AAAAAA] mb-6">
              We create innovative digital solutions that transform businesses and 
              deliver exceptional user experiences.
            </p>
            <p className="text-white font-medium">
              123 Tech Park, Innovation Street<br />
              Silicon Valley, CA 94025
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
                  Cloud Services
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
                  API
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
                  GDPR
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
                  Licenses
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#222222] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#AAAAAA] text-sm mb-4 md:mb-0">
            © 2025 Troibits Infotech Private Limited. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-[#AAAAAA] hover:text-white transition-colors duration-300">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
