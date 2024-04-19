
'use client'

import { signIn } from "next-auth/react";
import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useI18n, useScopedI18n } from '../../locales/client'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export default function UserAuthForm({ className, ...props }: UserAuthFormProps) {

  const t = useI18n()
  const scopedT = useScopedI18n('sign-in')

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form>
        <div className="grid gap-2 font-generalsans">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              {t('sign-in.email')}
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            
            />
          </div>
          <Button className="p-5 font-medium text-md py-6" type='submit'> {t('sign-in.button')} </Button>
  
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            {t('sign-in.continue-with')}
          </span>
        </div>
      </div>
      <Button className="p-5 font-medium text-md py-6" variant="outline" type="button" onClick={() => signIn("github", { callbackUrl: "/profile" })}>
        <Icons.gitHub className="mr-2 h-4 w-4" />
        GitHub
      </Button>
    </div>
  )
}