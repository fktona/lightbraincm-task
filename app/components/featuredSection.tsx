'use client';
import HostelData from '@/data.json';
import { Hostel } from '@/types';
import HostelCard from './featuredCards';
import { useScroll } from '../context/scroll';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedSection = () => {
  const { featureRef } = useScroll() as any;
  const FeaturedHostels = HostelData.filter(
    (hostel: Hostel) => hostel.featured,
  );
  return (
    <section
      ref={featureRef}
      className="py-12  md:mt-[140px] mt-[80px]  relative max-w-[100%]  "
    >
      <h2 className="lg:text-[40px] text-[24px]  font-bold text-gray-900">
        Featured Hostels
      </h2>
      <div className="relative w-full overflow-x-scroll ">
        <div
          className="lg:flex pb-6 lg:gap-4 grid grid-cols-1 gap-6 mt-6  
             sm:grid-cols-2 md:grid-cols-2"
        >
          {FeaturedHostels.map((hostel: Hostel) => (
            <HostelCard key={hostel.id} hostel={hostel} />
          ))}
           <div className=" relative flex lg:min-w-[250px]    
             flex-col gap-4 pb-4 bg-white drop-shadow-lg">
          <div className='absolute w-full h-full bg-black/20 bottom-0 z-10'></div>
        <div className="absolute h-full group-hover:opacity-75">
          <Image
            src={'/hero1.jpg'}
            alt={'name'}
            width={500}
            height={350}
            objectFit="contain"
            className="w-full bottom-0 h-full"
          />
          </div>
          <div className='absolute pb-4 z-30 space-y-5 bottom-0 text-white px-4 w-full'>
            <span className='text-[16px] font-semibold leading-7'>
              More Collected Properties near University College London
            </span>
            <Link href='/listing'> 
            <button className='w-full py-2 bg-green-600 hover:bg-green-700 hover:scale-[1.08] transition-all duration-300'>
              CheckOut
            </button>
            </Link>
          </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
