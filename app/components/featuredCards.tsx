import Link from 'next/link';
import Image from 'next/image';
import { formatter } from '../utils/helpers';
import { Hostel } from '@/types';
import { BusFront, CarFront, PersonStanding , Tag, TagIcon } from 'lucide-react';
import React from 'react';

const HostelCard: React.FunctionComponent<{ hostel: Hostel }> = ({
  hostel,
}) => {
  const { name, img_url, price, id, last_cheap, distance_to_campus } = hostel;

  const url = '/room.jpg';

  return (
    <div className=" relative flex lg:min-w-[250px]    flex-col gap-4 pb-4 bg-white drop-shadow-lg">
      <div className="w-full overflow-hidden bg-gray-200 ">
        <div className="relative group-hover:opacity-75">
          <Image
            src={url}
            alt={name}
            width={500}
            height={350}
            objectFit="contain"
            className="w-full  aspect-video" 
          /> 
                    { id === 1 &&
                     <span className='bg-orange-300 flex items-center justify-center gap-3 z-50 absolute bottom-0 
                     w-full text-[12px] text-white py-1 text-center'><TagIcon color='#edd45a' size={16} strokeWidth={4} className='rotate-90'/>{price} Uber voucher</span>}

        </div>
      </div>
      <div className="px-4 space-y-4">
        <p className=" text-[14px]  font-semibold text-gray-900">{name}</p>
        <p className=" text-sm text-gray-700">
          from{' '}
          <span className="text-[20px] font-semibold text-orange-600 mx-1">
            {formatter.format(price)}
          </span>{' '}
          /week
        </p>
        <p className="text-[10px] w-fit text-white px-3 py-1 bg-blue-900/100 rounded-[2px]">
          {last_cheap}
        </p>
        <div className="flex justify-between items-center text-[10px] gap-3">
          <p className="flex items-center justify-center gap-1">
            <PersonStanding color="#404040" size={18} strokeWidth={1.25} />{' '}
            <span>{distance_to_campus.walking}</span>
          </p>
          <p className="flex items-center justify-center gap-1">
            <BusFront strokeWidth={1.25} color="#404040" size={18} />
            <span>{distance_to_campus.public_transport}</span>
          </p>
          <p className="flex items-center justify-center gap-1">
            <CarFront strokeWidth={1.25} color="#404040" size={18} />
            <span>{distance_to_campus.car}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HostelCard;
