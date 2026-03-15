const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} David Molano. All rights reserved.
        </span>
        <span className="text-xs font-mono text-muted-foreground">
          Built with React & TypeScript & TailWind CSS v3
        </span>
      </div>
    </footer>
  );
};

export default Footer;
