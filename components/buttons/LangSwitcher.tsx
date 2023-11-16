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
        <Button variant="outline" size="icon">
     
          <Languages className="absolute h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch your language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-3.5" align="end">
        <DropdownMenuItem onClick={() => changeLocale('en')}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale('pt')}>
          Portuguese 
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}