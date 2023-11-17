import nextAuth from "next-auth";

export { default } from "next-auth/middleware"; 

export const config = { matcher: ["/dashboard"] };
