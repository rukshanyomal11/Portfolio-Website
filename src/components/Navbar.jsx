import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar({ activeSection, setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white/80 backdrop-blur-lg shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
          <img
            src="/assets/images/logo3.jpeg"
            alt="Logo"
            className="h-10 w-10 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          />
          <span className="text-xl font-bold text-blue-500  tracking-wide hover:text-gray-800 transition-colors duration-300">
            YOMAL 
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize px-3 py-2 rounded-lg transition-all duration-300 ${
                activeSection === section
                  ? 'text-blue-600 bg-blue-100 shadow-sm'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-inner px-6 py-4 space-y-2 transition-all duration-300">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`block w-full text-left text-base font-medium rounded-md px-4 py-2 ${
                activeSection === section
                  ? 'text-blue-600 bg-blue-100'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
