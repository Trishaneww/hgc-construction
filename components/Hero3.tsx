"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import '../styles/global.scss';


const Hero3 = () => {

  return (
    <div className="flex flex-col items-center justify-center bg-slate-900 text-slate-50 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:py-28">
        <section className="flex flex-col justify-center items-center text-center gap-4 mt-20 lg:mt-0 mb-20 lg:mb-0 px-6 lg:px-0 lg:w-2/3">
        <div className="flex items-center gap-2">
            <Link href="/lifetime-warranty">
                <Image
                    width={150}
                    height={150}
                    src="/assets/images/badge1.png"
                    alt="lifetime warranty badge"
                />
            </Link>

            {/* <Link href="/lifetime-warranty">
                <Image
                    width={150}
                    height={150}
                    src="/assets/images/badge2.png"
                    alt="lifetime warranty badge"
                />
            </Link> */}

        </div>
          <p className="text-4xl lg:text-5xl xl:text-7xl font-bold secondary lg:w-2/3 mt-4">Price Match <span className="text-[#368bda]">Guarantee</span></p>
          {/* <p className="text-base lg:text-lg lg:w-1/2 mt-2">At HydraGuard Construction, we specialize in protecting your home or business from water damage with expert waterproofing solutions. </p>
          <Link href="/#estimate"><Button className="w-[290px] h-[50px] lg:h-[60px] lg:w-[310px] text-base bg-[#0860B3] hover:bg-white hover:text-slate-950 mt-6">FREE ESTIMATE & CONSULTATION</Button></Link> */}
        </section>
      </div>
    </div>
  )
}

export default Hero3