"use client";

import { useState } from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogPosts";
import Navigation from "@/components/Navigation";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // Get all unique tags across all blog posts
  const allTags = Array.from(new Set(BLOG_POSTS.flatMap((post) => post.tags)));

  // Filter posts based on search term and selected tag
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "" || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navigation
        darkMode={false}
        activeSection=""
        onToggleDarkMode={() => {}}
        isBlogPage={true}
      />
      {/* Blog Header */}
      <header className="pt-32 pb-12 bg-[var(--secondary)]">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Blog
          </h1>
          <p className="text-[var(--muted-foreground)] text-center max-w-2xl mx-auto">
            Thoughts, ideas, and insights on web development, design, and
            technology.
          </p>
        </div>
      </header>

      {/* Search and Filter */}
      <section className="py-8 border-b border-[var(--border)]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-2 rounded-md border border-[var(--border)] bg-[var(--background)]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedTag === ""
                    ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                    : "bg-[var(--secondary)] text-[var(--secondary-foreground)]"
                }`}
                onClick={() => setSelectedTag("")}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedTag === tag
                      ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                      : "bg-[var(--secondary)] text-[var(--secondary-foreground)]"
                  }`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[var(--muted-foreground)]">
                No articles found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="border border-[var(--border)] rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm text-[var(--muted-foreground)]">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-[var(--muted-foreground)] mb-4">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-[var(--secondary)] text-[var(--secondary-foreground)] text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-[var(--primary)] hover:underline"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
