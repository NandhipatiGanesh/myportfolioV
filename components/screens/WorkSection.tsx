'use client';

import React, { useState } from 'react';

type Template = {
  id: number;
  title: string;
  featured_image: string;
  custom_fields: {
    _template_price?: string[];
  };
  source: 'web' | 'mobile';
};

const mobileProjects: Template[] = [
  {
    id: 1001,
    title: 'Dairy Tracker',
    featured_image: '/images/ventures/good-garms.jpg',
    custom_fields: {
      _template_price: ['Mobile milk order tracking app'],
    },
    source: 'mobile',
  },
  {
    id: 1002,
    title: 'Farm Orders',
    featured_image: '/images/ventures/A1.png',
    custom_fields: {
      _template_price: ['Mobile app for farm product orders'],
    },
    source: 'mobile',
  },
];

const webProjects: Template[] = [
  {
    id: 2001,
    title: 'Web Dashboard',
    featured_image: '/images/work/dashboard.webp',
    custom_fields: {
      _template_price: ['Personal portfolio website built with React'],
    },
    source: 'web',
  },
  {
    id: 2002,
    title: 'Chatbot Dashboard',
    featured_image: 'https://webcomponents.blog/wp-content/uploads/2025/07/Download-This-Free-PersonalGPT-Chat-UI-%E2%80%93-Open-Source-Next.js-Template.webp',
    custom_fields: {
      _template_price: ['Personal chatbot ui design with authenication'],
    },
    source: 'web',
  },
  {
    id: 2003,
    title: 'Free web Components',
    featured_image: '/images/work/freecomponents.jpg',
    custom_fields: {
      _template_price: ['Components Dashboard'],
    },
    source: 'web',
  }

];

const WorkSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Web' | 'Mobile'>('All');

  const tabs: Array<'All' | 'Web' | 'Mobile'> = ['All', 'Web', 'Mobile'];

  const getVisibleProjects = (): Template[] => {
    if (activeTab === 'Web') return webProjects;
    if (activeTab === 'Mobile') return mobileProjects;
    return [...webProjects, ...mobileProjects];
  };

  const projects = getVisibleProjects();

  return (
    <section className="px-4 py-20 sm:px-6 md:px-10 lg:px-20 bg-white">
      <div className="mb-6 h-[2px] w-full bg-black" />
      <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
        <h2 className="text-6xl font-semibold text-black">Work</h2>
        <div className="flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-6 py-2 text-base font-medium transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer ${
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

      {/* First Project */}
      {projects.length > 0 && (
        <div key={projects[0].id} className="mb-10">
          <div className="w-full flex justify-center items-center rounded-xl overflow-hidden border border-gray-200">
            <img
              src={projects[0].featured_image}
              alt={`${projects[0].title} thumbnail`}
              className="w-full h-auto object-contain rounded-xl transition duration-300 ease-in-out hover:brightness-90 hover:scale-105"
            />
          </div>
          <div className="mt-4">
            <p className="text-2xl font-semibold text-black">{projects[0].title} →</p>
            
          </div>
        </div>
      )}

      {/* Grid for remaining */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.slice(1).map((project) => (
          <div key={project.id} className="flex flex-col gap-4 text-left">
            <div className="w-full overflow-hidden rounded-xl">
              <img
                src={project.featured_image}
                alt={`${project.title} thumbnail`}
                className="w-full h-auto object-fill rounded-xl transition duration-300 ease-in-out hover:brightness-90 hover:scale-105 max-h-[400px] mx-auto"
              />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-semibold text-black">{project.title} →</p>
              
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default WorkSection;
