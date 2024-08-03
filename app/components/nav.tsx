'use client';
import React from 'react';
import Image from 'next/image';
import { useMenu } from '../context/menuContext';
import { useScroll } from '../context/scroll';
import { delay, motion } from 'framer-motion';
import Link from 'next/link';

export default function Nav() {
  const { scrollToSection, aboutRef, featureRef, contactRef } =
    useScroll() as any;

  const { openMenu, handleOpenMenu } = useMenu();

  const bounce = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav
      className="relative flex justify-between text-white font-medium z-[50]
     items-center md:items-start lg:px-[109px] px-5 "
    >
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.2, delay: 1 }}
      >
        <Image alt="Flip In Labs" src="/logo.png" width={60} height={60} />
      </motion.div>
      <ul
        className=" text-5  font-normal cursor-pointer md:flex hidden lg:gap-[40px] 
        
        gap-10 justify-center items-center"
      >
        <Link href="/">
          <motion.li
            variants={bounce}
            initial="hidden"
            animate="visible"
            transition={{ type: 'spring', duration: 0.2, delay: 1.2 }}
            className="navHover px-4 py-2 rounded-[89px] transition-all duration-300"
          >
            Home
          </motion.li>
        </Link>
        <motion.li
          variants={bounce}
          initial="hidden"
          animate="visible"
          transition={{ type: 'spring', duration: 0.2, delay: 1.2 }}
          className="navHover px-4 py-2 rounded-[89px] transition-all duration-300"
          onClick={() => scrollToSection(aboutRef)}
        >
          About
        </motion.li>

        <Link href="/listing">
          <motion.li
            variants={bounce}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.2, delay: 1.4 }}
            className="navHover px-4 py-2 rounded-[89px] transition-all duration-300"
          >
            Listing
          </motion.li>
        </Link>

        <motion.li
          variants={bounce}
          initial="hidden"
          animate="visible"
          transition={{ type: 'spring', duration: 0.2, delay: 1.2 }}
          className="navHover px-4 py-2 rounded-[89px] transition-all duration-300"
          onClick={() => scrollToSection(featureRef)}
        >
          Feature
        </motion.li>

        <motion.li
          variants={bounce}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.2, delay: 1.5 }}
          className="navHover px-4 py-2 rounded-[89px] transition-all duration-300"
          onClick={() => scrollToSection(contactRef)}
        >
          Contact Us
        </motion.li>
      </ul>

      <motion.div
        variants={bounce}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.2, delay: 1 }}
        onClick={handleOpenMenu}
        className="gap-[3px] z-[77777] md:hidden cursor-pointer relative flex flex-col"
      >
        <span
          className={`${openMenu ? 'rotate-45 top-1' : ''} transition-all duration-300 delay-75 w-[42px]   h-[6px] relative bg-white`}
        ></span>
        <span
          className={` ${openMenu ? '-rotate-45 bottom-1' : ''} w-[42px]  transition-all duration-300 delay-75 relative  h-[6px] bg-white`}
        ></span>
        <span
          className={`${openMenu ? '-bottom-3' : ''} transition-all duration-300  w-[42px] relative   h-[6px] bg-white`}
        ></span>
      </motion.div>
    </nav>
  );
}
