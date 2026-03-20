import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Terminal } from "lucide-react";

const roles = ["software engineer", "problem solver", "lover of code", "api whisperer", "software craftsman"];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-32 lg:pt-36 lg:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mb-6 block">// intro</span>

          <div className="flex items-start gap-4 mb-8">
            <div className="hidden sm:flex items-center gap-2 mt-2">
              <span className="line-number">01</span>
              <span className="line-number">—</span>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-foreground leading-tight">
                Hey, I'm{" "}
                <span className="text-gradient">Ayomide Soniyi</span>
              </h1>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-12">
            <div className="hidden sm:flex items-center gap-2 mt-1">
              <span className="line-number">02</span>
              <span className="line-number">—</span>
            </div>
            <p className="text-xl sm:text-2xl font-body text-muted-foreground">
              a <span className="text-foreground font-medium">{displayed}</span>
              <span className="terminal-cursor" />
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="hidden sm:flex items-center gap-2 mt-3">
              <span className="line-number">03</span>
              <span className="line-number">—</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display text-sm font-medium rounded-md transition-all duration-200 hover:gap-3"
              >
                view projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-display text-sm font-medium rounded-md transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                <Terminal size={16} />
                get in touch
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Quick stats */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "years coding", value: "3+" },
            { label: "projects shipped", value: "5+" },
            { label: "cups of coffee", value: "∞" },
            { label: "github stars", value: "6+" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="text-center sm:text-left"
            >
              <div className="font-display text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="font-display text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured section */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <span className="section-label mb-8 block">// featured work</span>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Payment Gateway API",
                desc: "A unified payment aggregation service that allows merchants to process online payments through a single API while seamlessly integrating multiple third-party payment gateways",
                tags: ["Java", "Springboot"],
              },
              {
                title: "Learn loop",
                desc: "A productivity and goal-tracking platform designed to help users stay accountable through flexible learning goals, progress tracking, streaks, and personalized motivational content.",
                tags: ["Node.js", "Typescript", "React", "TailwindCSS", "Supabase"],
              },
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
              >
                <Link
                  to="/projects"
                  className="block p-6 bg-card border border-border rounded-lg card-hover group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-display text-xs text-muted-foreground">project_{String(i).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 font-body">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground font-display text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
