'use client'
import React from 'react'
import BlurText from '@/app/components/TextAnimations/BlurText/BlurText'

const socials = ['Twitter (X)', 'Instagram', 'LinkedIn', 'Dribbble', 'Webflow']

const GetInTouchSection: React.FC = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText('hello@bryntaylor.co.uk')
    alert('Email copied to clipboard')
  }
  const handleAnimationComplete = () => {
    console.log('Animation completed!')
  }

  const renderTextWithWave = (text: string) => (
    <span className="group inline-block hover:text-gray-600">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block transition-transform duration-300 group-hover:text-gray-600"
          style={{ transitionDelay: `${i * 30}ms` }}
        >
          <span className="inline-block group-hover:-skew-y-[8deg] group-hover:transform">
            {char}
          </span>
        </span>
      ))}
    </span>
  )

  return (
    <section className="bg-black px-4 py-20 sm:px-6 md:px-10 lg:px-20">
      {/* Top Line */}
      <div className="mb-4 h-[2px] w-full bg-black" />

      <BlurText
        text=" Get in touch"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="mb-6 text-4xl font-semibold text-gray-200 md:text-5xl"
      />
      <br />
      <br />
      <BlurText
        text=" Have a project in mind?"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="md:mb-10 lg:mb-10 mb-1   text-3xl md:text-5xl lg:text-5xl font-semibold text-gray-200 md:text-7xl"
      />
      <br />
      <br />

      <div className="flex flex-col justify-between gap-12 md:gap-12 lg:gap-12  md:flex-row">
        {/* Left Column */}
        <div className="text-2xl font-medium text-gray-200 md:w-2/3">
          <BlurText
            text="Send some details about your project to ganeshwebby@gmail.com. I can help designing a website, designing a new product, improving
            an existing part of your product, building a strong design system,
            building websites in Webflow, or designing a
           
            for your business. Currently based in Hyderabad, India — available for remote-friendly
            work."
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="mb-6 text-2xl md:text-4xl lg:text-4xl font-semibold text-gray-200 md:text-3xl"
          />
          <br />
          <br />

          {/* Buttons */}
          <div className="flex flex-col md:flex-row lg:flex-row w-full justify-center gap-3 md:w-auto md:justify-start">
            <button className="cursor-pointer text-[16px] rounded-full border bg-white  px-10 py-3 font-medium text-black transition hover:-translate-y-1">
              Copy email
            </button>
            <button className="cursor-pointer text-[16px] rounded-full border border-white/30 bg-white/10 px-10 py-3 font-medium text-white backdrop-blur-md transition hover:-translate-y-1">
              Email me →
            </button>
          </div>
        </div>

        {/* Right Column - Socials */}
        <div className="space-y-4 text-3xl font-semibold text-black md:w-1/3">
          {socials.map((platform, index) => (
            <p
              key={index}
              className="cursor-pointer font-medium text-gray-200 underline decoration-gray-300 underline-offset-4"
            >
              {renderTextWithWave(platform)}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GetInTouchSection
