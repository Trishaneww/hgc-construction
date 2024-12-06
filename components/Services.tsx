import { servicesData } from '@/data'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-28">
        <div className="flex flex-col items-center justify-center text-center  gap-2">
            <p className="text-base lg:text-xl font-extrabold text-blue-700">OUR CORE SERVICES</p>
            <p className="font-bold text-2xl lg:text-6xl">Protect your space year round</p>
        </div>

        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-20">
            {servicesData.map((services, idx) => (
                <div className="flex flex-col w-full md:w-[370px] h-[500px] lg:h-[480px] bg-white border-[1px] border-gray-300 gap-2 shadow-lg" key={idx}>
                       <Image
                        src={services.src}
                        width={1000}
                        height={1000}
                        alt="logo image"
                       
                    />
                    <div className="flex flex-col p-2 px-6">
                        <p className="text-2xl font-bold">{services.title}</p>
                        <p>{services.desc}</p>
                        <p>{services.price}</p>
                    </div>
                </div>
            ))}
        </section>

        <div className="flex justify-between w-full bg-slate-900 h-[150px] items-center px-20 mt-16">
            <div className="flex flex-col text-slate-50">
                <p className="text-xl lg:text-3xl font-bold">GET YOUR FREE WATERPROOFING</p>
                <p className="text-xl lg:text-3xl font-bold">SERVICE ESTIMATE NOW</p>
            </div>

            <Button className="border-white border-2 h-[60px] w-[280px] text-lg">Request a free estimate</Button>
        </div>
    </div>
  )
}

export default Services