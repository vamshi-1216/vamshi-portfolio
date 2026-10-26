
import { Link, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";

function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-void px-5 text-center text-ink">
      <div>
        <p className="font-mono text-sm text-cyan">ERROR / 404</p>

        <h1 className="mt-4 font-display text-5xl font-bold sm:text-7xl">
          Lost in space.
        </h1>

        <p className="mt-5 text-smoke">
          This page doesn't exist, or the link may have changed.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 font-medium text-void transition hover:bg-cyan"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-void px-5 py-8 text-smoke sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-site flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="font-display text-xl font-bold text-ink">
          V<span className="text-violet">.</span>
        </Link>

        <p className="text-sm">
          Designed with intention. Built with code.
        </p>

        <p className="font-mono text-xs">
          © {new Date().getFullYear()} · All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-void font-sans text-ink">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}
