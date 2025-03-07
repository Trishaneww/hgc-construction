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
        <div className="flex items-center justify-center gap-2 mb-8">
                    <Link href="/lifetime-warranty">
                        <Image
                            width={150}
                            height={150}
                            src="/assets/images/badge1.png"
                            alt="lifetime warranty badge"
                        />
                    </Link>
        
                    <Link href="/lifetime-warranty">
                        <Image
                            width={150}
                            height={150}
                            src="/assets/images/badge2.png"
                            alt="lifetime warranty badge"
                        />
                    </Link>
        
                </div>
        <ul className="flex flex-col gap-2">
          <li className="">
            <span className="font-bold">
            Utility Contact & Stakeout:
            </span>
            <p>Hydra Guard Construction contacts all utilities and performs a stakeout before excavation.</p>
          </li>
          <li>
            <span className="font-bold">
            Exposure & Cleaning:
            </span>
            <p>Once the foundation walls and footing are exposed, the surfaces are cleaned for optimal bonding with concrete parge.</p>
          </li>
          <li>
            <span className="font-bold">
            Crack & Void Repair:
            </span>
            <p>All cracks and voids in the foundation are filled with hydraulic cement, and the walls are coated with concrete.</p>
          </li>
          <li>
            <span className="font-bold">Waterproofing Application:</span><p>Aqua-Bloc 720-38 is applied to the foundation wall and footing for enhanced waterproofing.</p>
          </li>
          <li>
            <span className="font-bold">
            Drainage Mat Installation: 
            </span>
            <p>A Delta MS plastic drainage mat is installed down to the footing to improve drainage.</p>
          </li>
          <li>
            <span className="font-bold">
            Weeping Tile Installation: 
            </span>
            <p>New weeping tile is placed, connected to the drainage system, and surrounded by clean ¾” gravel.</p>
          </li>
          <li>
            <span className="font-bold">
            Backfilling & Compaction: 
            </span>
            <p>Soil is backfilled and compacted to prevent future settlement.</p>
          </li>
          <li>
            <span className="font-bold">
            Site Cleanup: 
            </span>
            <p>All debris is removed, and finished surface materials and landscaping are restored.</p>
          </li>
        </ul>

        <p className="mt-8">Waterproofing is crucial when foundations leak or allow moisture. Common causes include:</p>
        <ul className="flex flex-col list-disc ml-12 mt-4">
            <li>Clogged weeping tiles</li>
            <li>Vertical and/or horizontal cracks in the foundation</li>
            <li>Block separation</li>
            <li>Voids where the foundation and footing meet</li>
        </ul>


        <p className="mt-4">These issues allow water to seep into the basement, making waterproofing necessary.</p>
      </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LifetimeWarranty;
