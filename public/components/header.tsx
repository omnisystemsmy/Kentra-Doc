"use client";

import React from "react";
import Image from "next/image";
import { Menu, X, Search } from "lucide-react";

// 1. Define the props so TypeScript knows what to expect from page.tsx
interface HeaderProps {
  onMenuClick?: () => void;
  isMobileMenuOpen?: boolean;
}

export default function HeaderKentraDoc({ onMenuClick, isMobileMenuOpen }: HeaderProps) {
  return (
    <>
      {/* ----------------------------- */}
      {/* 1. DESKTOP HEADER (md and up) */}
      {/* ----------------------------- */}
      <header className="sticky top-0 z-50 hidden w-full items-center justify-between border-b border-slate-100 bg-white/80 px-8 py-4 backdrop-blur-md shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] md:flex">
        
        {/* Logo / Title */}
        <div className="flex shrink-0 items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_4px_10px_-4px_rgba(0,80,203,0.1)] border border-slate-50">
            <Image
              src="/images/Kentra-2.png"
              alt="Kentra Logo"
              width={28}
              height={28}
              className="h-8 w-8 object-contain"
            />
          </div>
          <p className="whitespace-nowrap font-hankenGrotesk text-2xl font-bold tracking-tight text-[#191C1E]">
            Kentra Docs
          </p>
        </div>

        {/* Search Bar (Soft UI) */}
        <div className="flex items-center gap-6">
          <div className="group relative flex items-center">
            <Search
              size={18}
              className="absolute left-4 text-[#525866] transition-colors group-focus-within:text-[#0050CB]"
            />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-72 rounded-full border border-slate-200/60 bg-slate-50/50 py-2.5 pl-11 pr-6 font-hankenGrotesk text-sm text-[#191C1E] shadow-inner transition-all placeholder:text-[#525866] focus:border-[#0050CB]/30 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#0050CB]/5"
            />
          </div>
        </div>
      </header>

      {/* ----------------------------- */}
      {/* 2. MOBILE HEADER (below md) */}
      {/* ----------------------------- */}
      <header className="sticky top-0 z-30 flex w-full items-center justify-between border-b border-slate-100 bg-white/90 px-4 py-3 backdrop-blur-md shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] md:hidden">
        
        {/* Burger Menu Button (Triggers onMenuClick passed from page.tsx) */}
        <button
          onClick={onMenuClick}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-[#525866] transition-colors hover:bg-blue-50 hover:text-[#0050CB] active:scale-95"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Title */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/Kentra-2.png"
            alt="Kentra Logo"
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />
          <p className="font-hankenGrotesk text-lg font-bold tracking-tight text-[#191C1E]">
            Kentra Docs
          </p>
        </div>

        {/* Search Icon */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-[#525866] transition-colors hover:bg-slate-100 active:scale-95"
          aria-label="Search"
        >
          <Search size={20} />
        </button>
      </header>
    </>
  );
}