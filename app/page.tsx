'use client';
import React from 'react';
import useRotatingBg from '@/hooks/useRotatingBg';
import Header from '@/app/header';
import Hero from '@/components/screens/hero';
import WorkSection from '@/components/screens/WorkSection'

import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'
import AboutSection from '@/components/screens/about'
import { InfiniteSlider } from '@/components/screens/infinite-slider'
import VenturesSection from '@/components/screens/Ventures';
import TestimonialSection from '@/components/screens/Testimonal';
import WritingSection from '@/components/screens/Writing';
import AboutMe from '@/components/screens/AboutMe';
import ExperienceSection from '@/components/screens/Experience';
import ServicesSection from '@/components/screens/Services';
import InterestsSection from '@/components/screens/Interests';
import GetInTouchSection from '@/components/screens/GetInTouch';
import EmailListSection from '@/components/screens/EmailList';
import FooterSection from '@/components/screens/Footer';

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

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="mvidoe aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}


export default function Personal() {
  const bgColors = ['#fdf6e3', '#f0fff0', '#e0f7fa', '#fce4ec', '#fff9c4', '#f5f5dc']; // light brown, etc.
  const currentColor = useRotatingBg(bgColors, 3000); // rotate every 3 seconds


  return (
    <>
      <Header currentColor={currentColor} />
      <Hero currentColor={currentColor} />

      <AboutSection />
      <div className="bg-white py-12 border-y border-gray-200">
        <InfiniteSlider speedOnHover={30} gap={60}> {/* Gap between logos */}
          {[
            { src: "/logos/carefree.svg", alt: "Carefree" },
            { src: "/logos/monzo.svg", alt: "Monzo" },
            { src: "/logos/mastercard.svg", alt: "Mastercard" },
            { src: "/logos/pleo.svg", alt: "Pleo" },
            { src: "/logos/trustpilot.svg", alt: "Trustpilot" },
            { src: "/logos/fy!.svg", alt: "FY!" },
            { src: "/logos/morrisons.svg", alt: "Morrisons" },
            { src: "/logos/thriva.svg", alt: "Thriva" },
            { src: "/logos/moving brands.svg", alt: "Moving Brands" },
            { src: "/logos/trust keith.svg", alt: "Trust Keith" },
          ].map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto object-contain mx-20"
            />
          ))}
        </InfiniteSlider>
      </div>

      <div className="h-30 bg-white"></div>

      <WorkSection />

      <VenturesSection />

      <TestimonialSection />

      <WritingSection />

      <AboutMe />

      <ExperienceSection />

      <ServicesSection />


      <GetInTouchSection />

      <EmailListSection />

      <FooterSection />



      <motion.main
        className=""
        variants={VARIANTS_CONTAINER}
        initial="hidden"
        animate="visible"
      >
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
        </motion.section>

        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >

        </motion.section>

        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >

        </motion.section>

        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >

        </motion.section>

        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >

        </motion.section>
      </motion.main>
    </>
  )
}
