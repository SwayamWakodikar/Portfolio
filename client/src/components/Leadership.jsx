import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Award, Users, Calendar, MapPin } from "lucide-react";

const Leadership = () => {
    const activities = [
        {
            id: 1,
            role: "Vice President",
            organization: "IEEE MTT-S Student Chapter",
            location: "VIT-AP",
            period: "2024 - Present",
            description: "Leading technical initiatives and organizing workshops for the Microwave Theory and Techniques Society student chapter.",
            icon: Award,
            highlights: [
                "Organized technical workshops and seminars",
                "Coordinated with industry professionals",
                "Managed chapter operations and events"
            ]
        }
    ];

    return (
        <div className="w-full py-10 md:py-20 px-4 bg-transparent select-none">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white inline-block mb-4 drop-shadow-md">
                        Leadership & Activities
                    </h2>
                    <p className="text-cyan-600 dark:text-cyan-200/60 mt-3 text-sm font-medium max-w-2xl mx-auto">
                        Positions and contributions beyond the classroom.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {activities.map((activity) => {
                        const ref = useRef(null);
                        const isInView = useInView(ref, {
                            once: false,
                            margin: "-100px",
                        });
                        const Icon = activity.icon;

                        return (
                            <div
                                key={activity.id}
                                ref={ref}
                                className="group relative"
                            >
                                <div
                                    className="relative p-6 md:p-8 rounded-3xl overflow-hidden
                  bg-white/80 dark:bg-[#0a0a0a]/40 backdrop-blur-md
                  border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20
                  transition-all duration-500 ease-out
                  group-hover:translate-y-[-3px]
                  group-hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.15)]"
                                >
                                    {/* Glass Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Background Watermark Icon */}
                                    <div className="absolute -right-6 -top-6 text-white/5 transform rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-700 ease-out">
                                        <Icon size={140} strokeWidth={1} />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Header */}
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 ring-1 ring-black/10 dark:ring-white/10 group-hover:ring-cyan-500/30 transition-all duration-300">
                                                    <Icon size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-200" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-100 transition-colors">
                                                        {activity.role}
                                                    </h3>
                                                    <p className="text-lg text-cyan-600 dark:text-cyan-300/90 font-medium mt-1">
                                                        {activity.organization}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Meta Info */}
                                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                                            <div className="flex items-center gap-2">
                                                <MapPin size={16} className="text-cyan-600 dark:text-cyan-400/70" />
                                                <span>{activity.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} className="text-cyan-600 dark:text-cyan-400/70" />
                                                <span>{activity.period}</span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                            {activity.description}
                                        </p>

                                        {/* Highlights */}
                                        {activity.highlights && activity.highlights.length > 0 && (
                                            <div className="space-y-2">
                                                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                                                    Key Contributions
                                                </h4>
                                                <ul className="space-y-2">
                                                    {activity.highlights.map((highlight, index) => (
                                                        <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                                                            <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
                                                            <span className="text-sm">{highlight}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Bottom accent line */}
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Leadership;
