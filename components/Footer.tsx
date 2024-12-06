import { servicesData2, companyData} from '@/data'
import Link from 'next/link'
import React from 'react'
import '../styles/global.scss';

const Footer = () => {
  return (
    <div className="flex flex-col gap-40 p-10  w-full  bg-slate-50 mt-20 footer">
        <section className="flex flex-col gap-4 justify-start -mb-20 xl:mb-0 footer-header">
            <h1 className="text-slate-900 font-bold text-3xl xl:text-4xl">Figment Studios</h1>
            <p className="text-slate-900 mb-9 xl:mb-0 text-lg">@2024 Figment Studios. All rights reserved</p>
        </section>

        <section className="flex gap-12 items-start flex-wrap">
            <div className="flex flex-col gap-2">
                <p className="text-slate-900 font-semibold text-lg">Services</p>
                {servicesData2.map((link, idx) => (
                    <Link href='/services/#services' className="text-slate-700" key={idx}>
                        <p className="text-lg">{link.name}</p>
                    </Link>
                ))}
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-slate-900 font-semibold text-lg">Company</p>
                {companyData.map((link, idx) => (
                    <Link href={link.link} className="text-slate-700" key={idx}>
                        <p className="text-lg">{link.name}</p>
                    </Link>
                ))}
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-slate-900 font-semibold text-lg">Contact</p>
                <a href="mailto:contact.figmentstudios@gmail.com" className="text-lg" target="_blank">contact.figmentstudios@gmail.com</a>
                <a href="https://www.instagram.com/figmentstudioss" className="text-lg" target="_blank">@figmentstudios.ca</a>
                <p className="text-lg">(647)-472-4119</p>
            </div>
        </section>
    </div>
  )
}

export default Footer