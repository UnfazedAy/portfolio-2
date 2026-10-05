import { motion } from "framer-motion";
import { ArrowLeft, Lock, PauseCircle } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const techStack = [
  "Python",
  "Django",
  "Django REST Framework",
  "PostgreSQL",
  "Celery",
  "Redis",
  "Cloudflare R2",
  "FCM",
  "Flutterwave",
  "Paystack",
  "Stripe",
  "Adyen",
];

const backendAreas = [
  {
    title: "Authentication & Authorization",
    items: [
      "User authentication",
      "Role-based access control",
      "Creator, Moderator, Admin, and Super Admin roles",
      "Permission-aware API access",
    ],
  },
  {
    title: "Learning & Content",
    items: [
      "Learning content APIs",
      "Educational tasks and progress",
      "User-generated content",
      "Skill-based learning workflows",
    ],
  },
  {
    title: "Video & Media",
    items: [
      "Backend support for large video uploads",
      "Cloudflare R2 integration for media storage",
      "Direct-to-object-storage upload considerations",
      "Media lifecycle and cleanup planning",
    ],
  },
  {
    title: "Social Features",
    items: [
      "Likes, saves, and comments",
      "User and community interactions",
      "Engagement data connected to learning and recommendation systems",
    ],
  },
  {
    title: "Background Processing",
    items: [
      "Celery-based asynchronous jobs",
      "Redis-backed task infrastructure",
      "Non-blocking processing for slower API operations",
    ],
  },
  {
    title: "Notifications",
    items: [
      "Firebase Cloud Messaging integration",
      "Backend notification workflows",
    ],
  },
  {
    title: "Recommendations",
    items: [
      "Backend recommendation logic based on user engagement",
      "Signals from views, likes, saves, comments, task attempts, and task completion",
    ],
  },
  {
    title: "Skillcoins & Payments",
    items: [
      "Skillcoin-based platform economy support",
      "Payment infrastructure for multiple providers",
      "Flutterwave, Paystack, Stripe, and Adyen integration planning",
    ],
  },
  {
    title: "API Development",
    items: [
      "RESTful API endpoints",
      "Swagger/OpenAPI documentation",
      "PostgreSQL-backed data models",
      "API validation and testing",
    ],
  },
];

const highlights = [
  "Role-based access control",
  "Large-file media handling",
  "Asynchronous background processing",
  "Social engagement systems",
  "Recommendation logic",
  "Notification infrastructure",
  "Payment integration architecture",
  "REST API development",
];

const architecture = [
  {
    label: "Mobile learning client",
    flow: ["Flutter Mobile App", "Django REST API", "PostgreSQL"],
  },
  {
    label: "Async processing",
    flow: ["Django API", "Celery + Redis", "Background Jobs"],
  },
  {
    label: "Media storage",
    flow: ["Media", "Cloudflare R2"],
  },
  {
    label: "Notifications",
    flow: ["Notifications", "Firebase Cloud Messaging"],
  },
  {
    label: "Payments",
    flow: ["Payments", "Flutterwave / Paystack / Stripe / Adyen"],
  },
];

const challenges = [
  "Handling large video files while avoiding API and server limitations.",
  "Designing role-based access across multiple user types and permission levels.",
  "Managing asynchronous operations without blocking API requests.",
  "Integrating multiple third-party services for notifications, storage, and payments.",
  "Building backend systems that support both learning and social interactions.",
  "Keeping recommendation signals meaningful across different user engagement patterns.",
];

const contributions = [
  "API development",
  "Backend architecture",
  "Authentication and RBAC",
  "Database-backed feature development",
  "Media infrastructure",
  "Async processing",
  "Notifications",
  "Recommendation logic",
  "Payment and Skillcoin infrastructure",
  "External service integrations",
];

const Section = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.45 }}
    className="border-t border-border pt-12"
  >
    <span className="section-label mb-6 block">{label}</span>
    {children}
  </motion.section>
);

