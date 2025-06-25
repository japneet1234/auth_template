"use client"
import Navbar from "@/components/navbar";
import { SignInButton, SignUpButton, useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Landing() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/home");
    }
  }, [isSignedIn, router]);
  return (
    <>
      {/* <Navbar /> */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 pt-24">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-600 mb-6 text-center">
          Code For Good
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl text-center mb-8">
          Welcome to Code For Good! Our platform empowers developers to collaborate, learn, and build impactful solutions for a better world. Join us and be part of a community that makes a difference.
        </p>
        <div className="flex gap-4 mb-12">
          <SignInButton signUpForceRedirectUrl={"/home"}>
            <button className="px-6 py-3 rounded bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton signInForceRedirectUrl={"/home"}>
            <button className="px-6 py-3 rounded bg-white border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition">
              Sign Up
            </button>
          </SignUpButton>
        </div>
      </main>
    </>
  );
}