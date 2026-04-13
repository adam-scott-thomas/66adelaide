import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { SiteNav } from "./SiteNav";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | 66 Adelaide Detroit";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SiteNav />
      <div className="flex flex-col items-start justify-center min-h-screen px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs uppercase tracking-[0.2em] text-foreground/35 mb-6">404</div>
          <h1 className="text-5xl md:text-7xl leading-tight tracking-tight mb-6">
            Page not<br />found.
          </h1>
          <p className="text-foreground/50 text-base max-w-md leading-relaxed mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/60 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to 66 Adelaide documentation
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
