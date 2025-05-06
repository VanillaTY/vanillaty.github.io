"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { BLOG_POSTS, BlogPost } from "@/data/blogPosts";
import Navigation from "@/components/Navigation";

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Find the post with the matching ID
    const foundPost = BLOG_POSTS.find((p) => p.id === params.id);
    if (foundPost) {
      setPost(foundPost);
    } else {
      setNotFound(true);
    }
  }, [params.id]);

  if (notFound) {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <Navigation
          darkMode={false}
          activeSection=""
          onToggleDarkMode={() => {}}
          isBlogPage={true}
        />

        <div className="container mx-auto px-6 text-center pt-25">
          <h1 className="text-4xl font-bold mb-6">Blog Post Not Found</h1>
          <p className="mb-8">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/blog"
            className="px-6 py-3 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-md hover:opacity-90 transition-opacity"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <Navigation
          darkMode={false}
          activeSection=""
          onToggleDarkMode={() => {}}
          isBlogPage={true}
        />

        <div className="container mx-auto px-6 text-center  pt-25">
          <div className="animate-pulse">
            <div className="h-8 bg-[var(--secondary)] rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-[var(--secondary)] rounded w-1/4 mx-auto mb-12"></div>
            <div className="space-y-3 max-w-3xl mx-auto">
              <div className="h-4 bg-[var(--secondary)] rounded"></div>
              <div className="h-4 bg-[var(--secondary)] rounded"></div>
              <div className="h-4 bg-[var(--secondary)] rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navigation
        darkMode={false}
        activeSection=""
        onToggleDarkMode={() => {}}
        isBlogPage={true}
      />

      {/* Blog Post Header */}
      <header className="mb-12">
        <div className="container mx-auto px-6 pt-25">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-[var(--primary)] mb-6 hover:underline"
            >
              ← Back to all posts
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-[var(--muted-foreground)] mb-6">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-[var(--secondary)] text-[var(--secondary-foreground)] text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Blog Post Content */}
      <article className="prose prose-lg dark:prose-invert max-w-3xl mx-auto px-6">
        <ReactMarkdown
          components={{
            h1: ({ ...props }) => (
              <h1 className="text-4xl font-bold mb-4" {...props} />
            ),
            h2: ({ ...props }) => (
              <h2 className="text-3xl font-bold mb-3" {...props} />
            ),
            h3: ({ ...props }) => (
              <h3 className="text-2xl font-bold mb-2" {...props} />
            ),
            p: ({ ...props }) => <p className="mb-4" {...props} />,
            ul: ({ ...props }) => (
              <ul className="list-disc pl-6 mb-4" {...props} />
            ),
            ol: ({ ...props }) => (
              <ol className="list-decimal pl-6 mb-4" {...props} />
            ),
            li: ({ ...props }) => <li className="mb-2" {...props} />,
            code: ({ ...props }) => (
              <code
                className="bg-[var(--secondary)] px-1 py-0.5 rounded"
                {...props}
              />
            ),
            pre: ({ ...props }) => (
              <pre
                className="bg-[var(--secondary)] p-4 rounded-lg mb-4 overflow-x-auto"
                {...props}
              />
            ),
            blockquote: ({ ...props }) => (
              <blockquote
                className="border-l-4 border-[var(--primary)] pl-4 italic mb-4"
                {...props}
              />
            ),
            a: ({ ...props }) => (
              <a className="text-[var(--primary)] hover:underline" {...props} />
            ),
            img: ({ ...props }) => (
              <img className="rounded-lg my-4" {...props} />
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </article>

      {/* Share and Navigation */}
      {/* <div className="max-w-3xl mx-auto px-6 mt-12 pt-8 border-t border-[var(--border)]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-medium mb-2">Share this article</h3>
            <div className="flex gap-4">
              <button className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
                Twitter
              </button>
              <button className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
                LinkedIn
              </button>
              <button className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
                Facebook
              </button>
            </div>
          </div>
          <Link
            href="/blog"
            className="px-6 py-3 border border-[var(--border)] rounded-md text-center hover:bg-[var(--secondary)] transition-colors"
          >
            View all articles
          </Link>
        </div>
      </div> */}
    </div>
  );
}
