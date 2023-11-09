import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

//options
export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	secret: process.env.SECRET,
	session: { strategy: "database" },
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
	],
	pages: {
		signIn: "/sign-in",
		signOut: "/sign-out",
	},
};