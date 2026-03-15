import { ArrowDown, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-block mb-6 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5">
          <span className="text-xs font-mono text-primary">Available for new Projects</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
          Hey! , I am <span className="text-gradient">David</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
          Software Developer
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          I desingn and develop beautiful, functional digital experiences that bring ideas to life.
          Specializing in modern web & mobile development and user-centered design.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors duration-150"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-primary/50 transition-colors duration-150"
          >
            Get in Touch
          </a>
          <a
            href="/David_Molano_CV_ATS.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-medium text-primary hover:bg-primary/20 transition-colors duration-150"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
        <a href="#about" className="inline-block mt-16 text-muted-foreground hover:text-primary transition-colors animate-bounce">
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
