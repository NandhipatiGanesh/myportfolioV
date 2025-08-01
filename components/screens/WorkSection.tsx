'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Template = {
  id: number;
  title: string;
  featured_image: string;
  custom_fields: {
    _template_price?: string[];
  };
  source: 'web' | 'mobile'; // added to distinguish source
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

const WorkSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Web' | 'Mobile'>('All');
  const [webProjects, setWebProjects] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);

  const tabs: Array<'All' | 'Web' | 'Mobile'> = ['All', 'Web', 'Mobile'];

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await axios.get('https://webcomponents.blog/wp-json/myplugin/v1/templates');
        const mapped = response.data.map((item: any) => ({
          id: item.id,
          title: item.title,
          featured_image: item.featured_image,
          custom_fields: item.custom_fields,
          source: 'web',
        }));
        setWebProjects(mapped);
      } catch (error) {
        console.error('Failed to fetch templates:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  // Combine based on tab
  const getVisibleProjects = (): Template[] => {
    if (activeTab === 'Web') return webProjects;
    if (activeTab === 'Mobile') return mobileProjects;
    return [...webProjects, ...mobileProjects];
  };

  const projects = getVisibleProjects();

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
              className={`rounded-full px-6 py-2 text-base font-medium transition-all duration-300 ease-in-out transform hover:-translate-y-1 ${
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

      {/* Loading State */}
      {loading ? (
        <div className="text-center text-lg">Loading projects...</div>
      ) : (
        <>
          {/* First Project (Full Width) */}
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
                <p className="text-xl text-gray-700">
                  {projects[0].custom_fields?._template_price?.[0] || 'No subtitle'}
                </p>
              </div>
            </div>
          )}

          {/* Remaining Projects in Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {projects.slice(1).map((project) => (
              <div key={project.id} className="flex flex-col gap-4 text-left">
                <div className="w-full overflow-hidden rounded-xl">
                  <img
                    src={project.featured_image}
                    alt={`${project.title} thumbnail`}
                    className="w-full h-auto object-contain rounded-xl transition duration-300 ease-in-out hover:brightness-90 hover:scale-105 max-h-[300px] mx-auto"
                  />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-semibold text-black">{project.title} →</p>
                  <p className="text-base sm:text-xl text-gray-700">
                    {project.custom_fields?._template_price?.[0] || 'No subtitle'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="h-20 bg-white" />
    </section>
  );
};

export default WorkSection;
