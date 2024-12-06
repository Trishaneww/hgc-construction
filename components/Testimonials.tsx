import { testimonials } from '@/data'
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-28 gap-12 bg-sky-100 py-28">
        <div className="flex flex-col gap-2 items-center justify-center">
            <p className="text-base lg:text-xl font-extrabold text-blue-700">TESTIMONIALS</p>
            <p className="text-2xl lg:text-6xl font-bold">Hear from our clients</p>
        </div>

        <section className="grid xl:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
                <div className="flex flex-col h-[250px] w-[450px] bg-white p-2 px-6 rounded-xl border-gray-200 border-[1px]" key={idx}>
                    <section className="flex gap-2">
                    <Image
                        src={testimonial.src}
                        width={70}
                        height={70}
                        alt="logo image"
                        className="rounded-full"
                    />

                    <div className="flex flex-col gap-2">
                        <p>{testimonial.name}</p>
                        <p>{testimonial.email}</p>
                    </div>
                    </section>

                    <p>{testimonial.desc}</p>
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