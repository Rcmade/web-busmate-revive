"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logoTransparent.png"
              alt="BusTrack Logo"
              // className="w-8 h-8"
              width={10}
              height={10}
            />
            <span className="font-bold text-lg hidden sm:inline">BusTrack</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("problem")}
              className="text-sm hover:text-primary transition"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection("solution")}
              className="text-sm hover:text-primary transition"
            >
              Solution
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm hover:text-primary transition"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("app-showcase")}
              className="text-sm hover:text-primary transition"
            >
              App Showcase
            </button>
            <button
              onClick={() => scrollToSection("glossary")}
              className="text-sm hover:text-primary transition"
            >
              Glossary
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm hover:text-primary transition"
            >
              Features
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("problem")}
              className="block w-full text-left px-4 py-2 hover:bg-secondary rounded"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection("solution")}
              className="block w-full text-left px-4 py-2 hover:bg-secondary rounded"
            >
              Solution
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-left px-4 py-2 hover:bg-secondary rounded"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("app-showcase")}
              className="block w-full text-left px-4 py-2 hover:bg-secondary rounded"
            >
              App Showcase
            </button>
            <button
              onClick={() => scrollToSection("glossary")}
              className="block w-full text-left px-4 py-2 hover:bg-secondary rounded"
            >
              Glossary
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-4 py-2 hover:bg-secondary rounded"
            >
              Features
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
