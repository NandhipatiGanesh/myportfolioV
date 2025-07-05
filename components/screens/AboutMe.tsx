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
            I’m Bryn — a freelance digital product and website designer with over 11 years of experience.
            I care a lot about using design for positive impact. Currently based in Copenhagen, Denmark.
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
            I was most recently working at{' '}
            <span className="font-semibold underline decoration-gray-300 underline-offset-4">
              {renderTextWithWave('Pleo')}
            </span>
            , Denmark’s newest unicorn. They raised the biggest Series C Denmark has seen.
            Before that I worked for{' '}
            <span className="font-semibold underline decoration-gray-300 underline-offset-4">
              {renderTextWithWave('Monzo')}
            </span>
            , the fastest growing bank in the UK. I led product design for over 4 million customers. I worked
            across multiple product squads solving complex money problems.
          </p>

          <p>
            Before Monzo - I was the first design-hire at health startup,{' '}
            <span className="font-semibold underline decoration-gray-300 underline-offset-4">
              {renderTextWithWave('Thriva')}
            </span>
            . I led all of Thriva's design output. From digital products, to test kit packaging, to marketing like their tube campaign. I was the 6th hire and the company grew to 35 whilst there. I played a big part in scaling the product team and processes.
          </p>

          <p>
            Over the years I've worked across health, non-profit, design tooling, finance, retail, automotive and
            telecoms. From early-stage startups like Thriva, to FTSE 100 companies like Morrisons, to hypergrowth businesses like Monzo. I've also worked with some pretty awesome brands like {' '}
            <span className="font-semibold underline decoration-gray-300 underline-offset-4">
              {renderTextWithWave('Mastercard')}
            </span>
            ,{' '}
            <span className="font-semibold underline decoration-gray-300 underline-offset-4">
              {renderTextWithWave('Microsoft')}
            </span>{' '}
            and{' '}
            <span className="font-semibold underline decoration-gray-300 underline-offset-4">
              {renderTextWithWave('Adidas')}
            </span>
            .
          </p>
        </div>
      </div>
      <div className="h-30 bg-white" />
    </section>
  );
};

export default AboutMe;
