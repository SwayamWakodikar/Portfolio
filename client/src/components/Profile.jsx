import React from 'react'
import assets from '../assets/assets.js'
import { motion } from "motion/react";
export default Profile
"use client"

import { motion, useScroll } from "motion/react"

export default function ScrollLinked() {
    const { scrollYProgress } = useScroll()
const Profile = () => {
  return (

    <div className="w-screen min-h-screen py-20 px-4 bg-linear-to-b from-white to-gray-50">
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
              className="h-64 w-64 lg:h-80 lg:w-80 rounded-full object-cover border-4 border-green-700 shadow-2xl mb-6"
            />
            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-bold bg-linear-to-r from-green-700 to-green-900 bg-clip-text text-transparent mb-2">
                Swayam Wakodikar
              </h1>
              <div className="text-xl lg:text-2xl font-semibold text-gray-700">
                Student | Tech Enthusiast
              </div>
              <div className="text-xl lg:text-2xl font-semibold text-gray-700">
                Developer | Electronics Geek
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="font-bold text-3xl lg:text-4xl mb-6 text-gray-800">
                Skills
              </div>
              <div className="grid text-black grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 w-full">
            <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-green-100/50 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-green-800/50 hover:text-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
                className="h-8 w-8"
              />
              <span>HTML5</span>
            </div>
            <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-green-100/50 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-green-800/50 hover:text-white">
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
                alt="C"
                className="h-8 w-8"
              />
              <span>C</span>
            </div>
            <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-green-100/50 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-green-800/50 hover:text-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                alt="C++"
                className="h-8 w-8"
              />
              <span>C++</span>
            </div>
            <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-green-100/50 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-green-800/50 hover:text-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                alt="Java"
                className="h-8 w-8"
              />
              <span>Java</span>
            </div>
            <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-green-100/50 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-green-800/50 hover:text-white">
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
                alt="Express"
                className="h-8 w-8"
              />
              <span>Express</span>
            </div>
            <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-green-100/50 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-green-800/50 hover:text-white">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
                className="h-8 w-8"
              />
              <span>MongoDB</span>
            </div>
            <div className="cursor-pointer flex items-center gap-3 px-4 py-2 border-transparent bg-green-100/50 backdrop-blur-md shadow-xl rounded-2xl shiny-skill transition-transform duration-200 hover:scale-105 hover:bg-green-800/50 hover:text-white">
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
  )
}



    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#ff0088",
                }}
            />
            <Content />
        </>
    )
}

/**
 * ==============   Utils   ================
 */

