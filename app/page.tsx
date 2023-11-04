import { Container } from 'lucide-react'
import { Navbar } from  '@/components/Navbar'
import Link from "next/link"
import LoginOptions from "@/components/LoginOptions"
import { Header } from "@/components/Header"
import Image from "next/image"

import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Ensiene | Tech education to everyone!⚡",
  description: "Sign in with your account or create one now!",
}

export default function Home() {
  return (

    <main className="h-full">
      <Header />


      <div className='flex align-middle justify-center items-center flex-col'>
        <div className="bg-cover bg-center bg-no-repeat w-screen h-screen flex items-center justify-left" style={{ backgroundImage: 'url(/assets/images/hero.webp)' }}>
          <div className='flex flex-col'>
            
            <span className='lg:text-5xl text-3xl font-bold my-4 text-left max-w-2xl lg:ml-32 ml-4'> If you want to learn or share what you know, you've come to the right place. </span>
            <span className='lg:text-xl text-md font-normal my-4 text-left max-w-sm lg:ml-32 ml-4'> Discover a world of technology: study, learn, and apply like never before. </span>

          </div>

        </div>


      </div>


    </main>

  )
}
