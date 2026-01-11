import React from "react";
import assets from "../assets/assets.js";

const Profile = () => {
  return (
    <div className="select-none w-screen min-h-screen py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-12">
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
                  />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=swayam.w06@gmail.com"
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
              <div className="space-y-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 relative inline-block">
                  About Me
                  <span className="absolute -bottom-3 left-0 w-1/3 h-1.5 bg-indigo-500 rounded-full"></span>
                </h2>

                <p className="text-2xl lg:text-3xl text-indigo-100/90 leading-relaxed font-light">
                  I am a <span className="font-semibold text-white">2nd-year Electronics and Communication Engineering student</span> with a strong foundation in both <span className="text-indigo-300">software development</span> and <span className="text-indigo-300">core electronics</span>.
                </p>

                <p className="text-2xl lg:text-3xl text-indigo-100/90 leading-relaxed font-light">
                  I enjoy building <span className="font-semibold text-white">efficient software solutions</span> while also working with <span className="text-indigo-300">embedded systems</span>, <span className="text-indigo-300">digital logic</span>, and <span className="text-indigo-300">hardware-oriented problem solving</span>.
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
