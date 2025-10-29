import React from 'react'
import assets from '../assets/assets'

const Profile = () => {
  return (

    <div className="w-screen h-auto">
      <div className="flex justify-between items-center text-4xl font-bold bg-linear-to-r from-green-700 to-green-900 bg-clip-text text-transparent p-4">
        {/* Profile Image Section - Leftmost Side */}
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
            background: linear-gradient(
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
        <div className="flex flex-col items-start ml-4">
          <img
            src={assets[0]}
            alt="Profile"
            className="h-72 w-72 rounded-full object-cover border-2 border-black"
          />
          <div className=" font-bold pb-2 text-4xl mt-2">
            Student | Tech Enthusiast <br />
            Developer | Electronics Geek
          </div>
        </div>

        <div className="p-6 rounded-xl text-lg flex flex-col items-start min-w-[330px] ml-auto self-start">
          <div className="font-bold text-4xl mb-6">Skills</div>
          <div className="grid text-black grid-cols-3 gap-8 w-full">
            <div className="cursor-pointer flex items-center w-68 gap-3 px-4 py-2 border-transparent bg-green-100/50 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-green-800/50 hover:text-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="JavaScript"
                className="h-8 w-8"
              />
              <span>HTML5</span>
            </div>
            <div className="cursor-pointer flex items-center w-68 gap-3 px-4 py-2 border-transparent bg-green-100/50 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-green-800/50 hover:text-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="h-8 w-8"
              />
              <span>JavaScript</span>
            </div>
            <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-green-100/50 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-green-800/50 hover:text-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python"
                className="h-8 w-8"
              />
              <span>Python</span>
            </div>
            <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-green-100/50 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-green-800/50 hover:text-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                alt="Python"
                className="h-8 w-8"
              />
              <span>C</span>
            </div>
            <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-green-100/50 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-green-800/50 hover:text-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                alt="Python"
                className="h-8 w-8"
              />
              <span>C++</span>
            </div>
            <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-green-100/50 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-green-800/50 hover:text-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                alt="Python"
                className="h-8 w-8"
              />
              <span>Java</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 border-transparent bg-green-100/50 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-green-800/50 hover:text-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="h-8 w-8"
              />
              <span>React.js</span>
            </div>
            <div className=" cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-green-100/50 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105  hover:bg-green-800/50 hover:text-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                className="h-8 w-8"
              />
              <span>Node.js</span>
            </div>
            <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-green-100/50 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-green-800/50 hover:text-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                alt="HTML5"
                className="h-8 w-8"
              />
              <span>Express</span>
            </div>
            <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-green-100/50 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-green-800/50 hover:text-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="HTML5"
                className="h-8 w-8"
              />
              <span>MongoDB</span>
            </div>
            <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-green-100/50 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105  hover:bg-green-800/50 hover:text-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                alt="HTML5"
                className="h-8 w-8"
              />
              <span>NEXT JS</span>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Profile