import { Mail, Github, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 md:pt-32 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[var(--primary)] rounded-full filter blur-[150px] opacity-20 -z-10"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-600 rounded-full filter blur-[120px] opacity-10 -z-10"></div>

      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-purple-600">
              Yi Tang
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-[var(--muted-foreground)] mb-6">
            Front-end Engineer at Alibaba Taotian Group
          </h2>
          <p className="text-lg mb-8 max-w-xl">
            I&apos;m a front-end engineer and a researcher focused on human-AI
            collaboration. My work explores how intelligent systems can assist
            in tasks like accelerating AI training data annotation, bridging
            practical development with research insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#about"
              className="px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-purple-600 text-white rounded-md text-center hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Contact Me
            </a>
            <a
              href="#publications"
              className="px-6 py-3 border border-[var(--border)] rounded-md text-center hover:bg-[var(--secondary)] transition-all duration-300 shadow-sm hover:shadow"
            >
              View My Work
            </a>
          </div>

          {/* Social links */}
          <div className="flex mt-10 space-x-4">
            <a
              href="https://github.com/VanillaTY"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:text-[var(--primary)] transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:503220610ty@gmail.com"
              className="p-2 rounded-full bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:text-[var(--primary)] transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://orcid.org/0009-0006-6594-8152"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:text-[var(--primary)] transition-colors duration-200"
              aria-label="Website"
            >
              <GraduationCap className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0 animate-fade-in section-delay-1">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--primary)] to-purple-600 rounded-full blur opacity-70 animate-pulse"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative bg-[var(--secondary)] border-4 border-[var(--background)] z-10 shadow-xl">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/myphoto.png"
                  alt="Yi Tang"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-[var(--muted-foreground)] mb-2">
          Scroll Down
        </span>
        <div className="w-6 h-10 border-2 border-[var(--muted-foreground)] rounded-full flex justify-center">
          <div className="w-1 h-2 bg-[var(--muted-foreground)] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
