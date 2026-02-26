import React, { useEffect, useRef, useState } from "react";
import CountUp from "./Counter/CountUp";
import { useInView, motion } from "framer-motion";
import { Github, Code, Trophy, GitCommit } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const year = new Date().getFullYear();
const LEET_API = import.meta.env.VITE_LEET_API;
const USERNAME = "swayam_w06";

const Stats = () => {
  const [gitHubStats, setGitHubStats] = useState({ count: 0 });
  const [leetCodeStats, setLeetCodeStats] = useState({
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    ranking: 0,
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    const fetchGitHubStats = async () => {
      const token = import.meta.env.VITE_GITHUB_TOKEN;
      const query = `
        query {
          viewer {
            contributionsCollection {
              totalCommitContributions
            }
          }
        }
      `;

      try {
        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        const data = await response.json();

        if (data.data) {
          const { viewer } = data.data;
          const commitCount = viewer.contributionsCollection.totalCommitContributions;
          setGitHubStats({ count: Math.floor(commitCount / 10) * 10 });
        }
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      }
    };

    const fetchLeetCodeStats = async () => {
      if (!LEET_API) return;

      try {
        const [solvedRes, profileRes] = await Promise.all([
          fetch(`${LEET_API}${USERNAME}/solved`),
          fetch(`${LEET_API}${USERNAME}`)
        ]);

        const [solved, profileData] = await Promise.all([
          solvedRes.json(),
          profileRes.json(),
        ]);

        setLeetCodeStats({
          totalSolved: solved.solvedProblem || 0,
          easySolved: solved.easySolved || 0,
          mediumSolved: solved.mediumSolved || 0,
          hardSolved: solved.hardSolved || 0,
          ranking: profileData.ranking || 0
        });
      } catch (error) {
        console.error("Error fetching LeetCode stats:", error);
      }
    };

    fetchGitHubStats();
    fetchLeetCodeStats();
  }, []);

  // Data for Recharts PieChart
  const leetCodeChartData = [
    { name: "Easy", value: leetCodeStats.easySolved, color: "#00B8A3" }, // LeetCode Easy Teal
    { name: "Medium", value: leetCodeStats.mediumSolved, color: "#FFC01E" }, // LeetCode Medium Yellow
    { name: "Hard", value: leetCodeStats.hardSolved, color: "#FF375F" }, // LeetCode Hard Red
  ].filter(item => item.value > 0); // Don't show segments with 0 problems

  return (
    <div className="w-full py-10 md:py-20 px-4 bg-transparent select-none font-sans" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            Journey & Impact
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm font-medium uppercase tracking-[0.15em]">
            Development & Problem Solving
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">

          {/* ── GitHub Card ── */}
          <motion.a
            href="https://github.com/SwayamWakodikar"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative w-full p-6 md:p-8 flex flex-col justify-between 
              bg-white/40 dark:bg-zinc-900/40 border border-gray-200/50 dark:border-white/10
              rounded-2xl backdrop-blur-md shadow-sm hover:shadow-md dark:shadow-none
              hover:border-gray-300 dark:hover:border-white/20 transition-all duration-500 min-h-[360px] overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-0 right-0 -m-32 w-80 h-80 bg-black/5 dark:bg-white/5 rounded-full blur-[80px] group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors duration-700 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <Github className="text-gray-900 dark:text-white group-hover:text-[#2ea043] transition-colors duration-300" size={24} />
                    <span className="text-gray-900 dark:text-white font-bold tracking-tight text-lg">GitHub</span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
                    Code Contributions
                  </span>
                </div>
                <div className="p-2 bg-white/50 dark:bg-white/5 rounded-full backdrop-blur-sm group-hover:bg-[#2ea043]/10 transition-colors">
                  <GitCommit size={20} className="text-gray-400 group-hover:text-[#2ea043] transition-colors" />
                </div>
              </div>

              {/* Central Stat */}
              <div className="flex flex-col items-center justify-center flex-grow mt-6">
                <div className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-[#2ea043] transition-colors duration-500 mt-4 md:mt-0">
                  <CountUp
                    key={isInView ? `github-${gitHubStats.count}` : "github-hidden"}
                    from={0}
                    to={gitHubStats.count}
                    duration={2.5}
                    separator=","
                  />
                  <span className="text-[#2ea043]/80 font-light ml-1">+</span>
                </div>
                <span className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wide uppercase">
                  Commits in {year}
                </span>

                {/* Minimal Sparkline Chart */}
                <div className="mt-8 w-full h-14 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <svg viewBox="0 0 100 30" width="100%" height="100%" preserveAspectRatio="none" className="overflow-visible">
                    <defs>
                      <linearGradient id="lineFade" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" className="text-[#2ea043]" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0" className="text-[#2ea043]" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M0,25 C10,25 15,10 25,15 C35,20 40,5 50,10 C60,15 65,22 75,18 C85,14 90,5 100,8 L100,30 L0,30 Z"
                      fill="url(#lineFade)"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="group-hover:text-[#2ea043] transition-colors duration-700 text-transparent"
                    />
                    <motion.path
                      d="M0,25 C10,25 15,10 25,15 C35,20 40,5 50,10 C60,15 65,22 75,18 C85,14 90,5 100,8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="text-gray-300 dark:text-gray-700 group-hover:text-[#2ea043] transition-colors duration-500"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    {/* Animated Data Points */}
                    {[
                      { cx: 25, cy: 15, delay: 1.0 },
                      { cx: 50, cy: 10, delay: 1.2 },
                      { cx: 75, cy: 18, delay: 1.4 },
                      { cx: 100, cy: 8, delay: 1.6 }
                    ].map((point, i) => (
                      <motion.circle
                        key={i}
                        cx={point.cx}
                        cy={point.cy}
                        r="1.5"
                        className="fill-white dark:fill-black stroke-gray-300 dark:stroke-gray-700 group-hover:stroke-[#2ea043] stroke-[1.5px] opacity-0 group-hover:opacity-100 transition-all duration-300"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                        transition={{ delay: point.delay, duration: 0.4 }}
                      />
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          </motion.a>

          {/* ── LeetCode Card ── */}
          <motion.a
            href="https://leetcode.com/u/swayam_w06/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="group relative w-full p-6 md:p-8 flex flex-col justify-between 
              bg-white/40 dark:bg-zinc-900/40 border border-gray-200/50 dark:border-white/10
              rounded-2xl backdrop-blur-md shadow-sm hover:shadow-md dark:shadow-none
              hover:border-gray-300 dark:hover:border-white/20 transition-all duration-500 min-h-[360px] overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute bottom-0 left-0 -m-32 w-80 h-80 bg-black/5 dark:bg-white/5 rounded-full blur-[80px] group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors duration-700 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="text-gray-900 dark:text-white group-hover:text-[#FFA116] transition-colors duration-300" size={24} />
                    <span className="text-gray-900 dark:text-white font-bold tracking-tight text-lg">LeetCode</span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
                    Algorithm Puzzles
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-black/5 dark:bg-white/5 rounded-full backdrop-blur-md border border-black/5 dark:border-white/10 group-hover:border-[#FFA116]/30 transition-colors">
                  <Trophy size={14} className="text-[#FFA116]" />
                  <span className="text-xs font-semibold text-gray-900 dark:text-white">
                    #{leetCodeStats.ranking > 0 ? leetCodeStats.ranking.toLocaleString() : "..."}
                  </span>
                </div>
              </div>

              {/* Content Layout - Graph & Legend */}
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between flex-grow mt-8 gap-8">

                {/* Recharts Pie Chart */}
                <div className="w-48 h-48 relative flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={leetCodeChartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={74}
                        outerRadius={78}
                        paddingAngle={8}
                        dataKey="value"
                        stroke="none"
                        cornerRadius={20}
                        isAnimationActive={true}
                        animationDuration={1500}
                        animationEasing="ease-out"
                      >
                        {leetCodeChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'rgba(0,0,0,0.8)',
                          border: 'none',
                          borderRadius: '8px',
                          color: '#fff',
                          boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                        }}
                        itemStyle={{ color: '#fff' }}
                        cursor={{ fill: 'transparent' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>

                  {/* Center Text over the PieChart */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                      <CountUp from={0} to={leetCodeStats.totalSolved} duration={2} />
                    </span>
                    <span className="text-[10px] uppercase font-medium text-gray-500 tracking-widest mt-1">
                      Solved
                    </span>
                  </div>
                </div>

                {/* Difficulty Legend */}
                <div className="w-full lg:w-48 flex flex-col gap-5 justify-center">
                  {[
                    { label: "Easy", count: leetCodeStats.easySolved, color: "bg-[#00B8A3]" },
                    { label: "Medium", count: leetCodeStats.mediumSolved, color: "bg-[#FFC01E]" },
                    { label: "Hard", count: leetCodeStats.hardSolved, color: "bg-[#FF375F]" }
                  ].map((diff) => (
                    <div key={diff.label} className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-2 last:border-0 last:pb-0 group/row">
                      <div className="flex items-center gap-3">
                        {/* Status Dot */}
                        <div className={`w-3 h-3 rounded-full ${diff.color} transition-transform duration-300`} />
                        <span className="text-sm md:text-base font-semibold text-gray-600 dark:text-gray-300 font-sans">
                          {diff.label}
                        </span>
                      </div>
                      <span className="text-base font-semibold text-gray-900 dark:text-white">
                        {diff.count}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </motion.a>

        </div>
      </div>
    </div>
  );
};

export default Stats;
