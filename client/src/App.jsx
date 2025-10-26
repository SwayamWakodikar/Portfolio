import { useState } from 'react';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navbar from './components/navbar';
function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='mt-36'>

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
