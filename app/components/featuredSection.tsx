'use client';
import HostelData from '@/data.json';
import { Hostel } from '@/types';
import HostelCard from './featuredCards';
import { useScroll } from '../context/scroll';

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
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
