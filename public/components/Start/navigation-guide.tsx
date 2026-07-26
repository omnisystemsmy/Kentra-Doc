"use client";

import React, { useState } from "react";
import { 
  LayoutDashboard, 
  Smartphone, 
  PanelLeft, 
  PanelTop, 
  PanelBottom, 
  Search, 
  Bell, 
  Command, 
  Keyboard, 
  Layers,
  MousePointerClick,
  Filter,
  Zap,
  Globe,
  Settings,
  Menu,
  Clock,
  ArrowRightLeft
} from "lucide-react";

import ConceptModal, { Feature } from "../Modal";

// 1. Define the data structure for the navigation elements
interface NavItem {
  id: string;
  title: string;
  icon: React.ElementType;
  badgeText: string;
  description: string;
  imageSrc: string;
  features: Feature[];
}

const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: "desktop",
    title: "Desktop Navigation",
    icon: LayoutDashboard,
    badgeText: "Workspace UI",
    description: "The primary way to maneuver around Kentra on large screens, utilizing a comprehensive sidebar and top-level contextual menus.",
    imageSrc: "/images/GettingStarted/desktop-navigation.gif",
    features: [
      { icon: MousePointerClick, text: "Expansive view of all modules" },
      { icon: Layers, text: "Drag-and-drop capabilities" },
      { icon: LayoutDashboard, text: "Multi-window support" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Navigation",
    icon: Smartphone,
    badgeText: "Mobile UI",
    description: "Optimized touch-friendly interface for Kentra on the go. Designed for thumb-reachability and quick actions.",
    imageSrc: "/images/placeholder-mobile.png", 
    features: [
      { icon: Menu, text: "Collapsible hamburger menus" },
      { icon: Zap, text: "Swipe gestures enabled" },
      { icon: PanelBottom, text: "Sticky bottom navigation bar" },
    ],
  },
  {
    id: "sidebar",
    title: "The Sidebar",
    icon: PanelLeft,
    badgeText: "Core Component",
    description: "Your main hub for switching between Workspaces, Folders, and Projects. It acts as the structural spine of your Kentra ecosystem.",
    imageSrc: "/images/placeholder-sidebar.png",
    features: [
      { icon: Filter, text: "Collapsible folder structures" },
      { icon: Settings, text: "Customizable quick-links" },
      { icon: Bell, text: "Unread activity indicators" },
    ],
  },
  {
    id: "topbar",
    title: "The Topbar",
    icon: PanelTop,
    badgeText: "Core Component",
    description: "Always accessible at the top of your screen, providing quick access to your profile, current context, and global settings.",
    imageSrc: "/images/placeholder-topbar.png",
    features: [
      { icon: LayoutDashboard, text: "Breadcrumb navigation" },
      { icon: Globe, text: "Global status indicator" },
      { icon: Search, text: "Quick search entry point" },
    ],
  },
  {
    id: "bottom-nav",
    title: "Bottom Navigation",
    icon: PanelBottom,
    badgeText: "Mobile UI",
    description: "Exclusive to the mobile experience, this bar houses the 4-5 most critical destinations for one-handed operation.",
    imageSrc: "/images/placeholder-bottomnav.png",
    features: [
      { icon: MousePointerClick, text: "Ergonomic thumb reach" },
      { icon: Bell, text: "Notification badges" },
      { icon: Zap, text: "Floating action button integration" },
    ],
  },
  {
    id: "search",
    title: "Global Search",
    icon: Search,
    badgeText: "Utility",
    description: "Find anything instantly. Search across your entire ecosystem including chats, files, workspaces, and user profiles.",
    imageSrc: "/images/placeholder-search.png",
    features: [
      { icon: Zap, text: "Instant fuzzy-search results" },
      { icon: Filter, text: "Advanced filtering by file type" },
      { icon: Clock, text: "Recent search history" },
    ],
  },
  {
    id: "notifications",
    title: "Notifications",
    icon: Bell,
    badgeText: "Activity",
    description: "Your centralized inbox for platform activity. Stay updated on mentions, task assignments, and system alerts.",
    imageSrc: "/images/placeholder-notifications.png",
    features: [
      { icon: Filter, text: "Sort by 'Mentions' or 'Unread'" },
      { icon: Zap, text: "Actionable alerts (Accept/Decline)" },
      { icon: Settings, text: "Granular push controls" },
    ],
  },
  {
    id: "quick-actions",
    title: "Quick Actions",
    icon: Command,
    badgeText: "Productivity",
    description: "A centralized command menu to instantly create tasks, posts, or events without navigating away from your current page.",
    imageSrc: "/images/placeholder-quickactions.png",
    features: [
      { icon: Zap, text: "Context-aware suggestions" },
      { icon: Keyboard, text: "Triggered via Cmd+K" },
      { icon: Layers, text: "Creates items in background" },
    ],
  },
  {
    id: "shortcuts",
    title: "Keyboard Shortcuts",
    icon: Keyboard,
    badgeText: "Power User",
    description: "Navigate at lightning speed without taking your hands off the keyboard. Master these to become a Kentra power user.",
    imageSrc: "/images/placeholder-shortcuts.png",
    features: [
      { icon: MousePointerClick, text: "Mouse-free navigation" },
      { icon: LayoutDashboard, text: "Jump to specific modules" },
      { icon: Settings, text: "Customizable keybindings" },
    ],
  },
  {
    id: "context",
    title: "Context Switching",
    icon: Layers,
    badgeText: "Workflow",
    description: "Seamlessly jump between different workspaces and profiles. Kentra remembers where you left off in each context.",
    imageSrc: "/images/placeholder-context.png",
    features: [
      { icon: ArrowRightLeft, text: "Instant environment swap" },
      { icon: Clock, text: "State preservation" },
      { icon: Bell, text: "Context-specific notifications" },
    ],
  },
];

