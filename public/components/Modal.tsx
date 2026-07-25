"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X, ArrowRight, Box, Maximize2 } from "lucide-react";

// Define the shape of our props so TypeScript can help us
export interface Feature {
  icon: React.ElementType;
  text: string;
}

interface ConceptModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  badgeText?: string;
  title: string;
  description: string;
  features: Feature[];
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function ConceptModal({
  isOpen,
  onClose,
  imageSrc,
  badgeText = "Core Concept",
  title,
  description,
  features,
  ctaText = "Learn More",
  onCtaClick,
}: ConceptModalProps) {
  // New state to track if the image is open in fullscreen
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Close the modal (or just the fullscreen image) if the user presses the Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, isFullscreen, onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* 1. Main Modal Backdrop */}

      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      >
        {/* Modal Card (Added max-h and overflow-y-auto for mobile scrolling) */}
        <div
          className="relative flex w-full max-h-[95vh] max-w-[672px] flex-col items-start overflow-y-auto overflow-x-hidden rounded-[32px] border border-white bg-white shadow-[0_24px_48px_-12px_rgba(0,102,255,0.15)] animate-in zoom-in-95 duration-200 sm:max-h-[90vh] sm:rounded-[40px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100/50 text-[#424656] backdrop-blur-md transition-colors hover:bg-slate-200 active:scale-95 sm:right-6 sm:top-6"
            aria-label="Close modal"
          >
            <X size={18} strokeWidth={2.5} />
          </button>

          {/* Image Section (Responsive Height) */}
          <div
            className="group relative h-48 w-full shrink-0 cursor-pointer overflow-hidden bg-[#F2F4F6] sm:h-64"
            onClick={() => setIsFullscreen(true)}
          >
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 672px) 100vw, 672px"
            />
            {/* Hover overlay icon to indicate it's clickable */}
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 text-white opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm">
                <Maximize2 size={20} strokeWidth={2.5} />
              </div>
            </div>
            {/* Bottom Gradient Fade */}
            <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-24 w-full bg-gradient-to-t from-white to-transparent"></div>
          </div>

          {/* Content Section (Responsive Padding) */}
          <div className="flex w-full flex-col items-start gap-6 p-6 sm:p-12">
            {/* Header Texts */}
            <div className="flex w-full flex-col items-start gap-3">
              <div className="flex items-center gap-1.5 rounded-full bg-[#DAE1FF] px-3 py-1">
                <Box size={14} className="text-[#003FA4]" strokeWidth={2.5} />
                <p className="font-hankenGrotesk text-sm font-semibold tracking-[0.01em] text-[#003FA4]">
                  {badgeText}
                </p>
              </div>

              {/* Responsive Font Size */}
              <h2 className="font-hankenGrotesk text-[28px] font-medium tracking-tight text-[#191C1E] sm:text-[32px]">
                {title}
              </h2>

              <p className="font-hankenGrotesk text-base leading-relaxed text-[#424656] sm:text-lg">
                {description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid w-full grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex w-full flex-col items-start gap-3 rounded-[24px] border border-transparent bg-[#F7F9FB] p-4 transition-colors hover:border-slate-200"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0066FF]/10 text-[#0050CB]">
                    <feature.icon size={20} strokeWidth={2} />
                  </div>
                  <p className="font-hankenGrotesk text-sm font-semibold leading-5 text-[#191C1E]">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to Action Button */}
            <div className="flex w-full justify-end pt-4">
              <button
                onClick={onCtaClick}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0050CB] to-[#0066FF] px-6 py-3 font-hankenGrotesk text-sm font-semibold text-white shadow-[0_8px_24px_0_rgba(0,102,255,0.20)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_0_rgba(0,102,255,0.30)] active:scale-95 sm:w-auto"
              >
                {ctaText}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Fullscreen Image Lightbox Overlay */}

      {isFullscreen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsFullscreen(false)}
        >
          {/* Close button for fullscreen */}
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute right-4 top-4 z-[210] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25 active:scale-95 sm:right-6 sm:top-6"
            aria-label="Close fullscreen"
          >
            <X size={24} strokeWidth={2} />
          </button>

          {/* Uncropped Full Image */}
          <div className="relative h-[90vh] w-full max-w-7xl animate-in zoom-in-95 duration-200">
            <Image
              src={imageSrc}
              alt={`${title} Fullscreen`}
              fill
              className="object-contain"
              sizes="100vw"
              quality={100}
            />
          </div>
        </div>
      )}
    </>
  );
}
