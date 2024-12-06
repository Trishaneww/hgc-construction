"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import emailjs from '@emailjs/browser';
import { useToast } from "@/components/hooks/use-toast"
import Link from 'next/link';


const ContactForm = () => {

    const [emailError, setEmailError] = useState("")
  const [nameError, setNameError] = useState("")

  const { toast } = useToast()
  const sendEmail = (e:any) => {
    e.preventDefault();

    try {
      if (e.target.email.value === "" || e.target.full_name.value === "") {

          if (e.target.email.value === "") {
            setEmailError("Email is required")
            if (e.target.full_name.value === "") {
              setNameError("Fullname is required")
            }
          } 
 
      } else {

          emailjs.sendForm('service_luvg8op', 'template_sx6i957' , e.target , '1MxDwCSvQF6Leln4f');
           e.target.reset()
           setEmailError("")
           setNameError("")

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
    <div className="flex flex-col items-center justify-center gap-12 bg-sky-100 pb-28">
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-2xl font-semibold lg:text-6xl">Receive a Free Estimate</p>
        <p>Have a project in mind that you think we would be a great fit for? We’d love to connect with you and learn more!</p>
      </div>
    <form className="w-full lg:w-4/5 flex flex-col items-center gap-4 -mt-4" onSubmit={sendEmail}>
        <div className="flex w-5/6 justify-center items-center gap-2 mt-8">
        <div className="flex flex-col items-start w-5/6 gap-2">
            {/* <p className="flex justify-start text-slate-900">Name</p> */}
            <input 
              type="text" 
              name="full_name"
              placeholder="Full Name*"
              className="w-full border-[1px] h-[48px] border-slate-200 p-2 rounded-md outline-none"/>
              <p className="ml-1 text-red-600">{nameError}</p>
          </div>

          <div className="flex flex-col items-start w-5/6 gap-2">
            {/* <p className="flex justify-start text-slate-900">Email</p> */}
            <input 
              type="text" 
              name="email" 
              placeholder="Email*" 
              className="w-full border-[1px] h-[48px] border-slate-200 p-2 rounded-md outline-none"/>
              <p className="ml-1 text-red-600">{emailError}</p>
          </div>

          <div className="flex flex-col items-start w-5/6 gap-2">
            {/* <p className="flex justify-start text-slate-900">Email</p> */}
            <input 
              type="text" 
              name="email" 
              placeholder="Address" 
              className="w-full border-[1px] h-[48px] border-slate-200 p-2 rounded-md outline-none"/>
              <p className="ml-1 text-red-600">{emailError}</p>
          </div>
        </div>

          {/* <div className="flex flex-col items-start w-5/6 gap-2">
        
            <input 
              type="text" 
              name="company"
              placeholder="Company Name" 
              className="w-full border-[1px] h-[44px] border-slate-200 p-2 rounded-md outline-none"/>
          </div> */}
          
          <div className="flex flex-col items-start w-5/6 gap-2">
            {/* <p className="flex justify-start text-slate-900">Notes (optional)</p> */}
            <textarea placeholder="Tell us more about your project" name="message" className="w-full border-[1px] h-[230px] border-slate-200 p-2 rounded-md outline-none"/>
          </div>      
          <Button type="submit" className="bg-slate-900 h-[52px] text-lg px-10">Request a Free Estimate</Button>
        </form>
    </div>
  )
}

export default ContactForm