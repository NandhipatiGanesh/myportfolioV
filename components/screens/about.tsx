'use client'
import { useRef } from 'react'
import TrueFocus from '@/app/components/TextAnimations/VariableProximity/VariableProximity'
import ShinyText from '@/app/components/TextAnimations/ShinyText'
const AboutSection: React.FC = () => {
  const containerRef = useRef(null)

  return (
    <section className="min-h-screen w-full bg-black px-6 py-20 text-black">
      <div className="mx-auto max-w-3xl">
        <div ref={containerRef} style={{ position: 'relative' }}>
          <div ref={containerRef} style={{ position: 'relative' }}>
            <TrueFocus
              sentence="Freelance web and mobile application developer with over 3 years of experience. Based in Hyderabad. Available for remote-friendly freelance work. Most recently, crafting custom Dashboards for clients. 
              Previously, built sites using React, Next.js, and Tailwind. 
              Before that, handled e-Commerce themes and plugin fixes."
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#"
            className="rounded-full bg-white px-10 py-3 font-medium text-black shadow-lg transition"
          >
            Let's Connect
          </a>
          <a
            href="#"
            className="rounded-full border border-white/30 bg-white/10 px-10 py-3 font-medium text-white backdrop-blur-md transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
