import { Container } from 'lucide-react'
import { Navbar } from './_components/navbar'
import Link from "next/link"
import LoginOptions from "@/app/_components/LoginOptions"
import { Header } from "./_components/header"
import Image from "next/image"

import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Ensiene | Tech education to everyone!⚡",
  description: "Sign in with your account or create one now!",
}

export default function Home() {
  return (

    <main className=" h-screen">
      <Header />


      <div className='flex align-middle justify-center items-center flex-col'>
        <div
          className='-z-10'
          style={{
            // use the src property of the image object
            backgroundImage: 'url(${"/assets/images/hero.webp"})',
            // other styles
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >

        </div>

        <span className='text-xl font-semibold mt-20'> Hello world! </span>

      </div>


    </main>

  )
}
