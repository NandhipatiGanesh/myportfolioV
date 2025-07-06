'use client';
import React from 'react';

const interests = [
  '/images/interests/img1.jpg',
  '/images/interests/img2.jpg',
  '/images/interests/img3.jpg',
  '/images/interests/img4.jpg',
  '/images/interests/img5.jpg',
  '/images/interests/img6.jpg',
  '/images/interests/img7.jpg',
  '/images/interests/img8.jpg',
  '/images/interests/img9.jpg',
  '/images/interests/img10.jpg',
  '/images/interests/img11.jpg',
  '/images/interests/img12.jpg',
];

const InterestsSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row bg-white min-h-screen">
      {/* Left - Sticky Heading */}
      <div className="w-full md:w-2/5 px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-20">
        <div className="sticky top-20 md:top-32">
          <div className="mb-4 h-[2px] w-full bg-black" />
          <h2 className="text-6xl font-semibold text-black">Interests</h2>
        </div>
      </div>

      {/* Right - Grid of Images */}
      <div className="w-full md:w-3/5 px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {interests.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Interest ${index + 1}`}
              className="w-full h-[140px] sm:h-[160px] md:h-[180px] object-cover rounded-xl transition-transform duration-300 hover:scale-[1.03]"
            />
          ))}
        </div>
        <div className="h-30 bg-white" />
      </div>
    </section>
  );
};

export default InterestsSection;
