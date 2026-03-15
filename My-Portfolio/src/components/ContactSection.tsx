import { useState } from "react";
import { Github, Mail, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:contact@example.com?subject=Portfolio Contact from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`;
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Let's Work <span className="text-gradient">Together</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="font-semibold text-foreground mb-4">Send me a message</h3>
            <div>
              <label className="text-sm text-muted-foreground block mb-1.5">Name</label>
              <input
                title="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground block mb-1.5">Email</label>
              <input
                title="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground block mb-1.5">Message</label>
              <textarea
                title="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors w-full justify-center"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
          <div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm always open to discussing new opportunities, creative projects, or
              partnerships. Whether you have a specific project in mind or just want to
              explore possibilities, I'd love to connect.
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 mb-8">
              <li>• Web & Mobile Development</li>
              <li>• UI/UX Design</li>
              <li>• Technical Consulting</li>
              <li>• Open Source Collaboration</li>
            </ul>
            <h3 className="font-semibold text-foreground mb-4">My Socials</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Mola2025"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/david-molano-377a9628a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
