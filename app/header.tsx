import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-4">
      <div className="rotate-45 text-2xl font-bold">B</div>

      <nav className="flex items-center space-x-6 font-medium">
        <a href="#work">Work</a>
        <a href="#writing">Writing</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href="#resources">Resources</a>
        <a
          href="mailto:your@email.com"
          className="rounded-md bg-black px-4 py-2 text-white transition hover:opacity-90"
        >
          Email me →
        </a>
      </nav>
    </header>
  )
}

export default Header
