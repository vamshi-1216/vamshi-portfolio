
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const inputClass =
  "w-full rounded-xl border border-line bg-void px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-smoke/50 focus:border-violet focus:ring-1 focus:ring-violet/20";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    const name = form.name.trim();
    const email = form.email.trim();
    const subjectText = form.subject.trim();
    const message = form.message.trim();

    if (!name || !email || !subjectText || !message) {
      setError("Please fill in all fields before submitting.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject: subjectText,
          message,
          website: new FormData(event.currentTarget).get("website"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Your message could not be sent.");
      }

      setSuccess("Thanks for reaching out! Your message has been sent.");
      setForm(initialForm);
    } catch (submitError) {
      setError(
        submitError.message ||
          "Something went wrong while sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-void px-5 pb-24 pt-32 text-ink sm:px-8 lg:px-12">
      <div className="mx-auto max-w-site">
        <header className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
            06 / Start a conversation
          </p>

          <h1 className="mt-5 font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Have an idea?
            <br />
            <span className="text-violet">Let's make it real.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-smoke sm:text-lg">
            I'm open to discussing software projects, creative collaborations,
            and new opportunities. Tell me what you're working on.
          </p>
        </header>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <aside className="flex flex-col gap-5">
            <div className="rounded-2xl border border-line bg-graphite p-7 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-cyan">
                Get in touch
              </p>

              <h2 className="mt-4 font-display text-2xl font-semibold">
                Good things start with a conversation.
              </h2>

              <p className="mt-4 text-sm leading-7 text-smoke">
                Have a question or an opportunity in mind? Send me a message.
                I'll be glad to hear from you.
              </p>

              <div className="mt-8 space-y-5">
                <a
                  href="mailto:bvamshi1817@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-violet/20 bg-violet/10 text-violet">
                    <Mail size={19} />
                  </span>

                  <span>
                    <span className="block text-xs text-smoke">Email</span>
                    <span className="mt-1 block text-sm transition group-hover:text-cyan">
                      bvamshi1817@gmail.com
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-violet/20 bg-violet/10 text-violet">
                    <MapPin size={19} />
                  </span>

                  <span>
                    <span className="block text-xs text-smoke">Location</span>
                    <span className="mt-1 block text-sm">
                      Hyderabad, India
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-graphite p-7 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-cyan">
                Find me online
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <a
                  href="https://github.com/vamshi-1216"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-line p-4 transition hover:border-violet/50"
                >
                  <span className="flex items-center gap-3 text-sm">
                    <Github size={19} />
                    GitHub
                  </span>
                  <ArrowUpRight size={16} className="text-smoke" />
                </a>

                <a
                  href="https://www.linkedin.com/in/bandarivamshi/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-line p-4 transition hover:border-violet/50"
                >
                  <span className="flex items-center gap-3 text-sm">
                    <Linkedin size={19} />
                    LinkedIn
                  </span>
                  <ArrowUpRight size={16} className="text-smoke" />
                </a>
              </div>
            </div>
          </aside>

          <section className="rounded-2xl border border-line bg-graphite p-6 sm:p-9">
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-cyan">
                  Contact form
                </p>

                <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                  Send a message
                </h2>
              </div>

              <div className="hidden size-12 place-items-center rounded-xl border border-violet/20 bg-violet/10 text-violet sm:grid">
                <Send size={21} />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div
                aria-hidden="true"
                className="absolute -left-[10000px] h-px w-px overflow-hidden"
              >
                <label>
                  Leave this field empty
                  <input
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm text-smoke">
                    Your name
                  </span>

                  <input
                    className={inputClass}
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    placeholder="John Doe"
                    autoComplete="name"
                    maxLength={100}
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm text-smoke">
                    Email address
                  </span>

                  <input
                    className={inputClass}
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={updateField}
                    placeholder="john@example.com"
                    autoComplete="email"
                    maxLength={254}
                    required
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm text-smoke">
                  Subject
                </span>

                <input
                  className={inputClass}
                  name="subject"
                  value={form.subject}
                  onChange={updateField}
                  placeholder="Project, opportunity, or just saying hello"
                  maxLength={150}
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-smoke">
                  Message
                </span>

                <textarea
                  className={`${inputClass} min-h-36 resize-y`}
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  placeholder="Tell me a little about what you have in mind..."
                  rows={5}
                  maxLength={5000}
                  required
                />
              </label>

              {error && (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-xl border border-red-400/20 bg-red-400/5 p-4 text-sm leading-6 text-red-300"
                >
                  <AlertCircle size={19} className="mt-0.5 shrink-0" />
                  <p>{error}</p>
                </div>
              )}

              {success && (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-start gap-3 rounded-xl border border-cyan/20 bg-cyan/5 p-4 text-sm leading-6 text-cyan"
                >
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
                  <p>{success}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-violet px-6 py-4 font-semibold text-void transition hover:bg-cyan disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? "Sending..." : "Send message"}
                {!isSubmitting && <ArrowDownRight size={18} />}
              </button>

              <p className="text-xs leading-6 text-smoke">
                Your message will be sent directly to Vamshi.
              </p>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
