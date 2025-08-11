'use client';
import React, { useState } from 'react';

const writings = [
  {
    id: 1,
    title: '5 best Framer portfolio templates',
    tag: 'New',
    date: 'Jun 4, 2025',
    duration: '7 min',
  },
  {
    id: 2,
    title: 'The quiet power of shared spaces',
    date: 'May 2, 2025',
    duration: '5 min',
  },
  {
    id: 3,
    title: '8 free email templates for freelancers',
    date: 'Dec 10, 2024',
    duration: '5 min',
  },
  {
    id: 4,
    title: '4 mindset changes that made me a better freelancer',
    date: 'Jan 16, 2024',
    duration: '3 min',
  },
  {
    id: 5,
    title: 'Selling templates on Framer vs. Webflow',
    date: 'Jul 4, 2023',
    duration: '5 min',
  },
];

const filters = ['Blog posts', 'Interviews', 'Side projects'];

const WritingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Blog posts');

  return (
    <section className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Left Column (Sticky Heading) */}
      <div className="w-full md:w-2/5 px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-20">
        <div className="sticky top-20 md:top-32">
          <div className="mb-4 h-[2px] w-full bg-black" />
          <h2 className="text-6xl font-semibold text-black">Writing</h2>
        </div>
      </div>

      {/* Right Column (Scrollable Content) */}
      <div className="w-full md:w-3/5 px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-20 space-y-14">
        {/* Filter Buttons */}
        <div className="flex gap-3 mb-10 overflow-y-scroll">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveTab(filter)}
              className={`whitespace-nowrap rounded-full px-6 py-2 text-base font-medium transition-all duration-200 transform hover:-translate-y-1 ${activeTab === filter
                  ? 'bg-black text-white hover:opacity-90'
                  : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
            >
              {filter}
            </button>

          ))}
        </div>

        {/* Articles List */}
        <div className="space-y-14">
          {writings.map((item) => (
            <div key={item.id} className="border-b border-gray-200 pb-6">
              <p className="text-3xl font-medium text-black mb-2 relative group cursor-pointer">
                <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500">
                  {item.title}
                </span>
              </p>
              <div className="text-lg font-semibold text-gray-600 flex items-center gap-2">
                {item.tag && (
                  <span className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-sm">
                    {item.tag}
                  </span>
                )}
                <span>{item.date}</span>
                <span>•</span>
                <span>{item.duration}</span>
              </div>
            </div>
          ))}

          {/* View All */}
          <div className="pt-6">
            <p className="text-black font-medium text-2xl hover:underline cursor-pointer">
              View all writing →
            </p>
          </div>
        </div>

        {/* Bottom spacing */}

      </div>
    </section>
  );
};

export default WritingSection;
