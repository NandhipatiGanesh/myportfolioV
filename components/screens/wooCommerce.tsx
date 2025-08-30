'use client'
import React from 'react'

const WooCommerceSection: React.FC = () => {
  const ventures = [
    {
      title: 'PathLete.org',
      subtitle: 'Pathologist Laboratory Company',
      image: '/images/ventures/the fallen.png',
    },
   
    
   
    
  ]

  return (
    <section className="bg-black px-4 py-20 sm:px-6 md:px-10 lg:px-20">
      <div className="mb-6 h-[2px] w-full bg-gray-500" />
      <h2 className="mb-10 text-4xl font-semibold text-gray-200 md:text-6xl">
        WooCommerce
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {ventures.map((venture, index) => (
          <div key={index} className="space-y-3">
            {/* Image */}
            <div className="md:h-80 lg:h-80 h-50 w-full overflow-hidden rounded-xl border border-gray-200 bg-white">
              <img
                src={venture.image}
                alt={venture.title}
                className="h-full w-full rounded-xl object-fill transition duration-300 ease-in-out hover:scale-105 hover:brightness-90"
              />
            </div>

            {/* Title and Subtitle */}
            <div>
              <p className="text-xl font-semibold text-gray-200 mb-1">
                {venture.title} →
              </p>
              <p className="text-lg text-gray-200" style={{letterSpacing:'0.2px'}}>{venture.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WooCommerceSection
