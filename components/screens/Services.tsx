'use client';
import React from 'react';

const services = [
  {
    id: 1,
    title: 'Website design →',
    image: '/images/services/credd-website.jpg',
  },
  {
    id: 2,
    title: 'Custom application development →',
    image: '/images/services/pleo-product.jpg',
  },
  {
    id: 3,
    title: 'Mobile application development →',
    image: '/images/services/marketing-website.jpg',
  },
  {
    id: 4,
    title: 'Wordpress development →',
    image: '/images/services/website-template.jpg',
  },
  {
    id: 5,
    title: 'Social Media →',
    image: '/images/services/minimal-icons.jpg',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 md:px-10 lg:px-20">
      {/* Top line and heading */}
      <div className="mb-6 h-[2px] w-full bg-black" />
      <h2 className="text-6xl font-semibold text-black mb-12">Services</h2>

      {/* Services List */}
      <div className="space-y-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="border-b border-gray-200 pb-6"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full md:w-48 h-32 object-cover rounded-lg"
              />

              {/* Title */}
              <p className="text-4xl md:text-5xl font-semibold text-black md:max-w-md">
                {service.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="h-20 bg-white" />
    </section>
  );
};

export default ServicesSection;
