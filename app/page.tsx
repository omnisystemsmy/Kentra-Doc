"use client";

import React, { useState } from "react";
import HeaderKentraDoc from "@/public/components/header";
import Sidebar from "@/public/components/sidebar";

// Component Imports
import IntroductionSection from "@/public/components/introduction/IntroductionSection";
// Fixed the import path below. Make sure your folder doesn't have a space!
import GettingStartedSection from "@/public/components/Start/getStartedSection";

export default function KentraDocs() {
  const [activeSection, setActiveSection] = useState("Introduction");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Wrapper function to close the mobile menu automatically when a link is clicked
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden flex-col bg-white font-sans text-slate-900">
      {/* Global Header */}
      <HeaderKentraDoc
        isMobileMenuOpen={isMobileMenuOpen}
        onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      {/* Main Body Layout (Sidebar + Content) */}
      <div className="relative flex flex-1 overflow-hidden">
        {/* Mobile Overlay Background */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar Navigation Container */}
        <div
          className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out md:relative md:z-0 md:translate-x-0 ${
            isMobileMenuOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
          }`}
        >
          <Sidebar
            activeItem={activeSection}
            setActiveItem={handleSectionChange}
          />
        </div>

        {/* Main Content Area - This will now be the ONLY thing that scrolls */}
        <main className="w-full flex-1 overflow-y-auto p-6 md:p-12 lg:p-16 flex justify-center">
          <div className="w-full ">
            {/* Dynamic Content Example: Introduction */}
            {activeSection === "Introduction" && <IntroductionSection />}

            {/* Dynamic Content Example: Getting Started */}
            {activeSection === "Getting Started" && <GettingStartedSection />}

            {/* Fallback for other sections (Fixed) */}
            {activeSection !== "Introduction" && activeSection !== "Getting Started" && (
              <div className="animate-in fade-in duration-300">
                <h1 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                  {activeSection}
                </h1>
                <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-8 text-center text-slate-500">
                  <p>
                    This is where you will add the specific content for{" "}
                    <strong>{activeSection}</strong>.
                  </p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}