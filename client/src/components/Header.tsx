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
        <span className={cn(
          "transition-colors duration-300 font-medium cursor-pointer",
          active ? "text-[#0066FF]" : "text-white hover:text-[#0066FF]"
        )}>
          {children}
        </span>
      </Link>
      {active && (
        <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#0066FF] rounded-full"></div>
      )}
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

  // This section is now handled directly in the NavigationItem components
  // by checking the location against the route path

  return (
    <header className={cn(
      "fixed w-full bg-black/90 backdrop-blur-sm z-50 transition-all duration-300",
      scrolled ? "py-2" : "py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="flex items-center space-x-2 cursor-pointer">
            <div className="w-10 h-10 bg-[#0066FF] rounded flex items-center justify-center shadow-[0_0_15px_rgba(0,102,255,0.5),0_0_30px_rgba(0,102,255,0.3)]">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-white font-bold text-xl">Ai DevDuo</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavigationItem href="/" active={location === "/"}>
            Home
          </NavigationItem>
          <NavigationItem href="/services" active={location === "/services"}>
            Services
          </NavigationItem>
          <NavigationItem href="/work" active={location === "/work"}>
            Work
          </NavigationItem>
          <NavigationItem href="/company" active={location === "/company"}>
            Company
          </NavigationItem>
          <NavigationItem href="/contact" active={location === "/contact"}>
            Contact
          </NavigationItem>
        </nav>
        
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
        "md:hidden bg-black transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 py-3 space-y-3">
          <Link href="/">
            <span className={cn(
              "block font-medium py-2 cursor-pointer",
              location === "/" ? "text-[#0066FF]" : "text-white hover:text-[#0066FF]"
            )}>Home</span>
          </Link>
          <Link href="/services">
            <span className={cn(
              "block font-medium py-2 cursor-pointer",
              location === "/services" ? "text-[#0066FF]" : "text-white hover:text-[#0066FF]"
            )}>Services</span>
          </Link>
          <Link href="/work">
            <span className={cn(
              "block font-medium py-2 cursor-pointer",
              location === "/work" ? "text-[#0066FF]" : "text-white hover:text-[#0066FF]"
            )}>Work</span>
          </Link>
          <Link href="/company">
            <span className={cn(
              "block font-medium py-2 cursor-pointer",
              location === "/company" ? "text-[#0066FF]" : "text-white hover:text-[#0066FF]"
            )}>Company</span>
          </Link>
          <Link href="/contact">
            <span className={cn(
              "block font-medium py-2 cursor-pointer",
              location === "/contact" ? "text-[#0066FF]" : "text-white hover:text-[#0066FF]"
            )}>Contact</span>
          </Link>
          

        </div>
      </div>
    </header>
  );
}
