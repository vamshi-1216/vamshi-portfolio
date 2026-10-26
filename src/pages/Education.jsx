
import { GraduationCap, BookOpen, ArrowUpRight } from "lucide-react";

const education = [
  {
    number: "01",
    period: "UNDERGRADUATE",
    degree: "B.Tech — Electronics & Communication Engineering",
    institution: "Vignan Institute of Technology and Science",
    detail:
      "An engineering foundation that introduced me to electronic systems, technical reasoning and structured problem-solving.",
    icon: GraduationCap,
  },
  {
    number: "02",
    period: "PRE-UNIVERSITY",
    degree: "Intermediate — MPC",
    institution: "Telangana",
    detail:
      "Mathematics, Physics and Chemistry established the analytical foundation for my engineering studies.",
    icon: BookOpen,
  },
];

export default function Education() {
  return (
    <main className="mx-auto min-h-[70vh] max-w-site px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mb-12 max-w-2xl">
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-violet">
          <span className="h-px w-7 bg-violet" />
          03 / Education
        </p>

        <h1 className="font-display text-4xl font-semibold leading-tight tracking-[-0.05em] text-ink sm:text-6xl">
          The foundation of
          <span className="text-violet"> how I think.</span>
        </h1>

        <p className="mt-5 max-w-xl text-sm leading-7 text-smoke sm:text-base">
          The academic milestones that shaped my technical curiosity and
          approach to solving problems.
        </p>
      </div>

      <div className="relative ml-2 border-l border-line pl-7 sm:ml-4 sm:pl-12">
        {education.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.number}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute -left-[33px] top-1 flex h-3 w-3 items-center justify-center rounded-full border border-violet bg-void sm:-left-[57px]">
                <span className="h-1 w-1 rounded-full bg-violet" />
              </span>

              <p className="font-mono text-[10px] tracking-widest text-violet">
                {item.period} / {item.number}
              </p>

              <div className="mt-4 border border-line bg-graphite/40 p-5 transition duration-300 hover:border-violet/40 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <Icon
                    size={24}
                    strokeWidth={1.4}
                    className="text-cyan"
                  />

                  <span className="font-mono text-[10px] text-smoke">
                    ACADEMIC RECORD
                  </span>
                </div>

                <h2 className="mt-6 font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
                  {item.degree}
                </h2>

                <p className="mt-3 text-sm text-violet">
                  {item.institution}
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-smoke">
                  {item.detail}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <section className="mt-16 border border-line bg-technical-grid bg-grid p-6 sm:p-8">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-violet">
          Beyond the curriculum
        </p>

        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Learning is an ongoing system.
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-smoke">
          My independent learning includes frontend development, backend
          services, databases, software architecture and machine learning.
          My projects show how I apply these concepts in practice.
        </p>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm text-violet transition hover:text-violet-soft"
        >
          See my resume <ArrowUpRight size={16} />
        </a>
      </section>
    </main>
  );
}
