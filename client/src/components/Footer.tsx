import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#111] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Mobile Column */}
          <div>
            <h4 className="text-white font-medium mb-6">Mobile</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  Android Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  iPhone Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  Hybrid Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  Swift
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  Kotlin
                </a>
              </li>
            </ul>
          </div>
          
          {/* Web Column */}
          <div>
            <h4 className="text-white font-medium mb-6">Web</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  React Js
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  Angular Js
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  Vue Js
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  Java
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  WordPress
                </a>
              </li>
            </ul>
          </div>
          
          {/* Game Column */}
          <div>
            <h4 className="text-white font-medium mb-6">Game</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  Unity 3D
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  Unreal Engine
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  Augmented Reality
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  Virtual Reality
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  Metaverse
                </a>
              </li>
            </ul>
          </div>
          
          {/* IOT Column */}
          <div>
            <h4 className="text-white font-medium mb-6">IOT</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  Connected Hardware
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  AI and ML
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  Robotics
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  Drone Tech
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quicklinks Column */}
          <div>
            <h4 className="text-white font-medium mb-6">Quicklinks</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777] hover:text-white transition-colors duration-300">
                  Company Policy
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#777] hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="h-8 w-8 bg-transparent border border-white flex items-center justify-center mr-2">
              <span className="text-white font-bold text-xs">A</span>
            </div>
            <span className="text-white font-medium text-sm">Ai DevDuo</span>
          </div>
          
          <p className="text-[#777] text-sm mb-4 md:mb-0">
            2025 Ai DevDuo Technologies
          </p>
          
          <div className="flex space-x-6">
            <Link to="/" className="text-[#777] hover:text-white transition-colors duration-300">
              Home
            </Link>
            <Link to="/services" className="text-[#777] hover:text-white transition-colors duration-300">
              Services
            </Link>
            <Link to="/company" className="text-[#777] hover:text-white transition-colors duration-300">
              Company
            </Link>
            <Link to="/work" className="text-[#777] hover:text-white transition-colors duration-300">
              Work
            </Link>
            <Link to="/contact" className="text-[#777] hover:text-white transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
