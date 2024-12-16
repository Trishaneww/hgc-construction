import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Hammer, MoveRight, Phone } from 'lucide-react'
import Link from 'next/link'
import '../styles/global.scss';

const Info = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-900 py-6 lg:py-36">
        <section className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 mt-20 px-6">
            <Image
                src="/assets/images/service2.png"
                width={800}
                height={800}
                alt="logo image"
                className="w-full md:max-w-[500px] lg:max-w-[450px] xl:max-w-[520px]"
            />
            <div className="flex flex-col gap-6 lg:w-[33%] text-lg">
                <div className="flex flex-col gap-2">
                    <p className="text-base lg:text-xl font-extrabold text-[#54acff] secondary">WHY CHOOSE US</p>
                    <p className="font-bold text-3xl lg:text-5xl text-slate-50 secondary">Committed To Give Quality Water Proofing</p>
                </div>
                <p className="text-left text-base lg:text-lg text-slate-50">We assess your property’s unique needs, design tailored solutions, and execute with precision to prevent leaks, moisture intrusion, and structural damage. Whether it’s proactive waterproofing or addressing an existing issue, we’re here to provide peace of mind and a dry, secure space for years to come.</p>

                {/* <div className="flex flex-col gap-2">
                    <p className="text-base lg:text-lg">Experience</p>
                    <div className="bg-blue-900 h-[6px] w-[300px] md:w-[500px] rounded-xl"></div>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-base lg:text-lg">Affordability</p>
                    <div className="bg-blue-900 h-[6px] w-[300px] md:w-[500px] rounded-xl"></div>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-base lg:text-lg">Helpful Advice</p>
                    <div className="bg-blue-900 h-[6px] w-[300px] md:w-[500px] rounded-xl"></div>
                </div> */}

                {/* <div className="flex items-center justify-center gap-2">
                    <div className="flex flex-col border-2 border-slate-200 w-[300px] p-6 rounded-xl">
                        <Hammer />
                        <p className="font-bold">Internal Solution</p>
                    </div>
                </div> */}
                <div className="flex flex-col xl:flex-row justify-start  items-start xl:items-center xl:mt-20 gap-6">
                <Link href="/#estimate"><Button className="flex gap-4 bg-[#0860B3] hover:bg-white hover:text-slate-950 text-slate-50 w-[250px] h-[50px] lg:h-[60px] lg:w-[280px] text-base lg:text-lg">Request a free estimate <MoveRight /></Button></Link>

                <div className="flex justify-center items-center gap-4">
                    <Link href="tel:416-895-5543">
                    <div className="flex justify-center items-center h-[62px] w-[62px] rounded-full bg-[#0860B3] text-slate-50">
                        <Phone />
                    </div>
                    </Link>
                    <div className="flex flex-col text-slate-50">
                        <p>Call Us 24/7</p>
                        <>416-895-5543</>
                    </div>
                </div>

                </div>
                
            </div>
        </section>

    </div>
  )
}

export default Info