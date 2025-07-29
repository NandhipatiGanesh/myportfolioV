'use client';
import React, { useState, useEffect } from 'react';
import useRotatingBg from '../hooks/useRotatingBg'; // adjust path if needed

type HeaderProps = {
  currentColor: string;
};

const Header: React.FC<HeaderProps> = ({ currentColor }) => {

  const bgColors = ['#ecf5ed', '#f9f9f9', '#e8f0fe', '#fffaf0'];
  // 3s rotation
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Work', 'Writing', 'About', 'Services', 'Contact', 'Resources'];


  // Listen for scroll and set sticky state
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 28); // 28px is height of AnnouncementBanner
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderTextWithWave = (text: string) => (
    <span className="inline-block group hover:text-gray-500">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block transition-transform duration-300 group-hover:text-gray-500"
          style={{ transitionDelay: `${i * 50}ms` }}
        >
          <span className="inline-block group-hover:transform group-hover:-skew-y-[8deg]">
            {char}
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <header
      className={`${isSticky ? 'fixed top-0' : 'relative'} z-40 w-full transition-all duration-300`}
      style={{ backgroundColor: currentColor }}
    >


      <div className="flex items-start justify-between px-6 pt-2 pb-4 h-[60px]">
        {/* Logo */}
        <div className="ml-[70px] mt-[3px] text-[44px] font-bold text-black rotate-45 transition-transform duration-300 hover:rotate-0 leading-none">
          G
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-start mt-[12px] mr-[100px] space-x-6 font-[520] text-[18px]">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-black hover:text-gray-500 transition-all duration-300"
            >
              {renderTextWithWave(item)}
            </a>
          ))}

          <a
            href="mailto:your@email.com"
            className="rounded-md bg-black px-3 py-[6px] text-white text-[13px] transition transform hover:-translate-y-1 hover:opacity-90"
          >
            Email me →
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center mr-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-[60px] left-0 w-[40%] h-screen bg-white bg-opacity-90 backdrop-blur z-50 p-6">
          {/* Logo inside mobile menu */}
          <div className="text-[32px] font-bold text-black rotate-45 mt-5 mb-4">B</div>

          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-black text-lg font-medium hover:text-gray-500 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}

            <a
              href="mailto:your@email.com"
              className="rounded-md bg-black px-3 py-[6px] text-white text-[13px] transition hover:opacity-90 w-fit"
              onClick={() => setIsOpen(false)}
            >
              Email me →
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
