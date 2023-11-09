import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { Header } from "@/components/Header"
import { redirect } from "next/navigation"
import * as React from "react"

import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Ensiene | User profile",
  description: "Edit your profile here",
}

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/sign-in");
  } else {
    return (

      <main className="h-full">

        <Header />
        <h1>Profile page</h1>

        <div className="flex flex-col align-middle justify-center items-center">


          {session?.user?.image ? (
            <Image
              src={session.user.image}
              width={200}
              height={200}
              alt={`Profile Pic for ${session.user.name}`}
              priority={true}
              className="rounded-full"
            />
          ) : null}

          {session?.user?.name ? <h2 className="text-2xl font-bold my-2">Hello, {session.user.name}!</h2> : null}


        </div>
      </main>
    );
  };
};

