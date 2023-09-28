import GitHubProvider from "next-auth/providers/github";
import type { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prismadb from "@/lib/prismadb";

export const options: AuthOptions = {
  /* adapter: PrismaAdapter(prismadb), */
  providers: [
    GitHubProvider({
      name: "GitHub",
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    })
  ],
  pages: {
    signIn: "/sign-out",
    signOut: "/sign-out"
  }
};