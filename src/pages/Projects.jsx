import { useState } from "react";
import { ArrowUpRight, Code2, Github, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    number: "01",
    slug: "employee-portal",
    title: "Employee Portal",
    category: "ENTERPRISE APPLICATION",
    description:
      "An employee management portal featuring employee records, payslip workflows, payroll documents and resignation management.",
    technologies: ["React", "Spring Boot", "MySQL"],
    image: "/images/projects/employee_portal/dashboard.jpg",
    orientation: "landscape",
    github: "",
    isPrivate: true,
  },
  {
    number: "02",
    slug: "game-of-cricket",
    title: "GOC — Game of Cricket",
    category: "ANDROID APPLICATION",
    description:
      "A Game of Thrones-inspired Android cricket scoring application for local matches, team management and player statistics.",
    technologies: ["Android Studio", "Room Database", "SQLite"],
    image: "/images/projects/game-of-cricket/scoring.jpg",
    orientation: "portrait",
    github: "https://github.com/vamshi-1216/GAME_OF_CRICKET",
    isPrivate: false,
  },
];

function ProjectImage({ project }) {
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
              className="relative h-full w-full object-contain p-3 transition duration-500 group-hover:scale-105"
            />
          </>
        ) : (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        )
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-technical-grid">
          <Code2 size={36} className="text-violet" />
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-smoke">
            Project preview
          </p>
          <p className="mt-2 font-display text-lg text-ink">
            {project.title}
          </p>
        </div>
      )}

      <span className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-void/80 px-3 py-1.5 font-mono text-[10px] tracking-widest text-cyan backdrop-blur">
        PROJECT / {project.number}
      </span>

      <span className="absolute bottom-4 right-4 z-10 grid size-11 place-items-center rounded-full bg-violet text-void transition group-hover:rotate-45">
        <ArrowUpRight size={20} />
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <main className="min-h-screen bg-void px-5 pb-24 pt-32 text-ink sm:px-8 lg:px-12">
      <div className="mx-auto max-w-site">
        <header className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
            04 / Selected work
          </p>

          <h1 className="mt-5 font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Ideas made <span className="text-violet">real.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-smoke sm:text-lg">
            Applications built around practical problems, thoughtful
            engineering and distinctive visual design.
          </p>
        </header>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-graphite transition duration-300 hover:-translate-y-1 hover:border-violet/50"
            >
              <Link
                to={`/projects/${project.slug}`}
                aria-label={`View ${project.title}`}
                className="block"
              >
                <ProjectImage project={project} />
              </Link>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="font-mono text-[10px] tracking-[0.2em] text-cyan">
                  {project.category}
                </p>

                <h2 className="mt-3 font-display text-2xl font-semibold">
                  {project.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-smoke">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-line px-3 py-1.5 text-xs text-smoke"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5 [margin-top:1.75rem]">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-violet transition hover:text-cyan"
                  >
                    Explore project <ArrowUpRight size={16} />
                  </Link>

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-smoke hover:text-ink"
                    >
                      <Github size={17} />
                      Source code
                    </a>
                  ) : (
                    project.isPrivate && (
                      <span className="inline-flex items-center gap-2 text-sm text-smoke">
                        <Lock size={15} />
                        Private repository
                      </span>
                    )
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 font-mono text-xs leading-6 text-smoke">
          MORE PROJECTS IN PROGRESS · ALWAYS BUILDING
        </p>
      </div>
    </main>
  );
}