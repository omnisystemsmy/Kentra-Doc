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
  Folder,
  AtSign,
  Briefcase,
  Edit3,
  Film,
  GraduationCap,
  Layout,
  Link,
  MessageSquare,
  Settings,
  Sparkles,
} from "lucide-react";

import SignupShowcase from "./signup";
import ProfileGuide from "./profile-guide";
import NavigationGuide from "./navigation-guide";


export default function GettingStartedSection() {
  return (
    <div className="flex w-full flex-col items-start gap-16 pb-16 animate-in fade-in duration-300 p-6 md:p-12 lg:p-16">
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
            Everything you need to create your account, personalize your digital
            identity, master the navigation, and conquer your first day on
            Kentra.
          </p>
        </div>
      </div>

      {/* 2. CREATE AN ACCOUNT */}
      <div className="relative flex w-full flex-col items-start gap-8 overflow-hidden rounded-[40px] border border-white bg-gradient-to-b from-white to-slate-50/50 p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] sm:p-10">
        <SignupShowcase />
      </div>

      {/* 3. COMPLETE YOUR PROFILE */}
      <div className="relative flex w-full flex-col items-start gap-8 overflow-hidden rounded-[40px] border border-white bg-gradient-to-b from-white to-slate-50/50 p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] sm:p-10">
      <ProfileGuide />
      </div>

      {/* 4. NAVIGATION */}
      <div className="relative flex w-full flex-col items-start gap-8 overflow-hidden rounded-[40px] border border-white bg-gradient-to-b from-white to-slate-50/50 p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] sm:p-10">
        <NavigationGuide />
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
            <h3 className="font-hankenGrotesk text-lg font-bold text-[#191C1E]">
              1. Social & Community
            </h3>
            <ul className="space-y-4 font-hankenGrotesk text-[#525866]">
              {[
                { label: "Create profile", icon: UserCircle },
                { label: "Follow users", icon: UserPlus },
                { label: "Join communities", icon: Users },
                { label: "Create Grow post", icon: Sprout },
                { label: "Watch Treats", icon: Video },
              ].map((step, i) => (
                <li key={i} className="flex items-center gap-4">
                  <CheckCircle2
                    size={20}
                    className="text-[#0050CB]/40 shrink-0"
                  />
                  <span className="flex items-center gap-2">
                    <step.icon size={16} className="text-[#525866]/60" />{" "}
                    {step.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-hankenGrotesk text-lg font-bold text-[#191C1E]">
              2. Workspace & Productivity
            </h3>
            <ul className="space-y-4 font-hankenGrotesk text-[#525866]">
              {[
                { label: "Create Workspace", icon: Box },
                { label: "Create Folder", icon: Folder },
                { label: "Create Project", icon: FolderKanban },
                { label: "Start AI chat", icon: MessageSquareShare },
                { label: "Send first message", icon: MessageSquareShare },
                { label: "Create calendar event", icon: Calendar },
              ].map((step, i) => (
                <li key={i} className="flex items-center gap-4">
                  <CheckCircle2
                    size={20}
                    className="text-[#0050CB]/40 shrink-0"
                  />
                  <span className="flex items-center gap-2">
                    <step.icon size={16} className="text-[#525866]/60" />{" "}
                    {step.label}
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
