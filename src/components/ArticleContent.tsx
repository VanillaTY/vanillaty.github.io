"use client";

import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { getImagePath } from "@/utils/imagePath";

export default function ArticleContent({ content }: { content: string }) {
  return (
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
        ul: ({ ...props }) => <ul className="list-disc pl-6 mb-4" {...props} />,
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
        img: ({ src, alt }) => (
          <div className="relative w-full h-[400px] my-4">
            <Image
              src={getImagePath(typeof src === "string" ? src : "")}
              alt={alt || "Blog post image"}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
