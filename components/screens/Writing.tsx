'use client'
import React, { useState } from 'react'

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
]

const filters = ['Blog posts', 'Side projects']

const WritingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Blog posts')

  return (
    <section className="flex min-h-screen flex-col bg-white md:flex-row">
      {/* Left Column (Sticky Heading) */}
      <div className="w-full px-4 py-10 sm:px-6 md:w-2/5 md:px-10 md:py-20 lg:px-20">
        <div className="sticky top-20 md:top-32">
          <div className="mb-4 h-[2px] w-full bg-black" />
          <h2 className="text-6xl font-semibold text-black">Writing</h2>
        </div>
      </div>

      {/* Right Column (Scrollable Content) */}
      <div className="w-full space-y-14 px-4 py-10 sm:px-6 md:w-3/5 md:px-10 md:py-20 lg:px-20">
        {/* Filter Buttons */}
        <div className="mb-10 flex gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveTab(filter)}
              className={`cursor-pointer transform rounded-full px-6 py-2 text-base font-medium whitespace-nowrap transition-all duration-200 hover:-translate-y-1 ${
                activeTab === filter
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
            <div
              key={item.id}
              className="rounded-lg border-b border-gray-200 p-2 pb-6 transition-colors duration-200 hover:bg-gray-50 md:p-4 lg:p-4"
            >
              <p className="group relative mb-2 cursor-pointer text-3xl font-medium text-black">
                <span className="bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 group-hover:bg-[length:100%_2px]">
                  {item.title}
                </span>
              </p>
              <div className="flex items-center gap-2 text-lg font-semibold text-gray-600">
                {item.tag && (
                  <span className="rounded-full bg-gray-200 px-2 py-0.5 text-sm text-gray-800">
                    {item.tag}
                  </span>
                )}
                <span className="mt-1">{item.date}</span>
                <span>•</span>
                <span>{item.duration}</span>
              </div>
            </div>
          ))}

          {/* View All */}
          <div className="pt-6">
            <p className="cursor-pointer p-2 text-2xl font-medium text-black hover:underline">
              View all writing →
            </p>
          </div>
        </div>

        {/* Bottom spacing */}
      </div>
    </section>
  )
}

export default WritingSection