function Content() {
    return (
        <>
            <article
                style={{
                    maxWidth: 500,
                    padding: "150px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                }}
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam ac rhoncus quam.
                </p>
                <p>
                    Fringilla quam urna. Cras turpis elit, euismod eget ligula
                    quis, imperdiet sagittis justo. In viverra fermentum ex ac
                    vestibulum. Aliquam eleifend nunc a luctus porta. Mauris
                    laoreet augue ut felis blandit, at iaculis odio ultrices.
                    Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt
                    neque tincidunt a.
                </p>
                <h2>Sub-header</h2>
                <p>
                    In eget sodales arcu, consectetur efficitur metus. Duis
                    efficitur tincidunt odio, sit amet laoreet massa fringilla
                    eu.
                </p>
                <p>
                    Pellentesque id lacus pulvinar elit pulvinar pretium ac non
                    urna. Mauris id mauris vel arcu commodo venenatis. Aliquam
                    eu risus arcu. Proin sit amet lacus mollis, semper massa ut,
                    rutrum mi.
                </p>
                <p>
                    Sed sem nisi, luctus consequat ligula in, congue sodales
                    nisl.
                </p>
                <p>
                    Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
                    pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
                    ut suscipit leo.
                </p>
                <h2>Sub-header</h2>
                <p>
                    Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
                    fringilla aliquet. Pellentesque auctor vehicula malesuada.
                    Aliquam id feugiat sem, sit amet tempor nulla. Quisque
                    fermentum felis faucibus, vehicula metus ac, interdum nibh.
                    Curabitur vitae convallis ligula. Integer ac enim vel felis
                    pharetra laoreet. Interdum et malesuada fames ac ante ipsum
                    primis in faucibus. Pellentesque hendrerit ac augue quis
                    pretium.
                </p>
                <p>
                    Morbi ut scelerisque nibh. Integer auctor, massa non dictum
                    tristique, elit metus efficitur elit, ac pretium sapien nisl
                    nec ante. In et ex ultricies, mollis mi in, euismod dolor.
                </p>
                <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
                <p>
                    Pellentesque id lacus pulvinar elit pulvinar pretium ac non
                    urna. Mauris id mauris vel arcu commodo venenatis. Aliquam
                    eu risus arcu. Proin sit amet lacus mollis, semper massa ut,
                    rutrum mi.
                </p>
                <p>
                    Sed sem nisi, luctus consequat ligula in, congue sodales
                    nisl.
                </p>
                <p>
                    Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
                    pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
                    ut suscipit leo.
                </p>
                <h2>Sub-header</h2>
                <p>
                    Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
                    fringilla aliquet. Pellentesque auctor vehicula malesuada.
                    Aliquam id feugiat sem, sit amet tempor nulla. Quisque
                    fermentum felis faucibus, vehicula metus ac, interdum nibh.
                    Curabitur vitae convallis ligula. Integer ac enim vel felis
                    pharetra laoreet. Interdum et malesuada fames ac ante ipsum
                    primis in faucibus. Pellentesque hendrerit ac augue quis
                    pretium.
                </p>
                <p>
                    Morbi ut scelerisque nibh. Integer auctor, massa non dictum
                    tristique, elit metus efficitur elit, ac pretium sapien nisl
                    nec ante. In et ex ultricies, mollis mi in, euismod dolor.
                </p>
                <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam ac rhoncus quam.
                </p>
                <p>
                    Fringilla quam urna. Cras turpis elit, euismod eget ligula
                    quis, imperdiet sagittis justo. In viverra fermentum ex ac
                    vestibulum. Aliquam eleifend nunc a luctus porta. Mauris
                    laoreet augue ut felis blandit, at iaculis odio ultrices.
                    Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt
                    neque tincidunt a.
                </p>
                <h2>Sub-header</h2>
                <p>
                    In eget sodales arcu, consectetur efficitur metus. Duis
                    efficitur tincidunt odio, sit amet laoreet massa fringilla
                    eu.
                </p>
                <p>
                    Pellentesque id lacus pulvinar elit pulvinar pretium ac non
                    urna. Mauris id mauris vel arcu commodo venenatis. Aliquam
                    eu risus arcu. Proin sit amet lacus mollis, semper massa ut,
                    rutrum mi.
                </p>
                <p>
                    Sed sem nisi, luctus consequat ligula in, congue sodales
                    nisl.
                </p>
                <p>
                    Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
                    pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
                    ut suscipit leo.
                </p>
                <h2>Sub-header</h2>
                <p>
                    Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
                    fringilla aliquet. Pellentesque auctor vehicula malesuada.
                    Aliquam id feugiat sem, sit amet tempor nulla. Quisque
                    fermentum felis faucibus, vehicula metus ac, interdum nibh.
                    Curabitur vitae convallis ligula. Integer ac enim vel felis
                    pharetra laoreet. Interdum et malesuada fames ac ante ipsum
                    primis in faucibus. Pellentesque hendrerit ac augue quis
                    pretium.
                </p>
                <p>
                    Morbi ut scelerisque nibh. Integer auctor, massa non dictum
                    tristique, elit metus efficitur elit, ac pretium sapien nisl
                    nec ante. In et ex ultricies, mollis mi in, euismod dolor.
                </p>
                <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
                <p>
                    Pellentesque id lacus pulvinar elit pulvinar pretium ac non
                    urna. Mauris id mauris vel arcu commodo venenatis. Aliquam
                    eu risus arcu. Proin sit amet lacus mollis, semper massa ut,
                    rutrum mi.
                </p>
                <p>
                    Sed sem nisi, luctus consequat ligula in, congue sodales
                    nisl.
                </p>
                <p>
                    Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
                    pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
                    ut suscipit leo.
                </p>
                <h2>Sub-header</h2>
                <p>
                    Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
                    fringilla aliquet. Pellentesque auctor vehicula malesuada.
                    Aliquam id feugiat sem, sit amet tempor nulla. Quisque
                    fermentum felis faucibus, vehicula metus ac, interdum nibh.
                    Curabitur vitae convallis ligula. Integer ac enim vel felis
                    pharetra laoreet. Interdum et malesuada fames ac ante ipsum
                    primis in faucibus. Pellentesque hendrerit ac augue quis
                    pretium.
                </p>
                <p>
                    Morbi ut scelerisque nibh. Integer auctor, massa non dictum
                    tristique, elit metus efficitur elit, ac pretium sapien nisl
                    nec ante. In et ex ultricies, mollis mi in, euismod dolor.
                </p>
                <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
            </article>
        </>
    )
}