const SkiFlux = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-display text-xs text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            back to projects
          </Link>

          <span className="section-label mb-4 block">// case study</span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h1 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-4">
                Ski<span className="text-gradient">Flux</span>
              </h1>
              <p className="text-muted-foreground font-body text-lg max-w-2xl">
                Backend Engineering / Contract Project
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 max-w-md w-full">
              <div className="p-4 bg-card border border-border rounded-lg">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <PauseCircle size={16} />
                  <span className="font-display text-xs uppercase tracking-wider">
                    status
                  </span>
                </div>
                <p className="font-display text-sm text-foreground">
                  Development paused
                </p>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Lock size={16} />
                  <span className="font-display text-xs uppercase tracking-wider">
                    repository
                  </span>
                </div>
                <p className="font-display text-sm text-foreground">Private</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-16">
          <Section label="// overview">
            <div className="grid lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3 space-y-5">
                <p className="text-foreground font-body leading-relaxed">
                  SkiFlux is a social learning platform designed to combine
                  educational content, community interaction, and skill-based
                  learning. The platform includes learning content,
                  user-generated content, social interactions, video and media,
                  notifications, recommendations, and a virtual currency/payment
                  system.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  I worked as a backend developer on the project, contributing
                  to backend architecture, REST APIs, authentication and
                  authorization, content systems, media handling, background
                  processing, notifications, recommendations, and payment and
                  Skillcoin infrastructure.
                </p>
              </div>
              <div className="lg:col-span-2 p-6 bg-card border border-border rounded-lg">
                <span className="font-display text-xs text-primary mb-4 block">
                  // project notes
                </span>
                <div className="space-y-4">
                  {[
                    ["role", "Backend developer"],
                    ["engagement", "Contract project"],
                    ["source", "Private repository"],
                    ["launch claim", "Not presented as public launch"],
                  ].map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-start justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0"
                    >
                      <span className="font-display text-xs text-muted-foreground">
                        {key}
                      </span>
                      <span className="font-display text-xs text-foreground text-right">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          <Section label="// architecture">
            <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4">
              {architecture.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                  className="p-5 bg-card border border-border rounded-lg"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="line-number">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-sm font-semibold text-foreground">
                      {item.label}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {item.flow.map((step, si) => (
                      <div key={step}>
                        <div className="px-3 py-2 bg-secondary text-secondary-foreground font-display text-xs rounded border border-border/60">
                          {step}
                        </div>
                        {si < item.flow.length - 1 && (
                          <div className="font-display text-primary text-center py-1">
                            |
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section label="// engineering">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {highlights.map((highlight, i) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="p-4 bg-card border border-border rounded-lg card-hover"
                >
                  <span className="line-number mb-3 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-sm text-foreground">
                    {highlight}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {backendAreas.map((area, i) => (
                <motion.article
                  key={area.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.35 }}
                  className="p-5 bg-card border border-border rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="line-number">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-sm font-semibold text-foreground">
                      {area.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {area.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground font-body leading-relaxed"
                      >
                        <span className="text-primary font-display">- </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </Section>

          <Section label="// challenges">
            <div className="grid md:grid-cols-2 gap-4">
              {challenges.map((challenge, i) => (
                <motion.div
                  key={challenge}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                  className="flex gap-4 p-5 bg-card border border-border rounded-lg"
                >
                  <span className="line-number pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {challenge}
                  </p>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section label="// contribution">
            <div className="grid lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2">
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  Backend engineering focus
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  My contribution centered on backend systems: API design,
                  authentication, data modeling, media infrastructure,
                  asynchronous workflows, notifications, recommendations, and
                  integrations with external payment and platform services.
                </p>
              </div>
              <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3">
                {contributions.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-3 bg-secondary text-secondary-foreground font-display text-xs rounded border border-border"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section label="// stack">
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.035, duration: 0.25 }}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground font-display text-xs rounded hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </Section>

          <Section label="// status">
            <div className="p-6 bg-card border border-border rounded-lg">
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                Development paused
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed max-w-3xl">
                The project was developed as a contract engagement and
                development was later paused while the product pursued further
                funding.
              </p>
            </div>
          </Section>
        </div>
      </section>
    </div>
  );
};

export default SkiFlux;
