"use client"
import { Input } from './ui/input'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useToast } from './hooks/use-toast'
import emailjs from '@emailjs/browser';
import Image from 'next/image'
import Link from 'next/link'
import '../styles/global.scss';


const Hero = () => {
  const  [error, setError] = useState("");

  const { toast } = useToast()

  const sendEmail = (e:any) => {
    e.preventDefault();

    try {
      if (e.target.email.value === "") {
          setError("Email is required")
      } else {

          emailjs.sendForm('service_luvg8op', 'template_oirz684' , e.target , '1MxDwCSvQF6Leln4f');
           e.target.reset()
           setError("")

          toast({
              title: "Email Sent",
              description: "We will get back to you shortly",
    })

      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center bg-slate-900 text-slate-50 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:py-28">
        <section className="flex flex-col justify-center items-center text-center gap-4 mt-20 lg:mt-0 mb-20 lg:mb-0 px-6 lg:px-0 lg:w-2/3">
        <div className="flex items-center gap-2">
            <Link href="/price-match">
                <Image
                    width={150}
                    height={150}
                    src="/assets/images/badge1.png"
                    alt="lifetime warranty badge"
                />
            </Link>

            <Link href="/lifetime-warranty">
                <Image
                    width={150}
                    height={150}
                    src="/assets/images/badge2.png"
                    alt="lifetime warranty badge"
                />
            </Link>

        </div>
          <p className="text-4xl lg:text-5xl xl:text-7xl font-bold secondary lg:w-2/3 lg:min-w-[900px]">Strong Foundations, Dry Homes – Your <span className="text-[#368bda]">Trusted</span> Waterproofing Experts</p>
          <p className="text-base lg:text-lg lg:w-1/2 mt-2">At HGConstruction, we specialize in protecting your home or business from water damage with expert waterproofing solutions. </p>
          <Link href="/#estimate"><Button className="w-[290px] h-[50px] lg:h-[60px] lg:w-[310px] text-base bg-[#0860B3] hover:bg-white hover:text-slate-950 mt-6">FREE ESTIMATE & CONSULTATION</Button></Link>
        </section>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-center items-center py-12 gap-10 lg:gap-20 px-4 bg-slate-100">
        <Image
          src="/assets/icons/favicon.ico"
          width={600}
          height={600}
          alt="homepage image" 
          className="hidden lg:flex lg:-ml-10 ml-0 lg:mt-0 max-w-[250px] lg:max-w-[420px]"
        />

        <section className="flex flex-col gap-2 lg:w-1/3 xl:w-[40%] lg:mt-0 text-center lg:text-left text-black lg:mt-2">
          <p className="font-bold text-3xl lg:text-4xl">Welcome to HGConstruction</p>
          <p className="text-base lg:text-lg">Our skilled, fully-insured, and licensed waterproofing experts arrive with all the tools and expertise needed to protect your property from water damage—ensuring the job is done right the first time.</p>
          <form className="flex flex-wrap justify-center lg:justify-start w-full gap-4 mt-6" onSubmit={sendEmail}>
          <div className="flex flex-col items-start w-full lg:w-[270px]">
              <Input type="email" placeholder="Email" name="email" className="w-full lg:w-[270px] h-[52px] lg:h-[60px] text-lg border-2 bg-white border-white text-black"/>
              <p className="ml-1 text-red-600">{error}</p>
          </div>
          <Button type="submit" className="w-[290px] h-[50px] lg:h-[60px] lg:w-[310px] text-base shadow">FREE ESTIMATE & CONSULTATION</Button>
        </form>
        </section>
      </div>




    </div>
  )
}

export default Hero