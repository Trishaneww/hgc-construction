// import { servicesData } from '@/data'
import Image from 'next/image'
import React, { useState } from 'react';
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { servicesData } from '@/data';
import Link from 'next/link';

const Gallery: React.FC = () => {
        const [activeIndex, setActiveIndex] = useState(0);
      
        const visibleCards = 3; // Number of visible cards at a time
      
        const handlePrev = () => {
          setActiveIndex((prevIndex) =>
            prevIndex === 0 ? servicesData.length - visibleCards : prevIndex - 1
          );
        };
      
        const handleNext = () => {
          setActiveIndex((prevIndex) =>
            prevIndex === servicesData.length - visibleCards ? 0 : prevIndex + 1
          );
        };
  return (
    <div className="flex flex-col justify-center items-center lg:mt-40">
        <div className="flex flex-col items-center justify-center text-center  gap-2">
            <p className="text-base  lg:text-xl font-extrabold text-[#0860B3]">OUR WORK</p>
            <p className="font-bold text-2xl md:text-4xl lg:text-6xl">Explore Our Proven Waterproofing Solutions</p>
        </div>

        <div className="relative max-w-[90%] xl:max-w-[85%] max-h-full mx-auto mt-12">
      {/* Carousel Wrapper */}
      <div className="overflow-hidden">
        <div
          className="hidden lg:flex transition-transform duration-500 gap-4"
          style={{
            transform: `translateX(-${(activeIndex * 100) / visibleCards}%)`,
          }}
        >
            {servicesData.map((service, idx) => (
            <Image
              src={service.src}
              width={1000}
              height={1000}
              alt="logo image"
              className="min-w-[calc(100%/1)] lg:min-w-[calc(100%/3.1)]"
              key={idx}
            />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="hidden lg:flex absolute top-1/2 left-0 transform -translate-x-[120%] -translate-y-1/2 rounded-full p-2 text-slate-900"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={handleNext}
        className="hidden lg:flex absolute top-1/2 right-0 transform translate-x-[120%] -translate-y-1/2 rounded-full p-2 text-slate-900"
      >
        <ChevronRight size={40} />
      </button>
    </div>
    </div>
  )
}

export default Gallery
