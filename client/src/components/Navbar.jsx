import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const anchor = document.getElementById(id);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="select-none fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl z-50">
      {/* Main Pill */}
      <div className="backdrop-blur-md bg-black/20 rounded-full flex items-center justify-between px-6 py-3 md:px-10 md:py-4 border border-white/5 shadow-lg relative z-20">
        <h1
          className="text-lg md:text-2xl font-bold text-white cursor-default"
          onClick={e => handleSmoothScroll(e, 'About')}
        >
          Swayam Wakodikar
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-base">
          <li>
            <a
              draggable="false"
              href="#About"
              className="text-white hover:text-cyan-400 transition-colors font-medium"
              onClick={e => handleSmoothScroll(e, 'About')}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              draggable="false"
              href="#Skills"
              className="text-white hover:text-gray-400 transition-colors font-medium"
              onClick={e => handleSmoothScroll(e, 'Skills')}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              draggable="false"
              href="#Projects"
              className="text-white hover:text-gray-400 transition-colors font-medium"
              onClick={e => handleSmoothScroll(e, 'Projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              draggable="false"
              href="#Stats"
              className="text-white hover:text-gray-400 transition-colors font-medium"
              onClick={e => handleSmoothScroll(e, 'Stats')}
            >
              Stats
            </a>
          </li>
          <li>
            <a
              draggable="false"
              href="#Contact"
              className="text-white hover:text-gray-400 transition-colors font-medium"
              onClick={e => handleSmoothScroll(e, 'Contact')}
            >
              Contact Me
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full mt-2 rounded-2xl bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-300 origin-top z-10 ${isMenuOpen ? 'opacity-100 translate-y-0 scale-y-100' : 'opacity-0 -translate-y-4 scale-y-95 pointer-events-none'}`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4 text-sm font-medium">
          <li className="w-full text-center">
            <a
              draggable="false"
              href="#About"
              className="block py-2 text-white hover:text-cyan-400 transition-colors"
              onClick={e => handleSmoothScroll(e, 'About')}
            >
              About Me
            </a>
          </li>
          <li className="w-full text-center">
            <a
              draggable="false"
              href="#Skills"
              className="block py-2 text-white hover:text-gray-400 transition-colors"
              onClick={e => handleSmoothScroll(e, 'Skills')}
            >
              Skills
            </a>
          </li>
          <li className="w-full text-center">
            <a
              draggable="false"
              href="#Projects"
              className="block py-2 text-white hover:text-gray-400 transition-colors"
              onClick={e => handleSmoothScroll(e, 'Projects')}
            >
              Projects
            </a>
          </li>
          <li className="w-full text-center">
            <a
              draggable="false"
              href="#Stats"
              className="block py-2 text-white hover:text-gray-400 transition-colors"
              onClick={e => handleSmoothScroll(e, 'Stats')}
            >
              Stats
            </a>
          </li>
          <li className="w-full text-center">
            <a
              draggable="false"
              href="#Contact"
              className="block py-2 text-white hover:text-gray-400 transition-colors"
              onClick={e => handleSmoothScroll(e, 'Contact')}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;