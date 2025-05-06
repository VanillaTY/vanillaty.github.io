interface ExperienceItem {
  period: string;
  location: string;
  title: string;
  company: string;
  description?: string;
  tags?: string[];
}

const experienceItems: ExperienceItem[] = [
  {
    period: "2024-08 ~ 2024-10",
    location: "HangZhou, China",
    title: "Front-end Development Intern",
    company: "Alibaba",
  },
  {
    period: "2024-04 ~ 2024-07",
    location: "ShenZhen, China",
    title: "Front-end Development Intern",
    company: "Tencent",
  },
  {
    period: "2022-12 ~ 2023-02",
    location: "Tokyo, Japan",
    title: "Human-computer Interaction Intern",
    company: "University of Tokyo",
  },
  {
    period: "2022-06 ~ 2022-08",
    location: "Tokyo, Japan",
    title: "Human-Computer Interaction Intern",
    company: "University of Tokyo",
  },
  {
    period: "2021-12 ~ 2022-02",
    location: "Beijing, China",
    title: "Web Development Intern",
    company: "Kuaishou",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 bg-[var(--secondary)]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold text-center relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-purple-600">
              Professional Experience
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[var(--primary)] to-purple-600 rounded-full"></div>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop zigzag layout */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Central timeline */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)] to-purple-600 opacity-20"></div>

              <div className="space-y-0">
                {experienceItems.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    } animate-fade-in`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full border-2 border-[var(--primary)] bg-[var(--background)] z-10"></div>

                    {/* Content card - alternating sides */}
                    <div
                      className={`w-[calc(50%-10px)] group my-1 ${
                        index % 2 === 0 ? "pr-5" : "pl-5"
                      }`}
                    >
                      <div className="bg-[var(--background)] p-4 rounded-lg border border-[var(--border)] shadow-sm hover:shadow-lg hover:border-purple-200 dark:hover:border-purple-900/50 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold group-hover:text-[var(--primary)] transition-colors duration-300">
                            {item.title}
                          </h3>
                          <span className="text-sm font-medium text-[var(--primary)] rounded-full pt-1">
                            {item.period}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-s text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors duration-300">
                            {item.company}
                          </p>
                          <span className="text-xs text-[var(--muted-foreground)] flex items-center">
                            <svg
                              className="w-3 h-3 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            {item.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile horizontal scrolling layout */}
          <div className="md:hidden overflow-x-auto pb-4">
            <div className="flex space-x-4 min-w-max px-1">
              {experienceItems.map((item, index) => (
                <div
                  key={index}
                  className="w-72 flex-shrink-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-[var(--background)] p-4 rounded-lg border border-[var(--border)] shadow-sm hover:shadow-lg hover:border-purple-200 dark:hover:border-purple-900/50 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-base font-bold group-hover:text-[var(--primary)] transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[var(--muted-foreground)] mb-2 group-hover:text-[var(--foreground)] transition-colors duration-300">
                      {item.company}
                    </p>
                    <div className="flex justify-between items-center pt-2 border-t border-[var(--border)]">
                      <span className="text-xs font-medium text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-1 rounded-full">
                        {item.period}
                      </span>
                      <span className="text-xs text-[var(--muted-foreground)] flex items-center">
                        <svg
                          className="w-3 h-3 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
