'use client';
import React, { useState } from 'react';

const projects = [
  {
    id: 'work1',
    image: '/images/work/pleo-onboarding.png',
    title: 'Pleo →',
    subtitle: 'Onboarding employees in-app',
  },
  {
    id: 'work2',
    image: '/images/work/cornerfold.jpg',
    title: 'Cornerfold →',
    subtitle: 'Save your favourite places',
  },
  {
    id: 'work3',
    image: '/images/work/kernel.jpg',
    title: 'Kernel →',
    subtitle: 'Marketing site design and build',
  },
  {
    id: 'work4',
    image: '/images/work/pleo-expense.jpg',
    title: 'Pleo →',
    subtitle: 'Hassle-free expense allowances',
  },
  {
    id: 'work5',
    image: '/images/work/monzo-credit.jpg',
    title: 'Monzo →',
    subtitle: 'Credit scores simplified',
  },
];

const WorkSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Product', 'Web'];

  return (
    <section className="px-4 py-20 sm:px-6 md:px-10 lg:px-20 bg-white">
      {/* Top Line */}
      <div className="mb-6 h-[2px] w-full bg-black" />

      {/* Heading & Filter Buttons */}
      <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
        <h2 className="text-6xl font-semibold text-black">Work</h2>

        <div className="flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-6 py-2 text-base font-medium transition-all duration-200 hover:-translate-y-1 ${
                activeTab === tab
                  ? 'bg-black text-white hover:opacity-90'
                  : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="h-15 bg-white" />

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id} // ✅ Unique keys
            className={`space-y-2 ${
              index === 0 ? 'col-span-1 sm:col-span-2' : ''
            }`}
          >
            <img
              src={project.image}
              alt={`${project.title} thumbnail`}
              className="w-full rounded-xl object-cover transition duration-300 ease-in-out hover:brightness-90 hover:scale-105"
            />
            <div>
              <p className="text-2xl font-semibold text-black">{project.title}</p>
              <p className="text-2xl text-black">{project.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="h-20 bg-white" />
    </section>
  );
};

export default WorkSection;
