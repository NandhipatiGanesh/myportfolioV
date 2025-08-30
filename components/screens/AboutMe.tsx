'use client'
import React from 'react'
import BlurText from '@/app/components/TextAnimations/ShinyText'

const AboutMe: React.FC = () => {
  const renderTextWithWave = (text: string) => (
    <span className="group inline-block hover:text-gray-500">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block transition-transform duration-300 group-hover:text-gray-500"
          style={{ transitionDelay: `${i * 50}ms` }}
        >
          <span className="inline-block group-hover:-skew-y-[8deg] group-hover:transform">
            {char}
          </span>
        </span>
      ))}
    </span>
  )
  const handleAnimationComplete = () => {
    console.log('Animation completed!')
  }
  return (
    <section className="bg-white px-4 py-20 sm:px-6 md:px-10 lg:px-20">
      {/* Top Line & Heading */}
      <div className="mb-6 h-[2px] w-full bg-black" />
      <BlurText
        text="About"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="mb-12 text-6xl font-semibold text-black"
      />
      <br />
      <br />

      <div className="flex flex-col gap-12 md:flex-row">
        {/* Left Column – 50% */}
        <div className="space-y-6 md:w-1/2">
          <BlurText
            text="I’m Ganesh — a freelance web and mobile application developer with
            over 3 years of experience. I care a lot about using design for
            positive impact. Currently based in Hyderabad, India."
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl leading-snug font-medium text-black"
          />

          <img
            src="/images/about/about.webp"
            alt="Profile"
            className="h-56 w-56 rounded-xl object-cover"
          />
        </div>

        {/* Right Column – 50% */}
        <div className="space-y-6 text-2xl leading-snug font-medium text-black md:w-1/2">
          <BlurText
            text=" I’m a passionate full-stack developer from Hyderabad, India with a
            deep love for building exceptional digital experiences. With
            expertise in web design, mobile app development, WordPress
            development, and custom applications, I specialize in turning ideas
            into elegant, high-performing products that are both user-friendly
            and business-driven."
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl leading-snug font-medium text-black"
          />

          <BlurText
            text=" Over the years, I’ve worked with startups, agencies, and
            enterprises—delivering impactful solutions across industries such as
            healthcare, e-commerce, education, and finance. Every project I take
            on is built around clean code, intuitive UX, and scalable
            architecture—whether it's a dynamic website, a robust mobile app, or
            a tailored business solution."
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl leading-snug font-medium text-black"
          />

          <BlurText
            text=" I’m committed to creating not just for today, but for the future.
            With a mindset rooted in continuous learning and quality delivery, I
            approach every project with strategy, creativity, and technical
            precision. Let’s create something extraordinary together."
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl leading-snug font-medium text-black"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
