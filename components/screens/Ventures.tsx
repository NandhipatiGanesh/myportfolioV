'use client';
import React from 'react';

const VenturesSection: React.FC = () => {
  return (
    <section className="px-4 py-20 sm:px-6 md:px-10 lg:px-20 bg-white">
      {/* Top Line */}
      <div className="mb-6 h-[2px] w-full bg-black" />

      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-6xl font-semibold text-black">Ventures</h2>
      </div>

      {/* Spacer below heading */}
      <div className="h-10 bg-white" />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Column 1: Venture 1 and Venture 3 */}
        <div className="space-y-6">
          {/* Venture 1 */}
          <div className="space-y-2 group">
            <img
              src="/images/ventures/A1.png"
              alt="Venture 1"
              className="w-full rounded-xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 hover:brightness-90"
            />
            <div>
              <p className="text-2xl font-semibold text-black">A1 →</p>
              <p className="text-2xl text-black">The best sites on the web</p>
            </div>
          </div>

          {/* Venture 3 */}
          <div className="space-y-2 group">
            <img
              src="/images/ventures/good-garms.jpg"
              alt="Venture 3"
              className="w-full rounded-xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 hover:brightness-90"
            />
            <div>
              <p className="text-2xl font-semibold text-black">Good Garms →</p>
              <p className="text-2xl text-black">Curated sustainable clothing</p>
            </div>
          </div>
        </div>

        {/* Column 2: Venture 2 */}
        <div className="space-y-2 group">
          <img
            src="/images/ventures/freelance-things.png"
            alt="Venture 2"
            className="w-full rounded-xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 hover:brightness-90"
          />
          <div>
            <p className="text-2xl font-semibold text-black">Freelance Things →</p>
            <p className="text-2xl text-black">Weekly things for freelancers</p>
          </div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-30 bg-white" />
    </section>
  );
};

export default VenturesSection;
