const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "C#", "Python", "Java", "Swift", "PHP", "SQL", "HTML5", "CSS", "GOLANG",],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Angular", "Node.js", ".NET", "Tailwind CSS", "Vite", "REST APIs"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Firebase", "Oracle", "Xcode", "VS Code", "Linux", "Windows"],
  },
  {
    title: "Concepts",
    skills: ["OOP", "Microservices", "CI/CD", "CRUD", "Database Management", "Responsive UI"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Skills & <span className="text-gradient">Technologies</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-lg border border-border bg-card p-6 card-hover"
            >
              <h3 className="font-semibold mb-4 text-foreground">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-mono text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
