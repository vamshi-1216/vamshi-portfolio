import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Github,
  Layers3,
  Lock,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const projects = [
  {
    number: "01",
    slug: "employee-portal",
    title: "Employee Portal",
    category: "Enterprise application",
    status: "Project experience",
    description:
      "An employee management portal that connects employee records, payslip workflows, payroll documents and administrative operations.",
    problem:
      "Employee administration involves multiple workflows, including maintaining employee details, managing payroll documents and processing resignation requests.",
    solution:
      "A web application with a React frontend, Spring Boot backend and MySQL database to support employee and administrative workflows.",
    features: [
      "Employee records and management",
      "Employee login portal",
      "Payslip and payroll document workflows",
      "Employee salary increment letter preview",
      "Resignation request management",
    ],
    technologies: ["React", "Spring Boot", "MySQL"],
    image: "/images/projects/employee_portal/dashboard.jpg",
    orientation: "landscape",
    github: "",
    isPrivate: true,
    screenshots: [
      {
        title: "Admin Dashboard",
        description:
          "Employee management interface with employee records and administrative navigation.",
        image: "/images/projects/employee_portal/dashboard.jpg",
      },
      {
        title: "Employee Login",
        description:
          "Login interface for selecting a company and entering employee credentials.",
        image: "/images/projects/employee_portal/login.jpg",
      },
      {
        title: "Payroll Documents",
        description:
          "Document generation workflow with a salary increment letter preview.",
        image: "/images/projects/employee_portal/payroll_documents.jpg",
      },
      {
        title: "Resignation Management",
        description:
          "Resignation request overview with statuses and letter download actions.",
        image: "/images/projects/employee_portal/resignation.jpg",
      },
    ],
  },
  {
    number: "02",
    slug: "game-of-cricket",
    title: "GOC — Game of Cricket",
    category: "Android application",
    status: "Android project",
    description:
      "An Android cricket-scoring application inspired by an epic fantasy aesthetic, designed for gully cricket and local matches.",
    problem:
      "Local matches need a convenient way to track runs, wickets, overs, batsmen and bowlers without relying on paper scorecards.",
    solution:
      "An Android application for match setup, toss selection, cricket scoring and player statistics, with local data persistence.",
    features: [
      "Match and innings scoring",
      "Team and player selection",
      "Runs, boundaries, wides, no-balls and wickets",
      "Batsman and bowler information",
      "Player statistics",
      "Local data storage",
    ],
    technologies: ["Android Studio", "Room Database", "SQLite"],
    image: "/images/projects/game-of-cricket/scoring.jpg",
    orientation: "portrait",
    github: "https://github.com/vamshi-1216/GAME_OF_CRICKET",
    isPrivate: false,
    screenshots: [
      {
        title: "The Scoring Arena",
        description:
          "Live scoring interface for runs, wickets, overs, batsmen and bowlers.",
        image: "/images/projects/game-of-cricket/scoring.jpg",
      },
      {
        title: "The Realm",
        description:
          "The GOC home screen with its black-and-gold visual identity.",
        image: "/images/projects/game-of-cricket/home.jpg",
      },
      {
        title: "The Toss",
        description:
          "Select the toss caller and heads or tails before the match begins.",
        image: "/images/projects/game-of-cricket/toss.jpg",
      },
      {
        title: "The Sigil",
        description:
          "The Game of Cricket logo and project branding.",
        image: "/images/projects/game-of-cricket/logo.jpg",
      },
    ],
  },
];

