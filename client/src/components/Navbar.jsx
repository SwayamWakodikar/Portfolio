import React from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const anchor = document.getElementById(id);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      draggable="false"
      className={`select-none fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl backdrop-blur-md bg-black/20 flex flex-col md:flex-row items-center justify-between px-6 py-3 md:px-10 md:py-4 z-50 border border-white/5 shadow-lg transition-all duration-300 ${isMenuOpen ? 'rounded-3xl bg-black/80' : 'rounded-full'}`}
    >
      <div className="flex items-center justify-between w-full md:w-auto">
        <h1
          className="text-lg md:text-2xl font-bold text-white cursor-default"
          onClick={e => handleSmoothScroll(e, 'About')}
        >
          Swayam Wakodikar
        </h1>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
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

      <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center w-full md:w-auto mt-6 md:mt-0 gap-4 md:gap-6 text-sm md:text-base border-t md:border-none border-white/10 pt-4 md:pt-0`}>
        <li className="w-full md:w-auto text-center">
          <a
            draggable="false"
            href="#About"
            className="block py-2 md:py-0 text-white hover:text-cyan-400 transition-colors font-medium"
            onClick={e => handleSmoothScroll(e, 'About')}
          >
            About Me
          </a>
        </li>
        <li className="w-full md:w-auto text-center">
          <a
            draggable="false"
            href="#Projects"
            className="block py-2 md:py-0 text-white hover:text-gray-400 transition-colors font-medium"
            onClick={e => handleSmoothScroll(e, 'Projects')}
          >
            Projects
          </a>
        </li>
        <li className="w-full md:w-auto text-center">
          <a
            draggable="false"
            href="#Stats"
            className="block py-2 md:py-0 text-white hover:text-gray-400 transition-colors font-medium"
            onClick={e => handleSmoothScroll(e, 'Stats')}
          >
            Stats
          </a>
        </li>
        <li className="w-full md:w-auto text-center">
          <a
            draggable="false"
            href="#Contact"
            className="block py-2 md:py-0 text-white hover:text-gray-400 transition-colors font-medium"
            onClick={e => handleSmoothScroll(e, 'Contact')}
          >
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar