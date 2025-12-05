import React, { useRef } from "react";
import CountUp from "./Counter/CountUp";
import { useInView } from "framer-motion";

const Stats = () => {
  const projects = [
    { id: 1, title: "LeetCode Problems Solved", count: 50, color: "text-yellow-300", link: "https://leetcode.com/u/swayam_w06/" },
    { id: 2, title: "GitHub Contributions (Year)", count: 230, color: "text-blue-500", link: "https://github.com/SwayamWakodikar" },
  ];

  return (
    <div className="w-screen min-h-screen py-20 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-indigo-300 mb-4">
            My Stats
          </h2>
          <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
            Some of my stats on different platforms showcasing my skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project) => {
            const ref = useRef(null);
            const isInView = useInView(ref, {
              once: false,
              margin: "-150px",
            });

            return (
              <a 
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  ref={ref}
                  className="p-8 rounded-2xl bg-white/10 backdrop-blur-md
                             border border-white/10 hover:scale-[1.03]
                             transition-all duration-300 shadow-xl"
                >
                  <h3 className="text-3xl font-bold text-blue-100 mb-4">
                    {project.title}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <CountUp
                      key={isInView ? project.id + "-visible" : project.id + "-hidden"}
                      from={0}
                      to={project.count}
                      duration={1.2}
                      separator=","
                      className={`text-6xl font-bold inline-block ${project.color}`}
                    />

                    <span className={`text-5xl font-bold inline-block ${project.color}`}>
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
