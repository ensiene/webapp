"use client";

import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <button
      className="bg-white px-4 py-2 rounded-md text-slate-900"
      onClick={() => signOut({ callbackUrl: "/" })}
      type="button"
    >
      Yes, i'm sure
    </button>
  );
};

export default SignOutButton;