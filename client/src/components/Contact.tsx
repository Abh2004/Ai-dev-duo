import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#222222]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Chat</h2>
            <p className="text-[#AAAAAA] mb-8">
              Have a project in mind? Fill out the form and our team will get back to you within 24 hours.
            </p>
            
            <ContactForm />
          </div>
          
          <div>
            <div className="rounded-xl overflow-hidden h-64 mb-8">
              {/* Map display */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA0JzI0LjUiTiA3NMKwMDAnMjIuNCJX!5e0!3m2!1sen!2sus!4v1644262618069!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                aria-label="Office location map"
              />
            </div>
            
            <div className="bg-black rounded-xl p-6">
              <h3 className="text-xl font-medium mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-[#0066FF]" />
                  </div>
                  <div className="ml-3">
                    <p className="text-white">123 Tech Park, Innovation Street</p>
                    <p className="text-[#AAAAAA]">Silicon Valley, CA 94025</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 text-[#0066FF]" />
                  </div>
                  <div className="ml-3">
                    <p className="text-white">+1 (555) 123-4567</p>
                    <p className="text-[#AAAAAA]">Mon-Fri, 9am-6pm PST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 text-[#0066FF]" />
                  </div>
                  <div className="ml-3">
                    <p className="text-white">info@troibits.com</p>
                    <p className="text-[#AAAAAA]">We respond within 24 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-sm font-medium text-[#AAAAAA] mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#444444] hover:bg-[#0066FF]/20 transition-colors duration-300">
                    <Instagram className="h-5 w-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#444444] hover:bg-[#0066FF]/20 transition-colors duration-300">
                    <Facebook className="h-5 w-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#444444] hover:bg-[#0066FF]/20 transition-colors duration-300">
                    <Linkedin className="h-5 w-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#444444] hover:bg-[#0066FF]/20 transition-colors duration-300">
                    <Twitter className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
