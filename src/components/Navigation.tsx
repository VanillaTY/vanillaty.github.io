import { useState } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X, HomeIcon, BookOpen } from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: <HomeIcon className="w-4 h-4" /> },
];

interface NavigationProps {
  darkMode: boolean;
  activeSection: string;
  onToggleDarkMode: () => void;
  isBlogPage?: boolean;
}

export default function Navigation({
  darkMode,
  activeSection,
  onToggleDarkMode,
  isBlogPage = false,
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-[var(--background)] z-50 shadow-md border-b border-[var(--border)] backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold relative group">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-purple-600">
            Yi Tang
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary)] to-purple-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {!isBlogPage ? (
              NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-3 py-2 rounded-md transition-colors duration-200 flex items-center space-x-1 ${
                    activeSection === item.id
                      ? "text-[var(--primary)] bg-[var(--primary-foreground)] bg-opacity-10"
                      : "hover:text-[var(--primary)] hover:bg-[var(--primary-foreground)] hover:bg-opacity-5"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))
            ) : (
              <Link
                href="/"
                className="px-3 py-2 rounded-md transition-colors duration-200 flex items-center space-x-1 hover:text-[var(--primary)] hover:bg-[var(--primary-foreground)] hover:bg-opacity-5"
              >
                <HomeIcon className="w-4 h-4" />
                <span>Home</span>
              </Link>
            )}
            <Link
              href="/blog"
              className={`px-3 py-2 rounded-md transition-colors duration-200 flex items-center space-x-1 ${
                isBlogPage
                  ? "text-[var(--primary)] bg-[var(--primary-foreground)] bg-opacity-10"
                  : "hover:text-[var(--primary)] hover:bg-[var(--primary-foreground)] hover:bg-opacity-5"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Blog</span>
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-full bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-opacity-80 transition-all duration-200"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-[var(--secondary)]"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--background)] border-b border-[var(--border)] animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-3 rounded-md transition-colors duration-200 flex items-center space-x-3 ${
                  activeSection === item.id
                    ? "text-[var(--primary)] bg-[var(--primary-foreground)] bg-opacity-10"
                    : "hover:text-[var(--primary)] hover:bg-[var(--primary-foreground)] hover:bg-opacity-5"
                }`}
                onClick={toggleMobileMenu}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
            <Link
              href="/blog"
              className="px-4 py-3 rounded-md transition-colors duration-200 flex items-center space-x-3 hover:text-[var(--primary)] hover:bg-[var(--primary-foreground)] hover:bg-opacity-5"
              onClick={toggleMobileMenu}
            >
              <BookOpen className="w-4 h-4" />
              <span>Blog</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
