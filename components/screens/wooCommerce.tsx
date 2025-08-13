'use client';
import React from 'react';

const WooCommerceSection: React.FC = () => {
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
    ];

    return (
        <section className="px-4 py-20 sm:px-6 md:px-10 lg:px-20 bg-white">
            <div className="mb-6 h-[2px] w-full bg-black" />
            <h2 className="text-5xl md:text-6xl font-semibold text-black mb-10">
                WooCommerce
            </h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {ventures.map((venture, index) => (
                    <div key={index} className="space-y-3">
                        {/* Image */}
                        <div className="w-full h-80 rounded-xl overflow-hidden bg-white border border-gray-200">
                            <img
                                src={venture.image}
                                alt={venture.title}
                                className="w-full h-full object-contain rounded-xl transition duration-300 ease-in-out hover:brightness-90 hover:scale-105"
                            />
                        </div>

                        {/* Title and Subtitle */}
                        <div>
                            <p className="text-2xl font-semibold text-black">{venture.title} →</p>
                            <p className="text-xl text-black">{venture.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WooCommerceSection;
