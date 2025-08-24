'use client'
import React from 'react'

const experiences = [
  {
    id: 1,
    company: 'Advait Technology Labs',
    role: 'Associate Software Engineer',
    date: 'December 2023 → Today',
    logo: '/images/experience/bryn-logo.svg',
  },
  {
    id: 2,
    company: 'Freelance Things',
    role: 'Founder',
    date: 'July 2022 → november 2023',
    logo: '/images/experience/freelance-logo.svg',
  },
]

const ExperienceSection: React.FC = () => {
  return (
    <section className="flex min-h-screen flex-col bg-white md:flex-row">
      {/* Left Column (Heading) - now 2/5 */}
      <div className="w-full px-4 py-10 sm:px-6 md:w-2/5 md:px-10 md:py-20 lg:px-20">
        <div className="sticky top-20 md:top-32">
          <div className="mb-4 h-[2px] w-full bg-black" />
          <h2 className="text-6xl font-semibold text-black">Experience</h2>
        </div>
      </div>

      {/* Right Column (Experience Cards) - now 3/5 */}
      <div className="w-full space-y-10 px-4 py-10 sm:px-6 md:w-3/5 md:px-10 md:py-20 lg:px-20">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="flex items-start gap-5 rounded-lg border-b border-gray-200 lg:p-4 md:p-4 p-2 hover:bg-gray-50 cursor-pointer"
          >
            <img
              src={exp.logo}
              alt={exp.company}
              className="h-14 w-14 rounded-lg object-contain"
            />
            <div className="cursor-pointer">
              <p className="mb-1 cursor-pointer text-3xl font-semibold text-black">
                {exp.company}
              </p>
              <p className="mb-1 cursor-pointer text-2xl text-black">
                {exp.role}
              </p>
              <p className="mt-1 text-lg font-medium text-gray-500">
                {exp.date}
              </p>
            </div>
          </div>
        ))}

        {/* See Full CV Button */}
        <div className="pt-8">
          <button className="transform rounded-full bg-black px-7 py-3 font-medium text-white transition-all hover:-translate-y-1 hover:opacity-90">
            See full CV →
          </button>
        </div>

        {/* Bottom Spacer */}
      </div>
    </section>
  )
}

export default ExperienceSection
