import React from "react";
import assets from "../assets/assets.js";

const Profile = () => {
  return (
    <div className="select-none w-full min-h-screen py-10 md:py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-12">
          {/* Profile Image Section */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
            <img
              src={assets[0]}
              alt="Profile"
              className="h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-full object-cover border-4 border-white/10 shadow-2xl mb-6"
            />
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg mb-2">
                Swayam Wakodikar
              </h1>
              <div className="text-lg md:text-xl lg:text-2xl font-semibold text-cyan-200/80">
                Student | Tech Enthusiast
              </div>
              <div className="text-lg md:text-xl lg:text-2xl font-semibold text-cyan-200/80">
                Developer | Electronics Geek
              </div>

            </div>
          </div>
          {/* Skills Section */}
          <div className="flex-1 w-full lg:w-auto text-center lg:text-left">
            <div className=" bg-transparent rounded-2xl shadow-xl p-4 md:p-8 border-none ">
              <div className="space-y-6 md:space-y-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-8 relative inline-block drop-shadow-md">
                  About Me
                  <span className="absolute -bottom-3 left-0 w-1/3 h-1.5 bg-cyan-500 rounded-full"></span>
                </h2>

                <p className="text-lg md:text-2xl lg:text-3xl text-gray-400/90 leading-relaxed font-light">
                  I am a <span className="font-semibold text-white">2nd-year Electronics and Communication Engineering student</span> with a strong foundation in both <span className="text-cyan-300">software development</span> and <span className="text-cyan-300">core electronics</span>.
                </p>

                <p className="text-lg md:text-2xl lg:text-3xl text-gray-400/90 leading-relaxed font-light">
                  I enjoy building <span className="font-semibold text-white">efficient software solutions</span> while also working with <span className="text-cyan-300">embedded systems</span>, <span className="text-cyan-300">digital logic</span>, and <span className="text-cyan-300">hardware-oriented problem solving</span>.
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
