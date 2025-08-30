'use client'
import React from 'react'

const VenturesSection: React.FC = () => {
  const ventures = [
    {
      title: 'The Fallen',
      subtitle: 'The best sites on the web',
      image: '/images/ventures/the fallen.png',
    },
    {
      title: 'Capital Flasher',
      subtitle: 'Curated sustainable clothing',
      image: '/images/ventures/capital flasher.png',
    },
    {
      title: 'Money Printers',
      subtitle: 'The best sites on the web',
      image: '/images/ventures/money printers.png',
    },
    {
      title: 'Flash Softwares',
      subtitle: 'Curated sustainable clothing',
      image: '/images/ventures/flash softwares.png',
    },
    {
      title: 'Tether Flash',
      subtitle: 'The best sites on the web',
      image: '/images/ventures/tether flash.png',
    },
    {
      title: 'Flash Zone',
      subtitle: 'Curated sustainable clothing',
      image: '/images/ventures/flash zone.png',
    },

    {
      title: 'Flash Master',
      subtitle: 'The best sites on the web',
      image: '/images/ventures/flash master.png',
    },
    {
      title: 'Flash Tools',
      subtitle: 'The best sites on the web',
      image: '/images/ventures/flash tools.png',
    },
    {
      title: 'Simula',
      subtitle: 'The best sites on the web',
      image: '/images/ventures/simula.png',
    },
    {
      title: 'Transaccio',
      subtitle: 'The best sites on the web',
      image: '/images/ventures/transaccio.png',
    },
  ]

  return (
    <section className="bg-black px-4 py-20 sm:px-6 md:px-10 lg:px-20">
      <div className="mb-6 h-[2px] w-full bg-gray-200" />
      <h2 className="mb-10 text-4xl font-semibold text-gray-200">Wordpress</h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {ventures.map((venture, index) => (
          <div key={index} className="space-y-6 mb-2">
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
              <p className="text-lg text-gray-200">{venture.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default VenturesSection
