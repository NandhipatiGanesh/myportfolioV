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
    <section className="flex min-h-screen flex-col bg-black md:flex-row">
      {/* Left Column (Heading) - now 2/5 */}
      <div className="w-full px-4 py-10 sm:px-6 md:w-2/5 md:px-10 md:py-20 lg:px-20">
        <div className="sticky top-20 md:top-32">
          <div className="mb-4 h-[2px] w-full bg-gray-500" />
          <h2 className="text-4xl font-semibold text-gray-200">Experience</h2>
        </div>
      </div>

      {/* Right Column (Experience Cards) - now 3/5 */}
      <div className="w-full space-y-10 px-4 py-10 sm:px-6 md:w-3/5 md:px-10 md:py-20 lg:px-20">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="flex cursor-pointer items-start gap-5 rounded-lg border-b border-gray-500 p-2 hover:border hover:border-white/30  hover:bg-white/10 hover:backdrop-blur-md md:p-4 lg:p-4"
          >
            <img
              src={exp.logo}
              alt={exp.company}
              className="h-14 w-14 rounded-lg object-contain"
            />
            <div className="cursor-pointer">
              <p className="mb-1 cursor-pointer md:text-3xl lg:text-3xl text-2xl  font-semibold text-gray-200">
                {exp.company}
              </p>
              <p className="mb-1 cursor-pointer text-xl md:text-2xl lg:text-2xl text-gray-200">
                {exp.role}
              </p>
              <p className="mt-1 text-lg font-medium text-gray-200">
                {exp.date}
              </p>
            </div>
          </div>
        ))}

        {/* See Full CV Button */}
        <div className="pt-8">
          <button className="cursor-pointer rounded-full border border-white/30 bg-white/10 px-10 py-3 font-medium text-white backdrop-blur-md transition hover:-translate-y-1 hover:opacity-90">
            See full CV →
          </button>
        </div>

        {/* Bottom Spacer */}
      </div>
    </section>
  )
}

export default ExperienceSection
