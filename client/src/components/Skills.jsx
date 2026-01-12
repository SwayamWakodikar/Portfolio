import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Skills = () => {
    const [activeTab, setActiveTab] = useState("Frontend");

    const skills = {
        Frontend: [
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
            { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg", invert: true },
        ],
        Backend: [
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
            { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
        ],
        Languages: [
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        ],
        Tools: [
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
        ],
    };

    return (
        <div className="select-none py-10 md:py-20 px-4 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 md:mb-10 text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-white inline-block drop-shadow-md">
                        Technical Arsenal
                    </h3>
                    <p className="text-cyan-200/60 mt-3 text-sm font-medium">
                        My weapons of choice for building digital universes.
                    </p>
                </div>

                <div className="flex p-1 gap-2 mb-8 md:mb-12 overflow-x-auto bg-white/5 border border-white/10 rounded-full w-full md:w-max mx-auto backdrop-blur-md no-scrollbar">
                    {Object.keys(skills).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative px-4 py-2 md:px-6 md:py-2.5 rounded-full font-medium text-xs md:text-sm transition-colors duration-300 whitespace-nowrap z-10 flex-1 md:flex-none ${activeTab === tab ? "text-white" : "text-gray-400 hover:text-cyan-300"
                                }`}
                        >
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-cyan-600 rounded-full -z-10 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Premium Skills Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 w-full min-h-[120px]"
                >
                    <AnimatePresence mode="popLayout">
                        {skills[activeTab].map((skill, index) => (
                            <motion.div
                                layout
                                key={`${activeTab}-${skill.name}`}
                                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="group relative flex flex-col items-center justify-center gap-3 md:gap-4 p-4 md:p-8 
                    bg-[#0a0a0a]/40 border border-white/5 rounded-2xl 
                    backdrop-blur-xl hover:bg-cyan-900/10 hover:border-cyan-500/30  
                    transition-all duration-300 shadow-lg overflow-hidden "
                            >
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10 p-3 md:p-4 rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:ring-cyan-500/50 transition-all duration-300">
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className={`h-10 w-10 md:h-14 md:w-14 drop-shadow-lg ${skill.invert ? "brightness-0 invert" : ""}`}
                                    />
                                </div>
                                <span className="relative z-10 text-gray-400 font-bold text-base md:text-lg group-hover:text-cyan-200 transition-colors">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
