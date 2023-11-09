import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  Cookie,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  FlaskConical,
  Plus,
  PlusCircle,
  Settings,
  User,
  Home,
  Newspaper,
  LayoutGrid,
  ShoppingBag,
  Award,
  Beaker,
  UserPlus,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Iconoir, ProfileCircle, Menu } from 'iconoir-react'
import Link from "next/link"

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";

export async function MenuProfile() {
  const session = await getServerSession(authOptions);
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-10 px-0"> 
        {session?.user?.image ? (
          <Image
            src={session.user.image}
            width={40}
            height={40}
            alt={`Profile Pic for ${session.user.name}`}
            priority={true}
            className="rounded-sm"
          />
        ) : <ProfileCircle />}  </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 mt-3.5">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/profile">
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>

          </DropdownMenuItem>
        </Link>

        <DropdownMenuItem>
          <CreditCard className="mr-2 h-4 w-4" />
          <span>Billing</span>

        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>

        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Cookie className="mr-2 h-4 w-4" />
          <span>Privacy</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <FlaskConical className="mr-2 h-4 w-4" />
          <span>Beta</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <Link href="/sign-out">
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>

          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function MenuSandwich() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-10 px-0"><Menu></Menu></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56 mt-3.5">
        <Link href='/'>
          <DropdownMenuItem>

            <Home className="mr-2 h-4 w-4" />
            <span className="text-md">Home</span>

          </DropdownMenuItem>
        </Link>

        <Link href='/store'>
          <DropdownMenuItem>

            <ShoppingBag className="mr-2 h-4 w-4" />
            <span className="text-md">Store</span>

          </DropdownMenuItem>
        </Link>
        <Link href='/library'>
          <DropdownMenuItem>

            <LayoutGrid className="mr-2 h-4 w-4" />
            <span className="text-md">Library</span>

          </DropdownMenuItem>
        </Link>

        <Link href='/labs'>
          <DropdownMenuItem>

            <Beaker className="mr-2 h-4 w-4" />
            <span className="text-md">Labs</span>

          </DropdownMenuItem>
        </Link>

        <Link href='/articles'>
          <DropdownMenuItem>

            <Newspaper className="mr-2 h-4 w-4" />
            <span className="text-md">Articles</span>

          </DropdownMenuItem>
        </Link>
        
        <Link href='/plans'>
          <DropdownMenuItem>

            <Award className="mr-2 h-4 w-4" />
            <span className="text-md">Plans</span>

          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu >
  )
}
