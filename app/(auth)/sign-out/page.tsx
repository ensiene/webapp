
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import SignOutButton from "@/components/buttons/SignOutButton";


import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Link from "next/link";


export default async function SignOutPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  } else {
    return (
      <div className="flex flex-col align-middle justify-center items-center h-screen">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Sign-out</CardTitle>
            <CardDescription>Are you sure you want to leave?</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <Button variant="outline" >
              <Link href="/"> Cancel </Link>
              </Button>
            <SignOutButton />
          </CardFooter>
        </Card>
      </div>
    );
  }
};
