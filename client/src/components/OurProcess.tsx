import { motion } from "framer-motion";

// Process steps
const processSteps = [
  { name: "IP Protection", highlight: false },
  { name: "Consultant And Research", highlight: false },
  { name: "Ideation And Strategic Planning", highlight: false },
  { name: "Product Design", highlight: false },
  { name: "Agile Development", highlight: false },
  { name: "Testing and Quality Assurance", highlight: true },
  { name: "Product Launch", highlight: false },
  { name: "Growth and Maintenance", highlight: false }
];

// Digital Head SVG component
const DigitalHead = () => (
  <svg width="300" height="400" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M150 100C150 100 60 140 80 220C100 300 150 320 150 320" stroke="#0066FF" strokeWidth="1" strokeLinecap="round" strokeDasharray="5 5"/>
    <path d="M150 100C150 100 240 140 220 220C200 300 150 320 150 320" stroke="#0066FF" strokeWidth="1" strokeLinecap="round" strokeDasharray="5 5"/>
    <path d="M120 130C120 130 80 170 90 210C100 250 130 270 130 270" stroke="#0066FF" strokeWidth="1" strokeLinecap="round" strokeDasharray="5 5"/>
    <path d="M180 130C180 130 220 170 210 210C200 250 170 270 170 270" stroke="#0066FF" strokeWidth="1" strokeLinecap="round" strokeDasharray="5 5"/>
    <path d="M100 170C100 170 70 200 80 230C90 260 110 280 110 280" stroke="#0066FF" strokeWidth="1" strokeLinecap="round" strokeDasharray="5 5"/>
    <path d="M200 170C200 170 230 200 220 230C210 260 190 280 190 280" stroke="#0066FF" strokeWidth="1" strokeLinecap="round" strokeDasharray="5 5"/>
    
    {/* Face outline */}
    <path d="M150 50C100 50 80 100 80 150C80 220 110 280 150 300C190 280 220 220 220 150C220 100 200 50 150 50Z" stroke="white" strokeWidth="1" strokeOpacity="0.3" fill="black" fillOpacity="0"/>
    
    {/* Circuit nodes */}
    <circle cx="150" cy="100" r="3" fill="#0066FF"/>
    <circle cx="120" cy="130" r="3" fill="#0066FF"/>
    <circle cx="180" cy="130" r="3" fill="#0066FF"/>
    <circle cx="100" cy="170" r="3" fill="#0066FF"/>
    <circle cx="200" cy="170" r="3" fill="#0066FF"/>
    <circle cx="110" cy="220" r="3" fill="#0066FF"/>
    <circle cx="190" cy="220" r="3" fill="#0066FF"/>
    <circle cx="130" cy="270" r="3" fill="#0066FF"/>
    <circle cx="170" cy="270" r="3" fill="#0066FF"/>
    <circle cx="150" cy="300" r="3" fill="#0066FF"/>
  </svg>
);

export default function OurProcess() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Process
          </h2>
          
          <p className="text-[#999] max-w-3xl mx-auto">
            From idea to product launch, growth and software maintenance. We are 
            determined to provide IT support through complete life cycle of your business.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Digital Head Illustration */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <DigitalHead />
          </motion.div>
          
          {/* Process Timeline */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 left-[10px] w-[2px] bg-gradient-to-b from-[#0066FF] to-[#0066FF]/30"></div>
            
            {/* Timeline Steps */}
            <div className="space-y-6 relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="pl-8 relative"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Blue dot on the timeline */}
                  <div className="absolute left-0 top-[9px] w-5 h-5 rounded-full bg-[#0066FF] z-10"></div>
                  
                  {/* Step text */}
                  <div className={`text-lg ${step.highlight ? 'text-[#0066FF]' : 'text-white'}`}>
                    {step.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}