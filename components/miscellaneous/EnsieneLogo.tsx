'use client'
import * as React from "react"
import Link from "next/link"
import Image from "next/image"


export default function Logomark() {
  return (
    <>
      <Link href="/">
        <div className="sm:flex flex-shrink-0 flex items-center">
          <Image
            className="h-8 w-auto px-2"
            src="/assets/images/icon.webp"
            alt="Ensiene"
            width={60}
            height={80}
          />
          <h1 className="sm:flex font-black text-3xl font-outfit hidden">ensiene</h1>
        </div>
      </Link>
    </>
  )
}