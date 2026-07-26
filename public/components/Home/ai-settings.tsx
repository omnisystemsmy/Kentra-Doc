"use client";

import React, { useState } from "react";
import {
  Link as LinkIcon,
  Copy,
  ChevronDown,
  Settings,
  Bot,
  Sparkles,
  Cpu,
  SlidersHorizontal,
  Lock,
  History,
  Network,
  ShieldAlert,
  Edit3,
} from "lucide-react";

export default function SettingsGuide() {
  const [activeSection, setActiveSection] = useState("overview");

  const articleLinks = [
    { id: "overview", label: "Understanding AI Settings" },
    { id: "behavior-params", label: "Behavior & Generation" },
    { id: "privacy-memory", label: "Privacy, Memory & Control" },
  ];

  return (
    <div className="mx-auto flex w-full max-w-[2100px] flex-col-reverse items-start gap-12 px-6 py-12 lg:flex-row lg:px-6">
      {/* LEFT COLUMN: MAIN CONTENT */}
      <article className="w-full font-hankenGrotesk lg:w-[75%] lg:pr-12">
        {/* Header */}
        <header className="mb-10">
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-900">
            AI Settings
          </h1>
          <p className="text-xl text-slate-500">
            Take full control over Kentras AI behavior, memory retention, and
            privacy constraints.
          </p>
        </header>

        {/* Section: Overview */}
        <section id="overview" className="mb-12 scroll-mt-24">
          <h2 className="group mb-4 flex items-center gap-2 border-b border-slate-200 pb-2 text-2xl font-semibold text-slate-900">
            Understanding AI Settings
            <LinkIcon
              size={16}
              className="text-slate-300 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </h2>
          <p className="mb-4 leading-7 text-slate-700">
            The AI Settings configuration center gives you absolute command over
            how Kentras language models operate within your workspace. From
            fine-tuning response styles to enforcing strict data privacy
            boundaries, these controls ensure the system adapts precisely to
            your operational standards.
          </p>
        </section>

        {/* Section: Behavior & Generation */}
        <section id="behavior-params" className="mb-12 scroll-mt-24">
          <h2 className="group mb-4 flex items-center gap-2 border-b border-slate-200 pb-2 text-2xl font-semibold text-slate-900">
            Behavior & Generation Parameters
            <LinkIcon
              size={16}
              className="text-slate-300 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </h2>
          <p className="mb-6 leading-7 text-slate-700">
            Adjust core operational traits, output styles, and systemic
            instructions to govern how the AI handles your prompts.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Behavior
                </h3>
                <p className="leading-7 text-slate-700">
                  Configure global model parameters, fallback instructions, and
                  system-wide logic that dictate how the assistant reacts across
                  all workflows.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Sparkles size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Creativity
                </h3>
                <p className="leading-7 text-slate-700">
                  Adjust the generation temperature slider. Lower values enforce
                  deterministic, factual code or documentation output, while
                  higher values encourage creative brainstorming.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <SlidersHorizontal size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Response style
                </h3>
                <p className="leading-7 text-slate-700">
                  Set default formatting rules, such as enforcing Markdown code
                  block structures, bulleted summaries, or concise technical
                  outputs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Edit3 size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Custom instructions
                </h3>
                <p className="leading-7 text-slate-700">
                  Define permanent system prompts that Kentra automatically
                  appends to every single query you execute, saving you from
                  repeating boilerplate instructions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Privacy, Memory & Control */}
        <section id="privacy-memory" className="mb-12 scroll-mt-24">
          <h2 className="group mb-4 flex items-center gap-2 border-b border-slate-200 pb-2 text-2xl font-semibold text-slate-900">
            Privacy, Memory & Control
            <LinkIcon
              size={16}
              className="text-slate-300 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </h2>
          <p className="mb-6 leading-7 text-slate-700">
            Manage data retention, security boundaries, and contextual
            accessibility across your workspace directories.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Cpu size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Memory</h3>
                <p className="leading-7 text-slate-700">
                  Toggle long-term workspace memory retention on or off,
                  allowing you to run completely isolated, stateless queries
                  when handling sensitive code or data.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Lock size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Privacy
                </h3>
                <p className="leading-7 text-slate-700">
                  Enforce strict data-handling policies to guarantee your
                  conversation telemetry and code assets are strictly isolated
                  and never utilized for external model training.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <History size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  History
                </h3>
                <p className="leading-7 text-slate-700">
                  Configure auto-cleanup rules and retention duration policies
                  for how long past conversation logs are stored within your
                  account.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Network size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Context access
                </h3>
                <p className="leading-7 text-slate-700">
                  Review and revoke permissions regarding which external
                  integrations, folders, or project documents the AI is allowed
                  to read during retrieval tasks.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <ShieldAlert size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Permissions
                </h3>
                <p className="leading-7 text-slate-700">
                  Manage global administrative access rules to restrict who
                  within your organization can modify core system
                  configurations.
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
            AI Settings
          </h3>
          <p className="mt-1 text-sm text-slate-500">Article 5 of 5</p>
          <div className="mt-4 border-t border-slate-100 pt-4">
            <p className="text-sm text-slate-600">
              You have completed the Home & AI Intelligence module!
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
