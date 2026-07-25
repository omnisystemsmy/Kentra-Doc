"use client";

import React from "react";
import {
  UserPlus,
  ShieldCheck,
  Mail,
  Key,
  LayoutDashboard,
  Smartphone,
  Search,
  Command,
  Sun,
  CheckCircle2,
  Image as ImageIcon,
  UserCircle,
  Globe,
  Eye,
  Activity,
  MessageSquareShare,
  Calendar,
  FolderKanban,
  Video,
  Sprout,
  Users,
  Box,
  Layers,
  Folder
} from "lucide-react";

export default function GettingStartedSection() {
  return (
    <div className="flex w-full flex-col items-start gap-16 pb-16 animate-in fade-in duration-300">
      
      {/* 1. HERO SECTION */}
      <div className="flex w-full flex-col items-start gap-6">
        <div className="flex w-fit items-center gap-3 rounded-full bg-[rgba(0,80,203,0.05)] px-4 py-2">
          <div className="h-2 w-2 rounded-full bg-[#0050CB]"></div>
          <p className="font-hankenGrotesk text-sm font-semibold leading-5 tracking-[0.15em] text-[#0050CB] uppercase">
            Onboarding Guide
          </p>
        </div>
        <div className="w-full">
          <p className="font-hankenGrotesk text-4xl sm:text-5xl font-semibold leading-[1.1] tracking-[-0.02em] text-[#191C1E]">
            Getting Started
          </p>
        </div>
        <div className="w-full max-w-3xl pb-4">
          <p className="font-hankenGrotesk text-lg leading-relaxed text-[#525866]">
            Everything you need to create your account, personalize your digital identity, master the navigation, and conquer your first day on Kentra.
          </p>
        </div>
      </div>

      {/* 2. CREATE AN ACCOUNT */}
      <div className="relative flex w-full flex-col items-start gap-8 overflow-hidden rounded-[40px] border border-white bg-gradient-to-b from-white to-slate-50/50 p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] sm:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-50/50 blur-3xl"></div>

        <div className="relative z-10 flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-50 bg-white text-[#0050CB] shadow-[0_8px_20px_-6px_rgba(0,80,203,0.12)]">
            <UserPlus size={28} strokeWidth={2} />
          </div>
          <div className="flex flex-col">
            <h2 className="font-hankenGrotesk text-[32px] font-semibold tracking-tight text-[#191C1E]">
              Create an Account
            </h2>
            <p className="font-hankenGrotesk text-base text-[#525866]">
              Secure, seamless, and personalized from the first click.
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-4 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {/* Methods & Verification */}
          <div className="flex flex-col gap-4 rounded-[24px] border border-slate-100/50 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50/50 text-[#0050CB]">
              <Mail size={20} />
            </div>
            <h3 className="font-hankenGrotesk text-lg font-bold text-[#191C1E]">Sign Up & Access</h3>
            <ul className="space-y-3 font-hankenGrotesk text-sm text-[#525866]">
              <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#0050CB]/40"></div> Sign up methods</li>
              <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#0050CB]/40"></div> Google Sign In</li>
              <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#0050CB]/40"></div> Email verification</li>
              <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#0050CB]/40"></div> First login experience</li>
            </ul>
          </div>

          {/* Security & Requirements */}
          <div className="flex flex-col gap-4 rounded-[24px] border border-slate-100/50 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50/50 text-[#0050CB]">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-hankenGrotesk text-lg font-bold text-[#191C1E]">Security</h3>
            <ul className="space-y-3 font-hankenGrotesk text-sm text-[#525866]">
              <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#0050CB]/40"></div> Username requirements</li>
              <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#0050CB]/40"></div> Password requirements</li>
              <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#0050CB]/40"></div> Account recovery</li>
            </ul>
          </div>

          {/* Onboarding */}
          <div className="flex flex-col gap-4 rounded-[24px] border border-slate-100/50 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50/50 text-[#0050CB]">
              <Key size={20} />
            </div>
            <h3 className="font-hankenGrotesk text-lg font-bold text-[#191C1E]">Initialization</h3>
            <ul className="space-y-3 font-hankenGrotesk text-sm text-[#525866]">
              <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#0050CB]/40"></div> Profile creation</li>
              <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#0050CB]/40"></div> Initial onboarding</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. COMPLETE YOUR PROFILE */}
      <div className="relative flex w-full flex-col items-start gap-8 overflow-hidden rounded-[40px] border border-white bg-gradient-to-b from-white to-slate-50/50 p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] sm:p-10">
        <div className="relative z-10 flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-50 bg-white text-[#0050CB] shadow-[0_8px_20px_-6px_rgba(0,80,203,0.12)]">
            <UserCircle size={28} strokeWidth={2} />
          </div>
          <h2 className="font-hankenGrotesk text-[32px] font-semibold tracking-tight text-[#191C1E]">
            Complete Your Profile
          </h2>
        </div>

        <div className="relative z-10 grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 font-hankenGrotesk text-sm font-bold uppercase tracking-wider text-[#191C1E]/40">
                Visual Identity & Basics
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Profile photo', 'Cover photo', 'Display name', 'Username', 'Bio'].map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-2 rounded-lg border border-slate-200/60 bg-white px-3 py-1.5 font-hankenGrotesk text-sm text-[#525866] shadow-sm">
                    <ImageIcon size={14} className="text-[#0050CB]/60" /> {badge}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="mb-4 font-hankenGrotesk text-sm font-bold uppercase tracking-wider text-[#191C1E]/40">
                Personal Details
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Location', 'Birthday', 'Gender', 'Languages'].map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-2 rounded-lg border border-slate-200/60 bg-white px-3 py-1.5 font-hankenGrotesk text-sm text-[#525866] shadow-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#0050CB]/40"></div> {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-4 font-hankenGrotesk text-sm font-bold uppercase tracking-wider text-[#191C1E]/40">
                Professional & Social
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Website', 'Social links', 'Skills', 'Interests'].map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-2 rounded-lg border border-slate-200/60 bg-white px-3 py-1.5 font-hankenGrotesk text-sm text-[#525866] shadow-sm">
                    <Globe size={14} className="text-[#0050CB]/60" /> {badge}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-hankenGrotesk text-sm font-bold uppercase tracking-wider text-[#191C1E]/40">
                Settings & Status
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-lg border border-slate-200/60 bg-white px-3 py-1.5 font-hankenGrotesk text-sm text-[#525866] shadow-sm">
                  <Eye size={14} className="text-[#0050CB]/60" /> Visibility options
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-blue-200/60 bg-blue-50/50 px-3 py-1.5 font-hankenGrotesk text-sm text-[#0050CB] shadow-sm">
                  <Activity size={14} /> Profile completion progress
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4. NAVIGATION */}
      <div className="relative flex w-full flex-col items-start gap-8 overflow-hidden rounded-[40px] border border-white bg-gradient-to-b from-white to-slate-50/50 p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] sm:p-10">
        <div className="relative z-10 flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-50 bg-white text-[#0050CB] shadow-[0_8px_20px_-6px_rgba(0,80,203,0.12)]">
            <LayoutDashboard size={28} strokeWidth={2} />
          </div>
          <div className="flex flex-col">
            <h2 className="font-hankenGrotesk text-[32px] font-semibold tracking-tight text-[#191C1E]">
              Navigation
            </h2>
            <p className="font-hankenGrotesk text-base text-[#525866]">
              Master your workspace UI and move around Kentra with ease.
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: LayoutDashboard, title: "Desktop navigation" },
            { icon: Smartphone, title: "Mobile navigation" },
            { icon: LayoutDashboard, title: "Sidebar & Topbar" },
            { icon: Smartphone, title: "Bottom navigation" },
            { icon: Search, title: "Global Search" },
            { icon: Activity, title: "Notifications" },
            { icon: Command, title: "Quick actions" },
            { icon: Command, title: "Keyboard shortcuts" },
            { icon: Layers, title: "Context switching" },
          ].map((navItem, idx) => (
            <div key={idx} className="group flex cursor-default items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-[#0050CB]/30 hover:shadow-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-[#525866] transition-colors group-hover:bg-blue-50 group-hover:text-[#0050CB]">
                <navItem.icon size={18} />
              </div>
              <span className="font-hankenGrotesk text-sm font-semibold text-[#191C1E]">{navItem.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. YOUR FIRST DAY */}
      <div className="relative flex w-full flex-col items-start gap-8 overflow-hidden rounded-[40px] border border-blue-50 bg-white p-8 shadow-[0_8px_40px_-12px_rgba(0,80,203,0.08)] sm:p-10">
        
        {/* Soft decorative accent */}
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#0050CB]/5 blur-3xl"></div>

        <div className="relative z-10 flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100/50 bg-blue-50 text-[#0050CB] shadow-sm">
            <Sun size={28} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <h2 className="font-hankenGrotesk text-[32px] font-semibold tracking-tight text-[#191C1E]">
              Your First Day
            </h2>
            <p className="font-hankenGrotesk text-base text-[#525866]">
              A guided checklist to kickstart your ecosystem.
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-6 grid w-full grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-12">
          
          <div className="space-y-6">
            <h3 className="font-hankenGrotesk text-lg font-bold text-[#191C1E]">1. Social & Community</h3>
            <ul className="space-y-4 font-hankenGrotesk text-[#525866]">
              {[
                { label: 'Create profile', icon: UserCircle },
                { label: 'Follow users', icon: UserPlus },
                { label: 'Join communities', icon: Users },
                { label: 'Create Grow post', icon: Sprout },
                { label: 'Watch Treats', icon: Video },
              ].map((step, i) => (
                <li key={i} className="flex items-center gap-4">
                  <CheckCircle2 size={20} className="text-[#0050CB]/40 shrink-0" />
                  <span className="flex items-center gap-2">
                    <step.icon size={16} className="text-[#525866]/60" /> {step.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-hankenGrotesk text-lg font-bold text-[#191C1E]">2. Workspace & Productivity</h3>
            <ul className="space-y-4 font-hankenGrotesk text-[#525866]">
              {[
                { label: 'Create Workspace', icon: Box },
                { label: 'Create Folder', icon: Folder },
                { label: 'Create Project', icon: FolderKanban },
                { label: 'Start AI chat', icon: MessageSquareShare },
                { label: 'Send first message', icon: MessageSquareShare },
                { label: 'Create calendar event', icon: Calendar },
              ].map((step, i) => (
                <li key={i} className="flex items-center gap-4">
                  <CheckCircle2 size={20} className="text-[#0050CB]/40 shrink-0" />
                  <span className="flex items-center gap-2">
                    <step.icon size={16} className="text-[#525866]/60" /> {step.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
}