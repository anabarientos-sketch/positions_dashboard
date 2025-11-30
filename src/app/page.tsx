"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0d0d0d] text-white font-sans">
      
      {/* Header */}
      <header className="w-full py-4 px-4 sm:px-6 flex justify-between items-center bg-[#1a1a1a] shadow-md border-b border-[#262626]">
        <h1 className="text-2xl sm:text-4xl font-bold text-[#ff6b00]">
          Angelika's Dashboard
        </h1>
        <nav className="space-x-2 sm:space-x-4 flex items-center">
          <Link
            href="/login"
            // Adjusted padding/size for better fit on small screens
            className="px-3 py-1.5 text-sm sm:px-4 sm:py-2 rounded-full border border-[#ff6b00] hover:bg-[#ff6b00] hover:text-black transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            // Adjusted padding/size for better fit on small screens
            className="px-3 py-1.5 text-sm sm:px-4 sm:py-2 rounded-full bg-[#ff6b00] text-black font-semibold hover:bg-[#e86400] transition"
          >
            Register
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center px-4 sm:px-12 py-20 sm:py-32">
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-[#ff6b00]">
          Your Personal Dashboard Awaits
        </h2>
        <p className="max-w-xl text-zinc-300 mb-6 text-base sm:text-xl leading-relaxed">
          Log in or register to access your personalized dashboard. View your
          account details, monitor your activity, and explore a dark-themed,
          cozy interface designed for your convenience.
        </p>

        {/* Buttons with Link wrapper */}
        <div className="flex gap-3 sm:gap-4 flex-wrap justify-center mb-12 w-full max-w-sm sm:max-w-none">
          <Link href="/login" className="flex-1 min-w-[120px]">
            <Button
              size="lg"
              // Ensure button text and padding are appropriate for mobile
              className="w-full rounded-full bg-[#ff6b00] hover:bg-[#e86400] text-black px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg shadow-lg"
            >
              Login
            </Button>
          </Link>
          <Link href="/register" className="flex-1 min-w-[120px]">
            <Button
              size="lg"
              // Ensure button text and padding are appropriate for mobile
              className="w-full rounded-full border border-[#ff6b00] text-[#ff6b00] hover:bg-[#ff6b00] hover:text-black px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg shadow-lg"
            >
              Register
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}