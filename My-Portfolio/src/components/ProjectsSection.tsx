import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Borealis Mobile",
    description: "A mobile application built with Java, focusing on performance and native Android features.",
    tech: ["Java", "Android"],
    github: "https://github.com/Mola2025/Borealis_Mobile",
  },
  {
    title: "Music Streaming App",
    description: "A modern music streaming application with a sleek UI built using TypeScript.",
    tech: ["TypeScript", "React"],
    github: "https://github.com/Mola2025/Music-Streaming-App",
  },
  {
    title: "TwittClone iOS",
    description: "A Twitter clone for iOS, replicating core social media functionality with Swift.",
    tech: ["Swift", "iOS", "UIKit"],
    github: "https://github.com/Mola2025/TwittClone-ios",
  },
  {
    title: "LocalStore iOS",
    description: "An iOS application for local store management with inventory and sales tracking.",
    tech: ["Swift", "iOS"],
    github: "https://github.com/Mola2025/LocalStoreIOS_II_Project",
  },
  {
    title: "Freelancer Marketplace",
    description: "A web-based freelancer marketplace connecting clients with professionals.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Mola2025/Freelancer_Marketplace_Project",
  },
  {
    title: "Python Final Project",
    description: "A Python project that is a tetris game.",
    tech: ["Python"],
    github: "https://github.com/Mola2025/python-final-project-2024",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
          My <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          A collection of projects I've worked on, ranging from web applications
          to mobile apps and everything in between.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-lg border border-border bg-card p-6 flex flex-col card-hover"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-primary/10 border border-primary/20 px-2 py-0.5 text-xs font-mono text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors duration-150"
              >
                <Github size={16} />
                View on GitHub
                <ExternalLink size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
