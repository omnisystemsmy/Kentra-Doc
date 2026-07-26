import React, { useState } from "react";
import Image from "next/image";
import {
  Layers,
  Network,
  Waypoints,
  Sparkles,
  Box,
  Folder,
  Users,
  Sprout,
  Brain,
  Activity,
  Link2,
  UserPlus,
  Archive,
  Globe,
  MessageSquareShare,
  Coins,
  Compass,
  Rss,
  AlertCircle,
  Database,
  ShieldCheck,
  FileText,
  Share2,
  Zap,
  Calendar,
  Folders,
  MessageSquare,
  Type,
  Megaphone,
  Tags,
  MessageCircle,
  Heart,
  MonitorPlay,
  Search,
  Library,
  Filter,
  GraduationCap,
  Bot,
  SlidersHorizontal,
  UserCog,
  LayoutGrid,
  BrainCircuit,
  CheckCircle,
  FileSearch,
  HardDrive,
  LineChart,
  RotateCcw,
  Sliders,
  Trash2,
  Bookmark,
} from "lucide-react";

import ConceptModal from "../Modal";

export default function IntroductionSection() {
  interface Feature {
    icon: React.ElementType;
    text: string;
  }

  interface Concept {
    name: string;
    icon: React.ElementType;
    description: string;
    imageSrc: string;
    features: Feature[];
  }

  const [selectedConcept, setSelectedConcept] = useState<Concept | null>(null);

  const coreConcepts = [
    {
      name: "Workspace",
      icon: Box,
      description:
        "The highest-level organizational container in Kentra. It serves as a central gathering space where all your collaborative data and users reside, featuring customizable banners, member directories, and categorized folders.",
      imageSrc: "/images/Introduction/workspace-2.png",
      features: [
        { icon: Folders, text: "Categorized project and file folders" },
        { icon: Users, text: "Comprehensive member management" },
        { icon: MessageSquare, text: "Dedicated community gathering spaces" },
        { icon: Calendar, text: "Centralized event scheduling" },
      ],
    },
    {
      name: "Folder",
      icon: Folder,
      description:
        "A structural container within a Workspace designed to organize your rich-text documents (Projects) and saved AI conversations (Chats). Folders feature customizable banners, tags, and visibility controls.",
      imageSrc: "/images/Introduction/folder-1.png",
      features: [
        { icon: FileText, text: "Rich-text collaborative documents" },
        { icon: MessageSquareShare, text: "Saved AI conversation threads" },
        { icon: Layers, text: "Custom tagging and categorization" },
      ],
    },
    {
      name: "Project",
      icon: FileText, 
      description:
        "A dynamic, rich-text document environment where your ideas take shape. Built for focus, Projects serve as your primary canvas for drafting content, utilizing inline AI assistance, and publishing your work.",
      imageSrc: "/images/Introduction/project.png",
      features: [
        { icon: Type, text: "Advanced rich-text & layout formatting" },
        { icon: Sparkles, text: "Integrated AI writing assistance" },
        { icon: Globe, text: "Seamless document publishing" },
      ],
    },

    {
      name: "Community",
      icon: Users,
      description:
        "A dedicated gathering space for groups with shared interests to connect and engage. Communities serve as a central hub featuring broadcast announcements, dedicated discussion rooms, and integrated event scheduling.",
      imageSrc: "/images/Introduction/community.png",
      features: [
        { icon: Megaphone, text: "Broadcast announcements to members" },
        { icon: MessageSquare, text: "Dedicated discussion rooms" },
        { icon: Tags, text: "Interest-based tagging and categorization" },
      ],
    },
    {
      name: "Grow",
      icon: Sprout,
      description:
        "Your personalized social and discovery feed. Grow allows you to explore curated content, stay updated with people you follow, and expand your network through suggested connections.",
      imageSrc: "/images/Introduction/grow.png",
      features: [
        { icon: Rss, text: "Curated 'For You' and 'Following' feeds" },
        { icon: UserPlus, text: "Network expansion and connection requests" },
        { icon: MessageCircle, text: "Post creation and social engagement" },
      ],
    },
    {
      name: "Treats",
      icon: Sparkles,
      description:
        "An immersive, media-first feed designed for quick visual discovery. Treats allows you to seamlessly consume, share, and engage with bite-sized content like images and short-form videos.",
      imageSrc: "/images/Introduction/treat.png",
      features: [
        { icon: MonitorPlay, text: "Immersive visual media player" },
        { icon: Heart, text: "Rich social interactions and live comments" },
        { icon: Compass, text: "Tailored discovery via personalized feeds" },
      ],
    },
    {
      name: "Bookmarks",
      icon: Bookmark,
      description:
        "Your personal library of saved content. Bookmarks provide a centralized space to collect, organize, and easily revisit your favorite posts and visual media from across the platform.",
      imageSrc: "/images/Introduction/bookmarks.png",
      features: [
        { icon: Library, text: "Centralized collection for saved content" },
        {
          icon: Filter,
          text: "Seamless filtering by source (Grow vs. Treats)",
        },
        { icon: Search, text: "Dedicated search for quick retrieval" },
      ],
    },
    {
      name: "Role",
      icon: Bot,
      description:
        "The persona engine for your AI. Roles allow you to design custom AI agents with distinct personalities, specialized expertise, and tailored conversational tones to assist you in various contexts.",
      imageSrc: "/images/Introduction/roles.png",
      features: [
        { icon: UserCog, text: "Custom AI personality creation" },
        { icon: SlidersHorizontal, text: "Configurable communication tones" },
        { icon: GraduationCap, text: "Domain-specific expertise tagging" },
      ],
    },
    {
      name: "Activity",
      icon: Activity,
      description:
        "Your central command center for workspace management. The Activity hub displays all the workspaces you have created or joined, allowing for quick navigation and top-level organization.",
      imageSrc: "/images/Introduction/activity.png",
      features: [
        { icon: Box, text: "Centralized hub for all your workspaces" },
        { icon: Search, text: "Quick search and advanced filtering" },
        {
          icon: LayoutGrid,
          text: "Customizable grid and list viewing options",
        },
      ],
    },
    {
      name: "Context",
      icon: Layers,
      description:
        "The intelligent memory layer of the platform. Context ensures the AI persistently understands your actions across the entire ecosystem. Whether you schedule a calendar event, update a file, or create a task, the AI always knows what you are working on to provide highly relevant assistance.",
      imageSrc: "/images/Introduction/context.png",
      features: [
        { icon: Brain, text: "Omnipresent AI awareness across all modules" },
        {
          icon: Calendar,
          text: "Real-time tracking of events and user actions",
        },
        {
          icon: Database,
          text: "Persistent memory powered by seamless OpenAI and Supabase integration",
        },
      ],
    },
    {
      name: "Connection",
      icon: Link2,
      description:
        "The underlying fabric that ties your digital workspace together. Connections allow you to create smart, mapped relationships between different modules—such as linking a specific chat conversation directly to a project task, or attaching a calendar event to a saved file.",
      imageSrc: "/images/Introduction/stock.jpg",
      features: [
        { icon: Waypoints, text: "Seamless cross-module data linking" },
        {
          icon: Network,
          text: "Mapped relationships between users and projects",
        },
        { icon: Share2, text: "Instant context sharing across the ecosystem" },
      ],
    },
    {
      name: "Collaborator",
      icon: UserPlus,
      description:
        "Any invited member working alongside you within a Workspace or Project. Collaborators can be assigned specific roles and permissions, enabling secure, real-time teamwork and seamless communication.",
      imageSrc: "/images/Introduction/stock.jpg",
      features: [
        { icon: Users, text: "Real-time multiplayer collaboration" },
        { icon: ShieldCheck, text: "Granular access and permission controls" },
        { icon: CheckCircle, text: "Direct task assignment and tracking" },
      ],
    },
    {
      name: "Archive",
      icon: Archive,
      description:
        "A secure storage area for completed or inactive content. Archiving removes items from your daily view to maintain a clutter-free workspace, while safely preserving the data for future reference or restoration.",
      imageSrc: "/images/Introduction/stock.jpg",
      features: [
        { icon: Trash2, text: "Workspace decluttering and organization" },
        { icon: Database, text: "Secure, read-only data preservation" },
        { icon: RotateCcw, text: "One-click content restoration" },
      ],
    },
    {
      name: "AI Context",
      icon: MessageSquareShare,
      description:
        "The focused memory boundary for your digital assistants. By managing AI Context, you control exactly which project files, databases, and historical chats the OpenAI integration references to generate highly precise and relevant responses.",
      imageSrc: "/images/Introduction/stock.jpg",
      features: [
        { icon: FileSearch, text: "Selective file and document referencing" },
        { icon: BrainCircuit, text: "Persistent conversational memory" },
        { icon: Sliders, text: "Customizable context window management" },
      ],
    },
    {
      name: "Credits",
      icon: Coins,
      description:
        "The flexible internal currency used to scale your Kentra ecosystem. Credits can be seamlessly redeemed to expand your Workspace cloud storage capacity or to unlock upgraded AI capabilities and higher usage limits.",
      imageSrc: "/images/Introduction/stock.jpg",
      features: [
        { icon: HardDrive, text: "Workspace storage capacity expansion" },
        { icon: Zap, text: "Advanced AI model and capability upgrades" },
        { icon: LineChart, text: "Transparent resource and usage tracking" },
      ],
    },
  ];

  return (
    <div className="flex w-full  flex-col items-start gap-16 pb-16 animate-in fade-in duration-300 p-6 md:p-12 lg:p-16">
      {/* 1. HERO SECTION                            */}
      <div className="flex w-full flex-col items-start gap-6">
        <div className="flex w-fit items-center gap-3 rounded-full bg-[rgba(0,80,203,0.05)] px-4 py-2">
          <div className="h-2 w-2 rounded-full bg-[#0050CB]"></div>
          <p className="font-hankenGrotesk text-sm font-semibold leading-5 tracking-[0.15em] text-[#0050CB]">
            WELCOME TO KENTRA
          </p>
        </div>
        <div className="w-full">
          <p className="font-hankenGrotesk text-4xl sm:text-5xl font-semibold leading-[1.1] tracking-[-0.02em] text-[#191C1E]">
            Your Intelligent Workspace
          </p>
        </div>
        <div className="w-full max-w-3xl pb-4">
          <p className="font-hankenGrotesk text-lg leading-relaxed text-[#424656]">
            Create, connect, collaborate, organize knowledge, communicate, and
            manage digital activities in one connected ecosystem.
          </p>
        </div>
      </div>

      {/* 2. WHAT IS KENTRA */}
      <div className="flex w-full flex-col items-start gap-8 rounded-[40px] border border-white bg-gradient-to-b from-white to-slate-50/50 p-8 sm:p-10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] relative overflow-hidden">
        {/* Soft decorative background element */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-50/50 blur-3xl pointer-events-none"></div>

        <div className="flex items-center gap-2 relative z-10">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl ">
            <Image
              src="/images/Kentra-2.png"
              alt="Kentra Logo"
              width={28}
              height={28}
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg object-contain"
            />
          </div>

          <h2 className="font-hankenGrotesk text-[32px] font-semibold tracking-tight text-[#191C1E]">
            What is Kentra?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 font-hankenGrotesk text-[#525866] text-base leading-relaxed relative z-10 mt-2">
          <div className="space-y-8">
            <div className="group">
              <h3 className="text-lg font-bold text-[#191C1E] mb-3 flex items-center gap-2">
                The Connected Ecosystem
              </h3>
              <p className="transition-colors group-hover:text-[#191C1E]">
                Kentra is an intelligent workspace that replaces fragmented
                applications. It weaves together task management, social feeds,
                short-form media, and communication into a singular environment
                where context is king.
              </p>
            </div>
            <div className="group">
              <h3 className="text-lg font-bold text-[#191C1E] mb-3">
                Who Its Built For
              </h3>
              <p className="transition-colors group-hover:text-[#191C1E]">
                Creators building audiences, community managers scaling
                engagement, enterprise teams requiring deep collaboration, and
                individuals seeking to streamline their digital life.
              </p>
            </div>
            <div className="group">
              <h3 className="text-lg font-bold text-[#191C1E] mb-3">
                Core Philosophy
              </h3>
              <p className="transition-colors group-hover:text-[#191C1E]">
                We believe your files, conversations, and media should live
                together intuitively. Every action within Kentra is contextually
                linked to its relevant project or community, powered by
                persistent AI assistance.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-[#191C1E] mb-4">
                Key Capabilities
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#0050CB]"></div>
                  </div>
                  <span>Native AI context that remembers your workspace</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#0050CB]"></div>
                  </div>
                  <span>
                    Rich media discovery through{" "}
                    <strong className="text-[#191C1E]">Grow</strong> and{" "}
                    <strong className="text-[#191C1E]">Treats</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#0050CB]"></div>
                  </div>
                  <span>
                    Granular role-based access for Workspaces and Communities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#0050CB]"></div>
                  </div>
                  <span>Unified calendar, messaging, and file storage</span>
                </li>
              </ul>
            </div>
            <div className="group">
              <h3 className="text-lg font-bold text-[#191C1E] mb-3">
                Supported Platforms
              </h3>
              <p className="transition-colors group-hover:text-[#191C1E]">
                Access Kentra anywhere. Fully supported on modern web browsers,
                iOS, Android, and dedicated Desktop applications.
              </p>
            </div>
            <div className="group">
              <h3 className="text-lg font-bold text-[#191C1E] mb-3">
                Future Vision
              </h3>
              <p className="transition-colors group-hover:text-[#191C1E]">
                To eliminate the context-switching tax globally by providing a
                singular canvas where human creativity and artificial
                intelligence collaborate without friction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. WHY KENTRA EXISTS */}
      <div className="flex w-full flex-col items-start gap-10 p-2 sm:p-4 mt-4">
        <div className="flex flex-col gap-3 px-4">
          <h2 className="font-hankenGrotesk text-[32px] font-semibold tracking-tight text-[#191C1E]">
            Why Kentra Exists
          </h2>
          <p className="font-hankenGrotesk text-lg text-[#525866] max-w-3xl leading-relaxed">
            The modern digital experience is deeply flawed due to information
            fragmentation. Kentra was engineered to solve specific, painful
            bottlenecks in daily workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Soft Problem Card */}
          <div className="relative rounded-[32px] bg-white p-8 sm:p-10 shadow-[0_16px_40px_-15px_rgba(239,68,68,0.08)] border border-red-50 transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-red-50/50 opacity-50 pointer-events-none"></div>

            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-500 shadow-sm border border-red-100/50">
                <AlertCircle size={24} strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-xl text-[#191C1E]">
                The Fragmentation Problem
              </h3>
            </div>

            <ul className="space-y-4 text-[#525866] font-hankenGrotesk relative z-10">
              {[
                "Too many disconnected applications",
                "Lost conversations and scattered files",
                "Broken collaboration workflows",
                "Poor context sharing between teams",
                "AI assistants lacking persistent memory",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 bg-slate-50/50 rounded-xl p-3 border border-slate-100/50"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-red-300 shrink-0"></div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Solution Card (Replaced the harsh blue) */}
          <div className="relative rounded-[32px] bg-white p-8 sm:p-10 shadow-[0_16px_40px_-15px_rgba(0,80,203,0.12)] border border-blue-50 transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute bottom-0 right-0 h-40 w-40 rounded-tl-full bg-blue-50/60 opacity-50 pointer-events-none"></div>

            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0050CB] shadow-sm border border-blue-100/50">
                <Sparkles size={24} strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-xl text-[#191C1E]">
                The Kentra Solution
              </h3>
            </div>

            <ul className="space-y-4 font-hankenGrotesk text-[#525866] relative z-10">
              <li className="flex items-center gap-3 bg-blue-50/30 rounded-xl p-3 border border-blue-100/30">
                <div className="h-1.5 w-1.5 rounded-full bg-[#0050CB] shrink-0"></div>
                <span>One unified digital workspace</span>
              </li>
              <li className="flex items-center gap-3 bg-blue-50/30 rounded-xl p-3 border border-blue-100/30">
                <div className="h-1.5 w-1.5 rounded-full bg-[#0050CB] shrink-0"></div>
                <span>Centralized file and chat architecture</span>
              </li>
              <li className="flex items-center gap-3 bg-blue-50/30 rounded-xl p-3 border border-blue-100/30">
                <div className="h-1.5 w-1.5 rounded-full bg-[#0050CB] shrink-0"></div>
                <span>Seamless module integration & contextual mapping</span>
              </li>

              {/* Highlighted Tech Stack Badge */}
              <li className="flex flex-col sm:flex-row sm:items-center gap-3 bg-gradient-to-r from-[#0050CB]/5 to-transparent rounded-xl p-3 sm:p-2 sm:pr-4 border border-[#0050CB]/10 mt-2">
                <span className="inline-flex shrink-0 items-center rounded-lg bg-[#0050CB] px-3 py-1 text-xs font-bold text-white shadow-sm uppercase tracking-wider">
                  Core Engine
                </span>
                <span className="text-[#191C1E] font-medium text-sm">
                  Deep OpenAI & Supabase integration for persistent intelligence
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4. CORE CONCEPTS */}

      <div className="flex w-full flex-col items-start gap-8 mt-12">
        <div className="px-4">
          <h2 className="font-hankenGrotesk text-[32px] font-medium tracking-[-0.01em] text-[#191C1E]">
            Core Concepts
          </h2>
          <p className="mt-2 font-hankenGrotesk text-base text-[#424656]">
            Familiarize yourself with these core modules before you begin.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {coreConcepts.map((concept) => (
            <div
              key={concept.name}
              onClick={() => setSelectedConcept(concept)}
              className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-[#0050CB] hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-[#0050CB]">
                <concept.icon size={20} />
              </div>
              <p className="font-hankenGrotesk text-sm font-semibold text-[#191C1E]">
                {concept.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* 5. TERMINOLOGY DICTIONARY                  */}

      <div className="flex w-full flex-col items-start gap-8 rounded-[40px] bg-white p-8 sm:p-10 shadow-[0_8px_30px_0_rgba(0,0,0,0.04),0_4px_10px_0_rgba(0,0,0,0.02)]">
        <h2 className="font-hankenGrotesk text-[32px] font-medium tracking-[-0.01em] text-[#191C1E]">
          Terminology Dictionary
        </h2>

        <div className="w-full divide-y divide-slate-100 border-t border-slate-100 mt-2">
          {[
            {
              term: "Workspace",
              def: "The highest-level organizational unit where teams or individuals manage overarching goals, resources, and billing.",
            },
            {
              term: "Folder",
              def: "A structural container within a Workspace used to categorize Projects, Chats, and Files securely.",
            },
            {
              term: "Project",
              def: "An actionable environment containing files, notes, tasks, and members focused on a specific deliverable.",
            },
            {
              term: "Community",
              def: "A public or private gathering space for users sharing common interests, featuring dedicated feeds, roles, and events.",
            },
            {
              term: "Grow",
              def: "The primary content feed architecture for text, photos, and rich media posts designed for discovery and audience building.",
            },
            {
              term: "Treat",
              def: "Kentra's immersive, short-form video experience designed for quick consumption, high engagement, and rapid discovery.",
            },
            {
              term: "Bookmark",
              def: "A saved reference to any piece of content (Grow, Treat, File) for quick retrieval later.",
            },
            {
              term: "Role",
              def: "A systemic assignment of access levels (e.g., Owner, Moderator, Member) governing permissions within Workspaces or Communities.",
            },
            {
              term: "Memory",
              def: "Historical data and operational context retained securely by the platform to aid future searches and AI prompts.",
            },
            {
              term: "Activity",
              def: "A chronological log of user actions, system events, and notification triggers.",
            },
            {
              term: "Context",
              def: "The situational metadata surrounding a file, chat, or project that gives it meaning within the ecosystem.",
            },
            {
              term: "Connection",
              def: "A mapped relationship between different modules (e.g., linking a Chat to a specific Project task) or between users.",
            },
            {
              term: "Collaborator",
              def: "An internal or external user invited to view or contribute to a specific Workspace, Folder, or Project.",
            },
            {
              term: "Archive",
              def: "Hidden, securely stored historical data that is removed from active views but retained for compliance or future restoration.",
            },
            {
              term: "Public",
              def: "Visibility setting allowing content or Communities to be discovered and viewed by anyone on the platform.",
            },
            {
              term: "Private",
              def: "Visibility setting restricting access solely to invited members or specific permissioned Roles.",
            },
            {
              term: "AI Context",
              def: "The localized or global memory an AI assistant utilizes, drawing securely from your files, past conversations, and project metadata.",
            },
            {
              term: "Credits",
              def: "The internal system currency used to manage and track premium AI usage, API calls, or advanced processing tasks.",
            },
            {
              term: "Discovery",
              def: "The algorithmic engine and user interface dedicated to finding new Communities, relevant Grow posts, and trending Treats.",
            },
            {
              term: "Feed",
              def: "The chronological or algorithmic timeline displaying updates, media, and activities relevant to the user.",
            },
          ].map((item) => (
            <div
              key={item.term}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 py-4"
            >
              <div className="w-full sm:w-1/4 shrink-0">
                <span className="inline-flex items-center rounded-md bg-slate-100 px-3 py-1 font-liberationMono text-sm font-semibold text-[#0050CB]">
                  {item.term}
                </span>
              </div>
              <p className="w-full sm:w-3/4 font-hankenGrotesk text-base text-[#424656]">
                {item.def}
              </p>
            </div>
          ))}
        </div>
      </div>

      {selectedConcept && (
        <ConceptModal
          isOpen={!!selectedConcept}
          onClose={() => setSelectedConcept(null)}
          title={selectedConcept.name}
          description={selectedConcept.description}
          imageSrc={selectedConcept.imageSrc}
          features={selectedConcept.features}
          badgeText="Core Concept"
          ctaText={`Go to ${selectedConcept.name}`}
          onCtaClick={() => {
            alert(`Navigating to ${selectedConcept.name}...`);
            setSelectedConcept(null);
          }}
        />
      )}
    </div>
  );
}
