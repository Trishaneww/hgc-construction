// import { servicesData } from '@/data'
import Image from 'next/image'
import React, { useState } from 'react';
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages, servicesData } from '@/data';
import Link from 'next/link';
import '../styles/global.scss';

const Gallery: React.FC = () => {
        const [activeIndex, setActiveIndex] = useState(0);
      
        const visibleCards = 4; // Number of visible cards at a time
        const mobileVisibleCards = 2;

        const handlePrev2 = () => {
          setActiveIndex((prevIndex) =>
            prevIndex === 0 ? galleryImages.length - mobileVisibleCards : prevIndex - 1
          );
        };
      
        const handleNext2 = () => {
          setActiveIndex((prevIndex) =>
            prevIndex === galleryImages.length - mobileVisibleCards ? 0 : prevIndex + 1
          );
        };

      
        const handlePrev = () => {
          setActiveIndex((prevIndex) =>
            prevIndex === 0 ? galleryImages.length - visibleCards : prevIndex - 1
          );
        };
      
        const handleNext = () => {
          setActiveIndex((prevIndex) =>
            prevIndex === galleryImages.length - visibleCards ? 0 : prevIndex + 1
          );
        };
  return (
    <div className="flex flex-col justify-center items-center mt-28 lg:mt-48">
        <div className="flex flex-col items-center justify-center text-center px-4 gap-2">
            <p className="text-base  lg:text-xl font-extrabold text-[#0860B3] secondary">OUR WORK</p>
            <p className="font-bold text-3xl md:text-4xl lg:text-6xl secondary">Explore Our Proven Waterproofing Solutions</p>
        </div>

        <div className="relative max-w-[75%] xl:max-w-[85%] max-h-full mx-auto mt-12 hidden lg:flex">
      {/* Carousel Wrapper */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 gap-4"
          style={{
            transform: `translateX(-${(activeIndex * 100) / visibleCards}%)`,
          }}
        >
            {galleryImages.map((service, idx) => (
            <Image
              src={service.src}
              width={1000}
              height={1000}
              alt="logo image"
              className="min-w-[calc(100%/2)] lg:min-w-[calc(100%/4.17)]"
              key={idx}
            />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="flex absolute top-1/2 left-0 transform -translate-x-[80%] lg:-translate-x-[120%] -translate-y-1/2 rounded-full p-2 text-slate-900"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={handleNext}
        className="flex absolute top-1/2 right-0 transform translate-x-[80%] lg:translate-x-[120%] -translate-y-1/2 rounded-full p-2 text-slate-900"
      >
        <ChevronRight size={40} />
      </button>
    </div>

    <div className="relative lg:hidden max-w-[75%] xl:max-w-[85%] max-h-full mx-auto mt-12">
      {/* Carousel Wrapper */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 gap-2"
          style={{
            transform: `translateX(-${(activeIndex * 100) / mobileVisibleCards}%)`,
          }}
        >
            {galleryImages.map((service, idx) => (
            <Image
              src={service.src}
              width={1000}
              height={1000}
              alt="logo image"
              className="min-w-[calc(100%/2.1)]"
              key={idx}
            />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev2}
        className="flex absolute top-1/2 left-0 transform -translate-x-[80%] lg:-translate-x-[120%] -translate-y-1/2 rounded-full p-2 text-slate-900"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={handleNext2}
        className="flex absolute top-1/2 right-0 transform translate-x-[80%] lg:translate-x-[120%] -translate-y-1/2 rounded-full p-2 text-slate-900"
      >
        <ChevronRight size={40} />
      </button>
    </div>
    </div>
  )
}

export default Gallery
function useWindowSize() {
  throw new Error('Function not implemented.');
}

