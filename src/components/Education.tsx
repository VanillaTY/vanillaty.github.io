interface EducationItem {
  period: string;
  location: string;
  degree: string;
  institution: string;
  description: string;
  tags: string[];
}

const educationItems: EducationItem[] = [
  {
    period: "2022 - 2025",
    location: "Changchun, China",
    degree: "M.S. in Artificial Intelligence",
    institution: "Jilin University",
    description:
      // 专注于人机交互与智能标注技术，开展了针对多模态数据高效标注的研究。
      "Focused on human-computer interaction and intelligent annotation technologies, with research dedicated to efficient annotation of multimodal data.",
    tags: ["Human Computer Interaction", "Data Annotation"],
  },
  {
    period: "2018 - 2022",
    location: "Changchun, China",
    degree: "B.S. in Computer Science",
    institution: "Jilin University",
    description:
      "Completed courses in algorithms, data structures, software engineering, etc. Bachelor's thesis on the interpretability of 3D point clouds.",
    tags: ["Data Structures", "Software Engineering"],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-purple-600">
              Education
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-purple-600 rounded-full"></div>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {educationItems.map((item, index) => (
              <div key={index} className="relative pl-10 md:pl-0 group">
                <div className="md:grid md:grid-cols-5 md:gap-8">
                  <div className="md:col-span-1 flex flex-col mb-4 md:mb-0">
                    <span className="text-lg font-semibold text-[var(--primary)] group-hover:text-purple-600 transition-colors duration-300">
                      {item.period}
                    </span>
                    <span className="text-[var(--muted-foreground)]">
                      {item.location}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <div className="h-full relative flex flex-col">
                      {index !== educationItems.length - 1 && (
                        <span className="absolute -left-10 md:left-0 -ml-px h-full w-0.5 bg-gradient-to-b from-[var(--primary)] to-purple-600 opacity-20 md:-translate-x-4 group-hover:opacity-40 transition-opacity duration-300"></span>
                      )}
                      <div className="absolute -left-10 md:left-0 mt-1.5 -translate-x-1/2 md:-translate-x-[18px] h-3 w-3 rounded-full border-2 border-[var(--primary)] bg-[var(--background)] group-hover:border-purple-600 transition-colors duration-300"></div>
                      <div className="bg-[var(--background)] p-6 rounded-lg border border-[var(--border)] shadow-sm group-hover:shadow-md transition-all duration-300">
                        <h3 className="text-xl font-bold">{item.degree}</h3>
                        <p className="font-medium text-[var(--muted-foreground)] mb-2">
                          {item.institution}
                        </p>
                        <p className="mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {item.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-[var(--primary)] text-white text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
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
