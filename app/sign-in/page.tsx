import Image from "next/image"
import Link from "next/link"

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "@/app/api/auth/[...nextauth]/options";

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/app/_components/forms/UserAuthForm"
import Logomark from "@/app/_components/miscellaneous/EnsieneLogo"

import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Ensiene | Authetication",
  description: "Sign in with your account or create one now!",
}





const SignInPage = async () => {
  const session = await getServerSession(options);

  if (session) {
    redirect("/profile");
  } else {
    return (

      <main className="flex col">



        <div className="container relative  h-[800px] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="lg:hidden absolute left-4 top-4 md:left-8 md:top-8">
            <Logomark />

          </div>
          <Link
            href="/sign-up"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "absolute right-4 top-4 md:right-8 md:top-8"
            )}
          >

            Sign up
          </Link>

          <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full flex items-center justify-left" style={{ backgroundImage: 'url(/assets/images/login-image.webp)' }} />
            <div className="relative z-20 flex items-center text-lg font-medium">
              <Logomark />
            </div>
            <div className="relative z-20 mt-auto">
              <blockquote className="space-y-2">
                <p className="text-lg">
                  &ldquo;This library has saved me countless hours of work and
                  helped me deliver stunning designs to my clients faster than
                  ever before.&rdquo;
                </p>
                <footer className="text-sm">Sofia Davis</footer>
              </blockquote>
            </div>
          </div>

          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">

              <div className="flex flex-col space-y-2 text-center">


                <h1 className="text-2xl font-semibold tracking-tight">
                  Sign in to your account
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter the email you used to create your account
                </p>
              </div>
              <UserAuthForm />

              <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>


      </main>

    );
  }
};

export default SignInPage;