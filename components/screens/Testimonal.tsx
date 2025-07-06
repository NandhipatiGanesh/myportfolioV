'use client';
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 't1',
    text: `Bryn’s a rockstar. That rare combination of the creative skills as a top notch designer with the communication and organisational skills to make it so easy to work with him.

I’d absolutely recommend working with him.`,
    name: 'Seb Agertoft',
    title: 'Coach and advisor',
    avatar: '/images/testimonials/seb-agertoft.jpeg',
  },
  {
    id: 't2',
    text: `Bryn gets it. He gets the business needs. He gets the customer. He gets how to work with engineers. He gets feedback loops, testing, experimentation.
He's also really fun to work with. You should hire him.`,
    name: 'Jonathan Thomson',
    title: 'Co-founder, Fy!',
    avatar: '/images/testimonials/jonathan-thomson.png',
  },
  {
    id: 't3',
    text: `Bryn was an absolute joy to work with - extremely professional and pleasant. He went out of his way to understand what I was looking for and delivered it quickly.
The handoff through Webflow was thoroughly explained and alleviated any confusion I had. I have no complaints!`,
    name: 'James Lancaster',
    title: 'Engineer & Producer, Twin Silica',
    avatar: '/images/testimonials/james-lancaster.jpg',
  },
  {
    id: 't4',
    text: `Bryn was great at communicating clearly throughout and adding structure and timelines to the process. He gives a clear direction whilst also giving room for you to input and provide feedback.
―
The quality of the final website is amazing — Bryn pays a lot of attention to detail and is great at bringing a bigger vision to life.`,
    name: 'Flora Devlin',
    title: 'Product Coach',
    avatar: '/images/testimonials/flora.jpg',
  },
  {
    id: 't5',
    text: `Bryn was great at communicating clearly throughout and adding structure and timelines to the process. He gives a clear direction whilst also giving room for you to input and provide feedback.
―
The quality of the final website is amazing — Bryn pays a lot of attention to detail and is great at bringing a bigger vision to life.`,
    name: 'Anders Krohn',
    title: 'Co-founder, Momentum',
    avatar: '/images/testimonials/anders.jpeg',
  },
  {
    id: 't6',
    text: `Working with Bryn has been an absolute delight! Bryn seamlessly translated our vision of a very new, unheard of, innovative product into visually stunning and user- friendly designs.
His ability to balance aesthetics with functionality is truly commendable. Definitely recommend his services to anyone seeking a top-tier product designer who brings both skill and passion to the table.`,
    name: 'Harsh Shah',
    title: 'Lead Product Manager, FY!',
    avatar: '/images/testimonials/harsh-shah.jpeg',
  },
  {
    id: 't7',
    text: `Working with Bryn is a pleasure, AND you get great quality creative work ready to use at the same time. I wouldn't hesitate in
recommending working with Bryn to anyone.`,
    name: 'Peter Hartwig',
    title: 'Chief Experience Officer, Tricent',
    avatar: '/images/testimonials/peter-hartwig.png',
  },
  {
    id: 't8',
    text: `We worked with Bryn on a suite of 125 icons for a medical client, and the process which
Bryn suggested was flawless and smooth throughout. The client is really pleased with the final suite, and as an agency we loved working with Bryn.
He was really collaborative, took on feedback quickly and helped us come up with solutions.`,
    name: 'Phoebe Kennedy',
    title: 'Account Director, Otherway',
    avatar: '/images/testimonials/phoebe.jpeg',
  },
  {
    id: 't9',
    text: `Bryn is one of the best freelance designers we've worked with at Kernel. He works quickly, his communication is excellent and the output is always of the highest quality.
We couldn't recommend him highly enough and we hope to keep working with Bryn on many projects in the future.`,
    name: 'Tom Carrington Smith',
    title: 'CEO & Co-founder, Kernel',
    avatar: '/images/testimonials/tom-smith.jpeg',
  },
  {
    id: 't10',
    text: `I strongly recommend Bryn to anyone looking to push forward their product or brand. I've had the pleasure to work with him in different capacities over the years, and always enjoyed his high standards, easy communication style and pragmatic approach to getting stuff done.
Kernel ended up with a website that converts really well. Working with Bryn is a safe bet for top quality design.`,
    name: 'Zander Brade',
    title: 'Freelance Designer, Kernel',
    avatar: '/images/testimonials/zander.jpeg',
  },
];

const TestimonialSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(2);

  useEffect(() => {
    const updateCardsPerPage = () => {
      setCardsPerPage(window.innerWidth < 768 ? 1 : 2);
    };
    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  const total = testimonials.length;

  const visibleTestimonials = Array.from({ length: cardsPerPage }).map(
    (_, i) => testimonials[(startIndex + i) % total]
  );

  const handlePrev = () => {
    setStartIndex((prev) => (prev - cardsPerPage + total) % total);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + cardsPerPage) % total);
  };

  return (
    <section className="px-4 py-20 sm:px-6 md:px-10 lg:px-20 bg-white">
      <div className="mb-6 h-[2px] w-full bg-black" />
      <h2 className="text-6xl font-semibold text-black mb-12">Testimonials</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleTestimonials.map((t) => (
          <div
            key={t.id}
            className="bg-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <p className="text-[1.25rem] md:text-[1.375rem] text-black leading-relaxed whitespace-pre-line mb-6">
              {t.text}
            </p>
            <div className="flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-lg font-semibold text-black">{t.name}</p>
                <p className="text-sm text-gray-600">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center mt-10">
        <div className="flex items-center gap-6 px-6 py-3 bg-black rounded-full">
          <button
            onClick={handlePrev}
            className="text-white text-xl hover:scale-110 transition"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="text-white text-xl hover:scale-110 transition"
          >
            →
          </button>
        </div>
      </div>

      <div className="h-30 bg-white" />

    </section>
  );
};

export default TestimonialSection;
