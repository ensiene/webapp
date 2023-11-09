import NextAuth from "next-auth";
import { authOtions } from "./options";

//route
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
