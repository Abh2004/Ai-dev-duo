import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ExternalLink, ChevronRight } from "lucide-react";
import { useState } from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imgSrc: string;
  links: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
  skills: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: "abhishek",
    name: "Abhishek Singh Maurya",
    role: "Founder & CEO",
    bio: "Visionary technologist with over 10 years of experience in software development and AI. Abhishek founded Ai DevDuo with a mission to create cutting-edge digital solutions for businesses around the globe.",
    imgSrc: "/images/team/abhishek.jpg", // This is a placeholder, you'll need to add actual photos
    links: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
      email: "abhishek@aidevduo.com"
    },
    skills: ["AI & Machine Learning", "Enterprise Architecture", "Product Strategy", "Cloud Solutions"]
  },
  {
    id: "vanshika",
    name: "Vanshika Marwaha",
    role: "Chief Operating Officer",
    bio: "Strategic business leader with expertise in scaling operations and optimizing business processes. Vanshika oversees the day-to-day operational functions and ensures seamless delivery across all projects.",
    imgSrc: "/images/team/vanshika.jpg", // This is a placeholder, you'll need to add actual photos
    links: {
      linkedin: "https://linkedin.com/",
      twitter: "https://twitter.com/",
      email: "vanshika@aidevduo.com"
    },
    skills: ["Operations Management", "Business Development", "Client Relations", "Team Leadership"]
  },
  {
    id: "prince",
    name: "Prince Kumar",
    role: "Co-Founder & CTO",
    bio: "Technical leader specialized in emerging technologies and software engineering. Prince leads the technical direction of Ai DevDuo, focusing on innovation and technical excellence.",
    imgSrc: "/images/team/prince.jpg", // This is a placeholder, you'll need to add actual photos
    links: {
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      twitter: "https://twitter.com/",
      email: "prince@aidevduo.com"
    },
    skills: ["Software Architecture", "Mobile Development", "Web Technologies", "DevOps"]
  }
];

export default function OurTeam() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const cardVariants = {
    default: { scale: 1 },
    hover: { scale: 1.02 }
  };

  const iconVariants = {
    default: { y: 0 },
    hover: { y: -3 }
  };

  return (
    <section id="team" className="py-24 bg-[#020209] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Glow effects */}
        <motion.div 
          className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-[#0066FF] rounded-full opacity-[0.03] blur-[100px]"
          animate={{ 
            opacity: [0.02, 0.04, 0.02],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-indigo-500 rounded-full opacity-[0.02] blur-[80px]"
          animate={{ 
            opacity: [0.01, 0.03, 0.01],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse", 
            delay: 2 
          }}
        ></motion.div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p 
            className="text-[#0066FF] uppercase tracking-wider mb-2 font-medium text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet the Innovators
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our Team
          </motion.h2>
          <motion.p 
            className="text-[#999] md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our talented team combines creativity with technical expertise to deliver outstanding digital solutions. With diverse skills and backgrounds, we're united by a passion for innovation and excellence.
          </motion.p>
        </div>
        
        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.id}
              className="bg-gradient-to-b from-[#0A0A18] to-[#060612] rounded-xl p-6 border border-[#1A1A30] relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setActiveCard(member.id)}
              onHoverEnd={() => setActiveCard(null)}
            >
              {/* Accent glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0066FF] rounded-full opacity-0 blur-[80px] group-hover:opacity-[0.06] transition-opacity duration-700"></div>
              
              {/* Team member photo */}
              <div className="relative mb-6 overflow-hidden rounded-lg aspect-[4/5]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#111122] to-[#060612] flex items-center justify-center text-3xl font-bold text-[#0066FF]">
                  {member.name.charAt(0)}
                </div>
                {/* Image would go here */}
                <div className="absolute inset-0 bg-[#0A0A18] opacity-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                
                {/* Social links overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/60 backdrop-blur-sm w-full h-full flex items-center justify-center">
                    <div className="flex space-x-3">
                      {member.links.linkedin && (
                        <motion.a 
                          href={member.links.linkedin} 
                          className="w-9 h-9 rounded-full bg-[#0A0A20]/90 flex items-center justify-center text-white"
                          variants={iconVariants}
                          whileHover="hover"
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Linkedin size={18} />
                        </motion.a>
                      )}
                      
                      {member.links.twitter && (
                        <motion.a 
                          href={member.links.twitter} 
                          className="w-9 h-9 rounded-full bg-[#0A0A20]/90 flex items-center justify-center text-white"
                          variants={iconVariants}
                          whileHover="hover"
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Twitter size={18} />
                        </motion.a>
                      )}
                      
                      {member.links.github && (
                        <motion.a 
                          href={member.links.github} 
                          className="w-9 h-9 rounded-full bg-[#0A0A20]/90 flex items-center justify-center text-white"
                          variants={iconVariants}
                          whileHover="hover"
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Github size={18} />
                        </motion.a>
                      )}
                      
                      {member.links.email && (
                        <motion.a 
                          href={`mailto:${member.links.email}`} 
                          className="w-9 h-9 rounded-full bg-[#0A0A20]/90 flex items-center justify-center text-white"
                          variants={iconVariants}
                          whileHover="hover"
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Mail size={18} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Member info */}
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-[#0066FF] mb-3 text-sm">{member.role}</p>
              <p className="text-[#999] text-sm mb-4 line-clamp-3">{member.bio}</p>
              
              {/* Skills */}
              <div className="mb-3">
                <h4 className="text-xs text-[#777] uppercase tracking-wider mb-2">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-[#0A0A20] text-[#999] border border-[#1A1A30]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Join Our Team Section */}
        <motion.div 
          className="bg-gradient-to-r from-[#0A0A18] to-[#06061D] rounded-xl p-8 border border-[#1A1A30] relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0066FF] rounded-full opacity-[0.03] blur-[100px]"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-3">Join Our Growing Team</h3>
              <p className="text-[#999] max-w-xl">
                We're always looking for talented individuals who are passionate about technology and innovation. 
                Join us in our mission to create exceptional digital experiences.
              </p>
            </div>
            
            <motion.a 
              href="/careers"
              className="inline-flex items-center px-6 py-3 bg-[#0066FF] text-white font-medium rounded-lg group"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 0 20px rgba(0, 102, 255, 0.3)" 
              }}
              transition={{ duration: 0.2 }}
            >
              View Open Positions
              <motion.span 
                className="ml-2" 
                animate={{ x: activeCard ? 3 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ChevronRight size={16} />
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}