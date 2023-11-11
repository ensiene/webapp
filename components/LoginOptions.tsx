import Link from "next/link";
import { MenuProfile, MenuSandwich } from './NavMenus'
import { Button } from "@/components/ui/button"
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export default async function LoginOptions() {
  const session = await getServerSession(authOptions);

  return (

    <div className="flex gap-x-4">

      {!session ? (
       
          <Link href="/sign-in" className="dark:text-white  text-sm">
            <Button className=" dark:text-white bg-blue-600 hover:bg-blue-800 rounded-md p-2 h-10 flex-wrap align-middle flex items-center justify-center">
              Sign In
            </Button>

          </Link>
        
      ) : (
        <>

          <MenuProfile />

        </>
      )}
    </div>

  );
};