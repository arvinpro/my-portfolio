import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll'; // Alias to avoid conflict with 'Link' from react-router
import  {useGSAP} from '@gsap/react'
import gsap from "gsap";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];




 

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-neutral-900 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-3xl font-great font-bold text-purple-500 ml-4 tracking-wider text-shadow">Jimdar</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-11 mr-4 font-alum text-2xl">
          {navItems.map((item) => (
            <ScrollLink
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              className="relative text-white cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-purple-300 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-purple-300"
            >
              {item.toUpperCase()}
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="font-alum text-2xl md:hidden flex flex-col items-center bg-neutral-900 text-white px-4 py-2 space-y-4">
          {navItems.map((item) => (
            <ScrollLink
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              className="cursor-pointer hover:text-purple-300"
              onClick={() => setIsOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </ScrollLink>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
