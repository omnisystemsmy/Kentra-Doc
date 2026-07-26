"use client";

import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  IdCard,
  Lock,
  CheckCircle,
  ShieldCheck,
  X,
  Image as ImageIcon,
  MapPin,
  Calendar,
  AtSign,
  Phone,
  Sparkles,
  Send,
  ArrowRight,
} from "lucide-react";

interface SignupStepsProps {
  onClick?: () => void;
  text?: string;
}

export default function SignupSteps({
  onClick = () => {},
  text = "Sign up now!",
}: SignupStepsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isModalOpen]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      {/* MAIN GUIDE CONTAINER */}
      <div className="w-full ">
        {/* Animated Soft Background Blurs */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 animate-pulse rounded-full bg-blue-100/50 blur-3xl duration-1000"></div>
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-emerald-50/50 blur-3xl"></div>

        {/* Header Section */}
        <div className="relative z-10 mb-10 flex items-center gap-5">
          <div className="group flex h-16 w-16 cursor-default items-center justify-center rounded-2xl border border-slate-50 bg-white text-[#0050CB] shadow-[0_8px_20px_-6px_rgba(0,80,203,0.12)] transition-all hover:rotate-3 hover:scale-105">
            <User
              size={28}
              strokeWidth={2}
              className="transition-transform group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="font-hankenGrotesk text-[32px] font-semibold tracking-tight text-[#191C1E]">
              Account Initialization
            </h2>
            <p className="font-hankenGrotesk text-base text-[#525866]">
              A guided overview of the 5-step onboarding process.
            </p>
          </div>
        </div>

        {/* VERTICAL TIMELINE GUIDE */}
        <div className="relative z-10 ml-4 flex w-full flex-col gap-6 sm:ml-8">
          {/* Continuous Timeline Line */}
          <div className="absolute left-[19px] top-6 h-[calc(100%-48px)] w-[2px] bg-gradient-to-b from-[#0050CB]/20 via-slate-200 to-transparent sm:left-[27px]"></div>

          {/* Step 1: Username */}
          <div
            className={`group relative rounded-3xl py-4 pl-14 pr-6 transition-all duration-300 sm:pl-20 ${hoveredStep !== null && hoveredStep !== 1 ? "opacity-40" : "opacity-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5"}`}
            onMouseEnter={() => setHoveredStep(1)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <div className="absolute left-0 top-5 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-white bg-blue-50 text-[#0050CB] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0050CB] group-hover:text-white sm:left-2 sm:h-12 sm:w-12">
              <span className="font-hankenGrotesk text-sm font-bold sm:text-base">
                1
              </span>
            </div>
            <h3 className="font-hankenGrotesk text-xl font-bold text-[#191C1E] transition-colors group-hover:text-[#0050CB]">
              Create Username
            </h3>
            <p className="mb-4 mt-1 font-hankenGrotesk text-[#525866]">
              Your unique identifier within the Kentra ecosystem.
            </p>
            <div className="inline-flex cursor-text items-center gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 font-mono text-sm text-[#0050CB] transition-colors group-hover:border-blue-200 group-hover:bg-blue-50/50">
              <AtSign size={16} />
              <span>
                username_example
                <span className="ml-[1px] inline-block h-4 w-1.5 -translate-y-0.5 bg-[#0050CB] opacity-0 transition-opacity duration-100 group-hover:animate-pulse group-hover:opacity-100"></span>
              </span>
            </div>
          </div>

          {/* Step 2: Email */}
          <div
            className={`group relative rounded-3xl py-4 pl-14 pr-6 transition-all duration-300 sm:pl-20 ${hoveredStep !== null && hoveredStep !== 2 ? "opacity-40" : "opacity-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5"}`}
            onMouseEnter={() => setHoveredStep(2)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <div className="absolute left-0 top-5 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-white bg-blue-50 text-[#0050CB] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0050CB] group-hover:text-white sm:left-2 sm:h-12 sm:w-12">
              <span className="font-hankenGrotesk text-sm font-bold sm:text-base">
                2
              </span>
            </div>
            <h3 className="font-hankenGrotesk text-xl font-bold text-[#191C1E] transition-colors group-hover:text-[#0050CB]">
              Email Address
            </h3>
            <p className="mb-4 mt-1 font-hankenGrotesk text-[#525866]">
              Used for account recovery, notifications, and secure OTP
              verification.
            </p>
            <div className="inline-flex items-center gap-3 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-2 pr-4 transition-colors group-hover:border-blue-200 group-hover:bg-blue-50/50">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-blue-100/50 text-[#0050CB]">
                <Mail
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-6 group-hover:opacity-0"
                />
                <Send
                  size={14}
                  className="absolute -translate-x-6 opacity-0 transition-transform duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </div>
              <span className="font-mono text-sm text-[#525866]">
                user@example.com
              </span>
              <span className="ml-2 flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <CheckCircle size={10} /> Verified
              </span>
            </div>
          </div>

          {/* Step 3: Personal Info (MODAL TRIGGER) */}
          <div
            className={`group relative rounded-3xl py-4 pl-14 pr-6 transition-all duration-300 sm:pl-20 ${hoveredStep !== null && hoveredStep !== 3 ? "opacity-40" : "opacity-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5"}`}
            onMouseEnter={() => setHoveredStep(3)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <div className="absolute left-0 top-5 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-white bg-blue-50 text-[#0050CB] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0050CB] group-hover:text-white sm:left-2 sm:h-12 sm:w-12">
              <span className="font-hankenGrotesk text-sm font-bold sm:text-base">
                3
              </span>
            </div>
            <h3 className="font-hankenGrotesk text-xl font-bold text-[#191C1E] transition-colors group-hover:text-[#0050CB]">
              Personal Information
            </h3>
            <p className="mb-4 mt-1 font-hankenGrotesk text-[#525866]">
              Fleshing out your digital identity to connect with communities.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="relative flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#0050CB] to-[#0066FF] px-6 py-3 font-hankenGrotesk text-sm font-semibold text-white shadow-[0_8px_24px_0_rgba(0,102,255,0.20)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_0_rgba(0,102,255,0.40)] active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <IdCard
                size={18}
                className="relative z-10 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
              />
              <span className="relative z-10">Preview Profile Setup</span>
            </button>
          </div>

          {/* Step 4: Password */}
          <div
            className={`group relative rounded-3xl py-4 pl-14 pr-6 transition-all duration-300 sm:pl-20 ${hoveredStep !== null && hoveredStep !== 4 ? "opacity-40" : "opacity-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5"}`}
            onMouseEnter={() => setHoveredStep(4)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <div className="absolute left-0 top-5 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-white bg-blue-50 text-[#0050CB] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0050CB] group-hover:text-white sm:left-2 sm:h-12 sm:w-12">
              <span className="font-hankenGrotesk text-sm font-bold sm:text-base">
                4
              </span>
            </div>
            <h3 className="font-hankenGrotesk text-xl font-bold text-[#191C1E] transition-colors group-hover:text-[#0050CB]">
              Secure Password
            </h3>
            <p className="mb-4 mt-1 font-hankenGrotesk text-[#525866]">
              Securing your data with strict cryptographic standards.
            </p>
            <div className="flex max-w-sm flex-col gap-4 rounded-[24px] border border-slate-100 bg-slate-50 p-5 transition-colors duration-300 group-hover:border-emerald-200 group-hover:bg-emerald-50/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lock
                    size={16}
                    className="text-slate-400 transition-colors group-hover:text-emerald-600"
                  />
                  <span className="font-hankenGrotesk text-sm font-semibold text-slate-600 transition-colors group-hover:text-emerald-700">
                    Strength Indicator
                  </span>
                </div>
                <span className="rounded-md bg-slate-200 px-2 py-1 text-xs font-bold tracking-wider text-slate-500 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                  VERY STRONG
                </span>
              </div>

              {/* Interactive Strength Bar */}
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 group-hover:bg-emerald-100">
                <div className="h-full w-[40%] rounded-full bg-slate-400 transition-all duration-700 ease-out group-hover:w-full group-hover:bg-emerald-500"></div>
              </div>

              <ul className="grid grid-cols-2 gap-2 font-hankenGrotesk text-xs text-slate-500 transition-colors group-hover:text-emerald-700/80">
                <li className="flex items-center gap-1.5">
                  <CheckCircle
                    size={14}
                    className="text-slate-300 transition-colors group-hover:text-emerald-500"
                  />{" "}
                  12+ characters
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle
                    size={14}
                    className="text-slate-300 transition-colors group-hover:text-emerald-500"
                  />{" "}
                  Uppercase
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle
                    size={14}
                    className="text-slate-300 transition-colors group-hover:text-emerald-500"
                  />{" "}
                  Number
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle
                    size={14}
                    className="text-slate-300 transition-colors group-hover:text-emerald-500"
                  />{" "}
                  Special char
                </li>
              </ul>
            </div>
          </div>

          {/* Step 5: Review */}
          <div
            className={`group relative rounded-3xl py-4 pl-14 pr-6 transition-all duration-300 sm:pl-20 ${hoveredStep !== null && hoveredStep !== 5 ? "opacity-40" : "opacity-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5"}`}
            onMouseEnter={() => setHoveredStep(5)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <div className="absolute left-0 top-5 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-white bg-blue-50 text-[#0050CB] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0050CB] group-hover:text-white sm:left-2 sm:h-12 sm:w-12">
              <span className="font-hankenGrotesk text-sm font-bold sm:text-base">
                5
              </span>
            </div>
            <h3 className="font-hankenGrotesk text-xl font-bold text-[#191C1E] transition-colors group-hover:text-[#0050CB]">
              Review & Initialize
            </h3>
            <p className="mb-4 mt-1 max-w-md font-hankenGrotesk text-[#525866]">
              Final verification before committing your data and generating your
              initial auth tokens.
            </p>
            <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 border-dashed bg-slate-50 px-5 py-3 text-[#191C1E] transition-all group-hover:border-[#0050CB]/50 group-hover:bg-blue-50/30">
              <div className="relative">
                <ShieldCheck
                  size={20}
                  className="text-slate-400 transition-colors duration-300 group-hover:text-[#0050CB]"
                />
                <Sparkles
                  size={12}
                  className="absolute -right-2 -top-2 text-yellow-400 opacity-0 transition-all duration-500 group-hover:rotate-12 group-hover:scale-125 group-hover:opacity-100"
                />
              </div>
              <span className="font-hankenGrotesk text-sm font-medium transition-colors group-hover:text-[#0050CB]">
                All parameters ready for deployment
              </span>
            </div>
          </div>
          <div className="mt-8 flex w-full justify-end sm:justify-end">
            <button
              onClick={onClick}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0050CB] to-[#0066FF] px-8 py-3.5 font-hankenGrotesk text-sm font-bold text-white shadow-[0_8px_24px_0_rgba(0,102,255,0.20)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_0_rgba(0,102,255,0.30)] active:scale-95 sm:w-auto"
            >
              {text}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </button>
          </div>
        </div>
      </div>

      {/* STEP 3 MODAL OVERLAY (Soft UI) - KEPT EXACTLY THE SAME */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative flex w-full max-w-lg flex-col overflow-hidden rounded-[40px] border border-white bg-white shadow-[0_24px_48px_-12px_rgba(0,102,255,0.15)] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-[#424656] transition-colors hover:bg-slate-100 active:scale-95"
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            <div className="bg-gradient-to-b from-blue-50/50 to-white px-8 pb-6 pt-10 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#0050CB] shadow-sm">
                <IdCard size={28} strokeWidth={2} />
              </div>
              <h2 className="font-hankenGrotesk text-2xl font-bold text-[#191C1E]">
                Profile Elements
              </h2>
              <p className="mt-2 font-hankenGrotesk text-sm text-[#525866]">
                These details help personalize your Kentra experience.
              </p>
            </div>

            <div className="px-8 pb-10 pt-2">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  { icon: ImageIcon, label: "Banner & Avatar" },
                  { icon: User, label: "Display Name" },
                  { icon: User, label: "Gender" },
                  { icon: Calendar, label: "Birthday" },
                  { icon: Phone, label: "Phone Number" },
                  { icon: MapPin, label: "Location" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/50 p-3 hover:bg-blue-50/50 transition-colors cursor-default"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-[#0050CB] shadow-sm">
                      <item.icon size={14} />
                    </div>
                    <span className="font-hankenGrotesk text-sm font-semibold text-[#191C1E]">
                      {item.label}
                    </span>
                  </div>
                ))}

                <div className="col-span-1 flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/50 p-3 sm:col-span-2 hover:bg-blue-50/50 transition-colors cursor-default">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-[#0050CB] shadow-sm">
                    <AtSign size={14} />
                  </div>
                  <span className="font-hankenGrotesk text-sm font-semibold text-[#191C1E]">
                    Short Biography (Bio)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
