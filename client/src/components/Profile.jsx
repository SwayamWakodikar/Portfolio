import React from "react";
import assets from "../assets/assets.js";
import resumePdf from '../assets/Swayam_Wakodikar_Resume.pdf';

const Profile = () => {
  return (
    <div className="select-none w-full min-h-screen py-10 md:py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-12">
          {/* Profile Image Section */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
            <img
              src={assets[0]}
              alt="Swayam Wakodikar - Profile Picture"
              className="h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-full object-cover border-4 border-black/10 dark:border-white/10 shadow-2xl mb-6"
            />
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight drop-shadow-lg mb-2">
                Swayam Wakodikar
              </h1>
              <div className="text-lg md:text-xl lg:text-2xl font-semibold text-cyan-600 dark:text-cyan-200/80">
                Backend Developer & DevOps Engineer
              </div>
              <div className="text-lg md:text-xl lg:text-2xl font-semibold text-cyan-600 dark:text-cyan-200/80">
                System Architect | Open Source Enthusiast
              </div>

              <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white font-bold shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 transform hover:scale-105"
                >
                  Resume
                </a>
                <a
                  href="#Contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-transparent border border-cyan-500/30 rounded-full text-cyan-600 dark:text-cyan-200 font-bold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                >
                  Contact Me
                </a>
              </div>

            </div>
          </div>
          {/* About Section */}
          <div className="flex-1 w-full lg:w-auto text-center lg:text-left">
            <div className=" bg-transparent rounded-2xl shadow-xl p-4 md:p-8 border-none ">
              <div className="space-y-6 md:space-y-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-8 relative inline-block drop-shadow-md">
                  About Me
                  <span className="absolute -bottom-3 left-0 w-1/3 h-1.5 bg-cyan-500 rounded-full"></span>
                </h2>

                <p className="text-lg md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400/90 leading-relaxed font-light">
                  I am an <span className="font-semibold text-gray-900 dark:text-white">ECE student</span> pivoting my career towards <span className="text-cyan-600 dark:text-cyan-300">scalable backend architectures</span> and <span className="text-cyan-600 dark:text-cyan-300">cloud-native infrastructure</span>.
                </p>

                <p className="text-lg md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400/90 leading-relaxed font-light">
                  My technical foundation allows me to approach <span className="font-semibold text-gray-900 dark:text-white">software performance</span> with a deep understanding of system internals, specializing in <span className="text-cyan-600 dark:text-cyan-300">distributed systems</span>, <span className="text-cyan-600 dark:text-cyan-300">containerization</span>, and <span className="text-cyan-600 dark:text-cyan-300">DevOps automation</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
