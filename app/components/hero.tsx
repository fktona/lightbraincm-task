'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Nav from './nav';
import Link from 'next/link';

const slides = [
  {
    image: '/hero1.jpg',
    heading: 'Find Your Perfect Stay Near Campus',
    subheading:
      'Discover a variety of hostels that cater to your needs and budget, all conveniently located close to the university',
  },
  {
    image: '/hero2.jpg',
    heading: 'Experience Comfort and Convenience',
    subheading:
      'Stay in our modern and well-equipped hostels that offer the best amenities for students',
  },
  {
    image: '/hero3.jpg',
    heading: 'Affordable Prices for Students',
    subheading:
      'Enjoy a comfortable stay without breaking the bank. Our hostels are priced to fit student budgets',
  },
];

const imageVariants = {
  enter: (direction: any) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: any) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const textVariants = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 100, opacity: 0 },
};

export default function HeroSection() {
  const [[page, direction], setPage] = useState([0, 0]);

  const handleNextSlide = () => {
    setPage([page + 1, 1]);
  };

  const imageIndex = page % slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [page]);

  return (
    <div className="relative h-screen max-w-[1440px] mx-auto lg:py-[52px] px-[21px] py-[30px] top-0 bg-gray-800 overflow-hidden">
      <Nav />
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0"
          >
            <Image
              src={slides[imageIndex].image}
              alt={slides[imageIndex].heading}
              layout="fill"
              objectFit="cover"
              quality={100}
              priority={true}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={slides[imageIndex].heading}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.75 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {slides[imageIndex].heading}
          </motion.h1>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.p
            key={slides[imageIndex].subheading}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.75, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            {slides[imageIndex].subheading}
          </motion.p>
        </AnimatePresence>
        <Link href="/listing">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleNextSlide}
          >
            Explore Now
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
