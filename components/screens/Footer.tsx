'use client'
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const renderTextWithWave = (text: string) => (
    <span className="group inline-block cursor-pointer hover:text-gray-600">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block transition-transform duration-300 group-hover:text-gray-600"
          style={{ transitionDelay: `${i * 50}ms` }}
        >
          <span className="inline-block group-hover:-skew-y-[8deg] group-hover:transform">
            {char === ' ' ? '\u00A0' : char}
          </span>
        </span>
      ))}
    </span>
  )

  return (
    <footer className="bg-[#f5f5f5] px-4 py-10 text-black transition-colors duration-500 group-hover:bg-[#fceef9] sm:px-6 md:px-10 lg:px-20">
      {/* Top Section */}
      <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        {/* Rotated G Icon */}
        {/* Rotated G Icon */}
        <div className="flex w-full justify-center md:w-auto md:justify-start">
          <p className="rotate-[45deg] transform cursor-pointer text-5xl font-bold transition-transform duration-500 hover:rotate-0">
            G
          </p>
        </div>

        {/* Description */}
        <div className="max-w-xl text-center text-3xl font-semibold md:text-left">
          <p>
            I’m Ganesh — a freelance web developer and mobile application
            developer based in Hyderabad
          </p>
        </div>

        {/* Buttons */}
        {/* Buttons */}
        <div className="flex w-full justify-center gap-3 md:w-auto md:justify-end">
          <button className="cursor-pointer rounded-lg border bg-white px-4 py-3 font-medium transition hover:-translate-y-1">
            Copy email
          </button>
          <button className="cursor-pointer rounded-lg bg-black px-4 py-3 font-medium text-white transition hover:-translate-y-1">
            Email me →
          </button>
        </div>
      </div>
      <br />

      {/* Divider */}
      <div className="mb-10 h-[1px] w-full bg-gray-300" />
      <br />

      {/* Grid Section Split into Two Rows */}
      <div className="space-y-12">
        {/* Row 1 - First 3 Columns with Images */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:ml-[16.3%] lg:grid-cols-3">
          {/* Column 1 */}
          <div className="">
            <p className="mb-3 font-semibold text-gray-500">Wordpress</p>
            {[
              { name: 'The Fallen', img: '/images/ventures/the fallen.png' },
              {
                name: 'Capital Flasher',
                img: '/images/ventures/capital flasher.png',
              },
              {
                name: 'Money Printers',
                img: '/images/ventures/money printers.png',
              },
              { name: 'Flash Zone', img: '/images/ventures/flash zone.png' },
              { name: 'Simula', img: '/images/ventures/simula.png' },
            ].map((item) => (
              <div
                key={item.name}
                className="mt-3 flex items-center gap-2 rounded-lg p-2 text-lg font-medium hover:bg-gray-200"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-8 w-8 rounded-sm object-cover"
                />
                {renderTextWithWave(item.name)}
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div>
            <p className="mb-3 font-semibold text-gray-500">Dashboards</p>
            {[
              { name: 'Web Dashboard', img: '/images/work/dashboard.webp' },
              {
                name: 'Free Components',
                img: '/images/work/freecomponents.jpg',
              },
              {
                name: 'GPT Template',
                img: 'https://webcomponents.blog/wp-content/uploads/2025/07/Download-This-Free-PersonalGPT-Chat-UI-%E2%80%93-Open-Source-Next.js-Template.webp',
              },
              //{ name: 'Narrate', img: '/images/icons/narrate.jpg' },
              //{ name: 'Assemble', img: '/images/icons/assemble.jpg' },
            ].map((item) => (
              <div
                key={item.name}
                className="mt-3 flex items-center gap-2 rounded-lg p-2 text-lg font-medium hover:bg-gray-200"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-8 w-8 rounded-sm object-cover"
                />
                {renderTextWithWave(item.name)}
              </div>
            ))}
            {/* <div className="flex text-lg font-medium items-center gap-2 mt-10">
                            <img src="/images/icons/become-affilate.svg" alt="affiliate" className="w-8 h-8 rounded-sm" />
                            {renderTextWithWave('Become an affiliate')}
                        </div> */}
          </div>

          {/* Column 3 */}
          <div>
            <p className="mb-3 font-semibold text-gray-500">Mobile Apps</p>
            {[
              { name: 'Good Garms', img: '/images/ventures/good-garms.jpg' },
              { name: 'A1', img: '/images/ventures/A1.png' },
            ].map((item) => (
              <div
                key={item.name}
                className="mt-3 flex items-center gap-2 rounded-lg p-2 text-lg font-medium hover:bg-gray-200"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-8 w-8 rounded-sm object-cover"
                />
                {renderTextWithWave(item.name)}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:ml-[16.3%] lg:grid-cols-3">
          {/* Column 4 */}
          <div>
            <p className="mb-3 font-semibold text-gray-500">Ventures</p>
            {['Freelance Things', 'Good Garms', 'A1'].map((item) => (
              <div
                key={item}
                className="mt-1 rounded-lg p-2 text-lg font-medium hover:bg-gray-200"
              >
                {renderTextWithWave(item)}
              </div>
            ))}
          </div>

          {/* Column 5 */}
          <div>
            <p className="mb-3 font-semibold text-gray-500">Social</p>
            {['Twitter (X)', 'Instagram', 'LinkedIn', 'Webflow'].map((item) => (
              <div
                key={item}
                className="mt-1 rounded-lg p-2 text-lg font-medium hover:bg-gray-200"
              >
                {renderTextWithWave(item)}
              </div>
            ))}
          </div>

          {/* Column 6 */}
          <div>
            <p className="font-semibold text-gray-500">Other</p>
            {['Tools I use', 'Built in Webflow'].map((item) => (
              <div
                key={item}
                className="mt-1 rounded-lg p-2 text-lg font-medium hover:bg-gray-200"
              >
                {renderTextWithWave(item)}
              </div>
            ))}
            {/* Footer Note */}
            <div className="text-m mt-10 rounded-lg p-2 text-gray-600 hover:bg-gray-200 cursor-pointer">
              ©{currentYear} to ∞ Ganesh
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
