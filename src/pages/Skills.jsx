
import {
  Code2,
  Database,
  GitBranch,
  Layers3,
  Server,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Programming",
    description: "Languages for logic and problem solving.",
    icon: Code2,
    skills: ["JavaScript", "Python", "Java", "C++", "SQL"],
  },
  {
    number: "02",
    title: "Frontend",
    description: "Building responsive user experiences.",
    icon: Layers3,
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
  },
  {
    number: "03",
    title: "Backend",
    description: "APIs, application logic and services.",
    icon: Server,
    skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
  },
  {
    number: "04",
    title: "Databases",
    description: "Storing and managing application data.",
    icon: Database,
    skills: ["MongoDB", "MySQL", "SQLite"],
  },
  {
    number: "05",
    title: "Developer tools",
    description: "Tools for building and shipping software.",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "VS Code", "Docker"],
  },
  {
    number: "06",
    title: "Engineering mindset",
    description: "How I approach software development.",
    icon: GitBranch,
    skills: ["Problem solving", "API design", "Debugging", "Reusable components"],
  },
];

export default function Skills() {
  return (
    <main className="min-h-screen bg-void px-5 pb-24 pt-32 text-ink sm:px-8 lg:px-12">
      <div className="mx-auto max-w-site">
        <header className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
            03 / Technical toolkit
          </p>

          <h1 className="mt-5 font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Skills that <span className="text-violet">build things.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-smoke sm:text-lg">
            A growing toolkit across software development, databases and
            application design. I focus on understanding how the pieces work
            together, not just learning individual tools.
          </p>
        </header>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.number}
                className="group rounded-2xl border border-line bg-graphite p-6 transition duration-300 hover:-translate-y-1 hover:border-violet/50 sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="grid size-12 place-items-center rounded-xl border border-violet/20 bg-violet/10 text-violet">
                    <Icon size={22} />
                  </div>

                  <span className="font-mono text-xs text-smoke">
                    {group.number}
                  </span>
                </div>

                <h2 className="mt-7 font-display text-xl font-semibold">
                  {group.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-smoke">
                  {group.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-line bg-void px-3 py-2 text-xs text-smoke transition hover:border-cyan/40 hover:text-cyan"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-line pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-smoke">
                    Toolkit / {group.number}
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-violet transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-line bg-graphite p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan">
            Current philosophy
          </p>

          <p className="mt-4 max-w-3xl font-display text-2xl leading-relaxed sm:text-3xl">
            "Understand the system. Write clean code. Make the experience
            feel effortless."
          </p>
        </div>
      </div>
    </main>
  );
}
