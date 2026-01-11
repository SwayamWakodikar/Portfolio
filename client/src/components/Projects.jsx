import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data/projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const uniqueCategories = [...new Set(projects.map(project => project.category))];
  const categories = ["All", ...uniqueCategories];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="w-screen min-h-screen py-20 px-4 bg-linear-to-b bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold bg-linear-to-r text-indigo-300 bg-clip-text mb-6">
            My Projects
          </h2>
          <p className="text-indigo-100/80 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills and passion for building innovative solutions
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex p-1 gap-2 mb-12 overflow-x-auto bg-white/5 border border-white/10 rounded-full w-max mx-auto backdrop-blur-md">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-2.5 rounded-full font-medium text-sm transition-colors duration-300 whitespace-nowrap z-10 ${activeCategory === category ? "text-white" : "text-indigo-200/70 hover:text-white"
                }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeProjectCategory"
                  className="absolute inset-0 bg-indigo-600 rounded-full -z-10 shadow-[0_0_20px_rgba(79,70,229,0.5)]"
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
                className={`group relative backdrop-blur-xs rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02] border border-white/5 bg-white/5 flex flex-col w-full ${filteredProjects.length === 1 ? 'max-w-2xl' : 'md:w-[45%] lg:w-[30%]'
                  }`}
              >
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
                </div>

                <div className="relative p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-200 text-xs font-semibold rounded-full border border-indigo-500/30">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-indigo-100/80 mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/5 text-indigo-200 text-sm font-medium rounded-lg border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 mt-auto border-t border-white/10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-[#24292e] text-white rounded-xl hover:bg-[#2f363d] transition-colors font-medium text-sm border border-white/10"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium text-sm shadow-lg shadow-indigo-500/20"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
