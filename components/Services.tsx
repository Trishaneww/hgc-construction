import { servicesData } from '@/data'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center p-2">
        <div className="flex flex-col items-center justify-center text-center  gap-2">
            <p className="font-bold text-2xl lg:text-6xl">Our Core Services</p>
            <p className="text-base lg:text-lg">Explore our range of expert solutions designed to keep your spaces dry, safe, and free from water damage year-round.</p>
        </div>

        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-20">
            {servicesData.map((services, idx) => (
                <div className="flex flex-col w-full md:w-[370px] h-[500px] lg:h-[480px] bg-white rounded-xl border-[1px] border-gray-300 p-4 pt-2 gap-2" key={idx}>
                       <Image
                        src={services.src}
                        width={1000}
                        height={1000}
                        alt="logo image"
                        className="rounded-2xl"
                       
                    />
                    <p className="text-2xl font-bold">{services.title}</p>
                    <p>{services.desc}</p>
                    <p>{services.price}</p>
                </div>
            ))}
        </section>
    </div>
  )
}

export default Services