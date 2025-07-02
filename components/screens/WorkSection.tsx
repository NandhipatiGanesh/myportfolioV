'use client';
import React, { useState } from 'react';

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

      <div className="h-15 bg-white"></div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Row 1 - Full Width */}
        <div className="col-span-1 sm:col-span-2 space-y-2">
          <img
            src="/images/work/pleo-onboarding.png"
            alt="Pleo Onboarding"
            className="w-full rounded-xl object-cover transition duration-300 ease-in-out hover:brightness-90 hover:animate-tilt"
          />
          <div>
            <p className="text-2xl font-semibold text-black">Pleo →</p>
            <p className="text-2xl text-black">Onboarding employees in-app</p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="space-y-2">
          <img
            src="/images/work/cornerfold.jpg"
            alt="Cornerfold"
            className="w-full rounded-xl object-cover transition duration-300 ease-in-out hover:brightness-90 hover:animate-tilt"
          />
          <div>
            <p className="text-2xl font-semibold text-black">Cornerfold →</p>
            <p className="text-2xl text-black">Save your favourite places</p>
          </div>
        </div>

        <div className="space-y-2">
          <img
            src="/images/work/kernel.jpg"
            alt="Kernel"
            className="w-full rounded-xl object-cover transition duration-300 ease-in-out hover:brightness-90 hover:animate-tilt"
          />
          <div>
            <p className="text-2xl font-semibold text-black">Kernel →</p>
            <p className="text-2xl text-black">Marketing site design and build</p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="space-y-2">
          <img
            src="/images/work/pleo-expense.jpg"
            alt="Pleo Expense"
            className="w-full rounded-xl object-cover transition duration-300 ease-in-out hover:brightness-90 hover:animate-tilt"
          />
          <div>
            <p className="text-2xl font-semibold text-black">Pleo →</p>
            <p className="text-2xl text-black">Hassle-free expense allowances</p>
          </div>
        </div>

        <div className="space-y-2">
          <img
            src="/images/work/monzo-credit.jpg"
            alt="Monzo Credit"
            className="w-full rounded-xl object-cover transition duration-300 ease-in-out hover:brightness-90 hover:animate-tilt"
          />
          <div>
            <p className="text-2xl font-semibold text-black">Monzo →</p>
            <p className="text-2xl text-black">Credit scores simplified</p>
          </div>
        </div>
      </div>

      <div className="h-30 bg-white"></div>
      
    </section>
  );
};

export default WorkSection;
