import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 20%", "end 80%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

    const educationData = [
        {
            title: "Till 2022",
            content: (
                <div>
                    <div className="mb-6">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 md:p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                                <GraduationCap size={28} className="text-cyan-400" strokeWidth={2} />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                                    Secondary Education (10th Class)
                                </h4>
                                <p className="text-cyan-300 font-semibold text-base md:text-lg">
                                    CBSE Board
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6 space-y-3">
                        <div className="flex items-center gap-2 text-gray-300">
                            <Award size={18} className="text-cyan-400" />
                            <span className="font-semibold text-base md:text-lg">
                                St. Xavier's High School
                            </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm md:text-base">
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-cyan-400" />
                                <span>Nagpur, Maharashtra</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-cyan-400" />
                                <span>Till 2022</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h5 className="text-white font-semibold text-sm md:text-base mb-3">
                            Key Highlights:
                        </h5>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                                <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-cyan-400" />
                                <span>Strong academic foundation</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                                <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-cyan-400" />
                                <span>Developed interest in science and technology</span>
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: "2022 - 2024",
            content: (
                <div>
                    <div className="mb-6">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 md:p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                                <GraduationCap size={28} className="text-cyan-400" strokeWidth={2} />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                                    Higher Secondary Education (11th & 12th)
                                </h4>
                                <p className="text-cyan-300 font-semibold text-base md:text-lg">
                                    JEE Preparation
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6 space-y-3">
                        <div className="flex items-center gap-2 text-gray-300">
                            <Award size={18} className="text-cyan-400" />
                            <span className="font-semibold text-base md:text-lg">
                                St. Paul Junior College
                            </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm md:text-base">
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-cyan-400" />
                                <span>Nagpur, Maharashtra</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-cyan-400" />
                                <span>2022 - 2024</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h5 className="text-white font-semibold text-sm md:text-base mb-3">
                            Key Highlights:
                        </h5>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                                <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-cyan-400" />
                                <span>Intensive JEE preparation program</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                                <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-cyan-400" />
                                <span>Strong foundation in Physics, Chemistry, and Mathematics</span>
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: "2024 - 2028",
            content: (
                <div>
                    <div className="mb-6">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 md:p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                                <GraduationCap size={28} className="text-cyan-400" strokeWidth={2} />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                                    Bachelor of Technology (B.Tech)
                                </h4>
                                <p className="text-cyan-300 font-semibold text-base md:text-lg">
                                    Electronics and Communication Engineering
                                </p>
                            </div>
                            <div className="hidden md:block px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/50">
                                <span className="text-cyan-300 font-bold text-sm">2nd Year</span>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6 space-y-3">
                        <div className="flex items-center gap-2 text-gray-300">
                            <Award size={18} className="text-cyan-400" />
                            <span className="font-semibold text-base md:text-lg">
                                VIT-AP University
                            </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm md:text-base">
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-cyan-400" />
                                <span>Amaravati, Andhra Pradesh</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-cyan-400" />
                                <span>2024 - 2028</span>
                            </div>
                        </div>

                        <div className="md:hidden inline-block px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/50">
                            <span className="text-cyan-300 font-bold text-xs">2nd Year</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h5 className="text-white font-semibold text-sm md:text-base mb-3">
                            Key Highlights:
                        </h5>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                                <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-cyan-400" />
                                <span>Specialization in Embedded Systems</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                                <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-cyan-400" />
                                <span>Active member of technical clubs and societies</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                                <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-cyan-400" />
                                <span>Hands-on experience with PCB Design and IoT projects</span>
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div
            className="w-full bg-transparent font-sans md:px-10"
            ref={containerRef}
        >
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-3xl md:text-4xl mb-4 text-white font-bold max-w-4xl">
                    Education
                </h2>
                <p className="text-cyan-200/60 text-sm md:text-base max-w-sm">
                    Academic journey and achievements
                </p>
            </div>
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {educationData.map((item, index) => (
                    <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-cyan-500/50 p-2" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-400">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-400">
                                {item.title}
                            </h3>
                            {item.content}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-cyan-500 via-cyan-400 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Education;
