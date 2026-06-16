import { Link, useLocation } from 'react-router-dom';
import { Github, MessageSquare, BookOpen, Heart } from 'lucide-react';

export default function Footer() {
  const location = useLocation();
  if (location.pathname === "/forge" || location.pathname === "/focus") {
    return null;
  }

  const githubBase = "https://github.com/aryandas2911/DailyForge";

  const navLinks = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Tasks", path: "/tasks" },
    { label: "Routine Builder", path: "/routine-builder" },
    { label: "About", path: "/about" },
  ];

  return (
    <footer className="bg-[#0f2926] text-white border-t border-[#4eb7b3]/30">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">


          <div className="md:col-span-4 space-y-5">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#f8fafc]">
                DailyForge<span className="text-[#6dd5c7]">.</span>
              </h2>
              <div className="h-1 w-10 bg-[#4eb7b3] mt-2 rounded-full"></div>
            </div>

            <p className="text-sm leading-relaxed text-[#94a3b8] max-w-xs">
              Empowering students and professionals to forge unbreakable habits through intelligent task management.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href={githubBase}
                target="_blank"
                rel="noreferrer"
                aria-label="DailyForge GitHub repository"
                title="DailyForge GitHub repository"
                className="p-2 bg-white/5 rounded-lg text-[#4eb7b3] hover:bg-[#4eb7b3] hover:text-white transition-all border border-white/10"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#4eb7b3] mb-6">
              Navigation
            </h3>
            <ul className="space-y-4 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Section */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#4eb7b3] mb-6">
              Community
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href={githubBase} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
                  <Github size={14} /> GitHub Repo
                </a>
              </li>
              <li>
                <a href={`${githubBase}/issues`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
                  <MessageSquare size={14} /> Issues
                </a>
              </li>
              <li>
                <a href={`${githubBase}/blob/main/CONTRIBUTING.md`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
                  <BookOpen size={14} /> Contributing
                </a>
              </li>
            </ul>
          </div>
        </div>

          {/* Tech Stack */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#4eb7b3] mb-6">
              Built With
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Tailwind', 'Node.js', 'MongoDB'].map((tech) => (
                <span
                  key={tech}
                  className="bg-white/5 border border-white/10 px-3 py-1 rounded-md text-[11px] font-medium text-[#6dd5c7]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4eb7b3]/40 transition-all duration-300 group-hover:w-3 group-hover:bg-[#4eb7b3]" />

                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#4eb7b3] mb-6">
            Community
          </h3>

          <ul className="space-y-4">
            <li>
              <a
                href={githubBase}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-sm font-medium text-muted transition-all duration-300 hover:text-[#4eb7b3]"
              >
                <Github
                  size={16}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <span>GitHub Repository</span>
              </a>
            </li>

            <li>
              <a
                href={`${githubBase}/issues`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-sm font-medium text-muted transition-all duration-300 hover:text-[#4eb7b3]"
              >
                <MessageSquare
                  size={16}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <span>Issues Page</span>
              </a>
            </li>

            <li>
              <a
                href={`${githubBase}/blob/main/CONTRIBUTING.md`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-sm font-medium text-muted transition-all duration-300 hover:text-[#4eb7b3]"
              >
                <BookOpen
                  size={16}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <span>Contributing Guide</span>
              </a>
            </li>

            <li>
              <a
                href="https://gssoc.girlscript.tech/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-sm font-medium text-muted transition-all duration-300 hover:text-[#4eb7b3]"
              >
                <span className="text-base transition-transform duration-300 group-hover:scale-110">
                  🌸
                </span>

                <span>GSSoC 2026</span>
              </a>
            </li>
          </ul>
        </div>
        {/* Follow GSSoC */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#4eb7b3] mb-6">
            Follow GSSoC
          </h3>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/girlscriptsummerofcode/?hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-soft bg-white/50 dark:bg-white/5 hover:border-[#4eb7b3] hover:bg-[#4eb7b3] hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              <Instagram
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            <a
              href="https://www.linkedin.com/company/girlscript-foundation/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-soft bg-white/50 dark:bg-white/5 hover:border-[#4eb7b3] hover:bg-[#4eb7b3] hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              <Linkedin
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            <a
              href="https://x.com/girlscriptsoc"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-soft bg-white/50 dark:bg-white/5 hover:border-[#4eb7b3] hover:bg-[#4eb7b3] hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              <TwitterIcon
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            <a
              href="https://github.com/GirlScriptSummerOfCode"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-soft bg-white/50 dark:bg-white/5 hover:border-[#4eb7b3] hover:bg-[#4eb7b3] hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              <Github
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-muted">
            Connect with the GSSoC community and stay updated with events,
            announcements, and contribution opportunities.
          </p>
        </div>
        {/* Built With */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#4eb7b3] mb-6">
            Built With
          </h3>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[#94a3b8]">
          <p>© 2026 DailyForge. All rights reserved.</p>

          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <span>Built with</span>
            <Heart size={14} className="text-red-400 fill-red-400 animate-pulse" />
            <span>for</span>
            <span className="text-[#4eb7b3] font-bold">GSSoC 2026</span>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-muted">
            Crafted using modern web technologies for performance, scalability,
            and an exceptional user experience.
          </p>
        </div>
      </div>
    </footer>
  );
}