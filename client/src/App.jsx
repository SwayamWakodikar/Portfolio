import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Reveal from './components/Reveal';
import DotGrid from './components/backgorund/DotGrid';
import Stats from './components/Stats';
import Leadership from './components/Leadership';
import Footer from './components/Footer';
import BestAt from './components/BestAt';
import Education from './components/Education';
import ThemeToggler from './components/ThemeToggler';
import { useTheme } from './context/ThemeContext';
import Skills from './components/Skills';
import Admin from './components/Admin';

const API_URL = 'http://localhost:5000/api'; // Update for production


const Home = () => {
  return (
    <div className="relative w-full overflow-x-hidden">
      <div className='select-none'>
        <Navbar />
      </div>
      <div id="About" className='pt-24 md:pt-16 mt-6'>
        <Reveal delay={0.2}>
          <Profile />
        </Reveal>
      </div>
      <div id="Skills" className='mt-6 mb-20'>
        <Reveal delay={0.2}>
          <Skills />
        </Reveal>
      </div>
      <div id="Education" className='mt-6 mb-20'>
        <Education />
      </div>
      <div className='select-none' id="Projects">
        <Reveal delay={0.2}>
          <Projects />
        </Reveal>
      </div>
      <div className='select-none' id="Stats">
        <Reveal delay={0.2}>
          <Stats />
        </Reveal>
      </div>
      <Reveal>
        <BestAt />
      </Reveal>
      <div className='select-none' id="Leadership">
        <Reveal delay={0.2}>
          <Leadership />
        </Reveal>
      </div>
      <div className='select-none' id="Contact">
        <Reveal delay={0.2}><Contact /></Reveal>
      </div>
      <Footer />
    </div>
  );
};

function App() {
  const { theme } = useTheme();

  const dotColors = theme === 'dark'
    ? { base: '#222222', active: '#22d3ee' }
    : { base: '#e0e0e0', active: '#0891b2' };

  return (
    <Router>
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-[var(--bg-primary)]">
        <DotGrid
          dotSize={2}
          gap={24}
          baseColor={dotColors.base}
          activeColor={dotColors.active}
          proximity={100}
          shockRadius={80}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <ThemeToggler />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;

