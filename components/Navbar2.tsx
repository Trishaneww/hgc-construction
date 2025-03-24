import { Facebook, Instagram, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar2 = () => {
  return (
    <div className="hidden lg:flex justify-between items-center px-14 py-2">
      <div className="flex items-center gap-6">
        <Link href="tel:416-895-5543" className="flex gap-2">
          <Phone />
          <p>+1 (416) 895-5543</p>
        </Link>
        <Link href="/lifetime-warranty">Lifetime Warranty</Link>
        <Link href="/price-match">Price Match Gaurantee</Link>
      </div>

      <div className="flex items-center gap-2">
        <Link
          href="https://www.instagram.com/hydraguardconstruction/"
          target="_blank"
          className="bg-slate-900 rounded-full h-[32px] w-[32px] flex text-white items-center justify-center hover:bg-[#FAFAFA] hover:text-black duration-300"
        >
          <Instagram size={18}/>
        </Link>

        <Link
          href="https://www.facebook.com/profile.php?id=61573842520900#"
          target="_blank"
          className="bg-slate-900 rounded-full h-[32px] w-[32px] flex text-white items-center justify-center hover:bg-[#FAFAFA] hover:text-black duration-300"
        >
          <Facebook size={18}/>
        </Link>
      </div>
    </div>
  );
};

export default Navbar2;
