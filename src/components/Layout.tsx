import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} — crafted with intent
          </span>
          <div className="flex gap-6">
            <a href="https://github.com/UnfazedAy" target="_blank" rel="noopener noreferrer" className="nav-link text-xs">
              github
            </a>
            <a href="https://www.linkedin.com/in/ayomide-soniyi-3151461a5/" target="_blank" rel="noopener noreferrer" className="nav-link text-xs">
              linkedin
            </a>
            <a href="https://twitter.com/SoniyiAyomide_" target="_blank" rel="noopener noreferrer" className="nav-link text-xs">
              X (formerly Twitter)
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
