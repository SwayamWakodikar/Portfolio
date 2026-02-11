import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Code2, Cpu, Layers, Zap, Brain, Rocket } from "lucide-react";

const Expertise = () => {
    const expertiseAreas = [
        {
            id: 1,
            title: "Full-Stack Development",
            description: "Building end-to-end web applications with modern frameworks and databases. Proficient in React, Node.js, and creating scalable architectures.",
            icon: Code2,
            gradient: "from-blue-500 to-cyan-500",
            skills: ["React", "Node.js", "MongoDB", "PostgreSQL"]
        },
        {
            id: 2,
            title: "Embedded Systems",
            description: "Designing and programming microcontroller-based systems. Experience with STM32, Arduino, and real-time embedded applications.",
            icon: Cpu,
            gradient: "from-purple-500 to-pink-500",
            skills: ["STM32", "Embedded C", "Arduino", "IoT"]
        },
        {
            id: 3,
            title: "FPGA & Hardware Design",
            description: "Digital circuit design and FPGA programming using VHDL. Skilled in Vivado, KiCad, and PCB design for hardware projects.",
            icon: Layers,
            gradient: "from-orange-500 to-red-500",
            skills: ["VHDL", "Vivado", "KiCad", "PCB Design"]
        },
        {
            id: 4,
            title: "Problem Solving",
            description: "Strong algorithmic thinking and data structures knowledge. Active on competitive programming platforms with consistent practice.",
            icon: Brain,
            gradient: "from-green-500 to-emerald-500",
            skills: ["DSA", "C++", "LeetCode", "Algorithms"]
        },
        {
            id: 5,
            title: "Real-time Communication",
            description: "Building real-time applications with WebSockets and Socket.io. Experience in chat systems and live data streaming.",
            icon: Zap,
            gradient: "from-yellow-500 to-amber-500",
            skills: ["Socket.io", "WebSockets", "Real-time Apps"]
        },
        {
            id: 6,
            title: "Leadership & Innovation",
            description: "Leading technical teams and organizing events as IEEE MTT-S Vice President. Passionate about driving innovation and collaboration.",
            icon: Rocket,
            gradient: "from-indigo-500 to-purple-500",
            skills: ["Team Leadership", "Event Management", "IEEE"]
        }
    ];

    return (
        <div className="w-full py-10 md:py-20 px-4 bg-transparent">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white inline-block mb-4 drop-shadow-md">
                        What I'm Best At
                    </h2>
                    <p className="text-cyan-200/60 mt-3 text-base md:text-lg font-medium max-w-3xl mx-auto">
                        Core areas where I excel and continuously push boundaries
                    </p>
                </div>

                {/* Expertise Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {expertiseAreas.map((area, index) => {
                        const ref = useRef(null);
                        const isInView = useInView(ref, {
                            once: false,
                            margin: "-100px",
                        });
                        const Icon = area.icon;

                        return (
                            <div
                                key={area.id}
                                ref={ref}
                                className="group relative"
                            >
                                <div
                                    className="relative h-full p-6 md:p-8 rounded-3xl overflow-hidden
                  bg-[#0a0a0a]/60 backdrop-blur-md
                  border border-white/10 hover:border-white/20
                  transition-all duration-500 ease-out
                  hover:translate-y-[-8px]
                  hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]"
                                >
                                    {/* Gradient Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                    {/* Icon Circle */}
                                    <div className="relative z-10 mb-6">
                                        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${area.gradient} shadow-lg`}>
                                            <Icon size={32} className="text-white" strokeWidth={2} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                                            {area.title}
                                        </h3>

                                        <p className="text-gray-400 leading-relaxed mb-4 text-sm md:text-base">
                                            {area.description}
                                        </p>

                                        {/* Skills Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {area.skills.map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className={`px-3 py-1 text-xs font-medium rounded-full 
                          bg-gradient-to-r ${area.gradient} bg-opacity-10
                          text-white/80 border border-white/10
                          group-hover:border-white/20 transition-all duration-300`}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Decorative Corner */}
                                    <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${area.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />

                                    {/* Bottom Accent Line */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-400 text-lg mb-6">
                        Interested in working together?
                    </p>
                    <a
                        href="#Contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 
            rounded-full text-white font-bold shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] 
            transition-all duration-300 transform hover:scale-105"
                    >
                        Let's Connect
                        <Rocket size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Expertise;
