import { ArrowUpRight, Palette, Code2, Brain, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const principles = [
  {
    icon: Brain,
    title: "The thinker",
    description: "Curiosity before assumptions.",
  },
  {
    icon: Code2,
    title: "The builder",
    description: "Ideas into working systems.",
  },
  {
    icon: Palette,
    title: "The artist",
    description: "Details with intention.",
  },
  {
    icon: Sparkles,
    title: "The learner",
    description: "Progress through practice.",
  },
];

export default function About() {
  return (
    <main className="mx-auto min-h-[70vh] max-w-site px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mb-12 max-w-2xl">
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-violet">
          <span className="h-px w-7 bg-violet" />
          02 / About me
        </p>

        <h1 className="font-display text-4xl font-semibold leading-tight tracking-[-0.05em] text-ink sm:text-6xl">
          The person behind
          <span className="text-violet"> the process.</span>
        </h1>

        <p className="mt-5 max-w-xl text-sm leading-7 text-smoke sm:text-base">
          A little about my background, the way I think, and what drives
          me to create.
        </p>
      </div>

      <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="relative">
          <div className="absolute -left-3 -top-3 h-16 w-16 border-l border-t border-violet/60" />

          <div className="relative aspect-[4/5] overflow-hidden border border-line bg-graphite">
            <img
              src="/images/profile/vamshi.png"
              alt="Portrait of Vamshi"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/40 via-transparent to-violet/5" />

            <span className="absolute bottom-4 left-4 font-mono text-[10px] tracking-widest text-white/80">
              VAMSHI / PROFILE_001
            </span>
          </div>

          <div className="absolute -bottom-4 -right-3 border border-violet/40 bg-void px-4 py-3">
            <p className="font-mono text-[10px] text-violet">
              LOG_001 / PERSONAL
            </p>
          </div>
        </div>

        <div>
          <h2 className="max-w-xl font-display text-2xl leading-snug text-ink sm:text-3xl">
            I find meaning in understanding how things work — and
            imagining how they could work better.
          </h2>

          <div className="mt-6 space-y-5 text-sm leading-7 text-smoke sm:text-base">
            <p>
              My journey began with Electronics and Communication
              Engineering. That foundation shaped my curiosity about
              systems, technology and the relationships between individual
              components.
            </p>

            <p>
              Today, I explore software development through applications,
              APIs, databases and interfaces. I enjoy taking an idea apart,
              understanding its moving pieces, and bringing them together
              into something useful.
            </p>

            <p>
              Outside engineering, drawing and visual design give me another
              way to explore ideas. I want my work to be technically sound
              without losing its sense of identity.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className="border border-line bg-graphite/40 p-4 transition hover:border-violet/40"
                >
                  <Icon
                    size={19}
                    strokeWidth={1.5}
                    className="text-violet"
                  />
                  <h3 className="mt-4 font-display text-base text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-smoke">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-line px-5 py-3 text-sm text-ink transition hover:border-violet/50 hover:text-violet"
            >
              View resume <ArrowUpRight size={16} />
            </a>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-violet px-5 py-3 text-sm font-medium text-void transition hover:bg-violet-soft"
            >
              Explore my work <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
