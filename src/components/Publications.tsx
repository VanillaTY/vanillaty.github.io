import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface Publication {
  conference: string;
  year: string;
  title: string;
  authors: string;
  cover: string;
  description: string;
  tags: string[];
  url: string;
}

const publications: Publication[] = [
  {
    conference: "GI 2024",
    year: "2024",
    title: "Speed Labeling: Non- stop Scrolling for Fast Image Labeling",
    authors: "Chia-Ming Chang, Yi Tang, Xi Yang, Xiang Chen, Takeo Igarashi",
    cover: "/papers/SpeedLabeling.png",
    description:
      "This paper introduces novel techniques for efficient fine-tuning of large language models on domain-specific tasks with limited data and computational resources, achieving state-of-the-art performance while reducing training time by 60%.",
    tags: ["LLMs", "Fine-tuning", "Efficiency"],
    url: "https://dl.acm.org/doi/abs/10.1145/3670947.3670958",
  },
  {
    conference: "IUI 2024",
    year: "2024",
    title:
      "PDFChatAnnotator: A Human-LLM Collaborative Multi-Modal Data Collection Tool for PDF-Format Catalogs",
    authors: "Yi Tang, Chia-Ming Chang, Xi Yang",
    cover: "/papers/PDFChatAnnotator.png",
    description:
      "The document contains substantial unannotated data, necessitating extensive manual labeling efforts. To address this issue, we introduce PDFChatAnnotator, a human-LLM collaborative tool to collect multi-modal data from PDF catalogs. ",
    tags: [
      "Document Annotation",
      "LLMs",
      "Interactive systems and tools",
      "Human-LLM Collaboration",
    ],
    url: "https://dl.acm.org/doi/abs/10.1145/3640543.3645174",
  },
  {
    conference: "MobileHCI 2023",
    year: "2023",
    title:
      "SyncLabeling: A Synchronized Audio Segmentation Interface for Mobile Devices",
    authors: "Yi Tang, Chia-Ming Chang, Xi Yang, Takeo Igarashi",
    cover: "/papers/SyncLabeling.png",
    description:
      "In this paper, we propose SyncLabeling, a synchronized audio segmentation interface for smartphones that allows users to segment and annotate two overlapping sounds in a single audio stream at a time using a game-like labeling interface on mobile devices.",
    tags: ["User interface design", "Audio Segmentation"],
    url: "https://dl.acm.org/doi/abs/10.1145/3604273",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-purple-600">
              Publications
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-purple-600 rounded-full"></div>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {publications.map((publication, index) => (
              <div
                key={index}
                className="bg-[var(--background)] border border-[var(--border)] rounded-lg p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:border-[var(--primary)]"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={publication.cover}
                        alt={publication.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="inline-block px-2 py-1 mb-2 text-xs font-medium rounded-md bg-[var(--primary)] text-white">
                      {publication.conference}
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {publication.title}
                    </h3>
                    <p className="text-[var(--muted-foreground)] mb-3">
                      {publication.authors}
                    </p>
                    <p className="mb-4">{publication.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {publication.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-[var(--primary)] bg-opacity-10 text-white text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={publication.url}
                      className="text-[var(--primary)] hover:text-purple-600 inline-flex items-center group transition-colors duration-200"
                      target="_blank"
                    >
                      Read paper
                      <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
