'use client';

import React from 'react';
import SectionHeading from './section_heading';

import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About', 1);

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>

      <p className='mb-3 '>
        I am an ambitious Advanced Computer Science student at the University of
        New South Wales, with a passion for software development and a strong
        foundation in both academic and practical realms. My academic journey is
        marked by a <span className='underline'>WAM of 94</span> and a standout
        performance across all computer science courses. In parallel, my intern
        experience at ABC Capital Group Ltd, where I enhanced web user
        experience and increased online visibility, has honed my skills in
        real-world applications.
      </p>

      <p>
        I&apos;m proficient in a range of programming languages including
        JavaScript, TypeScript, Python, Java, and Rust, and equally comfortable
        with tools like Express, Git, Jest, and Node. I&apos;m also fluent in
        English and Mandarin, which aids in my collaboration with diverse teams.
      </p>
    </motion.section>
  );
}
