'use client';
import axios from 'axios';
import { useEffect, useState } from 'react'

type Project = {
  name: string;
  description: string;
  link: string;
  video: string;
  id: string;
};

type WorkExperience = {
  company: string;
  title: string;
  start: string;
  end: string;
  link: string;
  id: string;
};


// Define the BlogPost type (TypeScript)
type BlogPost = {
  title: string;
  description: string;
  link: string;
  uid: string;
};

type SocialLink = {
  label: string;
  link: string;
};

export const PROJECTS: Project[] = [
  {
    id: 'work1',
    name: 'Pleo',
    description: 'Onboarding employee in-app',
    link: '#',
    video: '/images/work/pleo-onboarding.png',
  },
  {
    id: 'work2',
    name: 'Cornerfold',
    description: 'Save your favourite places',
    link: '#',
    video: '/images/work/cornerfold.jpg',
  },
  {
    id: 'work3',
    name: 'Kernel',
    description: 'Marketing site design and build',
    link: '#',
    video: '/images/work/kernel.jpg',
  },
  {
    id: 'work4',
    name: 'Pleo',
    description: 'Hassle-free expense allowances',
    link: '#',
    video: '/images/work/pleo-expense.jpg',
  },
  {
    id: 'work5',
    name: 'Monzo',
    description: 'Credit scores simplified',
    link: '#',
    video: '/images/work/monzo-credit.jpg',
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Advait Labs',
    title: 'Web Designer & Developer',
    start: 'Dec-2023',
    end: 'Present',
    link: 'https://advaitlabs.com/',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'UI UX Designer',
    start: '2022',
    end: '2023',
    link: 'https://ibelick.com',
    id: 'work2',
  }
];



export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/NandhipatiGanesh',
  },
  {
    label: 'X',
    link: 'https://x.com/Webby_io',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/thefallen/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/the_fallen.in/',
  },
];

type WorkProject = {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  featured?: boolean;
};

export const WORK_PROJECTS: WorkProject[] = [
  {
    title: "Pleo →",
    subtitle: "Onboarding employees in-app",
    image: "/images/work/pleo-onboarding.png",
    link: "#",
    featured: true,
  },
  {
    title: "Cornerfold →",
    subtitle: "Save your favourite places",
    image: "/images/work/cornerfold.jpg",
    link: "#",
  },
  {
    title: "Kernel →",
    subtitle: "Marketing site design and build",
    image: "/images/work/kernel.jpg",
    link: "#",
  },
  {
    title: "Pleo →",
    subtitle: "Hassle-free expense allowances",
    image: "/images/work/pleo-expense.jpg",
    link: "#",
  },
  {
    title: "Monzo →",
    subtitle: "Credit scores simplified",
    image: "/images/work/monzo-credit.jpg",
    link: "#",
  },
];

export const EMAIL = 'ganeshwebby@gmail.com' ;
