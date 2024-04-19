"use client"

import * as React from "react"
import { Languages } from "lucide-react"

import { useChangeLocale, useCurrentLocale } from '@/locales/client'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LangSwitch() {
  const changeLocale = useChangeLocale()
  const locale = useCurrentLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="p-5 rounded-full px-7" variant="secondary" size="icon">

          <Languages className="absolute h-[1.6rem] w-[1.4rem]" />
          <span className="sr-only">Switch your language</span>
        </Button>
        
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 sm:mt-3.5 sm:w-auto w-screen flex sm:absolute flex-col justify-center rounded-none sm:rounded-md" align="start">
        <DropdownMenuItem className="text-center text-md justify-center sm:text-left sm:justify-normal sm:text-sm" onClick={() => changeLocale('en')}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem className="text-center text-md justify-center sm:text-left sm:justify-normal sm:text-sm" onClick={() => changeLocale('pt')}>
          Português
        </DropdownMenuItem>
        <DropdownMenuItem className="text-center text-md justify-center sm:text-left sm:justify-normal sm:text-sm" onClick={() => changeLocale('es')}>
          Español
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}