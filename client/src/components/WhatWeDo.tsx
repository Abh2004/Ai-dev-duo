import { motion } from "framer-motion";

// SVG Icons for services
const StartupIcon = () => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M52.5 52.5H17.5V17.5H35V14H17.5C15.5625 14 14 15.5625 14 17.5V52.5C14 54.4375 15.5625 56 17.5 56H52.5C54.4375 56 56 54.4375 56 52.5V35H52.5V52.5ZM42 14V17.5H49.0438L28.8225 37.7213L31.2788 40.1775L51.5 19.9562V27H55V14H42Z" fill="white"/>
  </svg>
);

const MobileAppIcon = () => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M45.5 14H24.5C22.0125 14 20 16.0125 20 18.5V51.5C20 53.9875 22.0125 56 24.5 56H45.5C47.9875 56 50 53.9875 50 51.5V18.5C50 16.0125 47.9875 14 45.5 14ZM24.5 51.5V18.5H45.5V51.5H24.5Z" fill="white"/>
    <path d="M35 49C36.6569 49 38 47.6569 38 46C38 44.3431 36.6569 43 35 43C33.3431 43 32 44.3431 32 46C32 47.6569 33.3431 49 35 49Z" fill="white"/>
  </svg>
);

const WebsiteIcon = () => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M56 18.5H14V48.5H56V18.5Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M21 56H49" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M35 48.5V56" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M14 42H56" stroke="white" strokeWidth="2.5" strokeMiterlimit="10"/>
  </svg>
);

const EnterpriseIcon = () => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M56 48.5H14V18.5H56V48.5ZM21 56H49M35 48.5V56" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
    <circle cx="52" cy="24" r="4" fill="#0066FF"/>
  </svg>
);

const ProductDesignIcon = () => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 14V46H26V56L36 46H56V14H14Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M33 27V33" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M39 21L27 33" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"/>
  </svg>
);

const NextGenIcon = () => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M45.5 56H24.5C22.0125 56 20 53.9875 20 51.5V18.5C20 16.0125 22.0125 14 24.5 14H45.5C47.9875 14 50 16.0125 50 18.5V51.5C50 53.9875 47.9875 56 45.5 56Z" stroke="white" strokeWidth="2.5" strokeMiterlimit="10"/>
    <path d="M35 52C36.6569 52 38 50.6569 38 49C38 47.3431 36.6569 46 35 46C33.3431 46 32 47.3431 32 49C32 50.6569 33.3431 52 35 52Z" fill="white"/>
    <path d="M35 35C40.5228 35 45 30.5228 45 25C45 19.4772 40.5228 15 35 15C29.4772 15 25 19.4772 25 25C25 30.5228 29.4772 35 35 35Z" stroke="#0066FF" strokeWidth="2.5" strokeMiterlimit="10"/>
    <path d="M35 30C37.7614 30 40 27.7614 40 25C40 22.2386 37.7614 20 35 20C32.2386 20 30 22.2386 30 25C30 27.7614 32.2386 30 35 30Z" fill="#0066FF"/>
  </svg>
);

const GrowthIcon = () => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 14V50H56" stroke="white" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M28 43V29" stroke="#0066FF" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M37 43V24" stroke="#0066FF" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M46 43V35" stroke="#0066FF" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round"/>
  </svg>
);

const MaintenanceIcon = () => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M56 48.5H14V18.5H56V48.5ZM21 56H49M35 48.5V56" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
    <circle cx="49" cy="30" r="4" fill="#0066FF"/>
    <path d="M24 35C25.6569 35 27 33.6569 27 32C27 30.3431 25.6569 29 24 29C22.3431 29 21 30.3431 21 32C21 33.6569 22.3431 35 24 35Z" fill="white"/>
    <path d="M28 38C29.6569 38 31 36.6569 31 35C31 33.3431 29.6569 32 28 32C26.3431 32 25 33.3431 25 35C25 36.6569 26.3431 38 28 38Z" fill="white"/>
  </svg>
);

// Define service data
const services = [
  {
    icon: <StartupIcon />,
    title: "StartUp Acceleration"
  },
  {
    icon: <MobileAppIcon />,
    title: "Mobile App Development"
  },
  {
    icon: <WebsiteIcon />,
    title: "Website Development"
  },
  {
    icon: <EnterpriseIcon />,
    title: "Enterprise App Development"
  },
  {
    icon: <ProductDesignIcon />,
    title: "Product Design and Branding"
  },
  {
    icon: <NextGenIcon />,
    title: "Next Gen Technology"
  },
  {
    icon: <GrowthIcon />,
    title: "Growth Marketing"
  },
  {
    icon: <MaintenanceIcon />,
    title: "Maintenance and support"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function WhatWeDo() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What we do?
          </motion.h2>
          
          <motion.p
            className="text-[#999] text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Your search for end-to-end technology partner ends here. We are<br />
            Top-Rated on Clutch, Google and the trusted choice of Fortune 500 Companies.
          </motion.p>
        </div>
        
        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#111] p-6 relative group cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Blue accent line on the left side of each card */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0066FF]"></div>
              
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}