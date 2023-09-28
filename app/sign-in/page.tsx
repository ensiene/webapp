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
      <div className="dark:bg-black bg-slate-50 flex align-middle justify-center h-screen items-center">
        <h1>SignInPage</h1>
        
        <SignInButton />
      </div>
    );
  }
};

export default SignInPage;