export default function NavigationGuide() {
  const [selectedItem, setSelectedItem] = useState<NavItem | null>(null);

  return (
    <>
      <div className="w-full">
        
        {/* Soft Background Accent */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#0050CB]/5 blur-3xl"></div>

        {/* Header */}
        <div className="relative z-10 flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-50 bg-white text-[#0050CB] shadow-[0_8px_20px_-6px_rgba(0,80,203,0.12)]">
            <LayoutDashboard size={28} strokeWidth={2} />
          </div>
          <div className="flex flex-col">
            <h2 className="font-hankenGrotesk text-[32px] font-semibold tracking-tight text-[#191C1E]">
              Navigation
            </h2>
            <p className="font-hankenGrotesk text-base text-[#525866]">
              Master your workspace UI and move around Kentra with ease. Click any module to learn more.
            </p>
          </div>
        </div>

        {/* Interactive Grid */}
        <div className="relative z-10 mt-4 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {NAVIGATION_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group flex flex-col items-start gap-3 rounded-[24px] border border-slate-100 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0050CB]/30 hover:shadow-md hover:shadow-blue-900/5 active:scale-95"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-[#525866] transition-colors duration-300 group-hover:bg-blue-50 group-hover:text-[#0050CB]">
                <item.icon size={22} strokeWidth={2} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-hankenGrotesk text-sm font-bold text-[#191C1E] transition-colors group-hover:text-[#0050CB]">
                  {item.title}
                </span>
                <span className="font-hankenGrotesk text-xs text-[#525866]">
                  {item.badgeText}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Render the Modal dynamically based on the selected item */}
      <ConceptModal
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title || ""}
        badgeText={selectedItem?.badgeText || ""}
        description={selectedItem?.description || ""}
        imageSrc={selectedItem?.imageSrc || "/images/placeholder.png"} 
        features={selectedItem?.features || []}
        ctaText="Got it"
        onCtaClick={() => setSelectedItem(null)}
      />
    </>
  );
}