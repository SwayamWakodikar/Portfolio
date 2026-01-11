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
        ],
        Backend: [
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        ],
        Languages: [
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        ],
    };

    return (
        <div className="select-none py-10 px-4 bg-transparent">
            <div className="max-w-7xl mx-auto">
                {/* Skills Section Header */}
                {/* Skills Section Header */}
                <div className="mb-10 text-center">
                    <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent inline-block">
                        Technical Arsenal
                    </h3>
                    <p className="text-indigo-200/60 mt-3 text-sm font-medium">
                        My weapons of choice for building digital universes.
                    </p>
                </div>

                {/* Premium Tabs */}
                <div className="flex p-1 gap-2 mb-12 overflow-x-auto bg-white/5 border border-white/10 rounded-full w-max mx-auto backdrop-blur-md">
                    {Object.keys(skills).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative px-6 py-2.5 rounded-full font-medium text-sm transition-colors duration-300 whitespace-nowrap z-10 ${activeTab === tab ? "text-white" : "text-indigo-200/70 hover:text-white"
                                }`}
                        >
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-indigo-600 rounded-full -z-10 shadow-[0_0_20px_rgba(79,70,229,0.5)]"
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
                    className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full min-h-[120px]"
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
                                className="group relative flex flex-col items-center justify-center gap-4 p-8 
                    bg-[#0a0a0a]/40 border border-white/5 rounded-2xl 
                    backdrop-blur-xl hover:bg-indigo-900/10 hover:border-indigo-500/30 
                    transition-all duration-300 shadow-lg overflow-hidden cursor-pointer"
                            >
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10 p-4 rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:ring-indigo-500/50 transition-all duration-300">
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="h-14 w-14 drop-shadow-lg"
                                    />
                                </div>
                                <span className="relative z-10 text-indigo-100/80 font-bold text-lg group-hover:text-white transition-colors">
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
