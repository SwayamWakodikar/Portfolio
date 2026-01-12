import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const anchor = document.getElementById(id);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'About Me', href: '#About', id: 'About' },
    { name: 'Projects', href: '#Projects', id: 'Projects' },
    { name: 'Stats', href: '#Stats', id: 'Stats' },
    { name: 'Contact Me', href: '#Contact', id: 'Contact' },
  ];

  return (
    <nav draggable="false" className="select-none fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <div className="backdrop-blur-md bg-black/40 rounded-full border border-white/10 px-6 py-3 md:px-10 md:py-4 flex items-center justify-between relative z-50 shadow-lg">
        {/* Logo */}
        <h1
          className="text-lg md:text-2xl font-bold text-white cursor-pointer hover:text-cyan-400 transition-colors"
          onClick={e => handleSmoothScroll(e, 'About')}
        >
          Swayam Wakodikar
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                draggable="false"
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium text-sm md:text-base relative group"
                onClick={e => handleSmoothScroll(e, link.id)}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white p-2 focus:outline-none hover:text-cyan-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full mt-2 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:hidden flex flex-col items-center gap-2 shadow-2xl overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                href={link.href}
                className="text-gray-200 hover:text-cyan-400 hover:bg-white/5 font-medium text-lg w-full text-center py-3 rounded-xl transition-all"
                onClick={e => handleSmoothScroll(e, link.id)}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


export default Navbar