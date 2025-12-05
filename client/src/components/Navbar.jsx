import React from 'react'

const Navbar = () => {
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const anchor = document.getElementById(id);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav draggable="false" className="select-none fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl backdrop-blur-xs rounded-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-3 md:py-4 z-50  ">
      <h1 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-0 cursor-default" onClick={e=>handleSmoothScroll(e,'About')}>
        Swayam Wakodikar
      </h1>
      <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6 md:space-x-0 text-sm md:text-base">
        <li>
          <a
            draggable="false"
            href="#About"
            className="text-white hover:text-indigo-300 transition-colors font-medium"
            onClick={e => handleSmoothScroll(e, 'About')}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            draggable="false"
            href="#Projects"
            className="text-white hover:text-indigo-300 transition-colors font-medium"
            onClick={e => handleSmoothScroll(e, 'Projects')}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            draggable="false"
            href="#Experience"
            className="text-white hover:text-indigo-300 transition-colors font-medium"
            onClick={e => handleSmoothScroll(e, 'Experience')}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            draggable="false"
            href="#Contact"
            className="text-white hover:text-indigo-300 transition-colors font-medium"
            onClick={e => handleSmoothScroll(e, 'Contact')}
          >
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}


export default Navbar