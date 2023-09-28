import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { MenuProfile, MenuSandwich } from './profile-menu'

const LoginOptions = async () => {
  const session = await getServerSession(options);

  return (

    <div className="flex gap-x-4">

      {!session ? (
       
          <Link href="/sign-in" className="text-white text-sm">
            <div className="border hover:bg-gray-800 flex rounded-md p-2">
              Sign In

            </div>
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