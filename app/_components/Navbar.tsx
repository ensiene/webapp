/* eslint-disable @next/next/no-img-element */

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Iconoir, ProfileCircle } from 'iconoir-react'
import { ModeToggle } from './Darkmode'

import { MenuProfile, MenuSandwich } from './NavMenus'
import Logomark from "@/app/_components/miscellaneous/EnsieneLogo"


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Navitems } from '@/app/_components/NavItems'
import LoginOptions from "./LoginOptions";


export function Navbar() {
  return (
    <div className="flex flex-row align-middle items-center w-full justify-between lg:px-32 md:px-8 px-4 py-3 md:py-0 shadow-sm">

      <div className="flex flex-shrink-0 gap-x-2 items-center">
        <div className="flex md:hidden" >
          <MenuSandwich />
        </div>
        <Logomark />
      </div>


      <Navitems />


      <div className="flex flex-shrink-0 gap-x-2 items-center">
        <ModeToggle />


        <LoginOptions />

      </div>


    </div>



  )
}




