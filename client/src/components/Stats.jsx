import React, { useEffect, useRef, useState } from "react";
import CountUp from "./Counter/CountUp";
import { useInView } from "framer-motion";
import { Github, Code, Terminal } from "lucide-react";

const year = new Date().getFullYear();

const Stats = () => {
  const [statsData, setStatsData] = useState([
    {
      id: 1,
      title: "LeetCode Problems",
      count: 50,
      link: "https://leetcode.com/u/swayam_w06/",
      icon: Code,
      theme: {
        iconRing: "group-hover:ring-yellow-500/30",
        iconColor: "group-hover:text-yellow-300",
        countGradient: "from-yellow-200 via-yellow-300 to-orange-400",
        countShadow: "drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]",
        plusColor: "text-yellow-500/80",
        accentLine: "via-yellow-500/50"
      }
    },
    {
      id: 2,
      title: `GitHub Contributions ${year}`,
      count: 230,
      link: "https://github.com/SwayamWakodikar",
      icon: Github,
      theme: {
        iconRing: "group-hover:ring-purple-500/30",
        iconColor: "group-hover:text-purple-300",
        countGradient: "from-purple-200 via-purple-300 to-blue-400",
        countShadow: "drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]",
        plusColor: "text-purple-500/80",
        accentLine: "via-purple-500/50"
      }
    },
  ]);

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

          setStatsData((prev) =>
            prev.map((stat) => {
              if (stat.id === 2) return { ...stat, count: Math.floor(commitCount / 10) * 10 };
              return stat;
            })
          );
        }
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      }
    };

    const fetchLeetCodeStats = async () => {
      const leetApi = import.meta.env.VITE_LEET_API;
      if (!leetApi) return;

      try {
        const response = await fetch(leetApi);
        const data = await response.json();

        if (data.status === 'success' || data.totalSolved !== undefined) {
          setStatsData((prev) =>
            prev.map((stat) => {
              if (stat.id === 1) return { ...stat, count: Math.floor(data.totalSolved / 10) * 10 };
              return stat;
            })
          );
        }
      } catch (error) {
        console.error("Error fetching LeetCode stats:", error);
      }
    };

    fetchGitHubStats();
    fetchLeetCodeStats();
  }, []);

  return (
    <div className="w-full py-10 md:py-20 px-4 bg-transparent select-none">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white inline-block mb-4 drop-shadow-md">
            My Stats
          </h2>
          <p className="text-cyan-600 dark:text-cyan-200/60 mt-3 text-sm font-medium max-w-2xl mx-auto">
            A glimpse into my coding journey and contributions across platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {statsData.map((statistics) => {
            const ref = useRef(null);
            const isInView = useInView(ref, {
              once: false,
              margin: "-100px",
            });
            const Icon = statistics.icon;

            return (
              <a
                key={statistics.id}
                href={statistics.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative w-full"
              >
                <div
                  ref={ref}
                  className="relative p-6 md:p-8 rounded-3xl overflow-hidden
                  bg-white/80 dark:bg-[#0a0a0a]/40 backdrop-blur-md
                  border border-black/5 dark:border-white/10 hover:border-black/10 dark:hover:border-white/20
                  transition-all duration-500 ease-out
                  group-hover:translate-y-[-5px]
                  group-hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.15)]"
                >
                  {/* Glass Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Background Watermark Icon */}
                  <div className="absolute -right-6 -bottom-6 text-white/5 transform rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-700 ease-out">
                    <Icon size={120} strokeWidth={1} />
                  </div>

                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col items-center">

                    {/* Title with Icon */}
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                      <div className={`p-2 rounded-lg bg-black/5 dark:bg-white/5 ring-1 ring-black/10 dark:ring-white/10 ${statistics.theme.iconRing} transition-all duration-300`}>
                        <Icon size={20} className={`text-gray-700 dark:text-gray-300 ${statistics.theme.iconColor}`} />
                      </div>
                      <h3 className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {statistics.title}
                      </h3>
                    </div>

                    {/* Count */}
                    <div className="flex items-baseline gap-1">
                      <CountUp
                        key={isInView ? `${statistics.id}-visible-${statistics.count}` : `${statistics.id}-hidden`}
                        from={0}
                        to={statistics.count}
                        duration={2}
                        separator=","
                        className={`text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br ${statistics.theme.countGradient} bg-clip-text text-transparent ${statistics.theme.countShadow}`}
                      />
                      <span className={`text-3xl md:text-4xl font-bold ${statistics.theme.plusColor} animate-pulse`}>
                        +
                      </span>
                    </div>

                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent ${statistics.theme.accentLine} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500`} />
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
