"use client";

import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <button
      className="bg-white dark:bg-slate-600 px-4 py-2 text-black dark:text-white rounded-md border flex flex-wrap"  
      onClick={() => signIn("github", { callbackUrl: "/profile" })}
      type="button"
    >
      Sign In With GitHub
    </button>
  );
};

export default SignInButton;