import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PriceMatch = () => {
  return (
    <div className="flex flex-col bg-slate-100 scroll-smooth overflow-x-hidden">
      <Navbar2 />
      <Navbar />
      <Hero3 />
      <div className="flex items-center justify-center">
        <div className="flex flex-col text-lg mt-12 lg:w-[64%] px-6">
          <div className="flex flex-col gap-2">
            <p>
              At HydraGuard Construction, we are committed to offering
              competitive pricing without compromising on quality. Our Price
              Match Guarantee ensures that you get the best value for your
              investment.
            </p>

            <p className="font-bold">
              If you receive a lower written quote for comparable services from
              a licensed and insured competitor, we will match or beat their
              price, subject to the following conditions:
            </p>
          </div>

          <div className="flex flex-col gap-2 ml-6 mt-4">
            <p>
              1. Comparable Scope of Work – The competing quote must be for the
              same services, materials, and project specifications as outlined
              in our proposal.
            </p>

            <p>
              2. Licensed & Insured Competitor – The competitor must be a
              legitimate business with proper licensing and insurance in
              accordance with local regulations.
            </p>

            <p>
              3. Written Quote Requirement – The competing price must be
              documented in a formal written estimate dated within the last 30
              days.
            </p>

            <p>4. Exclusions – The price match does not apply to:</p>
            <ul className="flex flex-col list-disc ml-12 mt-4">
              <li>Quotes from unlicensed or uninsured contractors.</li>
              <li>
                Estimates based on verbal discussions or incomplete details.
              </li>
              <li>
                Promotions, limited-time discounts, or special financing offers.
              </li>
              <li>
                Quotes that do not include the same quality of materials and
                workmanship.
              </li>
            </ul>

            <p>
              5. Final Approval – HydraGuard Construction reserves the right to
              verify the competitor’s quote and determine eligibility for the
              price match at our sole discretion.
            </p>
          </div>

          <p className="mt-4">
          To request a price match, we invite you to schedule a complimentary consultation and receive a detailed estimate today.
          </p>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default PriceMatch;
