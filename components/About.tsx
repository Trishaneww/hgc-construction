import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center px-6 lg:px-20 gap-12 mt-28 pb-28">
         <Image
          src="/assets/images/aboutus.png"
          width={650}
          height={650}
          alt="homepage image" 
        />


        <section className="flex flex-col gap-2 lg:w-[25%]">
            <div className="flex flex-col gap-2">
                <p className="text-base lg:text-xl font-extrabold text-[#0860B3]">ABOUT US</p>
                <p className="font-bold text-2xl lg:text-5xl">We’ll save you money & time on plumbing repairs!</p>
            </div>
            <div className="flex flex-col gap-4 mt-6">
                <p>At HydraGuard Construction , we specialize in protecting your home or business from water damage with expert waterproofing solutions.</p>
                <p>Whether it’s proactive waterproofing or addressing an existing issue, we’re here to provide peace of mind and a dry, secure space for years to come</p>
            </div>
            <Button className="w-[220px] h-[52px] text-lg bg-[#2796ff] mt-6">Contact us</Button>
        </section>

    </div>
  )
}

export default About