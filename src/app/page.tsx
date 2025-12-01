"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#0d0d0d] text-white font-sans overflow-hidden">

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden -z-20 pointer-events-none">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
      </div>

      {/* Parallax Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#ff6b00] opacity-20 blur-[180px] animate-slow-pulse" />
      </div>

      {/* Header */}
      <header className="w-full py-4 px-4 sm:px-6 flex justify-between items-center bg-[#1a1a1a]/80 backdrop-blur border-b border-[#262626] shadow-lg animate-fade-in">
        <h1 className="relative text-2xl sm:text-4xl font-bold text-[#ff6b00] shimmer">
          Angelika's Dashboard
        </h1>

        <nav className="space-x-2 sm:space-x-4 flex items-center">
          <Link
            href="/login"
            className="px-3 py-1.5 text-sm sm:px-4 sm:py-2 rounded-full border border-[#ff6b00] hover:bg-[#ff6b00] hover:text-black transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-3 py-1.5 text-sm sm:px-4 sm:py-2 rounded-full bg-[#ff6b00] text-black font-semibold hover:bg-[#e86400] transition"
          >
            Register
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center px-4 sm:px-12 py-20 sm:py-32 animate-fade-in-slow">
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-[#ff6b00] drop-shadow-[0_0_8px_rgba(255,107,0,0.4)]">
          Your Personal Dashboard Awaits
        </h2>

        <p className="max-w-xl text-zinc-300 mb-6 text-base sm:text-xl leading-relaxed">
          Log in or register to unlock your private dashboard.  
          Dive into a sleek dark UI crafted for comfort & clarity.
        </p>

        <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#ff6b00] to-transparent my-6 animate-pulse rounded-full"></div>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 px-4 max-w-6xl">
          {[ 
            {
              title: "Secure Login",
              text: "Protected with token-based, modern authentication.",
            },
            {
              title: "Modern UI",
              text: "Warm neon accents over a cozy dark theme.",
            },
            {
              title: "Easy Navigation",
              text: "Everything is always one click away.",
            }
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-[#1a1a1a]/90 backdrop-blur rounded-xl border border-[#262626] shadow-lg hover:shadow-[0_0_20px_#ff6b00] hover:border-[#ff6b00] transition transform hover:-translate-y-1 fade-card"
              style={{ animationDelay: `${0.2 * i}s` }}
            >
              <h3 className="text-xl font-semibold text-[#ff6b00]">{item.title}</h3>
              <p className="text-zinc-400 mt-2 text-sm">{item.text}</p>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-sm text-zinc-500 border-t border-[#262626] bg-[#0d0d0d]/80 backdrop-blur shadow-inner animate-fade-in-slow">
        <p className="hover:text-[#ff6b00] transition">
          © {new Date().getFullYear()} Angelika • All rights reserved
        </p>
      </footer>

      {/* Animations & Orbs CSS */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slow-pulse {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.35; }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-fade-in { animation: fade-in 0.9s ease-out forwards; }
        .animate-fade-in-slow { animation: fade-in 1.4s ease-out forwards; }

        .fade-card {
          opacity: 0;
          animation: fade-in 1s ease-out forwards;
        }

        /* Title shimmer */
        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: 200px 0; }
        }
        .shimmer {
          background: linear-gradient(90deg, #ff6b00, #ffffff60, #ff6b00);
          background-size: 200px 100%;
          -webkit-background-clip: text;
          color: transparent;
          animation: shimmer 2.5s infinite linear;
        }

        /* Floating Orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.12;
        }
        .orb1 { width: 350px; height: 350px; background: #ff6b00; top: 10%; left: 5%; animation: float 6s ease-in-out infinite; }
        .orb2 { width: 280px; height: 280px; background: #ff6b00; bottom: 15%; right: 8%; animation: float 7s ease-in-out infinite reverse; }
        .orb3 { width: 200px; height: 200px; background: #ff6b00; top: 70%; left: 50%; animation: float 8s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
