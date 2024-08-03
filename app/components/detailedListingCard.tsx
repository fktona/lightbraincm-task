import Link from 'next/link';
import Image from 'next/image';
import { formatter } from '../utils/helpers';
import { Hostel } from '@/types';
import {
  BusFront,
  CarFront,
  PersonStanding,
  LandPlot,
  Landmark,
} from 'lucide-react';
import React from 'react';

const HostelDetails: React.FunctionComponent<{ hostel: Hostel }> = ({
  hostel,
}) => {
  const {
    name,
    img_url,
    price,
    id,
    last_cheap,
    distance_to_campus,
    facilities,
    description,
    type,
  } = hostel;

  const url = '/room.jpg';

  return (
    <section className="relative w-full my-5">
      <div
        className="relative flex flex-col lg:flex-row justify-start md:px-6 
      gap-2  bg-white drop-shadow-lg"
      >
        <div className="relative py-5 lg:max-w-[79%] flex flex-col lg:flex-row 
        justify-start items-center gap-4 w-full">
          <Image
            src={url}
            alt={name}
            width={500}
            height={450}
            objectFit="contain"
            className="w-full lg:h-full lg:w-[250px]"
          /> 
          <div className="px-4  space-y-2 pb-3 lg:pb-6">
            <p className="md:text-[22px] text-[18px] font-semibold text-gray-900">
              {name}
            </p>
            <p className="md:text-sm tex-[10px] line-clamp-2 lg:line-clamp-none md:line-clamp-3 text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              facilis fugit, vel, eligendi, ad sequi iusto labore mollitia eos
              quod recusandae impedit quos od recusandae
            </p>
            <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center text-[12px] font-medium text-[#404040] gap-3">
              <p className="font-semibold flex items-center gap-[2px] justify-center text-[15px]">
                <LandPlot strokeWidth={1.95} color="#404040" size={18} />
                Distance to campus:
              </p>
              <div className="flex items-center gap-1">
                <PersonStanding color="#404040" size={18} strokeWidth={1.25} />{' '}
                <span>{distance_to_campus.walking}</span>
              </div>
              <div className="flex items-center gap-1">
                <BusFront strokeWidth={1.25} color="#404040" size={18} />
                <span>{distance_to_campus.public_transport}</span>
              </div>
              <div className="flex items-center gap-1">
                <CarFront strokeWidth={1.25} color="#404040" size={18} />
                <span>{distance_to_campus.car}</span>
              </div>
              <p className="text-green-400 font-light">View Map</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center text-[12px] font-medium text-[#404040] gap-3">
              <p className="font-semibold flex items-center gap-[2px] justify-center text-[15px]">
                <Landmark strokeWidth={1.95} color="#404040" size={18} />
                Facilities:
              </p>
              <p className="flex items-center justify-center gap-1">
                {facilities.map((facility, index) => (
                  <span key={facility}>
                    {facility}
                    {index < facilities.length - 1 && ', '}
                  </span>
                ))}
              </p>
            </div>
            <div className="flex gap-2 items-center justify-start">
              <p className="text-[10px] w-fit text-white px-3 py-1 bg-blue-900 rounded-[2px] mr-2">
                {last_cheap}
              </p>
              <span className="text-[10px] w-fit text-white px-3 py-1 bg-blue-900 rounded-[2px]">
                Price drop
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[25%] lg:pt-5  lg:h-[100%] px-5  lg:pb-0 lg:absolute right-0 flex flex-col lg:items-center lg:justify-between">
          <p className="text-[11px] text-gray-700">
            from{' '}
            <span className="text-[17px] font-semibold text-orange-600 mx-1">
              {formatter.format(price)}
            </span>{' '}
            /week
          </p>
          <div className="pb-4">
            <div className="flex justify-between my-4 capitalize w-fit gap-5 lg:w-full">
              <span className="text-[11px]">{type}</span>
              <span className="text-[11px]">{formatter.format(price)}</span>
            </div>
            <button className="px-4 py-2 hover:scale-105 hover:bg-600 transition-all dur bg-yellow-500 rounded-sm">
              View rooms
            </button>
          </div>
        </div>
      </div>
    </section>
  ); 
};

export default HostelDetails;