function ProjectPreview({ project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const isPortrait = project.orientation === "portrait";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-line bg-panel ${
        isPortrait ? "h-[460px] sm:h-[600px]" : "aspect-video"
      }`}
    >
      {!imageFailed ? (
        <>
          {isPortrait && (
            <img
              src={project.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-30 blur-2xl"
            />
          )}
          <img
            src={project.image}
            alt={`${project.title} main preview`}
            onError={() => setImageFailed(true)}
            className={`relative h-full w-full object-contain ${
              isPortrait ? "p-4" : ""
            }`}
          />
        </>
      ) : (
        <div className="flex h-full flex-col items-center justify-center bg-technical-grid">
          <Code2 size={44} className="text-violet" />
          <p className="mt-4 font-display text-xl text-ink">
            {project.title}
          </p>
          <p className="mt-2 font-mono text-xs text-smoke">
            Project preview
          </p>
        </div>
      )}
    </div>
  );
}

function ScreenshotImage({ shot }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-technical-grid text-center">
        <Code2 size={28} className="text-violet" />
        <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-smoke">
          Preview unavailable
        </p>
      </div>
    );
  }

  return (
    <img
      src={shot.image}
      alt={shot.title}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-contain"
    />
  );
}

function ScreenshotGallery({ screenshots, orientation }) {
  const isPortrait = orientation === "portrait";

  return (
    <section className="mt-16">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">
        Application gallery
      </p>

      <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
        A closer <span className="text-violet">look.</span>
      </h2>

      <p className="mt-4 max-w-2xl leading-7 text-smoke">
        Explore the main screens and workflows of this project.
      </p>

      <div
        className={`mt-8 grid gap-6 ${
          isPortrait ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2"
        }`}
      >
        {screenshots.map((shot) => (
          <article
            key={shot.title}
            className="overflow-hidden rounded-2xl border border-line bg-graphite transition hover:border-violet/40"
          >
            <div
              className={`flex items-center justify-center overflow-hidden bg-panel ${
                isPortrait ? "aspect-[9/16]" : "aspect-[16/10]"
              }`}
            >
              <ScreenshotImage shot={shot} />
            </div>

            <div className="p-4">
              <h3 className="font-display text-lg font-semibold text-ink">
                {shot.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-smoke">
                {shot.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="grid min-h-[70vh] place-items-center bg-void px-5 text-center text-ink">
        <div>
          <p className="font-mono text-sm text-cyan">ERROR / 404</p>
          <h1 className="mt-4 font-display text-4xl font-bold sm:text-6xl">
            Project not found.
          </h1>
          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-2 text-violet hover:text-cyan"
          >
            <ArrowLeft size={17} />
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-void px-5 pb-24 pt-32 text-ink sm:px-8 lg:px-12">
      <div className="mx-auto max-w-site">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-smoke transition hover:text-cyan"
        >
          <ArrowLeft size={17} />
          All projects
        </Link>

        <header className="mt-10 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">
            Project / {project.number} — {project.category}
          </p>

          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-smoke sm:text-lg">
            {project.description}
          </p>

          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-violet/25 bg-violet/10 px-4 py-2 text-xs text-violet">
            <CheckCircle2 size={15} />
            {project.status}
          </span>
        </header>

        <div className="mt-12">
          <ProjectPreview project={project} />
        </div>

        <ScreenshotGallery
          screenshots={project.screenshots}
          orientation={project.orientation}
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_0.75fr]">
          <div className="space-y-8">
            <section className="rounded-2xl border border-line bg-graphite p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-violet/10 text-violet">
                  <Layers3 size={20} />
                </span>
                <h2 className="font-display text-2xl font-semibold">
                  The problem
                </h2>
              </div>

              <p className="mt-5 leading-8 text-smoke">
                {project.problem}
              </p>
            </section>

            <section className="rounded-2xl border border-line bg-graphite p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-cyan/10 text-cyan">
                  <Code2 size={20} />
                </span>
                <h2 className="font-display text-2xl font-semibold">
                  The approach
                </h2>
              </div>

              <p className="mt-5 leading-8 text-smoke">
                {project.solution}
              </p>

              <h3 className="mt-8 font-display text-lg font-semibold">
                Key features
              </h3>

              <ul className="mt-4 space-y-3">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-6 text-smoke"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-1 shrink-0 text-cyan"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="h-fit rounded-2xl border border-line bg-graphite p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-cyan">
              Technology stack
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-line bg-void px-3 py-2 text-sm text-smoke"
                >
                  {technology}
                </span>
              ))}
            </div>

            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-violet px-5 py-4 font-medium text-void transition hover:bg-cyan"
              >
                <Github size={18} />
                View source code
                <ArrowUpRight size={17} />
              </a>
            ) : (
              project.isPrivate && (
                <div className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-line bg-void px-5 py-4 text-sm text-smoke">
                  <Lock size={16} />
                  Private repository
                </div>
              )
            )}

            <Link
              to="/contact"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-line px-5 py-4 text-sm text-ink transition hover:border-violet"
            >
              Discuss a project
              <ArrowUpRight size={17} />
            </Link>
          </aside>
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-smoke transition hover:text-violet"
          >
            <ArrowLeft size={18} />
            Explore other projects
          </Link>
        </div>
      </div>
    </main>
  );
}