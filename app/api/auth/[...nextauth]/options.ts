import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/db";
import { AuthOptions } from 'next-auth';



export const options: AuthOptions = {
	adapter: PrismaAdapter(prisma!),
	secret: process.env.SECRET,
	providers: [
		GitHubProvider({
			name: "GitHub",
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
	],
	pages: {
		signIn: "/sign-in",
		signOut: "/sign-out",
	},
};