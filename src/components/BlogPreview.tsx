import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogPosts";

// Get the latest blog posts (sorted by date)
const LATEST_BLOG_POSTS = [...BLOG_POSTS]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

export default function BlogPreview() {
  return (
    <section id="blog-preview" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-purple-600">
                Latest Blog Posts
              </span>
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-purple-600 rounded-full"></div>
            </h2>
          </div>
          <Link
            href="/blog"
            className="mt-4 md:mt-0 px-4 py-2 border border-[var(--border)] rounded-md hover:bg-[var(--secondary)] transition-colors duration-200 flex items-center group"
          >
            View All Posts
            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LATEST_BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-[var(--background)] border border-[var(--border)] rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-md bg-opacity-10 text-[var(--primary)]">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-[var(--muted-foreground)] mb-4 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[var(--primary)] bg-opacity-10 text-white text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-2 py-1 bg-[var(--primary)] bg-opacity-10 text-white text-xs rounded-full">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-[var(--primary)] hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300"
                >
                  Read more <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
