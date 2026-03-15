const experiences = [
  {
    year: "2023 – Present",
    title: "DEC – Computer Science",
    company: "LaSalle College, Montreal, QC",
    description:
      "Studying Computer Science with a focus on programming, web application design, database management, and software engineering best practices.",
  },
  {
    year: "2026",
    title: "Freelancer Marketplace",
    company: "Academic Project – Angular / CSS / TypeScript / REST APIs / Tailwind CSS",
    description:
      "Built a full freelancer marketplace web application connecting clients with professionals, using HTML, CSS and JavaScript with team collaboration via GitHub pull requests.",
  },
  {
    year: "2024",
    title: "Spotify Clone App",
    company: "Personal Project – React / TypeScript / Firebase / Vite",
    description:
      "Designed and developed a full-stack music streaming platform with secure authentication, playlist management, and audio playback. Implemented CRUD operations, RESTful APIs, and a scalable database structure.",
  },
  {
    year: "2024",
    title: "iOS Mobile Developer",
    company: "Personal Projects – Swift / Java",
    description:
      "Developed multiple iOS applications including a Twitter clone (TwittClone) and a local store management app (LocalStore) using Swift and UIKit, as well as Borealis Mobile in Java for Android.",
  },
  {
    year: "2024",
    title: "Tetris Game",
    company: "Academic Project – Python",
    description:
      "Designed and developed a fully functional Tetris game in Python, implementing core mechanics such as piece movement, rotation, and line-clearing logic using object-oriented programming principles.",
  },
  {
    year: "2021",
    title: "High School Classes Content Program",
    company: "Personal Project – C# / SQL",
    description:
      "Designed and developed a C# desktop application for 10th and 11th grade students to access yearly academic material, with features for content browsing, notes storage, and yearly content updates.",
  },
  {
    year: "2021 – 2022",
    title: "Systems Assistant",
    company: "La Canasta Store – Bogotá, Colombia",
    description:
      "Managed inventory and supplier relationships, administered the store's product database, and implemented a scheduling system for product receipt that improved supply chain efficiency.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-gradient">Experience</span>
        </h2>
        <div className="space-y-0 relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-[19px]" />
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-12 pb-12 last:pb-0">
              <div className="absolute left-2.5 top-1.5 h-4 w-4 rounded-full bg-primary glow-purple" />
              <div className="rounded-lg border border-border bg-card p-6 card-hover">
                <span className="inline-block font-mono text-xs text-primary mb-2">
                  {exp.year}
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.title}
                </h3>
                <p className="text-sm text-primary/80 mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;