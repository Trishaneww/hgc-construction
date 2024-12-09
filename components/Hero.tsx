"use client"
import { Input } from './ui/input'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useToast } from './hooks/use-toast'
import emailjs from '@emailjs/browser';
import Image from 'next/image'
import Link from 'next/link'


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
    <div className="flex flex-col items-center justify-center mt-20 bg-slate-900 text-slate-50 overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full">
        <section className="flex flex-col justify-center items-center lg:items-start lg:w-full xl:w-2/3 text-center lg:text-left gap-4 lg:pl-24 xl:pl-40 mt-20 lg:mt-0 mb-20 lg:mb-0 px-6 lg:px-0">
          <p className="text-4xl lg:text-5xl xl:text-7xl font-bold">Your Trusted Water Proofing Company</p>
          <p>At HydraGuard Construction, we specialize in protecting your home or business from water damage with expert waterproofing solutions. </p>
          <Link href="/#estimate"><Button className="w-[300px] h-[52px] text-lg bg-[#0860B3] hover:bg-white hover:text-slate-950">Get a free estimate</Button></Link>
        </section>
        <Image
          src="/assets/images/homepage2.png"
          width={2000}
          height={2000}
          alt="homepage image" 
          className="w-full lg:max-w-[700px] xl:max-w-[1000px]"
        />
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-center items-center py-12 gap-10 lg:gap-20 px-4 bg-[#0860B3]">
        <Image
          src="/assets/images/logo.png"
          width={400}
          height={400}
          alt="homepage image" 
          className="hidden lg:flex lg:-ml-10 ml-0 lg:mt-0 max-w-[250px] lg:max-w-[320px]"
        />

        <section className="flex flex-col gap-2 lg:w-1/3 lg:mt-0 text-center lg:text-left">
          <p className="font-bold text-3xl lg:text-4xl">Welcome to Hydra Guard Construction in Oakville, ON</p>
          <p className="text-base lg:text-lg">Our knowledgeable, fully-insured & licensed plumbers arrive with fully-equipped service vehicles ensuring your job is done right the the first time.</p>
          <form className="flex flex-wrap justify-center lg:justify-start w-full gap-4 mt-6" onSubmit={sendEmail}>
          <div className="flex flex-col items-start w-full lg:w-[270px]">
              <Input type="email" placeholder="Email" name="email" className="w-full lg:w-[270px] h-[52px] text-lg border-2 bg-white border-white text-black"/>
              <p className="ml-1 text-red-600">{error}</p>
          </div>
          <Button type="submit" className="w-full lg:w-[200px] h-[53px] text-lg shadow">Get a free quote</Button>
        </form>
        </section>
      </div>




    </div>
  )
}

export default Hero