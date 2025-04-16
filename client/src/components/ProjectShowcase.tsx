import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { showcaseProjects } from '@/lib/utils';
import { FaAndroid, FaApple } from 'react-icons/fa';
import { BiGlobe } from 'react-icons/bi';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(showcaseProjects[0]);

  // Platform icons map
  const platformIcons = {
    Web: <BiGlobe className="text-white text-lg" />,
    Android: <FaAndroid className="text-white text-lg" />,
    iOS: <FaApple className="text-white text-lg" />
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest Works
          </h2>
          <p className="text-[#AAAAAA] max-w-3xl mx-auto">
            Check out some of our recent projects that showcase our expertise across various platforms and industries.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12">
          {/* Left Side - Project Info */}
          <motion.div 
            className="lg:w-1/3 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-sm text-[#0066FF] mb-2">{activeProject.category}</div>
                <h3 className="text-3xl font-bold mb-3">{activeProject.title}</h3>
                <p className="text-[#AAAAAA] mb-6">{activeProject.description}</p>
                
                <div className="flex space-x-4 mb-8">
                  {activeProject.platforms.map(platform => (
                    <div key={platform} className="w-8 h-8 flex items-center justify-center">
                      {platformIcons[platform as keyof typeof platformIcons]}
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button className="w-10 h-10 rounded-full bg-[#0066FF] flex items-center justify-center">
                    <Play className="h-5 w-5 text-white" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <FaApple className="h-5 w-5 text-black" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation arrows */}
            <div className="flex space-x-4 mt-8">
              <button 
                className="w-10 h-10 border border-[#444] flex items-center justify-center rounded-full"
                onClick={() => {
                  const currentIndex = showcaseProjects.findIndex(project => project.id === activeProject.id);
                  const prevIndex = (currentIndex - 1 + showcaseProjects.length) % showcaseProjects.length;
                  setActiveProject(showcaseProjects[prevIndex]);
                }}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                className="w-10 h-10 border border-[#444] flex items-center justify-center rounded-full"
                onClick={() => {
                  const currentIndex = showcaseProjects.findIndex(project => project.id === activeProject.id);
                  const nextIndex = (currentIndex + 1) % showcaseProjects.length;
                  setActiveProject(showcaseProjects[nextIndex]);
                }}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
          
          {/* Right Side - App Display */}
          <motion.div 
            className="lg:w-2/3 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Computer frame */}
              <div className="relative mx-auto flex justify-center" style={{ maxWidth: "700px" }}>
                <div className="bg-[#222] rounded-t-xl p-2 border-t border-l border-r border-[#444] w-full">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="border-2 border-[#444] rounded-b-xl overflow-hidden relative w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full aspect-[16/10] bg-cover bg-center"
                      style={{ backgroundImage: `url('${activeProject.image}')` }}
                    />
                  </AnimatePresence>
                </div>
                <div className="h-4 w-20 bg-[#333] mx-auto rounded-b"></div>
              </div>
              
              {/* Project selection sidebar */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/20 backdrop-blur-sm p-2 rounded-l-lg hidden lg:block">
                <div className="flex flex-col space-y-6 items-end pr-2">
                  <div className="text-lg font-medium text-[#0066FF] text-right mb-2 pb-1 border-b-2 border-[#0066FF]">App Showcase</div>
                  {showcaseProjects.map(project => (
                    <div 
                      key={project.id}
                      className={`relative cursor-pointer group transition-all duration-300 ${
                        activeProject.id === project.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                      }`}
                      onClick={() => setActiveProject(project)}
                    >
                      {activeProject.id === project.id && (
                        <div className="absolute right-0 -left-3 w-1 h-full bg-[#0066FF]" />
                      )}
                      <p className="text-right pr-4">{project.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}