import aboutImage from "@/assets/about-illustration.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate developer with experience building digital
              products across web and mobile platforms. I believe in the power of
              good design and clean code to solve real problems.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new design trends,
              practicing new languages, read recent news of technology, drawing in my free time, playing games or working on personal projects.
            </p>
            <p>
              I'm always excited to work on projects that challenge me to grow
              and learn something new.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={aboutImage}
              alt="Developer illustration"
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono text-primary uppercase tracking-wider">Location</span>
            <span className="text-sm text-foreground">Montreal, Canada</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono text-primary uppercase tracking-wider">Education</span>
            <span className="text-sm text-foreground">DEC Computer Science</span>
            <span className="text-xs text-muted-foreground">LaSalle College</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono text-primary uppercase tracking-wider">Languages</span>
            <span className="text-sm text-foreground">Spanish · English · French</span>
            <span className="text-xs text-muted-foreground">Native · Advanced · Intermediate</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono text-primary uppercase tracking-wider">Status</span>
            <span className="text-sm text-foreground">Open to opportunities</span>
            <span className="text-xs text-muted-foreground">Available for new projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
