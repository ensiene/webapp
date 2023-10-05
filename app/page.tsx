import { Container } from 'lucide-react'
import { Navbar } from './_components/navbar'
import Link from "next/link"
import LoginOptions from "@/app/_components/LoginOptions"

export default function Home() {
  return (

    <main className=" h-screen">

      <div className='flex align-middle justify-center h-full items-center'>
        <span className='text-xl font-semibold'> Hello world! </span>
      </div>

    </main>

  )
}
