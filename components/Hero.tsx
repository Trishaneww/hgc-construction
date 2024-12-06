"use client"
import { Input } from './ui/input'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useToast } from './hooks/use-toast'
import emailjs from '@emailjs/browser';
import Image from 'next/image'


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
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex w-full">
        <section className="flex flex-col justify-center w-2/3 gap-4 pl-56">
          <p className="text-7xl font-bold">Your Trusted Water Proofing Company</p>
          <p>At HydraGuard Construction, we specialize in protecting your home or business from water damage with expert waterproofing solutions. </p>
          <Button className="w-[300px] h-[52px] text-lg bg-[#0860B3]">Get a free estimate</Button>
        </section>
        <Image
          src="/assets/images/homepage2.png"
          width={2000}
          height={2000}
          alt="homepage image" 
        />
      </div>

      <div className="bg-sky-100 flex w-full justify-center items-center py-12">
        <Image
          src="/assets/images/logo2.png"
          width={400}
          height={400}
          alt="homepage image" 
        />

        <section className="flex flex-col gap-2 w-1/3">
          <p className="font-bold text-xl lg:text-4xl">Welcome to Blue Water Plumbing & Mechanical Services in Oakville, ON</p>
          <p className="text-base lg:text-lg">Our knowledgeable, fully-insured & licensed plumbers arrive with fully-equipped service vehicles ensuring your job is done right the the first time.</p>
          <form className="flex flex-wrap justify-center lg:justify-start w-full gap-4 mt-6" onSubmit={sendEmail}>
          <div className="flex flex-col items-start w-full md:w-[270px]">
              <Input type="email" placeholder="Email" name="email" className="w-full md:w-[270px] h-[52px] text-lg border-2 bg-white border-white text-black"/>
              <p className="ml-1 text-red-600">{error}</p>
          </div>
          <Button type="submit" className="w-full md:w-[200px] h-[50px] text-lg shadow">Get a free quote</Button>
        </form>
        </section>
      </div>




    </div>
  )
}

export default Hero