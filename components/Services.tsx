// import { servicesData } from '@/data'
import Image from 'next/image'
import React, { useState } from 'react';
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { servicesData } from '@/data';
import Link from 'next/link';
import '../styles/global.scss';

const Services: React.FC = () => {
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
    <div className="flex flex-col justify-center items-center lg:mt-28">
        <div className="flex flex-col items-center justify-center text-center  gap-2">
            <p className="text-base  lg:text-xl font-extrabold text-[#0860B3] secondary">OUR CORE SERVICES</p>
            <p className="font-bold text-3xl md:text-4xl lg:text-6xl secondary">What Services We Offer</p>
        </div>

        <section className="flex flex-wrap justify-center lg:hidden gap-2 mt-12 px-2">
            {servicesData.map((services, idx) => (
                <div className="flex flex-col  w-full max-w-[320px]  h-[420px] bg-white border-[1px] border-gray-300 gap-2 shadow-lg" key={idx}>
                       <Image
                        src={services.src}
                        width={1000}
                        height={1000}
                        alt="logo image"
                        className="h-[180px]"
                       
                    />
                    <div className="flex flex-col p-2 px-2">
                        <p className="text-xl font-bold">{services.title}</p>
                        <p className="text-sm">{services.desc}</p>
                        <p className="text-sm font-bold mt-4">{services.price}</p>
                    </div>
                </div>
            ))}
        </section>

        <div className="relative max-w-[90%] lg:max-w-[88%] xl:max-w-[65%] max-h-full mx-auto mt-12">
      {/* Carousel Wrapper */}
      <div className="overflow-hidden">
        <div
          className="hidden lg:flex transition-transform duration-500 gap-4"
          style={{
            transform: `translateX(-${(activeIndex * 100) / visibleCards}%)`,
          }}
        >
            {servicesData.map((service, idx) => (
            <div className="flex flex-col w-full h-[510px] min-w-[calc(100%/1)] lg:min-w-[calc(100%/3.1)] bg-white border-[1px] border-gray-300 gap-2 shadow-lg" key={idx}>
            <Image
             src={service.src}
             width={1000}
             height={1000}
             alt="logo image"
             className="h-[220px] min-h-[220px]"
            
         />
         <div className="flex flex-col p-2 px-6">
             <p className="text-2xl font-bold">{service.title}</p>
             <p>{service.desc}</p>
             <p className="font-bold mt-4">{service.price}</p>
         </div>
     </div>
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

        <div className="flex flex-col md:flex-row justify-between w-full bg-slate-900 lg:h-[150px] items-center md:px-20 mt-16 py-20 lg:py-2 gap-6 text-center md:text-left">
            <div className="flex flex-col text-slate-50">
                <p className="text-xl lg:text-2xl font-bold">GET YOUR FREE WATERPROOFING</p>
                <p className="text-xl lg:text-2xl font-bold">SERVICE ESTIMATE NOW</p>
            </div>

            <Link href="mailto:hydraguardconstruction@gmail.com"><Button className="border-white border-2 h-[60px] w-[280px] text-lg">Request a free estimate</Button></Link>
        </div>
    </div>
  )
}

export default Services