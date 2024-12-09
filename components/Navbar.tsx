"use client"
import { navItems } from '@/data'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from './ui/button'
import '../styles/global.scss';
import React, { useState } from 'react';
import '../styles/global.scss';
import { NavDropDown } from './Navdropdown'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'




const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <div className="flex w-full justify-between lg:justify-center items-center h-[80px]  px-6 md:p-6 backdrop-blur-md navbar self-center scroll-smooth z-10 fixed mb-20 bg-slate-900">
        
        <div className="flex lg:gap-12 justify-start lg:justify-center w-full px-2">
          <Link href='/' className={cn(
                "relative dark:text-slate-50 items-center flex space-x-1 text-slate-50  hover:text-[#0860B3]"
              )}><span className="!cursor-pointe">
                <Image
                  src="/assets/images/logo5.png"
                  width={300}
                  height={300}
                  alt="hydra construction logo"
                  className="-ml-6 mt-[1px]"
                />
              </span>
          </Link>

          {/* <Link href='/'><span className="text-l font-bold">Argus Doctors</span>
          </Link> */}
         
         <NavDropDown />
          {navItems.map((navItem: any, idx: number) => (
            <Link 
              key={idx} 
              href={navItem.link}
              className={cn(
                "hidden lg:flex relative dark:text-slate-50 items-center space-x-1 text-slate-50  hover:text-[#54acff]"
              )}
            >
              <span className="!cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
          <Link href="tel:+6474724119">
          <Button className="w-[220px] h-[50px] text-lg bg-[#0860B3] hidden lg:flex hover:bg-white hover:text-slate-950">Call Us 647-898-1023</Button>
          </Link>

          {/* <div className="hidden lg:flex gap-4 items-start justify-start w-[500px]">
            <NavDropDown />
          </div> */}
        </div>


{/* 
        <Link href="/" className="hidden lg:flex">
        <Button className="w-[150px]">Book Now</Button>
        </Link> */}

        <nav className="lg:hidden">
    <input type="checkbox" id="sidebar-active" />
    <label htmlFor="sidebar-active" className="open-sidebar-button text-slate-50 mt-2">
      <Menu />
    </label>
    <label id="overlay" htmlFor="sidebar-active"></label>
    <div className="links-container bg-slate-900 text-slate-50">
      <label htmlFor="sidebar-active" className="close-sidebar-button relative left-56 text-slate-50">
        {/* <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg> */}
        <X />
       
      </label>

      <a href="/#services">services</a> 
      <a href="/gallery">Our Work</a> 
      <a href="/testimonials">Testimonials</a>
      <a href="/faq">FAQ</a> 
      <Link href="tel:+6474724119">
          <Button className="w-[220px] h-[52px] text-lg mt-2 bg-[#0860B3]">Call Us 647-898-1023</Button>
      </Link>
 
      
    </div>
  </nav>
   
    </div>
  )
}

export default Navbar
