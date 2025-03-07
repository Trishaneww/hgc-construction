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

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-4 mt-12">
        {servicesData.map((service, idx) => (
            <div className="flex flex-col justify-between w-full h-[620px] xl:h-[510px]  max-w-[320px] lg:max-w-[400px]  bg-white border-[1px] border-gray-300 gap-2 shadow-lg" key={idx}>
            <Image
             src={service.src}
             width={1000}
             height={1000}
             alt="logo image"
             className="h-[220px] min-h-[220px]"
            
         />
         <div className="flex flex-col p-2 px-6">
             <p className="text-2xl font-bold">{service.title}</p>
             <p className="h-[240px] xl:h-[170px] mt-2">{service.desc}</p>
             {/* <p className="font-bold mt-4">{service.price}</p> */}
         </div>
         <Link className="text-base text-center bg-[#0860B3] text-white py-2" href='/'>Read More</Link>
     </div>
          ))}
        </section>

        

        <div className="flex flex-col md:flex-row justify-between w-full bg-slate-900 lg:h-[150px] items-center md:px-20 mt-16 py-20 lg:py-2 gap-6 text-center md:text-left">
            <div className="flex flex-col text-slate-50">
                <p className="text-xl lg:text-2xl font-bold">GET YOUR FREE WATERPROOFING</p>
                <p className="text-xl lg:text-2xl font-bold">SERVICE ESTIMATE NOW</p>
            </div>

            <Link href="mailto:hydraguardconstruction@gmail.com"><Button className="border-white border-2 h-[60px] w-[270px] text-base">REQUEST A FREE QUOTE</Button></Link>
        </div>
    </div>
  )
}

export default Services