'use client';
import React from 'react';
import Image from 'next/image';
import { useScroll } from '../context/scroll';
import { useInView, motion } from 'framer-motion';

export default function About() {
  const { aboutRef } = useScroll() as any;
  const inView = useInView(aboutRef, {
    amount: 'some',
    once: true,
    margin: '-20px',
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeleft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: inView && 1, x: 0 },
  };

  return (
    <motion.section
      ref={aboutRef}
      className=" relative  
    flex flex-col lg:flex-row gap-10 md:gap-14 lg:gap-[60px] md:mt-[140px] items-center justify-center mt-[80px] "
    >
      <motion.div
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.2, ease: 'linear', delay: 0.2 }}
        className="relative flex flex-col gap-[41px]"
      >
        <h2 className="lg:text-[40px] text-[24px] font-bold">About Us</h2>
        <p className="text-lg lg:text-[20px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
          ullam illo ea, omnis ut itaque esse ipsum fugit, praesentium ab
          laboriosam expedita eaque laborum, aut totam quia blanditiis suscipit
          quam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Impedit ullam illo ea, omnis ut itaque esse ipsum fugit, praesentium
          ab
        </p>
      </motion.div>
      <motion.div
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
        transition={{ duration: 0.2, ease: 'linear' }}
        className="relative"
      >
        <Image
          alt="book"
          src="/hero1.jpg"
          width={612}
          height={500}
          className="w-full max-w-[357px] 
        h-[307px] lg:min-w-[420px] "
        />
      </motion.div>
    </motion.section>
  );
}
