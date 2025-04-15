import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out bg-white ${
        scrolled ? 'py-2 shadow-md' : 'py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-0 gap-6 transition-all duration-700 ease-in-out">
        {/* Logo on the left */}
        <a href="#home" className="flex items-center transition-all duration-700 ease-in-out ml-[-40px]">
          <img
            src="/public/logo.png"
            alt="Autora Logo"
            className={`transition-all duration-700 ease-in-out ${scrolled ? 'h-15' : 'h-20'}`}
          />
        </a>

        {/* Desktop Nav on the right */}
        <div className="hidden md:flex items-center space-x-12 text-sm font-semibold text-gray-800 ml-auto">
          {[
            'HOME',
            'ABOUT',
            'PROJECTS',
            'SERVICES',
            'TEAM',
            'TESTIMONIALS',
            'CONTACT',
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '')}`}
              className="hover:text-yellow-600 transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-white px-8 py-4 flex flex-col space-y-4 text-sm font-semibold text-gray-800 shadow-md">
          {[
            'HOME',
            'ABOUT',
            'PROJECTS',
            'SERVICES',
            'TEAM',
            'TESTIMONIALS',
            'CONTACT',
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '')}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-600 transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
