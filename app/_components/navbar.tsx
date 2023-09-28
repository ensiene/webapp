/* eslint-disable @next/next/no-img-element */

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Iconoir, ProfileCircle } from 'iconoir-react';
import { ModeToggle } from './darkmode'

import { MenuProfile, MenuSandwich } from './profile-menu'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Navitems }  from '@/app/_components/Navitems'
import LoginOptions from "./LoginOptions";

export function Navbar() {
  return (
    <div className=" dark:bg-slate-950 flex flex-row align-middle items-center w-full justify-between lg:px-32 md:px-8 px-4 py-3 md:py-0">
      <div className="flex flex-shrink-0 gap-x-2 items-center">
        <div className="flex md:hidden" >
          <MenuSandwich />
        </div>
        <Link href="/">
          <div className="sm:flex flex-shrink-0 items<MenuSandwich />-center">
            <img
              className="h-8 w-auto px-2"
              src="/assets/images/icon.webp"
              alt="Ensiene"
            />
            <h1 className="sm:flex font-bold text-3xl font-outfit hidden">ensiene</h1>
          </div>
        </Link>
      </div>


      <Navitems />
     

      <div className="flex flex-shrink-0 gap-x-2 items-center">
        <ModeToggle />


        <LoginOptions />
        
      </div>



    </div>

  )
}




