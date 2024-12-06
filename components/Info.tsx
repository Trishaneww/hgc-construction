import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Info = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-sky-100">
        <div className="flex flex-col items-center justify-center text-center  gap-2">
            <p className="text-base lg:text-xl font-extrabold text-blue-700">WHY US</p>
            <p className="font-bold text-2xl lg:text-6xl">Always your first choice</p>
        </div>


        <section className="flex justify-center items-start gap-12 mt-20">
            <Image
                src="/assets/images/info.jpg"
                width={400}
                height={400}
                alt="logo image"
                className=""
            />
            <div className="flex flex-col gap-6 w-[33%] text-lg">
                <p>We assess your property’s unique needs, design tailored solutions, and execute with precision to prevent leaks, moisture intrusion, and structural damage. Whether it’s proactive waterproofing or addressing an existing issue, we’re here to provide peace of mind and a dry, secure space for years to come.</p>

                <div className="flex flex-col gap-2">
                    <p>Experience</p>
                    <div className="bg-blue-900 h-[6px] w-[500px] rounded-xl"></div>
                </div>

                <div className="flex flex-col gap-2">
                    <p>Affordability</p>
                    <div className="bg-blue-900 h-[6px] w-[500px] rounded-xl"></div>
                </div>

                <div className="flex flex-col gap-2">
                    <p>Helpful Advice</p>
                    <div className="bg-blue-900 h-[6px] w-[500px] rounded-xl"></div>
                </div>

                <Button className="border-slate-900 border-2 bg-transparent text-slate-950 h-[60px] w-[280px] text-lg mt-20">Request a free estimate</Button>
            </div>
        </section>

    </div>
  )
}

export default Info