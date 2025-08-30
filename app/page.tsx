'use client'
import React from 'react'
import useRotatingBg from '@/hooks/useRotatingBg'
import Header from '@/app/header'

import WorkSection from '@/components/screens/WorkSection'
// import newHero from '@/components/screens/newhero'

import AboutSection from '@/components/screens/about'
import VenturesSection from '@/components/screens/Ventures'
import TestimonialSection from '@/components/screens/Testimonal'
import WritingSection from '@/components/screens/Writing'
import AboutMe from '@/components/screens/AboutMe'
import ExperienceSection from '@/components/screens/Experience'
import ServicesSection from '@/components/screens/Services'
import GetInTouchSection from '@/components/screens/GetInTouch'
import EmailListSection from '@/components/screens/EmailList'
import FooterSection from '@/components/screens/Footer'
import WooCommerceSection from '@/components/screens/wooCommerce'
import Hero from '@/components/screens/hero'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function Personal() {
  const bgColors = [
    '#fdf6e3',
    '#f0fff0',
    '#e0f7fa',
    '#fce4ec',
    '#fff9c4',
    '#f5f5dc',
  ] // light brown, etc.
  const currentColor = useRotatingBg(bgColors, 3000) // rotate every 3 seconds

  return (
    <>
      <section className="pt-4 pb-4">
        <Hero />
      </section>

      <AboutSection />

      <WorkSection />

      <VenturesSection />

      <WooCommerceSection />

      <TestimonialSection />

      <WritingSection />

      <AboutMe />

      <ExperienceSection />

      <ServicesSection />

      <GetInTouchSection />

      <EmailListSection />

      <FooterSection />
    </>
  )
}
