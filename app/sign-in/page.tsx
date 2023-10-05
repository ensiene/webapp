import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "@/app/api/auth/[...nextauth]/options";

import SignInButton from "@/app/_components/SignInButton";

const SignInPage = async () => {
  const session = await getServerSession(options);

  if (session) {
    redirect("/profile");
  } else {
    return (

      <main className="flex col">
        <div className="" >
          

        </div>

        <div className="dark:bg-black bg-slate-50 flex flex-col flex-wrap align-middle justify-center h-fit items-center">

          
          <h1 className="text-lg">SignInPage</h1>


          <SignInButton />
        </div>

      </main>

    );
  }
};

export default SignInPage;