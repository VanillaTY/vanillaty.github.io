import {
  User,
  Mail,
  Github,
  Globe,
  MapPin,
  UserCircle,
  Link,
  Building2,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[var(--secondary)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-purple-600">
              About Me
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-purple-600 rounded-full"></div>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <div className="bg-[var(--background)] rounded-lg p-6 shadow-md h-full">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-[var(--primary)]" />
                Who I Am
              </h3>
              <p className="mb-4">
                I am a front-end engineer and a researcher specializing in
                human-AI collaboration. During my master&apos;s studies, my
                primary research centered on accelerating the annotation process
                of training data for AI models. My work bridges practical
                development and academic exploration, aiming to create
                technologies that are both powerful and human-centered. Outside
                of work, I enjoy exploring new design trends, learning about
                emerging AI technologies.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-[var(--background)] rounded-lg p-6 shadow-md h-full">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Link className="w-5 h-5 mr-2 text-[var(--primary)]" />
                Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center group">
                  <Mail className="h-5 w-5 mr-3 text-[var(--primary)]" />
                  <a
                    href="mailto:503220610ty@gmail.com"
                    className="hover:text-[var(--primary)] transition-colors duration-200 group-hover:translate-x-1 inline-block transform transition-transform"
                  >
                    503220610ty@gmail.com
                  </a>
                </div>
                <div className="flex items-center group">
                  <Building2 className="h-5 w-5 mr-3 text-[var(--primary)]" />
                  <a
                    href="https://github.com/alibaba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--primary)] transition-colors duration-200 group-hover:translate-x-1 inline-block transform transition-transform"
                  >
                    Alibaba
                  </a>
                </div>
                <div className="flex items-center group">
                  <MapPin className="h-5 w-5 mr-3 text-[var(--primary)]" />
                  <span className="hover:text-[var(--primary)] transition-colors duration-200 group-hover:translate-x-1 inline-block transform transition-transform">
                    HangZhou, China
                  </span>
                </div>
                <div className="flex items-center group">
                  <Github className="h-5 w-5 mr-3 text-[var(--primary)]" />
                  <a
                    href="https://github.com/VanillaTY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--primary)] transition-colors duration-200 group-hover:translate-x-1 inline-block transform transition-transform"
                  >
                    github.com/VanillaTY
                  </a>
                </div>
                <div className="flex items-center group">
                  <Globe className="h-5 w-5 mr-3 text-[var(--primary)]" />
                  <a
                    href="https://yitang.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--primary)] transition-colors duration-200 group-hover:translate-x-1 inline-block transform transition-transform"
                  >
                    yitang.com
                  </a>
                </div>
                <div className="flex items-center group">
                  <UserCircle className="h-5 w-5 mr-3 text-[var(--primary)]" />
                  <a
                    href="https://orcid.org/0009-0006-6594-8152"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--primary)] transition-colors duration-200 group-hover:translate-x-1 inline-block transform transition-transform"
                  >
                    https://orcid.org/0009-0006-6594-8152
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
