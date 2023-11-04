import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/db";
import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

//options
export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma!),
	secret: process.env.SECRET,
	session: { strategy: "jwt" },
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
//route
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };