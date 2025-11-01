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
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl bg-green-100/50 backdrop-blur-md shadow-xl rounded-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-3 md:py-4 z-50 border border-gray-200">
      <h1 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 md:mb-0">
        Swayam Wakodikar
      </h1>
      <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6 md:space-x-0 text-sm md:text-base">
        <li>
          <a
            href="#About"
            className="hover:text-green-700 transition-colors font-medium"
            onClick={e => handleSmoothScroll(e, 'About')}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#Projects"
            className="hover:text-green-700 transition-colors font-medium"
            onClick={e => handleSmoothScroll(e, 'Projects')}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#Experience"
            className="hover:text-green-700 transition-colors font-medium"
            onClick={e => handleSmoothScroll(e, 'Experience')}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            className="hover:text-green-700 transition-colors font-medium"
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