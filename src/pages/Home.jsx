import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Github,
  Layers3,
  Palette,
} from "lucide-react";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    number: "01",
    title: "Employee Portal",
    category: "ENTERPRISE APPLICATION",
    description:
      "Employee records, payslip workflows, payroll documents and resignation management.",
    image: "/images/projects/employee_portal/dashboard.jpg",
    orientation: "landscape",
    slug: "employee-portal",
    tags: ["React", "Spring Boot", "MySQL"],
  },
  {
    number: "02",
    title: "GOC — Game of Cricket",
    category: "ANDROID APPLICATION",
    description:
      "A fantasy-inspired cricket scoring app built for local matches, teams and player statistics.",
    image: "/images/projects/game-of-cricket/scoring.jpg",
    orientation: "portrait",
    slug: "game-of-cricket",
    tags: ["Android Studio", "Room Database", "SQLite"],
  },
];

function ProfileVisual() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[390px]">
      <div className="absolute inset-5 rotate-[-6deg] rounded-[2rem] border border-violet/30" />

      <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-graphite">
        {!imageFailed ? (
          <img
            src="/images/profile/vamshi.png"
            alt="Portrait of Vamshi Bandari"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="relative flex h-full flex-col items-center justify-center overflow-hidden bg-technical-grid p-8 text-center">
            <span className="grid size-28 place-items-center rounded-full border border-violet/30 bg-violet/10 font-display text-5xl font-bold text-violet">
              V.
            </span>
            <p className="mt-6 font-display text-2xl font-semibold text-ink">
              Vamshi Bandari
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-smoke">
              Engineer / Artist
            </p>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">
              Current focus
            </p>
            <p className="mt-2 font-display text-lg font-semibold text-white">
              Engineering meets art.
            </p>
          </div>

          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/20 bg-void/40 text-white backdrop-blur">
            <Code2 size={19} />
          </span>
        </div>
      </div>

      <div className="absolute -right-2 top-10 hidden rounded-xl border border-line bg-graphite p-3 shadow-xl sm:block">
        <Palette size={20} className="text-violet" />
      </div>

      <div className="absolute -bottom-4 -left-3 rounded-xl border border-line bg-graphite p-3 shadow-xl">
        <span className="flex items-center gap-2 font-mono text-xs text-cyan">
          <span className="size-2 animate-pulse rounded-full bg-cyan" />
          ALWAYS BUILDING
        </span>
      </div>
    </div>
  );
}

function ProjectPreview({ project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const isPortrait = project.orientation === "portrait";

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-panel">
      {!imageFailed ? (
        isPortrait ? (
          <>
            {/* Blurred backdrop so portrait screenshots don't leave empty bars */}
            <img
              src={project.image}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-2xl"
            />
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="relative h-full w-full object-contain p-3 transition duration-700 group-hover:scale-105"
            />
          </>
        ) : (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
          />
        )
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-technical-grid">
          <Layers3 size={32} className="text-violet" />
          <span className="mt-3 font-mono text-[10px] uppercase tracking-widest text-smoke">
            Project preview
          </span>
          <span className="mt-2 font-display text-lg text-ink">
            {project.title}
          </span>
        </div>
      )}

      <span className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-void/80 px-3 py-1.5 font-mono text-[10px] text-cyan backdrop-blur">
        {project.number} / SELECTED WORK
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-void text-ink">
      <section className="relative flex min-h-[90vh] items-center px-5 pb-20 pt-32 sm:px-8 lg:min-h-screen lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-technical-grid opacity-70" />
        <div className="hero-glow pointer-events-none absolute -left-40 top-24 size-[420px] rounded-full bg-violet/10 blur-[130px]" />
        <div className="hero-glow hero-glow-delay pointer-events-none absolute -right-40 bottom-10 size-[420px] rounded-full bg-cyan/10 blur-[130px]" />

        <div className="relative mx-auto grid w-full max-w-site items-center gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div className="hero-content">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-line bg-graphite/80 px-4 py-2.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-cyan" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-smoke sm:text-xs">
                Developer by logic. Artist by instinct.
              </span>
            </div>

            <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-violet">
              Hello, I'm Vamshi
            </p>

            <h1 className="font-display text-5xl font-bold leading-[1.04] tracking-[-0.055em] sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]">
              I build
              <br />
              <span className="text-violet">systems.</span>
              <br />
              I create
              <br />
              <span className="text-outline">experiences.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-smoke sm:text-lg">
              I’m a software developer with an artist’s eye — combining
              engineering, thoughtful design and curiosity to create digital
              experiences that work beautifully.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 rounded-full bg-violet px-6 py-3.5 text-sm font-semibold text-void transition duration-300 hover:-translate-y-0.5 hover:bg-cyan"
              >
                Explore my work
                <ArrowUpRight
                  size={17}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm text-ink transition hover:border-violet/60 hover:text-violet"
              >
                More about me <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-smoke">
              <a
                href="https://github.com/vamshi-1216"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-cyan"
              >
                <Github size={17} /> GitHub
              </a>

              <span className="hidden h-4 w-px bg-line sm:block" />

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 transition hover:text-cyan"
              >
                Let’s connect <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          <div className="hero-visual mx-auto w-full max-w-md lg:max-w-none">
            <ProfileVisual />
          </div>
        </div>

        <a
          href="#selected-work"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-smoke transition hover:text-cyan md:flex"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.25em]">
            Scroll to explore
          </span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </section>

      <section className="border-y border-line bg-graphite/50 px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-site flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.2em] text-smoke sm:justify-between sm:text-xs">
          <span>Software engineering</span>
          <span className="text-violet">✳</span>
          <span>Creative thinking</span>
          <span className="text-violet">✳</span>
          <span>Visual design</span>
          <span className="text-violet">✳</span>
          <span>Continuous learning</span>
        </div>
      </section>

      <section
        id="selected-work"
        className="px-5 py-24 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="mx-auto max-w-site">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
                01 / Selected work
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Things I've <span className="text-violet">built.</span>
              </h2>
            </div>

            <Link
              to="/projects"
              className="inline-flex w-fit items-center gap-2 text-sm text-smoke transition hover:text-cyan"
            >
              All projects <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <article
                key={project.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-graphite transition duration-300 hover:-translate-y-1 hover:border-violet/50"
              >
                <Link to={`/projects/${project.slug}`} className="block">
                  <ProjectPreview project={project} />
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[10px] tracking-[0.15em] text-cyan">
                    {project.category}
                  </p>

                  <h3 className="mt-3 font-display text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-smoke">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-3 py-1.5 text-[10px] text-smoke"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-violet transition hover:text-cyan"
                  >
                    View project <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-site overflow-hidden rounded-3xl border border-line bg-graphite px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-20 -top-28 size-80 rounded-full border border-violet/10" />
          <div className="pointer-events-none absolute -right-10 -top-20 size-60 rounded-full border border-violet/15" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
                02 / What's next?
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
                Good ideas deserve
                <br />
                <span className="text-violet">great execution.</span>
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-smoke">
                I'm always interested in learning, collaborating, and building
                something useful. Let's start with a conversation.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-violet px-6 py-4 text-sm font-semibold text-void transition hover:bg-cyan"
            >
              Let's talk
              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}