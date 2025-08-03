'use client';
import React from 'react';

const experiences = [
  {
    id: 1,
    company: 'Freelance',
    role: 'Senior product designer',
    date: 'August 2021 → Today',
    logo: '/images/experience/bryn-logo.svg',
  },
  {
    id: 2,
    company: 'Freelance Things',
    role: 'Founder',
    date: 'July 2023 → Today',
    logo: '/images/experience/freelance-logo.svg',
  },
  {
    id: 3,
    company: 'Pleo',
    role: 'Senior product designer',
    date: 'October 2020 → July 2021',
    logo: '/images/experience/pleo-logo.svg',
  },
  {
    id: 4,
    company: 'Good Garms',
    role: 'Co-founder',
    date: 'March 2020 → Today',
    logo: '/images/experience/good-garms-logo.svg',
  },
  {
    id: 5,
    company: 'Monzo',
    role: 'Product designer',
    date: 'April 2018 → August 2020',
    logo: '/images/experience/monzo-logo.svg',
  },
  {
    id: 6,
    company: 'Thriva',
    role: 'Senior product designer',
    date: 'July 2017 → April 2018',
    logo: '/images/experience/thriva-logo.svg',
  },
  {
    id: 7,
    company: 'Great Fridays (EPAM)',
    role: 'Senior visual designer',
    date: 'November 2014 → June 2017',
    logo: '/images/experience/great-fridays-logo.svg',
  },
  {
    id: 8,
    company: 'Morrisons Digital',
    role: 'Freelance digital designer',
    date: 'July 2014 → October 2014',
    logo: '/images/experience/morrisons-logo.svg',
  },
  {
    id: 9,
    company: 'Firedog',
    role: 'Junior digital designer',
    date: 'October 2010 → June 2013',
    logo: '/images/experience/firedog-logo.jpg',
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Column (Heading) - now 2/5 */}
      <div className="w-full md:w-2/5 px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-20">
        <div className="sticky top-20 md:top-32">
          <div className="mb-4 h-[2px] w-full bg-black" />
          <h2 className="text-6xl font-semibold text-black">Experience</h2>
        </div>
      </div>

      {/* Right Column (Experience Cards) - now 3/5 */}
      <div className="w-full md:w-3/5 px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-20 space-y-10">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="flex items-start gap-5 border-b border-gray-200 pb-6"
          >
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-14 h-14 object-contain rounded-lg"
            />
            <div>
              <p className="text-3xl font-semibold text-black">{exp.company}</p>
              <p className="text-2xl text-black">{exp.role}</p>
              <p className="text-lg font-medium text-gray-500 mt-1">{exp.date}</p>
            </div>
          </div>
        ))}

        {/* See Full CV Button */}
        <div className="pt-8">
          <button className="px-7 py-3 rounded-full bg-black text-white font-medium hover:opacity-90 transform hover:-translate-y-1 transition-all">
            See full CV →
          </button>
        </div>

        {/* Bottom Spacer */}
        
      </div>
    </section>
  );
};

export default ExperienceSection;

