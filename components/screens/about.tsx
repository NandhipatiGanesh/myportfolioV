'use client';
import React from 'react';

const AboutSection: React.FC = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText('you@example.com');
    alert('Email copied to clipboard');
  };

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
    <section className="bg-white text-black min-h-screen w-full px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <p className="mb-6 text-[28px] leading-[1.4] font-normal">
          Freelance senior product and website designer with over 11 years of experience. Based in Copenhagen. Available for remote-friendly freelance work.
        </p>

        <br />

        <p className="mb-3 text-[28px] leading-[1.2] font-normal">
          Most recently at Denmark’s newest unicorn,{' '}
          <span className="font-semibold underline decoration-gray-300 underline-offset-4">
            {renderTextWithWave('Pleo')}
          </span>.
        </p>

        <p className="mb-3 text-[28px] leading-[1.2] font-normal">
          Previously, at{' '}
          <span className="font-semibold underline decoration-gray-300 underline-offset-4">
            {renderTextWithWave('Monzo')}
          </span>{' '}
          — the fastest growing bank in the UK.
        </p>

        <p className="mb-8 text-[28px] leading-[1.2] font-normal">
          Before that, the first design hire at{' '}
          <span className="font-semibold underline decoration-gray-300 underline-offset-4">
            {renderTextWithWave('Thriva')}
          </span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:you@example.com"
            className="rounded-[0.55rem] bg-black px-8 py-4 text-lg font-medium text-white transition transform hover:-translate-y-1 hover:opacity-90 text-center sm:w-auto w-full"
          >
            Email me →
          </a>
          <button
            onClick={handleCopy}
            className="rounded-[0.55rem] border border-gray-300 px-8 py-4 text-lg font-medium transition transform hover:-translate-y-1 hover:bg-gray-100 text-center sm:w-auto w-full"
          >
            Copy email
          </button>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
