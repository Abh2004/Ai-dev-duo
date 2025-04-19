import {
  Instagram,
  Facebook,
  Linkedin,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Glow effect */}
        <div className="absolute top-1/3 left-1/4 w-[200px] h-[200px] bg-[#0066FF] rounded-full opacity-[0.03] blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-indigo-500 rounded-full opacity-[0.02] blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Contact Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-0">
            Contact Us
          </h2>
          <div className="text-left md:text-right">
            <h3 className="text-lg sm:text-xl font-medium text-[#0066FF]">
              Get in touch
            </h3>
          </div>
        </motion.div>

        {/* Main content: Global Presence on left, Contact Form on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left side - Global Presence and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            {/* Global Presence Card */}
            <div className="bg-[#050510] border border-[#1A1A30] rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-30 pointer-events-none">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 500 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                >
                  {/* Grid pattern */}
                  <pattern
                    id="grid"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M40 0L0 0L0 40"
                      stroke="#1A1A30"
                      strokeWidth="0.5"
                      fill="none"
                    />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Stylized roads */}
                  <path
                    d="M50,150 C100,130 150,170 200,150 C250,130 300,170 350,140"
                    stroke="#1A1A30"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M25,100 C75,80 125,110 175,90 C225,70 275,100 325,80"
                    stroke="#141425"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M25,200 C75,180 125,210 175,190 C225,170 275,210 325,180"
                    stroke="#141425"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Location marker */}
                  <circle
                    cx="200"
                    cy="150"
                    r="5"
                    fill="#0066FF"
                    fillOpacity="0.8"
                  />
                  <circle
                    cx="200"
                    cy="150"
                    r="12"
                    stroke="#0066FF"
                    strokeWidth="1"
                    fill="none"
                  />
                  <circle
                    cx="200"
                    cy="150"
                    r="20"
                    stroke="#0066FF"
                    strokeWidth="1"
                    fillOpacity="0.1"
                    fill="none"
                    strokeDasharray="2 3"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  Our Global Presence
                </h3>
                <p className="text-[#888] mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
                  Based within the IIT Kharagpur innovation ecosystem, we’re
                  strategically positioned to deliver cutting‑edge solutions for
                  clients nationwide and internationally.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-3 sm:space-y-0 mb-4 sm:mb-6">
                  <div className="bg-[#080813] px-3 py-2 rounded-lg border border-[#1A1A30] w-full sm:w-auto">
                    <p className="text-xs text-[#888] font-medium">
                      Headquarters
                    </p>
                    <p className="text-white text-xs sm:text-sm">
                      IIT Kharagpur, West Bengal, India
                    </p>
                  </div>

                  <div className="bg-[#080813] px-3 py-2 rounded-lg border border-[#1A1A30] w-full sm:w-auto">
                    <p className="text-xs text-[#888] font-medium">Time Zone</p>
                    <p className="text-white text-xs sm:text-sm">GMT +5:30</p>
                  </div>
                </div>

                <motion.a
                  href="https://maps.app.goo.gl/YsGPTmibye235XnP7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 sm:px-4 py-2 bg-[#0066FF] text-white text-xs sm:text-sm font-medium rounded-lg"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 15px rgba(0, 102, 255, 0.3)",
                  }}
                >
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  View on Google Maps
                </motion.a>
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              {/* Email card */}
              <div className="bg-[#080813] border border-[#1A1A30] rounded-lg p-4 sm:p-6 relative overflow-hidden group">
                <div className="flex items-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#0A0A15] flex items-center justify-center mr-3 sm:mr-4 border border-[#1a1a2a]">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#0066FF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                      Email Us
                    </h4>
                    <a
                      href="mailto:aidevduo@gmail.com"
                      className="text-[#999] hover:text-[#0066FF] transition-colors text-xs sm:text-sm"
                    >
                      aidevduo@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone card */}
              <div className="bg-[#080813] border border-[#1A1A30] rounded-lg p-4 sm:p-6 relative overflow-hidden group">
                <div className="flex items-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#0A0A15] flex items-center justify-center mr-3 sm:mr-4 border border-[#1a1a2a]">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-[#0066FF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                      Call Us
                    </h4>
                    <a
                      href="tel:+919516867468"
                      className="text-[#999] hover:text-[#0066FF] transition-colors text-xs sm:text-sm"
                    >
                      +91 951 686 7468
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-[#080813] border border-[#1A1A30] rounded-lg p-4 sm:p-6">
              <h4 className="text-white font-medium mb-3 sm:mb-4 text-xs sm:text-sm">
                Follow Us
              </h4>
              <div className="flex space-x-3 sm:space-x-4">
                <motion.a
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0A0A15] flex items-center justify-center border border-[#1a1a2a] text-white"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#0066FF",
                    borderColor: "#0066FF",
                  }}
                >
                  <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
                </motion.a>

                <motion.a
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0A0A15] flex items-center justify-center border border-[#1a1a2a] text-white"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#0066FF",
                    borderColor: "#0066FF",
                  }}
                >
                  <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
                </motion.a>

                <motion.a
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0A0A15] flex items-center justify-center border border-[#1a1a2a] text-white"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#0066FF",
                    borderColor: "#0066FF",
                  }}
                >
                  <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
