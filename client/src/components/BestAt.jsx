import React from "react";
import { Zap, Target, Sparkles } from "lucide-react";

const BestAt = () => {
    const highlights = [
        {
            id: 1,
            icon: Zap,
            text: "Fast & Effective Solutions"
        },
        {
            id: 2,
            icon: Target,
            text: "Innovative Problem Solver"
        },
        {
            id: 3,
            icon: Sparkles,
            text: "Passionate About Technology"
        }
    ];

    return (
        <div className="w-full py-6 md:py-8 px-4 bg-white/80 dark:bg-[#0a0a0a]/80 border-y border-cyan-500/20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-around gap-6 md:gap-8">
                    {highlights.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                className="flex items-center gap-3 group"
                            >
                                {/* Icon */}
                                <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-300">
                                    <Icon size={22} className="text-cyan-400" strokeWidth={2} />
                                </div>

                                {/* Text */}
                                <p className="text-gray-900 dark:text-white font-semibold text-sm md:text-base">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BestAt;
