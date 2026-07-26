"use client";

import React, { useState } from "react";
import {
  Link as LinkIcon,
  Copy,
  ChevronDown,
  BrainCircuit,
  Cpu,
  LayoutDashboard,
  Folder,
  Layers,
  MessageSquare,
  User,
  Clock,
  Network,
} from "lucide-react";

export default function ContextGuide() {
  const [activeSection, setActiveSection] = useState("overview");

  const articleLinks = [
    { id: "overview", label: "Understanding AI Context" },
    { id: "layers", label: "Context Memory Layers" },
    { id: "hierarchy", label: "Context Hierarchy" },
  ];

  return (
    <div className="mx-auto flex w-full max-w-[2100px] flex-col-reverse items-start gap-12 px-6 py-12 lg:flex-row lg:px-6">
      {/* LEFT COLUMN: MAIN CONTENT */}
      <article className="w-full font-hankenGrotesk lg:w-[75%] lg:pr-12">
        {/* Header */}
        <header className="mb-10">
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-900">
            AI Context
          </h1>
          <p className="text-xl text-slate-500">
            How Kentra understands you. The AI draws from multiple layers of
            memory to provide hyper-relevant answers.
          </p>
        </header>

        {/* Section: Overview */}
        <section id="overview" className="mb-12 scroll-mt-24">
          <h2 className="group mb-4 flex items-center gap-2 border-b border-slate-200 pb-2 text-2xl font-semibold text-slate-900">
            Understanding AI Context
            <LinkIcon
              size={16}
              className="text-slate-300 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </h2>
          <p className="mb-4 leading-7 text-slate-700">
            Context is the foundational mechanism that prevents Kentra from
            feeling like a generic chatbot. By intelligently layering different
            types of memory, the system ensures that every response aligns with
            your current environment, project goals, and personal preferences.
          </p>
          <p className="mb-4 leading-7 text-slate-700">
            Understanding how context flows through your workspace allows you to
            fine-tune exactly what information the AI considers when processing
            your prompts.
          </p>
        </section>

        {/* Section: Context Memory Layers */}
        <section id="layers" className="mb-12 scroll-mt-24">
          <h2 className="group mb-4 flex items-center gap-2 border-b border-slate-200 pb-2 text-2xl font-semibold text-slate-900">
            Context Memory Layers
            <LinkIcon
              size={16}
              className="text-slate-300 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </h2>
          <p className="mb-6 leading-7 text-slate-700">
            Kentra structures memory into modular scopes. Each layer provides a
            different breadth of background information to the language model.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Cpu size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Context memory
                </h3>
                <p className="leading-7 text-slate-700">
                  The underlying retrieval engine that dynamically pulls
                  relevant facts, past snippets, and documents into the active
                  prompt window.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <LayoutDashboard size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Workspace context
                </h3>
                <p className="leading-7 text-slate-700">
                  Broad baseline knowledge available across your entire
                  organization or ecosystem, establishing shared company rules
                  and guidelines.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Folder size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Folder context
                </h3>
                <p className="leading-7 text-slate-700">
                  Localized documentation and facts restricted to a particular
                  directory, ensuring chats inside inherit specific topical
                  relevance.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Layers size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Project context
                </h3>
                <p className="leading-7 text-slate-700">
                  Goal-oriented memory focused on an ongoing assignment,
                  tracking milestones, technical stacks, and active
                  requirements.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <MessageSquare size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Conversation context
                </h3>
                <p className="leading-7 text-slate-700">
                  Short-term memory restricted strictly to the current thread,
                  tracking the immediate back-and-forth dialogue.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <User size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Personal context
                </h3>
                <p className="leading-7 text-slate-700">
                  User-specific preferences, such as preferred coding languages,
                  formatting choices, and communication styles.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Clock size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Temporary context
                </h3>
                <p className="leading-7 text-slate-700">
                  Files or snippets uploaded directly into an active chat that
                  are automatically discarded once the thread is closed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Context Hierarchy */}
        <section id="hierarchy" className="mb-12 scroll-mt-24">
          <h2 className="group mb-4 flex items-center gap-2 border-b border-slate-200 pb-2 text-2xl font-semibold text-slate-900">
            Context Hierarchy
            <LinkIcon
              size={16}
              className="text-slate-300 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </h2>
          <p className="mb-6 leading-7 text-slate-700">
            When conflicting instructions or data exist across different layers,
            Kentra uses a strict precedence model to determine which rule
            overrides the other.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Network size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Context hierarchy
                </h3>
                <p className="leading-7 text-slate-700">
                  A structured mapping mechanism. Thread-specific rules override
                  folder-level rules, which in turn override global workspace
                  settings, giving you granular control over AI output.
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
            AI Context
          </h3>
          <p className="mt-1 text-sm text-slate-500">Article 4 of 5</p>
          <div className="mt-4 border-t border-slate-100 pt-4">
            <p className="text-sm text-slate-600">
              Next:{" "}
              <a href="#" className="text-blue-600 hover:underline">
                AI Settings
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
                      ? "border-blue-600 font-medium text-slate-900"
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
