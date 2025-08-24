'use client';
import React from 'react';

const socials = ['Twitter (X)', 'Instagram', 'LinkedIn', 'Dribbble', 'Webflow'];

const GetInTouchSection: React.FC = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText('hello@bryntaylor.co.uk');
    alert('Email copied to clipboard');
  };

  const renderTextWithWave = (text: string) => (
    <span className="inline-block group hover:text-gray-600">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block transition-transform duration-300 group-hover:text-gray-600"
          style={{ transitionDelay: `${i * 30}ms` }}
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
      {/* Top Line */}
      <div className="mb-4 h-[2px] w-full bg-black" />

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6">Get in touch</h2><br /><br />
      <h3 className="text-5xl md:text-7xl font-semibold text-black mb-10">
        Have a project in mind?
      </h3><br /><br />

      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Left Column */}
        <div className="text-2xl font-medium text-black space-y-6 md:w-2/3">
          <p>
            Send some details about your project to{' '}
            <a
              href="mailto:hello@bryntaylor.co.uk"
              className="underline underline-offset-2 hover:text-gray-600 transition"
            >
              hello@bryntaylor.co.uk
            </a>
          </p>
          <p>
            I can help designing a website, designing a new product, improving an existing part of your product, building a strong design system, building websites in Webflow, or designing a{' '}
            <span className="underline underline-offset-2">custom icon set</span> for your business.
          </p>
          <p>
            Currently based in Hyderabad, India — available for remote-friendly work.
          </p><br /><br />

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="mailto:hello@bryntaylor.co.uk"
              className="px-6 py-3 rounded-lg bg-black text-white font-medium hover:opacity-90 hover:-translate-y-1 transition transform"
            >
              Email me →
            </a>
            <button
              onClick={handleCopy}
              className="px-6 py-3 rounded-lg border border-gray-300 font-medium hover:bg-gray-100 hover:-translate-y-1 transition transform cursor-pointer"
            >
              Copy email
            </button>
          </div>
        </div>

        {/* Right Column - Socials */}
        <div className="text-black text-3xl font-semibold space-y-4 md:w-1/3">
          {socials.map((platform, index) => (
            <p key={index} className="cursor-pointer underline underline-offset-4 decoration-gray-300 font-medium">
              {renderTextWithWave(platform)}
            </p>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default GetInTouchSection;
