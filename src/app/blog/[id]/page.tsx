import { BLOG_POSTS, BlogPost } from "@/data/blogPosts";
import NavigationWrapper from "@/components/NavigationWrapper";
import Link from "next/link";
import ArticleContent from "@/components/ArticleContent";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post: BlogPost) => ({
    id: post.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = BLOG_POSTS.find((p: BlogPost) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <NavigationWrapper isBlogPage={true} />

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

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <NavigationWrapper isBlogPage={true} />

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
                {post.tags.map((tag: string) => (
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
        <ArticleContent content={post.content} />
      </article>
    </div>
  );
}
