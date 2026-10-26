import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Homee", path: "/" },
  { label: "About", path: "/about" },
  { label: "Education", path: "/education" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Solid background after scrolling + hide on scroll down / show on scroll up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      if (y > lastY.current && y > 120) {
        setHidden(true);
      } else if (y < lastY.current) {
        setHidden(false);
      }

      lastY.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHidden = hidden && !menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-3 pb-3 pt-3 transition-all duration-300 sm:px-5 sm:pt-4 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled || menuOpen
          ? "bg-void/95 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between rounded-2xl border border-violet/40 bg-violet px-4 py-3 shadow-2xl shadow-black/10 sm:px-6">
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
          aria-label="Vamshi home"
        >
          <span className="grid size-10 place-items-center rounded-xl border border-void/20 bg-void font-display text-xl font-bold text-violet transition group-hover:bg-void/80">
            V.
          </span>

          <span className="hidden sm:block">
            <span className="block font-display text-sm font-semibold tracking-wide text-void">
              Vamshi Bandari
            </span>
            <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-widest text-void/70">
              Engineer / Artist
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `relative rounded-lg px-3 py-2 text-xs transition duration-200 xl:px-3.5 xl:text-sm ${
                  isActive
                    ? "bg-void/15 text-void"
                    : "text-void/75 hover:bg-void/10 hover:text-void"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-void" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-void px-4 py-2.5 text-xs font-semibold text-violet transition hover:bg-void/80 hover:text-cyan xl:inline-flex"
        >
          Let's talk <ArrowUpRight size={15} />
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid size-10 place-items-center rounded-xl border border-void/25 text-void transition hover:border-void lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mx-auto mt-2 max-w-[1440px] animate-fade-in rounded-2xl border border-line bg-[#0d1017] p-3 shadow-2xl lg:hidden">
          {navItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={closeMenu}
              style={{ animationDelay: `${index * 35}ms` }}
              className={({ isActive }) =>
                `mobile-nav-item flex items-center justify-between rounded-xl px-4 py-3.5 text-sm ${
                  isActive
                    ? "bg-violet/10 text-violet"
                    : "text-smoke hover:bg-white/[0.04] hover:text-ink"
                }`
              }
            >
              {item.label}
              <ArrowUpRight size={15} />
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-violet px-4 py-3.5 text-sm font-semibold text-void"
          >
            Start a conversation <ArrowUpRight size={16} />
          </Link>
        </div>
      )}
    </header>
  );
}