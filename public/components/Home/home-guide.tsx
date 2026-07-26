"use client";

import React, { useState } from "react";
import {
  Book,
  MessageSquare,
  UserCog,
  Settings,
  BrainCircuit,
} from "lucide-react";

// Import your newly created components!
import HomeOverviewGuide from "./home-overview";
import ConversationsGuide from "./ai-conversation";
import AIRolesGuide from "./ai-roles";
import AIContextGuide from "./ai-context";
import AISettingsGuide from "./ai-settings";

export default function KentraDocumentation() {
  // State to track which documentation page the user is currently viewing
  const [activeDoc, setActiveDoc] = useState("home");

  return (
    <div className="flex min-h-screen w-full bg-white font-hankenGrotesk">
      {/* GLOBAL LEFT SIDEBAR: Navigating between different doc pages */}
      <aside className="w-64 shrink-0 border-r border-slate-200 bg-slate-50 px-4 py-8">
        <h2 className="mb-6 px-3 text-sm font-bold tracking-wider text-slate-900 uppercase">
          Kentra Docs
        </h2>

        <nav className="flex flex-col gap-1">
          <button
            onClick={() => setActiveDoc("home")}
            className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              activeDoc === "home"
                ? "bg-blue-100/50 text-blue-700"
                : "text-slate-600 hover:bg-slate-200/50 hover:text-slate-900"
            }`}
          >
            <Book size={18} />
            Home Overview
          </button>

          <button
            onClick={() => setActiveDoc("conversations")}
            className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              activeDoc === "conversations"
                ? "bg-blue-100/50 text-blue-700"
                : "text-slate-600 hover:bg-slate-200/50 hover:text-slate-900"
            }`}
          >
            <MessageSquare size={18} />
            AI Conversations
          </button>

          <button
            onClick={() => setActiveDoc("ai-roles")}
            className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              activeDoc === "ai-roles"
                ? "bg-blue-100/50 text-blue-700"
                : "text-slate-600 hover:bg-slate-200/50 hover:text-slate-900"
            }`}
          >
            <UserCog size={18} />
            AI Roles
          </button>

          <button
            onClick={() => setActiveDoc("ai-context")}
            className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              activeDoc === "ai-context"
                ? "bg-blue-100/50 text-blue-700"
                : "text-slate-600 hover:bg-slate-200/50 hover:text-slate-900"
            }`}
          >
            <BrainCircuit size={18} />
            AI Context
          </button>
          <button
            onClick={() => setActiveDoc("ai-settings")}
            className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              activeDoc === "ai-settings"
                ? "bg-blue-100/50 text-blue-700"
                : "text-slate-600 hover:bg-slate-200/50 hover:text-slate-900"
            }`}
          >
            <Settings size={18} />
            AI Settings
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT AREA: Renders the component based on the activeDoc state */}
      <main className="flex-1 overflow-y-auto">
        {activeDoc === "home" && <HomeOverviewGuide />}
        {activeDoc === "conversations" && <ConversationsGuide />}
        {activeDoc === "ai-roles" && <AIRolesGuide />}
        {activeDoc === "ai-context" && <AIContextGuide />}
        {activeDoc === "ai-settings" && <AISettingsGuide />}
      </main>
    </div>
  );
}
