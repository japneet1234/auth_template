import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-3 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 shadow-lg h-16">
      <span className="text-2xl font-bold text-white tracking-tight select-none">
        Code For Good
      </span>
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton>
            <button className="px-4 py-2 rounded border border-white text-white bg-transparent hover:bg-white hover:text-indigo-700 transition">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="px-4 py-2 rounded bg-white text-indigo-700 font-semibold hover:bg-indigo-100 transition">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;