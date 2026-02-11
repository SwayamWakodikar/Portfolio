import React from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
    const education = [
        {
            id: 1,
            degree: "Bachelor of Technology (B.Tech)",
            field: "Electronics and Communication Engineering",
            institution: "VIT-AP University",
            location: "Amaravati, Andhra Pradesh",
            year: "2024 - 2028",
            currentYear: "2nd Year",
            highlights: [
                "Specialization in Embedded Systems",
                "Active member of technical clubs and societies",
                "Hands-on experience with PCB Design and IoT projects"
            ]
        }
    ];

    return (
        <div className="select-none py-10 md:py-20 px-4 bg-transparent">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-8 md:mb-12 text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-white inline-block drop-shadow-md">
                        Education
                    </h3>
                    <p className="text-cyan-200/60 mt-3 text-sm font-medium">
                        Academic journey and achievements
                    </p>
                </div>

                {/* Education Cards */}
                <div className="space-y-6">
                    {education.map((edu) => (
                        <div
                            key={edu.id}
                            className="group relative bg-[#0a0a0a]/40 border border-white/5 rounded-2xl 
                            backdrop-blur-xl hover:bg-cyan-900/10 hover:border-cyan-500/30 
                            transition-all duration-300 shadow-lg overflow-hidden p-6 md:p-8"
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Header with Icon */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 md:p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-300">
                                        <GraduationCap size={28} className="text-cyan-400" strokeWidth={2} />
                                    </div>

                                    <div className="flex-1">
                                        <h4 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-cyan-100 transition-colors">
                                            {edu.degree}
                                        </h4>
                                        <p className="text-cyan-300 font-semibold text-base md:text-lg">
                                            {edu.field}
                                        </p>
                                    </div>

                                    {/* Current Year Badge */}
                                    <div className="hidden md:block px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/50">
                                        <span className="text-cyan-300 font-bold text-sm">
                                            {edu.currentYear}
                                        </span>
                                    </div>
                                </div>

                                {/* Institution Info */}
                                <div className="mb-6 space-y-3">
                                    <div className="flex items-center gap-2 text-gray-300">
                                        <Award size={18} className="text-cyan-400" />
                                        <span className="font-semibold text-base md:text-lg">
                                            {edu.institution}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm md:text-base">
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} className="text-cyan-400" />
                                            <span>{edu.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} className="text-cyan-400" />
                                            <span>{edu.year}</span>
                                        </div>
                                    </div>

                                    {/* Mobile Current Year Badge */}
                                    <div className="md:hidden inline-block px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/50">
                                        <span className="text-cyan-300 font-bold text-xs">
                                            {edu.currentYear}
                                        </span>
                                    </div>
                                </div>

                                {/* Highlights */}
                                <div className="space-y-2">
                                    <h5 className="text-white font-semibold text-sm md:text-base mb-3">
                                        Key Highlights:
                                    </h5>
                                    <ul className="space-y-2">
                                        {edu.highlights.map((highlight, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-3 text-gray-300 text-sm md:text-base"
                                            >
                                                <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-cyan-400" />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
