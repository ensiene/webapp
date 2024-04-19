

import Image from 'next/image'
import { Header } from '@/components/header/Header'
import { LangSwitch } from '@/components/buttons/LangSwitcher'
import { getI18n, getScopedI18n } from '@/locales/server'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import { motion } from "framer-motion"
import NextTopLoader from 'nextjs-toploader'

import { Iconoir } from 'iconoir-react';
import { ArrowRight } from 'iconoir-react';


export async function generateMetadata() {
  const t = await getI18n()
  const scopedT = await getScopedI18n('metadata')

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
    icons: {
      icon: '/favicon.ico',
    }
  };
}

export default async function Home() {
  const t = await getI18n()
  const scopedT = await getScopedI18n('home')

  return (
    <>
      <Header />

      <main className="flex bg-background-secondary flex-col items-center justify-between font-generalsans">
        <div className="Hero container bg-center bg-no-repeat w-screen flex flex-col items-center justify-center mt-10 py-8 z-0  pt-2 md:max-w-6xl" id='home'  >
          <div className='flex flex-col-reverse justify-center md:flex-row  h-full w-[20rem] sm:w-[24rem] md:w-full md:justify-between md:py-[3rem] py-1 mt-4'>

            <div className='HeroSection flex flex-col  text-center md:justify-left md:text-left place-content-center'>
              <h1 className='font-generalsans font-semibold text-7xl max-lg:text-6xl lg:w-[32rem] pt-6 md:pt-0'>{t('home.main.hero.title')}</h1>
              <p className="self-stretch text-white text-opacity-60 text-xl font-medium font-generalsans leading-loose lg:w-[28rem] mt-4">{t('home.main.hero.description')}</p>


              <div className="flex w-full max-w-sm items-center space-x-2 pt-10">
                
                <Button className="p-5 font-bold text-md py-6 gap-x-2 uppercase" >{t('home.main.hero.button')}  <ArrowRight />
</Button>
              </div>
            </div>

            <Image
              className="w-[auto] sm:w-[20rem] lg:w-[28rem] h-auto px-2"
              src="/images/hero.webp"
              alt="PPPI logomark"
              width={1830}
              height={2228}
            />
          </div>
        </div>

        <div className="Ecosystem bg-background bg-center bg-no-repeat w-screen flex flex-col items-center justify-center mt-16 py-8 xl:px-52 lg:px-16 md:px-8  z-0" id='vantagens' >
          <div className='flex flex-col justify-evenly align-middle items-center sm:w-full w-[20rem] md:py-[3rem] py-1 place-content-center font-generalsans'>

            <div className='HeroSection flex flex-col text-center place-content-center'>
              <h2 className='font-generalsans font-semibold text-xl lg:text-7xl lg:w-[27rem]'>{t('home.main.ecosystem.title')}</h2>
              <p className="self-stretch text-white text-opacity-60 text-xl font-medium font-generalsans leading-loose lg:w-[28rem] mb-6 mt-4">{t('home.main.ecosystem.description')}</p>
            </div>

            <div className='flex flex-col md:flex-row justify-between w-full text-center space-y-5 md:space-y-0 md:space-x-5 text-md font-medium'>
              <Link className='ImageCard flex flex-col justify-center space-y-4 hover:underline hover:decoration-solid decoration-white' href="/search">
                <Image
                  className="object-scale-down max-h-full drop-shadow-md m-auto rounded-md"
                  src="/images/cards/buddysearch-card.webp"
                  alt="A dog with a gps collar"
                  width={360}
                  height={260}
                />


              </Link>

              <div className='ImageCard flex flex-col justify-center space-y-4'>
                <Link className='ImageCard flex flex-col justify-center space-y-4 hover:underline hover:decoration-solid decoration-white' href="/safe">
                  <Image
                    className="object-scale-down max-h-full drop-shadow-md m-auto rounded-md"
                    src="/images/cards/buddysafe-card.webp"
                    alt="A cat with disabilities, that needs care and love"
                    width={320}
                    height={260}
                  />

                  <h3>BuddySafe</h3>
                </Link>
              </div>


            </div>
            <Button className="p-5 font-medium text-md w-fit py-6 mt-8 md:mt-10" asChild>
              <Link href="/ecosystem">{t('home.main.ecosystem.button')}</Link>
            </Button>

          </div>
        </div >
      </main >

    </>
  )
}
