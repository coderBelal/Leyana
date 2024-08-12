//login button
"use client";

import { useAuth } from "../lib/contexts/AuthContext";

export default function LoginButton() {
  const { user, isLoading, error, handleLogOut, handleSignInWithGoogle } = useAuth();

  return (
    <section>
      <button
        onClick={handleSignInWithGoogle}
        className="bg-black text-white px-4 py-2 rounded-full"
      >
        Sign Up With Google
      </button>
    </section>
  );
}
