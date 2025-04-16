import { Instagram, Facebook, Linkedin, ChevronDown } from "lucide-react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Contact Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
          <div className="text-right">
            <h3 className="text-xl font-medium">Get in touch</h3>
          </div>
        </div>
        
        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Info */}
          <div>
            <div className="mb-12">
              <h4 className="text-[#777] mb-4">Address</h4>
              <p className="text-white">
                221 JMD Megapolis, Sohna Road<br />
                Highway, Sector 48 Gurugram,<br />
                Haryana India, 122011
              </p>
            </div>
            
            <div className="mb-12">
              <h4 className="text-[#777] mb-4">Social Media</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#0066FF]">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-[#0066FF]">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-[#0066FF]">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-[#777] mb-4">Email</h4>
              <a href="mailto:contact@troibits.com" className="text-white hover:text-[#0066FF]">
                contact@troibits.com
              </a>
            </div>
            
            <div className="mb-16">
              <h4 className="text-[#777] mb-4">Phone</h4>
              <a href="tel:+919899500873" className="text-white hover:text-[#0066FF]">
                +91 989 950 0873
              </a>
            </div>
            
            <motion.div 
              className="flex items-center cursor-pointer"
              whileHover={{ y: 3 }}
              transition={{ type: "spring", stiffness: 400 }}
              onClick={() => {
                const mapElement = document.getElementById('map');
                if (mapElement) {
                  mapElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="mr-2 text-white">We are on the map</span>
              <ChevronDown className="h-5 w-5 text-white" />
            </motion.div>
          </div>
          
          {/* Right side - Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div id="map" className="w-full h-[400px] mt-16 grayscale">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14038.408522982756!2d77.0468247871582!3d28.426057199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229ad52bf227%3A0x4c0a877c50d45dcd!2sSector%2048%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1671062447882!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: "contrast(1.2)" }} 
          allowFullScreen={false} 
          loading="lazy"
          aria-label="Office location map"
        />
      </div>
    </section>
  );
}
