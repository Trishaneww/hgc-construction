import { Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar2 = () => {
  return (
    <div className="hidden lg:flex justify-between items-center px-14 py-2">
        <div className="flex items-center gap-6">
            <Link href="tel:416-895-5543" className="flex gap-2">
                <Phone/>
                <p>+1 (416) 895-5543</p>
            </Link>
            <Link href="/lifetime-warranty">Lifetime Warranty</Link>
            <Link href="/lifetime-warranty">Price Match Gaurantee</Link>
        </div>


        <div className="flex items-center gap-2">
            <Link href="/lifetime-warranty">
                <Image
                    width={50}
                    height={50}
                    src="/assets/images/badge1.png"
                    alt="lifetime warranty badge"
                />
            </Link>

            <Link href="/lifetime-warranty">
                <Image
                    width={50}
                    height={50}
                    src="/assets/images/badge2.png"
                    alt="lifetime warranty badge"
                />
            </Link>

        </div>

    </div>
  )
}

export default Navbar2