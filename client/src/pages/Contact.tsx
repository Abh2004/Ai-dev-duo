import ContactForm from "@/components/ContactForm";
import ThemeCube from "@/components/ThemeCube";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="pt-24 relative">
      {/* Background Elements */}
      <ThemeCube className="absolute top-40 -left-20" opacity={0.03} />
      <ThemeCube className="absolute top-60 right-10" opacity={0.02} />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-[#AAAAAA] text-lg">
            Reach out to us to discuss your project or to learn more about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#111111] p-8 rounded-lg flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#0066FF]/10 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-5 h-5 text-[#0066FF]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-[#AAAAAA]">+1 (555) 123-4567</p>
          </div>
          
          <div className="bg-[#111111] p-8 rounded-lg flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#0066FF]/10 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-5 h-5 text-[#0066FF]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-[#AAAAAA]">info@troibits.com</p>
          </div>
          
          <div className="bg-[#111111] p-8 rounded-lg flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#0066FF]/10 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-[#0066FF]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-[#AAAAAA]">123 Tech Plaza, San Francisco, CA</p>
          </div>
        </div>
        
        <ContactForm />
      </div>
    </main>
  );
}