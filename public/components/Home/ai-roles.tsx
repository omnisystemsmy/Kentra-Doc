"use client";

import React, { useState } from "react";
import {
  Link as LinkIcon,
  Copy,
  ChevronDown,
  UserCog,
  Sparkles,
  Edit3,
  Trash2,
  Users,
  Bot,
  ShieldAlert,
  Share2,
} from "lucide-react";

export default function RolesGuide() {
  const [activeSection, setActiveSection] = useState("purpose");

  const articleLinks = [
    { id: "purpose", label: "Purpose of AI Roles" },
    { id: "management", label: "Role Lifecycle Management" },
    { id: "behavior-perms", label: "Behavior & Permissions" },
  ];

  return (
    <div className="mx-auto flex w-full max-w-[2100px] flex-col-reverse items-start gap-12 px-6 py-12 lg:flex-row lg:px-6">
      {/* LEFT COLUMN: MAIN CONTENT */}
      <article className="w-full font-hankenGrotesk lg:w-[75%] lg:pr-12">
        {/* Header */}
        <header className="mb-10">
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-900">
            AI Roles
          </h1>
          <p className="text-xl text-slate-500">
            Define specific personas and instructions for the AI to tailor its
            responses to your specific workflows.
          </p>
        </header>

        {/* Section: Purpose */}
        <section id="purpose" className="mb-12 scroll-mt-24">
          <h2 className="group mb-4 flex items-center gap-2 border-b border-slate-200 pb-2 text-2xl font-semibold text-slate-900">
            Purpose
            <LinkIcon
              size={16}
              className="text-slate-300 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </h2>
          <p className="mb-4 leading-7 text-slate-700">
            AI Roles allow you to program the underlying behavior, tone, and
            system instructions of Kentras assistant. Instead of repeating
            context in every single chat, you can assign a Role to a
            conversation or folder.
          </p>
          <p className="mb-4 leading-7 text-slate-700">
            By establishing clear role purposes, you ensure the AI responds with
            the precise expertise required—whether that is strict code
            generation, creative writing, or financial analysis.
          </p>
        </section>

        {/* Section: Role Lifecycle Management */}
        <section id="management" className="mb-12 scroll-mt-24">
          <h2 className="group mb-4 flex items-center gap-2 border-b border-slate-200 pb-2 text-2xl font-semibold text-slate-900">
            Role Lifecycle Management
            <LinkIcon
              size={16}
              className="text-slate-300 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </h2>
          <p className="mb-6 leading-7 text-slate-700">
            Create, modify, and assign personas to streamline how your team
            interacts with the AI across different projects.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <UserCog size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Create role
                </h3>
                <p className="leading-7 text-slate-700">
                  Build a brand-new AI persona from scratch. Define its name,
                  objective, and specialized baseline instructions to shape how
                  it handles incoming user prompts.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Edit3 size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Edit role
                </h3>
                <p className="leading-7 text-slate-700">
                  Modify existing parameters, update system instructions, or
                  change constraints as your project requirements evolve over
                  time.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <Trash2 size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Delete role
                </h3>
                <p className="leading-7 text-slate-700">
                  Permanently remove custom personas that are no longer needed
                  from your workspace directory.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Users size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Assign role
                </h3>
                <p className="leading-7 text-slate-700">
                  Apply a specific role to a folder or chat thread so all
                  incoming prompts automatically inherit that personas
                  specialized context and rules.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Behavior & Permissions */}
        <section id="behavior-perms" className="mb-12 scroll-mt-24">
          <h2 className="group mb-4 flex items-center gap-2 border-b border-slate-200 pb-2 text-2xl font-semibold text-slate-900">
            Role Behavior & Permissions
            <LinkIcon
              size={16}
              className="text-slate-300 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </h2>
          <p className="mb-6 leading-7 text-slate-700">
            Fine-tune how strict or autonomous your AI personas behave and
            control who has access to invoke them.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Role behavior
                </h3>
                <p className="leading-7 text-slate-700">
                  Configure operational boundaries, temperature constraints, and
                  stylistic limitations to ensure the persona adheres strictly
                  to professional guidelines.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <ShieldAlert size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Role permissions
                </h3>
                <p className="leading-7 text-slate-700">
                  Restrict access to sensitive or specialized roles, ensuring
                  only authorized team members can invoke advanced operational
                  assistants.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Share2 size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Role sharing
                </h3>
                <p className="leading-7 text-slate-700">
                  Publish custom personas across your organization or community
                  workspace so teammates can benefit from your tailored prompts.
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
            AI Roles
          </h3>
          <p className="mt-1 text-sm text-slate-500">Article 3 of 5</p>
          <div className="mt-4 border-t border-slate-100 pt-4">
            <p className="text-sm text-slate-600">
              Next:{" "}
              <a href="#" className="text-blue-600 hover:underline">
                AI Context
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
