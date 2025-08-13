'use client';
import React from 'react';

const AboutMe: React.FC = () => {
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
    <section className="px-4 py-20 sm:px-6 md:px-10 lg:px-20 bg-white">
      {/* Top Line & Heading */}
      <div className="mb-6 h-[2px] w-full bg-black" />
      <h2 className="text-6xl font-semibold text-black mb-12">About</h2>
      <br /><br />

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column – 50% */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-4xl text-black font-medium leading-snug">
            I’m Ganesh — a freelance web and mobile application developer with over 3 years of experience.
            I care a lot about using design for positive impact. Currently based in Hyderabad, India.
          </p>

          <img
            src="/images/about/about.webp"
            alt="Profile"
            className="w-56 h-56 rounded-xl object-cover"
          />
        </div>

        {/* Right Column – 50% */}
        <div className="md:w-1/2 space-y-6 text-2xl font-medium text-black leading-snug">
          <p>
            I’m a passionate full-stack developer from Hyderabad, India with a deep love for building exceptional digital experiences. With expertise in web design, mobile app development, WordPress development, and custom applications, I specialize in turning ideas into elegant, high-performing products that are both user-friendly and business-driven.{' '}
            <span className="font-semibold underline decoration-gray-300 underline-offset-4">
              {renderTextWithWave('')}
            </span>
              {' '}
            <span className="font-semibold underline decoration-gray-300 underline-offset-4">
              {renderTextWithWave('')}
            </span>
          
          </p>


          <p>
            Over the years, I’ve worked with startups, agencies, and enterprises—delivering impactful solutions across industries such as healthcare, e-commerce, education, and finance. Every project I take on is built around clean code, intuitive UX, and scalable architecture—whether it's a dynamic website, a robust mobile app, or a tailored business solution.{' '}
            <span className="font-semibold underline decoration-gray-300 underline-offset-4">
              {renderTextWithWave('')}
            </span>
          
          </p>

          <p>
            I’m committed to creating not just for today, but for the future. With a mindset rooted in continuous learning and quality delivery, I approach every project with strategy, creativity, and technical precision. Let’s create something extraordinary together.{' '}
            <span className="font-semibold underline decoration-gray-300 underline-offset-4">
              {renderTextWithWave('')}
            </span>
              {' '}
            <span className="font-semibold underline decoration-gray-300 underline-offset-4">
              {renderTextWithWave('')}
            </span>{' '}
              {' '}
            <span className="font-semibold underline decoration-gray-300 underline-offset-4">
              {renderTextWithWave('')}
            </span>
            
          </p>
        </div>
      </div>
      
    </section>
  );
};

export default AboutMe;
