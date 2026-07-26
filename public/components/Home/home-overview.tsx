"use client";

import React, { useState } from "react";
import {
  Link as LinkIcon,
  Copy,
  ChevronDown,
  Bot,
  MessageSquarePlus,
  Sparkles,
  Zap,
  Users,
  Folder,
  Pin,
  Clock,
  History,
  Search,
  Activity,
} from "lucide-react";

export default function HomeOverviewGuide() {
  const [activeSection, setActiveSection] = useState("purpose");

  const articleLinks = [
    { id: "purpose", label: "Purpose of the Home Page" },
    { id: "command-center", label: "The Command Center" },
    { id: "organization", label: "Navigation & Organization" },
    { id: "history", label: "History & Discovery" },
  ];

  return (
    <div className="mx-auto flex w-full max-w-[2100px] flex-col-reverse items-start gap-12 px-6 py-12 lg:flex-row lg:px-6">
      {/* LEFT COLUMN: MAIN CONTENT */}
      <article className="w-full font-hankenGrotesk lg:w-[75%] lg:pr-12">
        {/* Header */}
        <header className="mb-10">
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-900">
            Home Overview
          </h1>
          <p className="text-xl text-slate-500">
            A complete guide to your centralized AI dashboard and primary
            navigation hub.
          </p>
        </header>

        {/* Section: Purpose */}
        <section id="purpose" className="mb-12 scroll-mt-24">
          <h2 className="group mb-4 flex items-center gap-2 border-b border-slate-200 pb-2 text-2xl font-semibold text-slate-900">
            Purpose of the Home Page
            <LinkIcon
              size={16}
              className="text-slate-300 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </h2>
          <p className="mb-4 leading-7 text-slate-700">
            The Home page serves as your central operating system within Kentra.
            It is designed to minimize friction between you and the AI,
            providing immediate access to your most active contexts, suggested
            starting points, and organizational tools.
          </p>
          <p className="mb-4 leading-7 text-slate-700">
            Whether you are picking up where you left off on a complex project
            or starting a brand-new workflow, the Home dashboard aggregates
            everything you need into a single, unified view.
          </p>
        </section>

        {/* Section: Command Center */}
        <section id="command-center" className="mb-12 scroll-mt-24">
          <h2 className="group mb-4 flex items-center gap-2 border-b border-slate-200 pb-2 text-2xl font-semibold text-slate-900">
            The Command Center
            <LinkIcon
              size={16}
              className="text-slate-300 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </h2>
          <p className="mb-6 leading-7 text-slate-700">
            These features are the core tools you will use to initiate new
            interactions and execute tasks with the AI.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  AI Homepage
                </h3>
                <p className="leading-7 text-slate-700">
                  The primary interface of your dashboard. It dynamically
                  adjusts based on your usage patterns to present the most
                  relevant tools and agents the moment you log in.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <MessageSquarePlus size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  New Conversation
                </h3>
                <p className="leading-7 text-slate-700">
                  A prominent action button that immediately spawns a fresh,
                  isolated context window with the AI, ensuring previous thread
                  data does not bleed into your new task.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Users size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Roles</h3>
                <p className="leading-7 text-slate-700">
                  A quick-selector that allows you to swap the AIs persona
                  before starting a chat. Switch seamlessly from a Senior Code
                  Reviewer to a Creative Copywriter with pre-configured system
                  instructions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Zap size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Quick Actions
                </h3>
                <p className="leading-7 text-slate-700">
                  One-click shortcuts for highly repetitive tasks. Use these to
                  instantly trigger actions like summarizing a pasted document
                  or extracting action items without typing a manual prompt.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Sparkles size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Suggested Prompts
                </h3>
                <p className="leading-7 text-slate-700">
                  Context-aware recommendations generated by the system to help
                  you overcome blank-page syndrome. These suggestions adapt
                  based on your selected Role and Workspace context.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Organization */}
        <section id="organization" className="mb-12 scroll-mt-24">
          <h2 className="group mb-4 flex items-center gap-2 border-b border-slate-200 pb-2 text-2xl font-semibold text-slate-900">
            Navigation & Organization
            <LinkIcon
              size={16}
              className="text-slate-300 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </h2>
          <p className="mb-6 leading-7 text-slate-700">
            As your workspace grows, these features help you manage and
            structure your AI workflows so nothing gets lost.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Folder size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Folders
                </h3>
                <p className="leading-7 text-slate-700">
                  Custom directories allowing you to group related chats
                  together. You can assign specific context or files to a
                  folder, making everything inside it inherently smarter about
                  that specific topic.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Pin size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Pinned Chats
                </h3>
                <p className="leading-7 text-slate-700">
                  Your most vital, long-running conversations anchored directly
                  to the top of your sidebar. Perfect for ongoing projects that
                  you return to every single day.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Clock size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Recent Chats
                </h3>
                <p className="leading-7 text-slate-700">
                  An automatic, easily accessible list of the threads you were
                  most recently active in, allowing you to seamlessly pick up
                  right where you left off.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: History & Search */}
        <section id="history" className="mb-12 scroll-mt-24">
          <h2 className="group mb-4 flex items-center gap-2 border-b border-slate-200 pb-2 text-2xl font-semibold text-slate-900">
            History & Discovery
            <LinkIcon
              size={16}
              className="text-slate-300 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </h2>
          <p className="mb-6 leading-7 text-slate-700">
            Tools designed to help you audit your workspace and retrieve past
            knowledge generated by the AI.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Search size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Search Chats
                </h3>
                <p className="leading-7 text-slate-700">
                  A powerful, global search engine that scans the contents of
                  every conversation you have ever had. Use it to instantly
                  locate specific keywords, code snippets, or generated ideas.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <History size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Chat History
                </h3>
                <p className="leading-7 text-slate-700">
                  A comprehensive, chronological archive of all your past
                  interactions. You can browse through this archive to review,
                  restore, or export older conversations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Activity size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Recent Activity
                </h3>
                <p className="leading-7 text-slate-700">
                  An audit log that provides a birds-eye view of actions taken
                  within the workspace. It tracks when new roles are created,
                  folders are modified, or chats are shared with the team.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* RIGHT COLUMN: SIDEBAR */}
      <aside className="w-full shrink-0 font-hankenGrotesk lg:sticky lg:top-8 lg:w-[25%]">
        {/* Utility Button */}
        <button className="mb-6 flex w-full max-w-[200px] items-center justify-between rounded-md border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-100">
          <div className="flex items-center gap-2">
            <Copy size={14} />
            Copy as Markdown
          </div>
          <ChevronDown size={14} className="text-slate-400" />
        </button>

        {/* Tutorial Progress Card */}
        <div className="mb-8 rounded-lg border border-slate-200 p-4 shadow-sm">
          <h3 className="font-semibold text-slate-900 hover:text-blue-600 hover:underline cursor-pointer">
            Home Overview
          </h3>
          <p className="mt-1 text-sm text-slate-500">Article 1 of 5</p>
          <div className="mt-4 border-t border-slate-100 pt-4">
            <p className="text-sm text-slate-600">
              Next:{" "}
              <a href="#" className="text-blue-600 hover:underline">
                AI Conversations
              </a>
            </p>
          </div>
        </div>

        {/* Table of Contents */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-slate-900">
            In this article
          </h4>
          <ul className="space-y-2 border-l border-slate-200 text-sm">
            {articleLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setActiveSection(link.id)}
                  className={`-ml-px block border-l-2 py-1 pl-4 transition-colors ${
                    activeSection === link.id
                      ? "border-blue-600 text-slate-900 font-medium"
                      : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
