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
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-blue-100/50 backdrop-blur-md shadow-xl rounded-full flex items-center justify-between px-10 py-4 z-50 border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800">
        Swayam Wakodikar | Portfolio
      </h1>
      <ul className="flex space-x-8">
        <li>
          <a
            href="#About"
            className="hover:text-blue-500 transition-colors"
            onClick={e => handleSmoothScroll(e, 'About')}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#Projects"
            className="hover:text-blue-500 transition-colors"
            onClick={e => handleSmoothScroll(e, 'Projects')}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#Experience"
            className="hover:text-blue-500 transition-colors"
            onClick={e => handleSmoothScroll(e, 'Experience')}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            className="hover:text-blue-500 transition-colors"
            onClick={e => handleSmoothScroll(e, 'Contact')}
          >
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
}


export default Navbar