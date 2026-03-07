import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Cloud Platform Dashboard",
    description: "Real-time monitoring dashboard with WebSocket feeds, interactive charts, and RBAC. Built for scale with optimistic UI updates.",
    tags: ["React", "TypeScript", "WebSockets", "Recharts"],
    github: "#",
    live: "#",
    status: "shipped",
  },
  {
    title: "CLI Dev Toolkit",
    description: "Scaffolding CLI that generates project boilerplates, manages env configs, and runs deployment pipelines from terminal.",
    tags: ["Node.js", "Commander.js", "DevOps"],
    github: "#",
    live: null,
    status: "shipped",
  },
  {
    title: "E-Commerce API",
    description: "RESTful API with Stripe integration, inventory management, webhook handling, and comprehensive test coverage.",
    tags: ["Express", "PostgreSQL", "Stripe", "Jest"],
    github: "#",
    live: "#",
    status: "shipped",
  },
  {
    title: "Real-time Chat App",
    description: "End-to-end encrypted chat with typing indicators, read receipts, media sharing, and offline message queuing.",
    tags: ["React", "Socket.io", "Redis", "E2E Encryption"],
    github: "#",
    live: "#",
    status: "shipped",
  },
  {
    title: "AI Content Pipeline",
    description: "Automated content generation and moderation pipeline using LLM APIs with human-in-the-loop review system.",
    tags: ["Python", "FastAPI", "OpenAI", "Celery"],
    github: "#",
    live: null,
    status: "wip",
  },
  {
    title: "Design System Library",
    description: "Accessible component library with Storybook docs, theme tokens, and automated visual regression tests.",
    tags: ["React", "Storybook", "Radix UI", "CSS-in-JS"],
    github: "#",
    live: "#",
    status: "shipped",
  },
];

const Projects = () => {
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
              key={project.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              className="group p-6 bg-card border border-border rounded-lg card-hover"
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${project.title} source code`}
                  >
                    <Github size={18} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
