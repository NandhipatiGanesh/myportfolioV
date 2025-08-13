'use client';
import React from 'react';
import useRotatingBg from '../../hooks/useRotatingBg'; // ✅ adjust the path if needed

type HeroProps = {
  currentColor: string;
};

const Hero: React.FC<HeroProps> = ({ currentColor }) => {
  return (
    <section
      className="flex min-h-screen items-center justify-start px-6 transition-colors duration-500"
      style={{ backgroundColor: currentColor }}
    >
      <div className="ml-[10%] md:ml-[20%]">
        <h1 className="text-4xl font-semibold text-black leading-tight md:text-6xl md:font-bold">
          Ganesh
          <br />
          <span className="whitespace-nowrap">Freelance web</span>
          <br />
          developer
        </h1>
      </div>
    </section>
  );
};

export default Hero;
