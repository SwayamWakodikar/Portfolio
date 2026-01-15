import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data/projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Close popup on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (selectedProject) {
        setSelectedProject(null);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selectedProject]);

  const uniqueCategories = [...new Set(projects.map(project => project.category))];
  const categories = ["All", ...uniqueCategories];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="w-full min-h-screen py-10 md:py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 drop-shadow-md">
            My Projects
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills and passion for building innovative solutions
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex p-1 gap-2 mb-12 overflow-x-auto bg-white/5 border border-white/10 rounded-full w-max mx-auto backdrop-blur-md">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-2.5 rounded-full font-medium text-sm transition-colors duration-300 whitespace-nowrap z-10 ${activeCategory === category ? "text-white" : "text-gray-400 hover:text-cyan-300"
                }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeProjectCategory"
                  className="absolute inset-0 bg-cyan-600 rounded-full -z-10 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {category}
            </button>
          ))}
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`group relative backdrop-blur-xs rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02] border border-white/5 bg-white/5 flex flex-col w-full cursor-pointer ${filteredProjects.length === 1 ? 'max-w-2xl' : 'md:w-[45%] lg:w-[30%]'
                  }`}
              >
                {/* Project Image */}
                <div
                  className="relative h-56 w-full overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                </div>

                <div className="relative p-6 flex flex-col flex-1">
                  <div
                    className="flex justify-between items-start mb-4"
                    onClick={() => setSelectedProject(project)}
                  >
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-200 text-xs font-semibold rounded-full border border-cyan-500/30 whitespace-nowrap ml-2">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex gap-3 items-center mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center p-3 bg-[#24292e] text-white rounded-xl hover:bg-[#2f363d] transition-all hover:scale-110 border border-white/10 group/icon"
                      title="View on GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center p-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl hover:scale-110 transition-all shadow-lg shadow-cyan-500/20 group/icon"
                      title="View Live Demo"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 px-4 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all border border-white/10 font-medium text-sm"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Popup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Overlay Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="relative bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] backdrop-blur-xl rounded-2xl border-2 border-cyan-500/20 max-w-6xl w-full max-h-[85vh] pointer-events-auto shadow-[0_0_50px_rgba(34,211,238,0.3)] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 z-10 text-cyan-400 hover:text-red-500 transition-all hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Two Column Layout */}
                <div className="flex flex-col md:flex-row h-full">
                  {/* Left: Project Image */}
                  <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden border-b md:border-b-0 md:border-r border-cyan-500/20">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0a0a0a]/80" />
                  </div>

                  {/* Right: Content */}
                  <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-6 pb-4 border-b border-cyan-500/20">
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                          {selectedProject.title}
                        </h2>
                        <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-sm font-bold rounded-full border border-cyan-400/40 whitespace-nowrap shadow-lg shadow-cyan-500/20">
                          {selectedProject.category}
                        </span>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-cyan-300 mb-3 flex items-center gap-2">
                          <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                          Description
                        </h3>
                        <p className="text-gray-200 leading-relaxed text-base">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                          <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2.5">
                          {selectedProject.tech.map((tech, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 text-cyan-100 text-sm font-semibold rounded-lg border border-cyan-400/30 shadow-md hover:shadow-cyan-500/30 hover:scale-105 transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-6 border-t-2 border-cyan-500/20">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#24292e] to-[#1a1f24] text-white rounded-xl hover:from-[#2f363d] hover:to-[#24292e] transition-all font-semibold text-sm border border-white/20 shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all font-semibold text-sm shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 hover:scale-105"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects
