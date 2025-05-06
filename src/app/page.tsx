"use client";

import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

// Define the type for section refs
interface SectionRefs {
  [key: string]: HTMLElement | null;
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Create refs for each section
  const sectionRefs = useRef<SectionRefs>({});

  useEffect(() => {
    setMounted(true);
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);

    // Scroll listener
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Add offset to activate section earlier

      // Find the current visible section
      let currentSection = "home";
      Object.entries(sectionRefs.current).forEach(([id, ref]) => {
        const element = ref as HTMLElement | null;
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  if (!mounted) return null;

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        <Navigation
          darkMode={darkMode}
          activeSection={activeSection}
          onToggleDarkMode={toggleDarkMode}
        />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Publications />
        <Projects />
        <BlogPreview />
        <Footer />
      </div>
    </div>
  );
}
