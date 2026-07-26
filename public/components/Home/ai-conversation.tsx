"use client";

import React, { useState } from "react";
import {
  Link as LinkIcon,
  Copy,
  ChevronDown,
  MessageSquarePlus,
  Edit3,
  Folder,
  Share2,
  Download,
  Archive,
  Trash2,
  Search,
  History,
  BrainCircuit,
} from "lucide-react";

export default function ConversationsGuide() {
  const [activeSection, setActiveSection] = useState("purpose");

  const articleLinks = [
    { id: "purpose", label: "Purpose of AI Conversations" },
    { id: "core-actions", label: "Core Actions" },
    { id: "data-sharing", label: "Data Control & Sharing" },
    { id: "discovery-context", label: "Discovery & Context" },
  ];

  return (
    <div className="mx-auto flex w-full max-w-[2100px] flex-col-reverse items-start gap-12 px-6 py-12 lg:flex-row lg:px-6">
      {/* LEFT COLUMN: MAIN CONTENT */}
      <article className="w-full font-hankenGrotesk lg:w-[75%] lg:pr-12">
        {/* Header */}
        <header className="mb-10">
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-900">
            AI Conversations
          </h1>
          <p className="text-xl text-slate-500">
            Manage your interactions with Kentras AI. Organize, share, and
            retrieve knowledge effortlessly.
          </p>
        </header>

        {/* Section: Purpose */}
        <section id="purpose" className="mb-12 scroll-mt-24">
          <h2 className="group mb-4 flex items-center gap-2 border-b border-slate-200 pb-2 text-2xl font-semibold text-slate-900">
            Purpose of AI Conversations
            <LinkIcon
              size={16}
              className="text-slate-300 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </h2>
          <p className="mb-4 leading-7 text-slate-700">
            Conversations are the primary way you interact with Kentra. Each
            conversation acts as an isolated workspace where the AI maintains
            short-term memory specific to that thread.
          </p>
          <p className="mb-4 leading-7 text-slate-700">
            Understanding how to manage, organize, and extract data from these
            conversations is crucial for maintaining a clean and productive AI
            ecosystem.
          </p>
        </section>

        {/* Section: Core Actions */}
        <section id="core-actions" className="mb-12 scroll-mt-24">
          <h2 className="group mb-4 flex items-center gap-2 border-b border-slate-200 pb-2 text-2xl font-semibold text-slate-900">
            Core Actions
            <LinkIcon
              size={16}
              className="text-slate-300 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </h2>
          <p className="mb-6 leading-7 text-slate-700">
            These are the foundational actions for creating and organizing your
            chat threads within your workspace.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <MessageSquarePlus size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Create conversation
                </h3>
                <p className="leading-7 text-slate-700">
                  Initialize a brand-new thread. Creating a new conversation
                  ensures the AI starts with a blank slate, preventing context
                  bleed from previous unrelated tasks.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Edit3 size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Rename conversation
                </h3>
                <p className="leading-7 text-slate-700">
                  Assign a clear, descriptive title to your thread. While Kentra
                  attempts to auto-generate a title based on your first prompt,
                  manually renaming it makes retrieval much easier later.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Folder size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Move conversation
                </h3>
                <p className="leading-7 text-slate-700">
                  Transfer a thread into a specific project folder. Moving a
                  conversation can also allow it to inherit the AI Roles or
                  document context assigned to that destination folder.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Data Control & Sharing */}
        <section id="data-sharing" className="mb-12 scroll-mt-24">
          <h2 className="group mb-4 flex items-center gap-2 border-b border-slate-200 pb-2 text-2xl font-semibold text-slate-900">
            Data Control & Sharing
            <LinkIcon
              size={16}
              className="text-slate-300 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </h2>
          <p className="mb-6 leading-7 text-slate-700">
            Manage the lifecycle of your conversations and collaborate
            seamlessly with your team.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Share2 size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Share conversation
                </h3>
                <p className="leading-7 text-slate-700">
                  Generate a secure, read-only web link to your chat thread.
                  This allows you to easily show team members how the AI arrived
                  at a specific conclusion or piece of code.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Download size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Export conversation
                </h3>
                <p className="leading-7 text-slate-700">
                  Download the entire transcript of your chat to your local
                  machine. Kentra supports exporting logs in rich PDF format,
                  raw Markdown, or plain text.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Archive size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Archive conversation
                </h3>
                <p className="leading-7 text-slate-700">
                  Hide older threads from your active sidebar without
                  permanently losing the data. Archived chats remain fully
                  searchable but keep your daily workspace uncluttered.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <Trash2 size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Delete conversation
                </h3>
                <p className="leading-7 text-slate-700">
                  Permanently erase a thread and its localized memory from the
                  Kentra database. This action cannot be undone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Discovery & Context */}
        <section id="discovery-context" className="mb-12 scroll-mt-24">
          <h2 className="group mb-4 flex items-center gap-2 border-b border-slate-200 pb-2 text-2xl font-semibold text-slate-900">
            Discovery & Context
            <LinkIcon
              size={16}
              className="text-slate-300 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </h2>
          <p className="mb-6 leading-7 text-slate-700">
            Tools designed to help you navigate long threads and understand
            exactly what the AI knows.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Search size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Search conversation
                </h3>
                <p className="leading-7 text-slate-700">
                  A localized search tool used to find specific keywords,
                  variables, or phrases exclusively within your currently
                  active, long-running chat thread.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <History size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Conversation history
                </h3>
                <p className="leading-7 text-slate-700">
                  View the chronological log of the thread, including timestamps
                  and version histories of prompts you may have edited and
                  re-submitted to the AI.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <BrainCircuit size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Conversation context
                </h3>
                <p className="leading-7 text-slate-700">
                  Open the context inspector to see exactly which files, roles,
                  and past memories the AI is currently weighing to formulate
                  its answers in this specific thread.
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
          <p className="mt-1 text-sm text-slate-500">Article 2 of 5</p>
          <div className="mt-4 border-t border-slate-100 pt-4">
            <p className="text-sm text-slate-600">
              Next:{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Configuring AI Roles
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
