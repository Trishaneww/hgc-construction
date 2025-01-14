import { testimonials } from '@/data'
import Image from 'next/image'
import React from 'react'
import '../styles/global.scss';

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:mt-28 gap-12 mt-12 py-12 lg:py-36">
        <div className="flex flex-col gap-2 items-center justify-center">
            <p className="text-base lg:text-xl font-extrabold text-[#0860B3] secondary">TESTIMONIALS</p>
            <p className="text-3xl lg:text-6xl font-bold text-slate-950 secondary">Hear From Our Clients</p>
        </div>

        <section className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 px-6 lg:p-2">
            {testimonials.map((testimonial, idx) => (
                <div className="flex flex-col h-[260px] md:h-[230px] w-full md:w-[440px] gap-2 bg-white p-4 px-6 rounded-xl border-gray-200 border-[1px]" key={idx}>
                    <section className="flex gap-2">
                    <Image
                        src={testimonial.src}
                        width={70}
                        height={70}
                        alt="logo image"
                        className="max-w-[50px] max-h-[50px] rounded-full"
                    />

                    <div className="flex flex-col gap-2">
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="-mt-2">{testimonial.email}</p>
                    </div>
                    </section>

                    <p className="text-base">{testimonial.desc}</p>
                </div>
            ))}
        </section>
        <Image
            src="/assets/images/google.png"
            width={200}
            height={200}
            alt="logo image"
            className="rounded-full -mt-6"
        />

    </div>
  )
}

export default Testimonials