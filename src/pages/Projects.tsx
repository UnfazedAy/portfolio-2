import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const projects = [
  {
    title: "SkiFlux",
    description:
      "A social learning platform combining educational content, community interaction, and skill-based learning. Built backend APIs for authentication, RBAC, video content, social interactions, notifications, recommendations, skillcoins, payments, and asynchronous background processing.",
    tags: ["Python", "Django", "DRF", "PostgreSQL", "Celery", "Redis", "Cloudflare R2"],
    github: null,
    live: "/projects/skiflux",
    status: "wip",
  },
  {
    title: "Payment Gateway API",
    description: "A unified payment aggregation service that allows merchants to process online payments through a single API while seamlessly integrating multiple third-party payment gateways",
    tags: ["Java", "Springboot"],
    github: "https://github.com/UnfazedAy/PaymentGatewayAggregatorApi",
    live: null,
    status: "wip",
  },
  {
    title: "Woof Mates",
    description: "WoofMate is a dog matching and messaging app built with React, TypeScript, Vite, Tailwind CSS, and Supabase. Dog owners can create dog profiles, upload multiple photos, browse other dogs in swipe or grid layouts, manage likes and matches, and chat in real time.",
    tags: ["React", "Supabase", "Typescript", "Vite"],
    github: "https://github.com/UnfazedAy/woofMate",
    live: "https://woof-mate.vercel.app/",
    status: "WIP",
  },
  {
    title: "Learn loop",
    description: "A productivity and goal-tracking platform designed to help users stay accountable through flexible learning goals, progress tracking, streaks, and personalized motivational content.",
    tags: ["Node.js", "Typescript", "React", "TailwindCSS", "Supabase"],
    github: "https://github.com/UnfazedAy/learnloop-fe",
    live: "https://learnloop-fe.vercel.app/",
    status: "shipped",
  },
  {
    title: "De-compressor",
    description: "An API that allows users to compress single and multiple images of large sizes, also compresses multiple images in a zip file and returns the compressed images in a zip file.",
    tags: ["Python", "Flask", "SQLAlchemy", "PostgreSQL"],
    github: "https://github.com/UnfazedAy/DE_COMPRESSOR",
    live: "https://de-compressor.onrender.com/api/v1/docs",
    status: "shipped",
  },
  {
    title: "Tenzies game",
    description: "A mini game in which one rolls until all dice are the same. Click each die to freeze it at its current value between rolls.",
    tags: ["React", "TailwindCSS"],
    github: "https://github.com/UnfazedAy/Tenzies-game",
    live: "https://unfazeday.github.io/Tenzies-game/",
    status: "shipped",
  },
  {
    title: "Portfolio API",
    description: "A RESTful API built with Node.js and Express that serves portfolio data, allowing for easy integration with frontend applications and dynamic content updates.",
    tags: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/UnfazedAy/portfolio-api",
    live: null,
    status: "shipped",
  },
];

const getProjectId = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const Projects = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const target = document.getElementById(location.hash.slice(1));
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label mb-4 block">// projects</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Things I've <span className="text-gradient">built</span>
          </h1>
          <p className="text-muted-foreground font-body max-w-xl mb-12">
            A mix of production apps, side projects, and experiments. Click through for code and live demos.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {projects.map((project, i) => (
            <motion.article
              id={getProjectId(project.title)}
              key={project.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              className="group scroll-mt-24 p-6 bg-card border border-border rounded-lg card-hover"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="line-number">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    {project.status === "wip" && (
                      <span className="px-2 py-0.5 bg-primary/10 text-primary font-display text-[10px] uppercase tracking-wider rounded-full">
                        wip
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground font-body mb-3 max-w-2xl">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground font-display text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:mt-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${project.title} source code`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.live && (
                    project.live.startsWith("/") ? (
                      <Link
                        to={project.live}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${project.title} case study`}
                      >
                        <ExternalLink size={18} />
                      </Link>
                    ) : (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + projects.length * 0.08, duration: 0.4 }}
          className="mt-10 p-6 bg-card border border-border rounded-lg"
        >
          <p className="text-sm text-muted-foreground font-body">
            For more projects, visit my{" "}
            <a
              href="https://github.com/UnfazedAy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-display text-primary hover:text-foreground transition-colors"
            >
              GitHub page
              <Github size={14} />
            </a>
            .
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
