'use client';

import { ArrowBigLeftIcon, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <section className="grid  text-white w-full place-items-center bg-[##efece8]">
      <div className="fixed left-0 top-0 min-h-screen w-screen bg-[#efece8]" />
      <div className="pointer-events-none relative z-30 flex flex-col gap-y-6">
        <p className="text-center  text-black font-medium uppercase sm:text-2xl md:text-3xl lg:text-4xl xl:font-bold">
          Page Not Found
        </p>
        <Image
          src="/404.jpg"
          alt="404"
          width={480}
          height={204}
          unoptimized
          loading="eager"
          priority
        />
        <div className="flex w-full items-center justify-center gap-x-4">
          <button
            onClick={() => router.back()}
            className="pointer-events-auto flex items-center gap-x-2 rounded-xl border border-gray-200 bg-black px-4 py-2 transition-colors duration-300 hover:text-accent-color"
          >
            <ArrowBigLeftIcon className="size-5 xl:size-6" />
            Back
          </button>
          <Link
            href="/"
            prefetch
            className="pointer-events-auto flex items-center gap-x-2 rounded-xl border border-gray-200 bg-black px-4 py-2 transition-colors duration-300 hover:text-accent-color"
          >
            <Home className="size-5 xl:size-6" />
            Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
