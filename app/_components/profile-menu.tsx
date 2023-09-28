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

import { Iconoir, ProfileCircle, Menu } from 'iconoir-react';

export function MenuProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-10 px-0"><ProfileCircle></ProfileCircle></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 mt-3.5">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
    
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>

          </DropdownMenuItem>
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
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>

          </DropdownMenuItem>
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
 
        <DropdownMenuItem>
          <Home className="mr-2 h-4 w-4" />
          <span>Home</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ShoppingBag className="mr-2 h-4 w-4" />
          <span>Store</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LayoutGrid className="mr-2 h-4 w-4" />
          <span>Library</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Beaker className="mr-2 h-4 w-4" />
          <span>Labs</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Newspaper className="mr-2 h-4 w-4" />
          <span>Articles</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Award className="mr-2 h-4 w-4" />
          <span>Plans</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
