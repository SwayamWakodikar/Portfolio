import React, { useEffect, useRef, useState } from "react";
import CountUp from "./Counter/CountUp";
import { useInView } from "framer-motion";
const year = new Date().getFullYear()
const Stats = () => {
  const statsData = [
    { id: 1, title: "LeetCode Problems Solved", count: 50, color: "text-white", link: "https://leetcode.com/u/swayam_w06/" },
    { id: 2, title: `GitHub Contributions ${year}`, count: 230, color: "text-gray-400", link: "https://github.com/SwayamWakodikar" },
  ];

  return (
    <div className="w-screen py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white inline-block mb-4 drop-shadow-md">
            My Stats
          </h2>
          <p className="text-cyan-200/60 mt-3 text-sm font-medium max-w-2xl mx-auto">
            Some of my stats on different platforms showcasing my skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {statsData.map((statistics) => {
            const ref = useRef(null);
            const isInView = useInView(ref, {
              once: false,
              margin: "-150px",
            });

            return (
              <a
                key={statistics.id}
                href={statistics.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div
                  ref={ref}
                  className="relative p-8 rounded-2xl bg-[#0a0a0a]/40 backdrop-blur-xl
                  border border-white/5 group-hover:bg-cyan-900/10 group-hover:border-cyan-500/30
                  transition-all duration-300 shadow-lg overflow-hidden flex flex-col items-center gap-4"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <h3 className="relative z-10 text-xl font-medium text-gray-300 group-hover:text-cyan-200 transition-colors">
                    {statistics.title}
                  </h3>

                  <div className="relative z-10 flex items-baseline gap-1">
                    <CountUp
                      key={isInView ? statistics.id + "-visible" : statistics.id + "-hidden"}
                      from={0}
                      to={statistics.count}
                      duration={1.2}
                      separator=","
                      className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent`}
                    />
                    <span className={`text-3xl lg:text-4xl font-bold text-cyan-400`}>
                      +
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
