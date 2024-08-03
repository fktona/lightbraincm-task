'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useScroll } from '../context/scroll';
import Link from 'next/link';
import { useMenu } from '../context/menuContext';
export default function MobileNav({}: {}) {
  const { scrollToSection, aboutRef, featureRef, contactRef } =
    useScroll() as any;

  const { handleOpenMenu, openMenu } = useMenu();
  const [aniLeft, setAniLeft] = useState<boolean>(false);
  const handleCloseMenu = (section?: any) => {
    if (section) {
      scrollToSection(section);
    }
    setAniLeft(true);
    setTimeout(() => {
      handleOpenMenu();
    }, 1000);
  };
  return (
    <>
      {openMenu && (
        <nav
          className={`lg:hidden top-0 menu fixed bottom-0 w-[80%] z-[100]  h-full`}
        >
          <Image
            alt="Flip In Labs"
            src="/logo.png"
            width={98}
            height={62}
            className="absolute top-8 left-6"
          />
          <ul className="flex flex-col gap-8 justify-center items-start w-fit mx-auto    ">
            <Link
              href="/"
              onClick={() => handleCloseMenu(null)}
              className={`text-white text-2xl font-bold cursor-pointer
             text-start  bottom-0 overflow-hidden relative mb-2 
              ${aniLeft ? 'left-[]' : 'left-0'}
            `}
            >
              <span className=" menuli"> Home</span>
            </Link>
            <li
              onClick={() => handleCloseMenu(aboutRef)}
              className={`text-white text-2xl font-bold cursor-pointer
             text-start  bottom-0 overflow-hidden relative mb-2 
              ${aniLeft ? 'left-[]' : 'left-0'}
            `}
            >
              <span className=" menuli"> About</span>
            </li>
            <li
              onClick={() => handleCloseMenu(featureRef)}
              className={`text-white text-2xl font-bold overflow-hidden cursor-pointer ${
                aniLeft ? 'left-[]' : 'left-0'
              }`}
            >
              <span className="menuli">Feature</span>
            </li>
            <Link
              href="/listing"
              onClick={() => handleCloseMenu(null)}
              className={`text-white text-2xl font-bold overflow-hidden 
            cursor-pointer ${aniLeft ? 'left-[]' : 'left-0'}`}
            >
              <span className="menuli">Listing</span>
            </Link>
            <li
              onClick={() => handleCloseMenu(contactRef)}
              className={`text-white text-2xl font-bold overflow-hidden cursor-pointer ${
                aniLeft ? 'left-[]' : 'left-0'
              }`}
            >
              <span className="menuli">Contact Us</span>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
