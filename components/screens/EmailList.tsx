'use client'
import React, { useState } from 'react'
import SplitText from '@/app/components/TextAnimations/SplitText/SplitText'

const EmailListSection: React.FC = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = () => {
    // Placeholder for form submission logic
    alert(`Subscribed with ${email}`)
  }
  const handleAnimationComplete = () => {
    console.log('All letters have animated!')
  }
  return (
    <section className="bg-black px-4 py-20 sm:px-6 md:px-10 lg:px-20">
      {/* Top Line */}
      <div className="mb-4 h-[2px] w-full bg-black" />
      {/* Heading */}
      <SplitText
        text="Email list"
        className="mb-10 text-4xl font-semibold text-gray-200"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
      <br />
      <br />

      {/* Subheading */}
      <h3 className="md:mb-10 lg:mb-10 mb-5 max-w-5xl w-full text-3xl md:text-5xl lg:text-5xl leading-tight font-bold text-gray-200 sm:text-7xl md:w-3/5">
        Get design insights and articles straight to your inbox
      </h3>

      {/* Input and button */}
      <div className="mb-4  flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="cursor-pointer rounded-full border border-white/30 bg-white/10 px-10 py-3 font-medium text-white backdrop-blur-md transition  focus:outline-none mobile-fullhere   md:w-[300px] lg:w-[300px]"
        />
        <button
          onClick={handleSubscribe}
          className="cursor-pointer rounded-full border border-white/30 bg-white/10 px-10 py-3 font-medium text-white backdrop-blur-md transition hover:-translate-y-1 hover:opacity-90"
        >
          Subscribe →
        </button>
      </div>

      {/* Footer text */}
      <p className="text-base text-gray-500">
        Join 2,600+ designers · Unsubscribe at any time
      </p>
    </section>
  )
}

export default EmailListSection
