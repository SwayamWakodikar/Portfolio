import React from "react";
import assets from "../assets/assets.js";
import { motion } from "motion/react";

const Profile = () => {
  return (
    <div className="select-none w-screen min-h-screen py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <style>{`
          .shiny-skill {
            position: relative;
            overflow: hidden;
          }
          .shiny-skill::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -75%;
            width: 200%;
            height: 200%;
            background: linear-linear(
              120deg, 
              rgba(255,255,255,0) 0%, 
              rgba(255,255,255,0.4) 50%, 
              rgba(255,255,255,0) 100%
            );
            transform: skewX(-25deg) translateX(-100%);
            transition: transform 0.8s cubic-bezier(.65,.05,.36,1);
            pointer-events: none;
            z-index: 2;
          }
          .shiny-skill:hover::before {
            transform: skewX(-25deg) translateX(70%);
          }
        `}</style>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          {/* Profile Image Section */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
            <img
              src={assets[0]}
              alt="Profile"
              className="h-64 w-64 lg:h-80 lg:w-80 rounded-full object-cover border-4 border-indigo-400 shadow-2xl mb-6"
            />
            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-bold bg-linear-to-r from-indigo-300 to-indigo-600 bg-clip-text text-transparent mb-2">
                Swayam Wakodikar
              </h1>
              <div className="text-xl lg:text-2xl font-semibold text-indigo-100">
                Student | Tech Enthusiast
              </div>
              <div className="text-xl lg:text-2xl font-semibold text-indigo-100">
                Developer | Electronics Geek
              </div>
              <div className="text-xl lg:text-2xl font-semibold text-indigo-100 flex items-center gap-4 mt-3">
                <a href="https://github.com/SwayamWakodikar" target="_blank">
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png"
                    alt="GitHub"
                  />
                </a>
                <a href="https://leetcode.com/u/swayam_w06/" target="_blank">
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/FFFFFF/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-bold-tal-revivo.png"
                    alt="Leetcode"
                  />
                </a>
                <a href="https://x.com/SwayamWakodikar" target="_blank">
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/ios/50/FFFFFF/twitterx--v2.png"
                    alt="X"
                  />
                </a>
                <a href="https://www.instagram.com/swayam_w06/" target="_blank">
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new--v1.png"
                    alt="Instagram"
                  /> target="_blank"
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=swayam.w06@gmail.com
"
                  target="_blank"
                >
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/ios/50/FFFFFF/gmail-new.png"
                    alt="gmail-new"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="flex-1 w-full lg:w-auto">
            <div className=" bg-transparent rounded-2xl shadow-xl p-8 border ">
              <div className="font-bold text-3xl lg:text-4xl mb-6 text-indigo-300">
                Skills
              </div>
              <div className="grid text-white grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 w-full">
                <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-indigo-500 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-indigo-300 hover:text-black">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="HTML5"
                    className="h-8 w-8"
                  />
                  <span>HTML5</span>
                </div>
                <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-indigo-500 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-indigo-300 hover:text-black">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                    className="h-8 w-8"
                  />
                  <span>JavaScript</span>
                </div>
                <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-indigo-500 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-indigo-300 hover:text-black">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    alt="Python"
                    className="h-8 w-8"
                  />
                  <span>Python</span>
                </div>
                <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-indigo-500 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-indigo-300 hover:text-black">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                    alt="C"
                    className="h-8 w-8"
                  />
                  <span>C</span>
                </div>
                <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-indigo-500 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-indigo-300 hover:text-black">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                    alt="C++"
                    className="h-8 w-8"
                  />
                  <span>C++</span>
                </div>
                <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-indigo-500 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-indigo-300 hover:text-black">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                    alt="Java"
                    className="h-8 w-8"
                  />
                  <span>Java</span>
                </div>
                <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-indigo-500 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-indigo-300 hover:text-black">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                    className="h-8 w-8"
                  />
                  <span>React.js</span>
                </div>
                <div className=" cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-indigo-500 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105  hover:bg-indigo-300 hover:text-black">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="Node.js"
                    className="h-8 w-8"
                  />
                  <span>Node.js</span>
                </div>
                <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-indigo-500 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-indigo-300 hover:text-black">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    alt="Express"
                    className="h-8 w-8"
                  />
                  <span>Express</span>
                </div>
                <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-indigo-500 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-indigo-300 hover:text-black">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    alt="MongoDB"
                    className="h-8 w-8"
                  />
                  <span>MongoDB</span>
                </div>
                <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-indigo-500 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-indigo-300 hover:text-black">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                    alt="Next.js"
                    className="h-8 w-8"
                  />
                  <span>Next.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
