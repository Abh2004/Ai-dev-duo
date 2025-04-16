import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

function NavigationItem({ 
  href, 
  active, 
  children 
}: { 
  href: string, 
  active: boolean, 
  children: React.ReactNode 
}) {
  return (
    <div className="relative group">
      <Link href={href}>
        <a className={cn(
          "transition-colors duration-300 font-medium",
          active ? "text-white" : "text-[#AAAAAA] hover:text-white"
        )}>
          {children}
        </a>
      </Link>
      <div className={cn(
        "absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#0066FF] rounded-full",
        active ? "opacity-100" : "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      )}></div>
    </div>
  );
}

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Get current section from path or hash
  const getCurrentSection = () => {
    if (location === "/") return "home";
    
    // Handle hash navigation
    const hash = window.location.hash.replace("#", "");
    return hash || "home";
  };

  const currentSection = getCurrentSection();

  return (
    <header className={cn(
      "fixed w-full bg-black/90 backdrop-blur-sm z-50 transition-all duration-300",
      scrolled ? "py-2" : "py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#0066FF] rounded flex items-center justify-center shadow-[0_0_15px_rgba(0,102,255,0.5),0_0_30px_rgba(0,102,255,0.3)]">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-white font-bold text-xl">Troibits</span>
          </a>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavigationItem href="/" active={currentSection === "home"}>
            Home
          </NavigationItem>
          <NavigationItem href="#services" active={currentSection === "services"}>
            Services
          </NavigationItem>
          <NavigationItem href="#work" active={currentSection === "work"}>
            Work
          </NavigationItem>
          <NavigationItem href="#company" active={currentSection === "company"}>
            Company
          </NavigationItem>
          <NavigationItem href="#contact" active={currentSection === "contact"}>
            Contact
          </NavigationItem>
        </nav>
        
        {/* CTA Button */}
        <Link href="#contact">
          <Button className="hidden md:block bg-[#0066FF] hover:bg-blue-700 text-white" size="default">
            Let's Chat
          </Button>
        </Link>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <Menu />
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden bg-[#222222] transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 py-3 space-y-3">
          <Link href="/">
            <a className="block text-white font-medium py-2">Home</a>
          </Link>
          <Link href="#services">
            <a className="block text-[#AAAAAA] hover:text-white py-2">Services</a>
          </Link>
          <Link href="#work">
            <a className="block text-[#AAAAAA] hover:text-white py-2">Work</a>
          </Link>
          <Link href="#company">
            <a className="block text-[#AAAAAA] hover:text-white py-2">Company</a>
          </Link>
          <Link href="#contact">
            <a className="block text-[#AAAAAA] hover:text-white py-2">Contact</a>
          </Link>
          
          <Link href="#contact">
            <a className="block bg-[#0066FF] text-white font-medium py-2 px-4 rounded-md text-center mt-4">
              Let's Chat
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
