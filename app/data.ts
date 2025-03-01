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
    name: 'Videoscroll',
    description: 'UI UX component for Interactive webs',
    link: '#',
    video: 'https://webcomponents.blog/wp-content/uploads/2025/02/video-scroll-animmation-video.mp4',
    id: 'project3',
  },
  {
    name : 'Dynamic Island',
    description: 'UI UX Components for Interactive Webs',
    link: '#',
    video: 'https://webcomponents.blog/wp-content/uploads/2025/02/Scroll-island-video.mp4',
    id: 'project4',
  },
  {
    name : 'Movemybike website design',
    description : 'implemented uiux and form booking process',
    link: 'https://bookings.movemybike.in/',
    video: 'https://webcomponents.blog/wp-content/uploads/2025/02/movemybike-react-site-video.mp4',
    id : 'project5',
  },
  {
    name : 'Pathlete Course Selling Website',
    description : 'Pathology Histology Course Selling Website',
    link: 'https://pathlete.org/',
    video: 'https://webcomponents.blog/wp-content/uploads/2025/02/Pathlete-project-video-tour.mp4',
    id : 'project6',  
  },
  {
    name : 'Service List with Image reveal after hover',
    description : 'Service List with Image reveal after hover',
    link: '#',
    video: 'https://webcomponents.blog/wp-content/uploads/2025/02/list-with-image-hover-effect-video.mp4',
    id : 'project7',
  },
  {
    name : 'Need help with Interaction Design',
    description : 'Need help with Interaction Design',
    link: '#',
    video: 'https://webcomponents.blog/wp-content/uploads/2025/02/Need-Help-Interaction-video.mp4',
    id : 'project8',
  },
  {
    name : 'Create an account form',
    description : 'Create an account form for website in html css js  UI UX',
    link: '#',
    video: 'https://webcomponents.blog/wp-content/uploads/2025/02/Create-an-account-form-for-website-in-html-css-js-video-youtube-1.mp4',
    id : 'project8',
  },
  {
    name : 'Send emails to blog subscribers',
    description : '',
    link : '#',
    video : 'https://webcomponents.blog/wp-content/uploads/2025/03/Send-Emails-to-your-subscriber-for-free.webp',
    id : 'project9',
  }

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

export const EMAIL = 'ganeshwebby@gmail.com' ;
