import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/lease-terms", label: "Lease Terms" },
  { to: "/property-info", label: "Property Info" },
];

export function SiteNav({ transparent = false }: { transparent?: boolean }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isTransparent = transparent && !scrolled && !open;

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isTransparent
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur border-b border-border"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-16 flex items-center justify-between">
          {/* Logo / wordmark */}
          <Link
            to="/"
            className={`text-sm font-medium tracking-wide transition-colors ${
              isTransparent ? "text-white/80 hover:text-white" : "text-foreground"
            }`}
          >
            66 Adelaide
            <span className={`ml-2 text-xs font-normal ${isTransparent ? "text-white/40" : "text-foreground/35"}`}>
              Detroit, MI
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 text-sm transition-colors rounded-sm ${
                    isTransparent
                      ? active
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                      : active
                      ? "text-foreground"
                      : "text-foreground/50 hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className={`absolute bottom-0 left-4 right-4 h-px ${isTransparent ? "bg-white/60" : "bg-foreground"}`}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`md:hidden p-2 transition-colors ${
              isTransparent ? "text-white/70 hover:text-white" : "text-foreground/60 hover:text-foreground"
            }`}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-16"
          >
            <div className="flex flex-col px-6 pt-8 gap-1">
              {links.map((link) => {
                const active = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`py-5 text-2xl border-b border-border transition-colors ${
                      active ? "text-foreground" : "text-foreground/40 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto px-6 pb-10 text-xs text-foreground/30 leading-relaxed">
              66 Adelaide Street · Detroit, MI 48201<br />
              Building Conditions Documentation
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
