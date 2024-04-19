/* eslint-disable @next/next/no-img-element */

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Iconoir, ProfileCircle } from 'iconoir-react'

import { LangSwitch } from '@/components/buttons/LangSwitcher'

import Logomark from "@/components/miscellaneous/Logo"
import { Button } from "@/components/ui/button"



import { getI18n, getScopedI18n } from '@/locales/server'

export default async function Navbar() {
  const t = await getI18n()
  const scopedT = await getScopedI18n('header.navbar')

  return (
    <div className="container flex flex-row items-center w-full justify-between  md:max-w-6xl">
      <div className="flex flex-shrink-0 gap-x-2 items-center">
        <div className="flex md:hidden" >
        </div>
        <Logomark />
      </div>

      <nav className="ease-in duration-300 max-md:hidden" data-menu-mobile="menu">
        <div className="hidden max-md:block max-md:z-50 max-md:fixed max-md:right-3 max-md:top-1">
          <button id="header-puddy_botao-menu_fechar" data-menu-mobile="close" className="p-1 cursor-pointer border-0 bg-transparent items-end">
            <svg className="w-12 h-12 d-block text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
          </button>
        </div>

        <ul className="flex items-center gap-10 max-md:gap-0 max-md:flex-col max-md:w-full max-md:fixed max-md:top-0 max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:z-40 max-md:bg-[#36005B]">
          <li className="max-md:w-full"><a className="font-medium no-underline text-md  max-md:text-center max-md:block max-md:p-2 ease-in duration-300 max-md:hover:bg-[#7C3AED] font-generalsans " data-menu-mobile="link" href="#home">Home</a></li>
          <li className="max-md:w-full"><a className="font-medium no-underline text-md max-md:text-center max-md:block max-md:p-5 ease-in duration-300 max-md:hover:bg-[#7C3AED] font-generalsans" data-menu-mobile="link" href="#vantagens">Advantages</a></li>
          <li className="max-md:w-full"><a className="font-medium no-underline text-md max-md:text-center max-md:block max-md:p-5 ease-in duration-300 max-md:hover:bg-[#7C3AED] font-generalsans" data-menu-mobile="link" href="#sobre">How it works?</a></li>
          <li className="max-md:w-full"><a className="font-medium no-underline text-md max-md:text-center max-md:block max-md:p-5 ease-in duration-300 max-md:hover:bg-[#7C3AED] font-generalsans " data-menu-mobile="link" href="#blog">Blog</a></li>
          <li className="max-md:w-full"><a className="font-medium no-underline text-md max-md:text-center max-md:block max-md:p-5 ease-in duration-300 max-md:hover:bg-[#7C3AED] font-generalsans " data-menu-mobile="link" href="#faq">FAQ</a></li>
        </ul>
      </nav>

      <div className="flex gap-x-2 items-center">
        <LangSwitch />

        <Button className="font-semibold h-auto text-md block no-underline rounded-3xl px-4 py-2 ease-in duration-300 font-generalsans" asChild>
          <Link className="block" href="/sign-in">{t('header.navbar.button.cta')}</Link>
        </Button>
      </div>
    </div>
  )
}
