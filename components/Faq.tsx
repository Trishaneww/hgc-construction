import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { faqData } from '@/data'
import Link from 'next/link'
import '../styles/global.scss';

const Faq = () => {
  return (
    <div className="lg:mt-28 mt-12 py-12 lg:py-36 scroll-smooth bg-slate-100">
        <section className="flex flex-col gap-6 items-center mb-10 text-center w-full">
            <h1 className="text-slate-800  text-3xl md:text-5xl lg:text-6xl font-semibold secondary">Have Any Questions?</h1>
            <p className="text-slate-500 w-full lg:text-xl secondary">Have any further questions? Contact us at <span className="text-[#0860B3]"><Link href="mailto:hydraguardconstruction@gmail.com">hydraguardconstruction@gmail.com</Link></span></p>
        </section>

        <div className="flex justify-center gap-6 w-full p-4">
            <Accordion type="single" collapsible className="flex flex-col gap-4 w-full md:w-4/5 xl:w-3/5">
            <AccordionItem  className="border-none p-4  rounded-2xl" value={'question 1'}>
                <AccordionTrigger className="lg:text-xl text-left">Why is my foundation leaking?</AccordionTrigger>
                    <AccordionContent className="text-base lg:text-lg mt-6 flex flex-col gap-2">
                        <p>Here are the most common reasons why foundations leak:</p>
                        <ul className="list-decimal">
                            <li className="list-decimal">
                                <span className="font-bold">Poor Drainage Around the Foundation:</span>If the ground around your foundation is not properly graded, water may pool near the base of the house. Over time, this can seep into the foundation, leading to leaks. Gutters and downspouts that aren't functioning correctly can also contribute to poor drainage.
                            </li>
                            <li>
                                <span className="font-bold">Cracks in the Foundation:</span>As concrete naturally settles and shifts over time, it can develop small cracks. If these cracks are not sealed properly, water can infiltrate through them, causing leaks. This is particularly common in older homes.
                            </li>
                            <li>
                                <span className="font-bold">Hydrostatic Pressure:</span>When the soil around your foundation becomes saturated with water (often from heavy rain or snowmelt), the pressure can build up against the walls of your foundation. This is known as hydrostatic pressure, and it can force water into your basement or crawlspace through cracks, joints, or weak points in the foundation.
                            </li>
                            <li>
                                <span className="font-bold">Clogged or Damaged Drainage Systems:</span>Foundations often rely on a drainage system like a sump pump or weeping tile to direct water away from the structure. If these systems become clogged or damaged, they can no longer do their job properly, allowing water to enter.
                            </li>
                            <li>
                                <span className="font-bold">Poor Construction or Materials:</span>In some cases, the foundation itself may not have been constructed properly. If low-quality materials were used or corners were cut during construction, it can lead to a weak foundation that is more prone to leaking.
                            </li>
                            <li>
                                <span className="font-bold">Foundation Settling or Shifting:</span>Over time, the soil underneath a home can shift due to various factors like soil erosion, tree roots, or changes in moisture levels. This can cause the foundation to settle unevenly, leading to cracks and leaks.
                            </li>
                            <li>
                                <span className="font-bold">Plumbing Leaks:</span>Sometimes, the source of the water leaking into your basement is a broken or leaking pipe rather than an issue with the foundation itself. If plumbing pipes run near or through the foundation, a leak could be coming from those pipes.
                            </li>
                        </ul>
                    </AccordionContent>
            </AccordionItem>

            <AccordionItem  className="border-none p-4  rounded-2xl" value={'question 2'}>
                <AccordionTrigger className="lg:text-xl text-left">Why should I work with HGConstruction?</AccordionTrigger>
                    <AccordionContent className="text-base lg:text-lg mt-6 flex flex-col gap-2">
                        <p>When it comes to waterproofing your home, you want a company you can trust, with a proven track record of delivering top-notch service. Heres why we stand out:</p>
                        <ul className="list-decimal">
                            <li className="list-decimal">
                                <span className="font-bold">Local, Community-Focused Business:</span>As a local business, we’re deeply committed to our community and take pride in providing personalized, one-on-one service to every customer. Unlike larger, corporate companies, we understand the unique needs of our area and offer tailored solutions.
                            </li>
                            <li>
                                <span className="font-bold">Lower Overhead Means Better Value:</span>We run a lean operation with less overhead than big companies, which means we can pass the savings on to you. You’re not paying for inflated costs—just quality work at a fair price.
                            </li>
                            <li>
                                <span className="font-bold">Skip the Middleman—Work Directly With Us:</span>Unlike larger companies that outsource or have multiple layers of management, every project we take on is handled in-house by our dedicated team. This means you get direct communication, no delays, and a seamless experience from start to finish.
                            </li>
                            <li>
                                <span className="font-bold">Top-Quality Materials:</span>We only use the best waterproofing materials available, ensuring long-lasting protection for your home. You won’t have to worry about subpar products or repairs that don’t last—our focus is on quality and durability.
                            </li>
                            <li>
                                <span className="font-bold">Hardworking, Trustworthy Professionals:</span>Our team is made up of reliable, skilled individuals who are committed to getting the job done right. We take pride in our work and treat every home like it’s our own, so you can rest easy knowing your property is in good hands.
                            </li>
                        </ul>
                        <p>Choosing our company means choosing quality, dedication, and a personal touch. We’re here to protect your home with the best in the business—without the corporate markup or hassle.</p>
                    </AccordionContent>
            </AccordionItem>

            <AccordionItem  className="border-none p-4  rounded-2xl" value={'question 3'}>
                <AccordionTrigger className="lg:text-xl text-left">What’s the difference between exterior and interior foundation waterproofing?</AccordionTrigger>
                    <AccordionContent className="text-base lg:text-lg mt-6 flex flex-col gap-2">
                        <p>When it comes to waterproofing your home, you want a company you can trust, with a proven track record of delivering top-notch service. Heres why we stand out:</p>
                        <ul className="list-decimal">
                            <li className="list-decimal">
                                <span className="font-bold">Exterior Waterproofing:</span>Exterior waterproofing involves preventing water from reaching your foundation by applying protective membranes or coatings on the outside walls. This method manages water flow around the foundation and directs it away from your home, stopping it from seeping into your basement or crawlspace.

                            </li>
                            <li>
                                <span className="font-bold">Interior Waterproofing;</span>Interior waterproofing focuses on addressing water that has already entered your basement. It typically involves the installation of interior drainage systems, designed to collect and redirect water away from the foundation walls. Interior waterproofing is usually a more cost-effective solution for homes where exterior work is not possible or practical, and it provides reliable protection against water damage in the basement. 
                            </li>
                        </ul>
                        <p>Get a free consultation to see your options from our experts today.</p>
                    </AccordionContent>
            </AccordionItem>

            <AccordionItem  className="border-none p-4  rounded-2xl" value={'question 4'}>
                <AccordionTrigger className="lg:text-xl text-left">Why should I consider basement waterproofing?</AccordionTrigger>
                    <AccordionContent className="text-base lg:text-lg mt-6 flex flex-col gap-2">
                        <p>The key to protecting your home from the damaging effects of leaks, whether from a foundation, drain, or pipe issue, is proper basement waterproofing. Ideally, this should be done during the initial construction of your home. Unfortunately, some contractors may cut corners and skip this crucial step to reduce costs, leaving your home vulnerable. Many older homes, in particular, may have never had waterproofing in place. Homeowners with basements should make waterproofing a priority—not only to safeguard their property but to avoid the expensive repairs that could arise in the future.</p>
                    </AccordionContent>
            </AccordionItem>

            <AccordionItem  className="border-none p-4  rounded-2xl" value={'question 5'}>
                <AccordionTrigger className="lg:text-xl text-left">Boost your home's value with professional wet basement repair</AccordionTrigger>
                    <AccordionContent className="text-base lg:text-lg mt-6 flex flex-col gap-2">
                        <p>Trying to fix a wet basement caused by a leaking pipe, drain, or foundation issue with temporary repairs is a short-term solution. Until the root cause of the leak is identified and resolved, you’re unlikely to be free from water damage. Wet basement repairs can quickly become a costly, ongoing expense if not done properly, leading to repeated repairs. That’s why it's essential to work with a skilled waterproofing company that can tackle the core issue. Without addressing the source of the problem, you'll continue to face the high costs of repairs for as long as you own the property.</p>
                    </AccordionContent>
            </AccordionItem>

        </Accordion>
        </div>
    </div> 
)}

export default Faq