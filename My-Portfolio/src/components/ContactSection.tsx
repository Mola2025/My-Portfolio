import { useState } from "react";
import { Github, Mail, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xvzwbeyb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
                name="name"
                type="text"
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground block mb-1.5">Email</label>
              <input
                name="email"
                type="email"
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground block mb-1.5">Message</label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors w-full justify-center disabled:opacity-60"
            >
              <Send size={16} />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-sm text-green-500 text-center">
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500 text-center">
                Something went wrong. Please try again.
              </p>
            )}
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
                href="mailto:davidm0l4n0@gmail.com"
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