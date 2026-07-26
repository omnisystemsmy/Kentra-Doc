"use client";

import React from "react";
import { 
  UserCircle, 
  Image as ImageIcon, 
  Briefcase, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight,
  AtSign,
  MapPin,
  Calendar,
  Languages,
  Globe,
  Heart,
  Eye,
  Activity,
  User
} from "lucide-react";

export default function ProfileGuide() {
  return (
    <div className="w-full">
      
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-blue-50/50 blur-3xl"></div>
      
      {/* Header Section */}
      <div className="relative z-10 mb-10 flex w-full items-center gap-5 border-b border-slate-100 pb-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-50 bg-white text-[#0050CB] shadow-[0_8px_20px_-6px_rgba(0,80,203,0.12)]">
          <BookOpen size={28} strokeWidth={2} />
        </div>
        <div className="flex flex-col">
          <h2 className="font-hankenGrotesk text-[32px] font-semibold tracking-tight text-[#191C1E]">
            Structuring Your Profile
          </h2>
          <p className="font-hankenGrotesk text-base text-[#525866]">
            A comprehensive guide to all the elements that build your digital identity.
          </p>
        </div>
      </div>

      {/* Guide Introduction */}
      <div className="relative z-10 mb-10 w-full rounded-2xl border border-blue-100/50 bg-blue-50/50 p-6">
        <p className="font-hankenGrotesk text-[15px] leading-relaxed text-[#191C1E]">
          <strong className="text-[#0050CB]">Why complete your profile?</strong> In Kentra, your profile acts as your living portfolio. By filling out the required details below, you make it easier for communities and potential collaborators to discover you.
        </p>
      </div>

      {/* Grid for Educational Sections */}
      <div className="relative z-10 grid w-full grid-cols-1 gap-8 md:grid-cols-2">
        
        {/* Lesson 1: Visual Identity */}
        <div className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[#0050CB]">
              <span className="font-hankenGrotesk font-bold">1</span>
            </div>
            <h3 className="font-hankenGrotesk text-lg font-bold text-[#191C1E]">Visual Identity & Basics</h3>
          </div>
          <ul className="mt-2 flex flex-col gap-3 font-hankenGrotesk text-sm text-[#525866]">
            <li className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
              <ImageIcon size={16} className="mt-0.5 shrink-0 text-[#0050CB]" />
              <span><strong>Profile & Cover Photo:</strong> High-quality images to establish your space.</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
              <AtSign size={16} className="mt-0.5 shrink-0 text-[#0050CB]" />
              <span><strong>Display Name & Username:</strong> How you are identified across the network.</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
              <UserCircle size={16} className="mt-0.5 shrink-0 text-[#0050CB]" />
              <span><strong>Bio:</strong> A short, engaging summary of who you are.</span>
            </li>
          </ul>
        </div>

        {/* Lesson 2: Personal Details */}
        <div className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <span className="font-hankenGrotesk font-bold">2</span>
            </div>
            <h3 className="font-hankenGrotesk text-lg font-bold text-[#191C1E]">Personal Details</h3>
          </div>
          <ul className="mt-2 flex flex-col gap-3 font-hankenGrotesk text-sm text-[#525866]">
            <li className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
              <MapPin size={16} className="shrink-0 text-emerald-600" />
              <span><strong>Location:</strong> Where you are based.</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
              <Calendar size={16} className="shrink-0 text-emerald-600" />
              <span><strong>Birthday:</strong> Used for age verification and celebrations.</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
              <User size={16} className="shrink-0 text-emerald-600" />
              <span><strong>Gender:</strong> Your identity pronouns.</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
              <Languages size={16} className="shrink-0 text-emerald-600" />
              <span><strong>Languages:</strong> The languages you speak or write in.</span>
            </li>
          </ul>
        </div>

        {/* Lesson 3: Professional & Social */}
        <div className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-purple-600">
              <span className="font-hankenGrotesk font-bold">3</span>
            </div>
            <h3 className="font-hankenGrotesk text-lg font-bold text-[#191C1E]">Professional & Social</h3>
          </div>
          <ul className="mt-2 flex flex-col gap-3 font-hankenGrotesk text-sm text-[#525866]">
            <li className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
              <Globe size={16} className="mt-0.5 shrink-0 text-purple-600" />
              <span><strong>Website & Social Links:</strong> Connect your external portfolios and profiles.</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
              <Sparkles size={16} className="mt-0.5 shrink-0 text-purple-600" />
              <span><strong>Skills:</strong> Specific tags (e.g., Next.js, Figma) detailing your expertise.</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
              <Heart size={16} className="mt-0.5 shrink-0 text-purple-600" />
              <span><strong>Interests:</strong> Topics and hobbies you follow on the platform.</span>
            </li>
          </ul>
        </div>

        {/* Lesson 4: Settings & Status */}
        <div className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-600">
              <span className="font-hankenGrotesk font-bold">4</span>
            </div>
            <h3 className="font-hankenGrotesk text-lg font-bold text-[#191C1E]">Settings & Status</h3>
          </div>
          <ul className="mt-2 flex flex-col gap-3 font-hankenGrotesk text-sm text-[#525866]">
            <li className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
              <Eye size={16} className="mt-0.5 shrink-0 text-amber-600" />
              <span><strong>Visibility Options:</strong> Control who can see specific parts of your profile.</span>
            </li>
            <li className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
              <Activity size={16} className="mt-0.5 shrink-0 text-amber-600" />
              <span><strong>Profile Completion Progress:</strong> A visual tracker showing what steps you are missing.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Call to Action */}
      <div className="mt-12 flex w-full flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200/60 bg-slate-50 p-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <CheckCircle2 size={24} className="text-[#0050CB]" />
          <span className="font-hankenGrotesk text-sm font-semibold text-[#191C1E]">Ready to build your identity?</span>
        </div>
        <button className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 font-hankenGrotesk text-sm font-bold text-[#0050CB] shadow-sm transition-all hover:bg-slate-50 hover:shadow-md sm:w-auto">
          Navigate to Profile Settings <ArrowRight size={16} />
        </button>
      </div>

    </div>
  );
}