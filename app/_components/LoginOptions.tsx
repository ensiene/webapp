import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { MenuProfile, MenuSandwich } from './NavMenus'
import { Button } from "@/components/ui/button"

const LoginOptions = async () => {
  const session = await getServerSession(options);

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

export default LoginOptions;