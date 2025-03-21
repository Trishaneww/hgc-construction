import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero2 from "@/components/Hero2";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LifetimeWarranty = () => {
  return (
    <div className="flex flex-col bg-slate-100 scroll-smooth overflow-x-hidden">
      <Navbar2 />
      <Navbar />
      <Hero2 />
      <div className="flex items-center justify-center">
        <div className="flex flex-col text-lg mt-12 lg:w-[64%] px-6">
          <div className="flex flex-col gap-2">
            <p>
              At HydraGuard Construction, we stand by our work and offer a
              Lifetime Waterproofing Warranty for all interior and exterior
              basement waterproofing systems we install. Our goal is to provide
              long-term protection and peace of mind, ensuring your home stays
              dry.
            </p>

            <p className="font-bold">What’s Covered</p>

            <p>
              This warranty applies to waterproofing systems installed on
              foundation walls made of poured concrete, concrete block, brick,
              stone, or ICF. If our waterproofing system fails due to a defect
              in workmanship, we will repair the affected area at no cost to
              you.
            </p>

            <p className="font-bold mt-8">What’s Not Covered</p>

            <p>
            While we guarantee our waterproofing system, certain conditions are
            beyond our control, including:
          </p>
          </div>

         
          <ul className="flex flex-col list-disc ml-12 mt-4">
            <li>
              Structural movement, settling, or foundation cracks beyond normal
              tolerances.
            </li>
            <li>
              Water intrusion from windows, doors, sump pump failure, or over
              the foundation wall.
            </li>
            <li>
              Poor drainage, including defective gutters, downspouts, or
              landscaping issues.
            </li>
            <li>
              Modifications to the foundation or waterproofing system made after
              installation.
            </li>
            <li>Mold, mildew, or air quality issues.</li>
          </ul>

          <div className="flex flex-col gap-2 mt-8">
            <p className="font-bold">Filing a Claim</p>

            <p>
              If you experience water intrusion, notify us within 30 days of
              discovering the issue. We will assess the problem and determine
              the best course of action.
            </p>

            <p className="font-bold">Warranty Transfer</p>

            <p>
              This warranty is transferable to one subsequent owner if requested
              in writing within 60 days of property transfer.
            </p>

            <p>
              Our Lifetime Waterproofing Warranty ensures your home remains
              protected. Contact us today for more details!
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LifetimeWarranty;
