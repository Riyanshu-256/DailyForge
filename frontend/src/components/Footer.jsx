import { Link } from "react-router-dom";
import {
  Github,
  MessageSquare,
  BookOpen,
  Heart,
  Instagram,
  Linkedin,
  TwitterIcon,
} from "lucide-react";

export default function Footer() {
  const githubBase = "https://github.com/aryandas2911/DailyForge";

  const navLinks = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Tasks", path: "/tasks" },
    { label: "Routine Builder", path: "/routine-builder" },
  ];

  return (
    <footer className="mt-20 border-t border-soft bg-gradient-to-b from-[#dff4ec] to-[#cdeee1] text-main">
      <div className="max-w-5xl mx-auto px-8 pt-10 pb-6"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 mb-8">
        {/* DailyForge */}
        <div className="space-y-5 mx-4">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-main">
              DailyForge<span className="text-[#4eb7b3]">.</span>
            </h2>

            <div className="mt-3 h-1.5 w-14 rounded-full bg-gradient-to-r from-[#4eb7b3] to-[#6dd5c7]" />
          </div>

          <p className="max-w-xs text-sm leading-7 text-muted">
            DailyForge empowers you to build consistent habits, manage your
            tasks efficiently, and achieve long-term success through intentional
            daily progress.
          </p>

          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#4eb7b3]" />
            <span className="text-xs font-medium tracking-wide text-[#4eb7b3] uppercase">
              Open Source Project
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#4eb7b3] mb-6">
            Navigation
          </h3>

          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="group flex items-center gap-3 text-sm font-medium text-muted transition-all duration-300 hover:text-[#4eb7b3]"
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

          <div className="flex flex-wrap gap-3">
            {["React", "Tailwind CSS", "Node.js", "MongoDB"].map((tech) => (
              <span
                key={tech}
                className="
          px-4 py-2
          rounded-full
          bg-white/60
          dark:bg-white/5
          border border-[#4eb7b3]/15
          text-sm font-medium
          text-[#3b8ea0]
          hover:border-[#4eb7b3]
          hover:bg-white
          hover:-translate-y-0.5
          transition-all duration-300
          cursor-default
        "
              >
                {tech}
              </span>
            ))}
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
