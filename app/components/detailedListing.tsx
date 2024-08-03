'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HostelData from '@/data.json';
import { Filter, Hostel } from '@/types';
import HostelDetails from './detailedListingCard';

const DetailedListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: Infinity,
    minRating: 0,
    maxRating: 5,
  });
  const [debouncedFilters, setDebouncedFilters] = useState(filters);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const debounceTimeout = useRef<null | NodeJS.Timeout>(null);

  const ITEMS_PER_PAGE = 5;

  const sortHostels = (hostels: any) => {
    return hostels.sort((a: any, b: any) => {
      if (sortKey === 'price' || sortKey === 'ratings') {
        if (sortOrder === 'asc') {
          return a[sortKey] - b[sortKey];
        } else {
          return b[sortKey] - a[sortKey];
        }
      }
      return 0;
    });
  };

  const filterHostels = (hostels: Filter) => {
    return hostels.filter((hostel: Filter) => {
      return (
        hostel.price >= debouncedFilters.minPrice &&
        hostel.price <= debouncedFilters.maxPrice &&
        hostel.ratings >= debouncedFilters.minRating &&
        hostel.ratings <= debouncedFilters.maxRating
      );
    });
  };

  const handleSortChange = (key: string) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: Number(value),
    });
  };

  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      setDebouncedFilters(filters);
    }, 500);
  }, [filters]);

  const sortedHostels = sortHostels(HostelData);
  const filteredHostels = filterHostels(sortedHostels);
  const paginatedHostels = filteredHostels.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const totalPages = Math.ceil(filteredHostels.length / ITEMS_PER_PAGE);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-12 relative max-w-[100%]">
      <h2 className="lg:text-[40px] text-[24px] my-6 text-center px-5 font-bold text-gray-900">
        Hostels Listing
      </h2>

      <div className="md:hidden flex justify-center mb-4">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="bg-blue-500 rounded-md text-white px-4 py-2  shadow-md w-fit"
        >
          Filters & Sorting
        </button>
      </div>

      <div
        className={`md:flex flex-col  w-full px-3 gap-4 mt-5 justify-center mb-4 ${isDropdownOpen ? 'flex' : 'hidden'}`}
      >
        <div className="">
          <button
            className="bg-transparent relative hover:bottom-1 transition-all duration-300 border-blue-900 border-2 w-fit  px-4 py-2 rounded-[30px] text-black shadow-md  md:w-auto mx-2"
            onClick={() => handleSortChange('price')}
          >
            Sort by Price{' '} 
            {sortKey === 'price' && (sortOrder === 'asc' ? '↑' : '↓')}
          </button>
          <button
            className="  bg-transparent hover:bottom-1 transition-all duration-300 relative  w-fit px-4 py-2 rounded-[30px] border-2 text-black border-blue-900 shadow-md  md:w-auto mx-2"
            onClick={() => handleSortChange('ratings')}
          >
            Sort by Rating{' '}
            {sortKey === 'ratings' && (sortOrder === 'asc' ? '↑' : '↓')}
          </button>
        </div>
        <div className="lg:flex mb-5">
          <div className="flex flex-col mx-2">
            <label htmlFor="minPrice" className="mb-2 font-medium">
              Min Price
            </label>
            <input
              type="number"
              name="minPrice"
              placeholder="Min Price"
              value={filters.minPrice}
              onChange={handleFilterChange}
              className="border p-2 rounded shadow-inner w-full"
            />
          </div>
          <div className="flex flex-col mx-2">
            <label htmlFor="maxPrice" className="mb-2 font-medium">
              Max Price
            </label>
            <input
              type="number"
              name="maxPrice"
              placeholder="Max Price"
              value={filters.maxPrice}
              onChange={handleFilterChange}
              className="border p-2 rounded shadow-inner w-full"
            />
          </div>
          <div className="flex flex-col mx-2">
            <label htmlFor="minRating" className="mb-2 font-medium">
              Min Rating
            </label>
            <input
              type="number"
              name="minRating"
              placeholder="Min Rating"
              value={filters.minRating}
              onChange={handleFilterChange}
              className="border p-2 rounded shadow-inner w-full"
            />
          </div>
          <div className="flex flex-col mx-2">
            <label htmlFor="maxRating" className="mb-2 font-medium">
              Max Rating
            </label>
            <input
              type="number"
              name="maxRating"
              placeholder="Max Rating"
              value={filters.maxRating}
              onChange={handleFilterChange}
              className="border p-2 rounded shadow-inner w-full"
            />
          </div>
        </div>
      </div>

      <div className="relative px-5">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {paginatedHostels.map((hostel: Hostel) => (
            <motion.div key={hostel.id} variants={itemVariants}>
              <HostelDetails hostel={hostel} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 border ${
              currentPage === index + 1 ? 'bg-gray-300' : ''
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default DetailedListing;
