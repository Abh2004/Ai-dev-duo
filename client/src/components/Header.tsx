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
          "transition-colors duration-300 font-display text-sm uppercase tracking-wider font-medium cursor-pointer",
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

  // Close mobile menu when user clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('header')) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header className={cn(
      "fixed w-full bg-black/90 backdrop-blur-sm z-50 transition-all duration-300",
      scrolled ? "py-2 shadow-md shadow-black/20" : "py-3 md:py-5"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="flex items-center cursor-pointer">
            <div className="flex items-center">
              <div className="bg-[#0066FF] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mr-2 relative" 
                   style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
                <div className="bg-black w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center absolute" 
                     style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
                  <span className="text-white text-sm sm:text-lg">⌂</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <span className="text-white font-display font-bold text-lg sm:text-xl tracking-tight">Ai</span>
                  <span className="text-white font-display font-bold text-lg sm:text-xl tracking-tight">Dev</span>
                  <span className="text-[#0066FF] font-display font-bold text-lg sm:text-xl tracking-tight">Duo</span>
                </div>
                <span className="text-[#777] text-[7px] sm:text-[8px] uppercase tracking-widest">Innovative Solutions</span>
              </div>
            </div>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-8 items-center">
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
          className="md:hidden text-white hover:bg-[#0066FF]/10 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            toggleMobileMenu();
          }}
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </Button>
      </div>
      
      {/* Mobile Navigation with improved animation and styling */}
      <div 
        className={cn(
          "md:hidden bg-black/95 backdrop-blur-md border-t border-gray-900 transition-all duration-300 overflow-hidden z-50",
          mobileMenuOpen ? "max-h-[300px] opacity-100 shadow-xl shadow-black/30" : "max-h-0 opacity-0"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-4 py-3 space-y-1">
          <Link href="/">
            <span className={cn(
              "block font-display text-sm uppercase tracking-wider font-medium py-3 cursor-pointer transition-colors",
              location === "/" ? "text-[#0066FF]" : "text-white hover:text-[#0066FF]"
            )}>Home</span>
          </Link>
          <Link href="/services">
            <span className={cn(
              "block font-display text-sm uppercase tracking-wider font-medium py-3 cursor-pointer transition-colors",
              location === "/services" ? "text-[#0066FF]" : "text-white hover:text-[#0066FF]"
            )}>Services</span>
          </Link>
          <Link href="/work">
            <span className={cn(
              "block font-display text-sm uppercase tracking-wider font-medium py-3 cursor-pointer transition-colors",
              location === "/work" ? "text-[#0066FF]" : "text-white hover:text-[#0066FF]"
            )}>Work</span>
          </Link>
          <Link href="/company">
            <span className={cn(
              "block font-display text-sm uppercase tracking-wider font-medium py-3 cursor-pointer transition-colors",
              location === "/company" ? "text-[#0066FF]" : "text-white hover:text-[#0066FF]"
            )}>Company</span>
          </Link>
          <Link href="/contact">
            <span className={cn(
              "block font-display text-sm uppercase tracking-wider font-medium py-3 cursor-pointer transition-colors",
              location === "/contact" ? "text-[#0066FF]" : "text-white hover:text-[#0066FF]"
            )}>Contact</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
