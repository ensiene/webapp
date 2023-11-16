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


import { getI18n, getScopedI18n } from '@/locales/server'


export default async function Home() {

  const t = await getI18n()
  const scopedT = await getScopedI18n('home')

  return (

    <main className="h-full">
      <Header />

      
      <div className='flex align-middle justify-center items-center flex-col'>
        <div className="bg-cover bg-center bg-no-repeat w-screen h-screen flex items-center justify-center" style={{ backgroundImage: 'url(/assets/images/hero.webp)' }}>
          <div className='flex flex-col justify-center align-middle text-center place-content-center'>
            
            <span className='lg:text-5xl text-3xl font-black my-4 max-w-2xl'> {t('home.title')} </span>
            <span className='lg:text-xl text-md font-normal my-4'> Discover a world of technology: study, learn, and apply like never before. </span>

          </div>

        </div>


      </div>


    </main>

  )
}
