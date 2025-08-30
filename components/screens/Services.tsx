'use client'
import React from 'react'

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
]

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-black px-4 py-20 sm:px-6 md:px-10 lg:px-20">
      {/* Top line and heading */}

      <h2 className="mb-12 text-4xl font-semibold text-gray-200">Services</h2>

      {/* Services List */}
      <div className="space-y-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="duraton-200 cursor-pointer rounded-lg border-b border-gray-500 p-2 pb-6 transition hover:border hover:border-white/30 hover:bg-white/10 hover:backdrop-blur-md md:p-4 lg:p-4"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="h-32 w-full rounded-lg object-cover md:w-48"
              />

              {/* Title */}
              <p className="text-2xl md:text-3xl lg:text-3xl font-semibold text-gray-200 md:text-4xl">
                {service.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
