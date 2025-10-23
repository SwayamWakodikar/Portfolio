import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <a href="#About">About Me</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Experience">Experience</a>
            </li>
            <li>
              <a href="#Contact">Contact Me</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="About">
        <Profile />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="Experience">
        <Experience />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
