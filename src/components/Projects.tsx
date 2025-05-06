import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "PDFChatAnnotator",
    description:
      "A human-LLM collaborative multi-modal data annotation tool for PDF-format catalogs",
    image: "/projects/PDFChatAnnotator.png",
    tags: [
      "Deep Learning",
      "LLM",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "Django",
    ],
    link: "https://github.com/VanillaTY/PDFChatAnnotator",
  },
  {
    title: "3D Visualization Tool for Deep Learning Models",
    description:
      "Deep learning network feature dimensionality reduction display and analysis",
    image: "/projects/VisualizationTool.png",
    tags: ["Deep Learning", "Python", "Three.js", "HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "Interface Management Platform",
    description:
      "Provide a unified platform for the unified management of internal services and interfaces of the company",
    image: "",
    tags: ["Vue", "Vue Router", "Vite", "Pinia", "Axios"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[var(--secondary)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-purple-600">
              My Projects
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-purple-600 rounded-full"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[var(--background)] border border-[var(--border)] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-purple-600 opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    "P"
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[var(--muted-foreground)] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[var(--primary)] bg-opacity-10 text-white text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-[var(--primary)] hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300"
                  target="_blank"
                >
                  View Project <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
