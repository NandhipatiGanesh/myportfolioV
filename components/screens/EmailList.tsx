'use client';
import React, { useState } from 'react';

const EmailListSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Placeholder for form submission logic
    alert(`Subscribed with ${email}`);
  };

  return (
    <section className="bg-white px-4 py-20 sm:px-6 md:px-10 lg:px-20">
      {/* Top Line */}
      <div className="mb-4 h-[2px] w-full bg-black" />
      {/* Heading */}
      <h2 className="text-6xl font-semibold text-black mb-10">Email list</h2><br /><br />

      {/* Subheading */}
      <h3 className="text-5xl sm:text-7xl font-bold text-black leading-tight max-w-5xl mb-10 md:w-3/5">
        Get design insights and articles straight to your inbox
      </h3>

      {/* Input and button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-6 py-4 border border-gray-300 rounded-lg w-full sm:w-[300px] text-black text-base focus:outline-none"
        />
        <button
          onClick={handleSubscribe}
          className="bg-black text-white px-6 py-4 rounded-lg font-medium transition transform hover:-translate-y-1 hover:opacity-90"
        >
          Subscribe →
        </button>
      </div>

      {/* Footer text */}
      <p className="text-base text-gray-500">
        Join 2,600+ designers · Unsubscribe at any time
      </p>
      
      
    </section>
  );
};

export default EmailListSection;
