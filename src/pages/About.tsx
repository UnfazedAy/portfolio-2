import { motion } from "framer-motion";

const stack = [
  {
    category: "frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Lucide React"],
  },
  {
    category: "backend",
    items: [
      "Node.js",
      "Express",
      "MySQL",
      "Redis",
      "MongoDB",
      "Python",
      "Java",
      "Spring Boot",
    ],
  },
  {
    category: "devops",
    items: ["Docker", "GitHub Actions", "Vercel", "Linux", "google cloud"],
  },
  { category: "tools", items: ["Git", "Figma", "Vim", "Postman", "VS Code"] },
];

const About = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label mb-4 block">// about</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">
            The person behind the <span className="text-gradient">code</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Bio */}
          <motion.div
            className="lg:col-span-3 space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <p className="text-foreground font-body leading-relaxed">
              I'm a mid-level software developer who lives at the intersection
              of clean architecture and scalability. I believe great software is
              invisible — it just works, and when it doesn't, the error messages
              actually help.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              I got into software development out of a desire to do more and build meaningful things.
              I enjoy solving problems and designing backend systems that work in real-world scenarios.
              I've built and contributed to applications across edtech and SaaS.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              When I'm not writing code, I'm probably reading tech blogs or
              researching what to venture into next, tinkering with side
              projects that'll never see production, or arguing about tabs vs
              spaces (spaces, obviously).
            </p>

            {/* Experience */}
            <div className="pt-6 border-t border-border">
              <span className="section-label mb-6 block">// experience</span>
              <div className="space-y-6">
                {[
                  {
                    role: "Backend Developer",
                    company: "KidsTech Africa",
                    period: "2025 — present",
                    desc: "Led backend development of scalable edtech platforms, including an onboarding system (KidsTech Padi) and a full CBT/school management system with role-based access, automated scoring, and real-time progress tracking. Engineered secure payment integrations to streamline enrollment and revenue tracking, and implemented an offline-first synchronization architecture enabling schools in low-bandwidth environments to operate reliably. Optimized database queries and API performance, improving system efficiency and scalability across growing user bases.",
                  },
                  {
                    role: "Instructor",
                    company: "Code First Girls",
                    period: "2023 — 2025",
                    desc: "Delivered hands-on training in Python, JavaScript, and software engineering fundamentals to aspiring developers, combining theory with real-world project work. Designed structured learning experiences, mentored students through projects, and improved completion rates through personalized guidance and feedback. Fostered collaborative learning environments and helped students transition from beginners to confident, job-ready developers.",
                  },
                  {
                    role: "Backend Developer",
                    company: "Aduad Consulting",
                    period: "2024 — 2025",
                    desc: "Built and maintained backend services for a SaaS platform serving over 10,000 users, focusing on scalable API design and system reliability. Developed core features across authentication, data management, and business logic, while collaborating across the stack to deliver seamless user experiences. Improved system performance through efficient query design and backend optimizations, contributing to a stable and scalable production environment.",
                  },
                  {
                    role: "Python Developer",
                    company: "Moda Analytica",
                    period: "2023 — 2024",
                    desc: "Developed data-driven applications and automation tools using Python, including web scraping systems built with Selenium to extract and process large datasets from finance and media sources. Integrated AI-powered summarization using OpenAI APIs to generate structured insights, and designed backend services for storing and serving processed data. Enhanced system reliability by debugging and optimizing existing services for better performance and maintainability.",
                  },
                ].map((exp, i) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center pt-1.5">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {i < 2 && <span className="flex-1 w-px bg-border mt-2" />}
                    </div>
                    <div className="pb-2">
                      <h3 className="font-display text-sm font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="font-display text-xs text-primary">
                        {exp.company}{" "}
                        <span className="text-muted-foreground">
                          · {exp.period}
                        </span>
                      </p>
                      <p className="text-sm text-muted-foreground font-body mt-1">
                        {exp.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            <div className="p-6 bg-card border border-border rounded-lg sticky top-20">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-destructive/80" />
                <span className="w-3 h-3 rounded-full bg-primary/60" />
                <span className="w-3 h-3 rounded-full bg-primary/40" />
                <span className="font-display text-xs text-muted-foreground ml-2">
                  stack.config
                </span>
              </div>

              <div className="space-y-6">
                {stack.map((group, gi) => (
                  <div key={group.category}>
                    <span className="font-display text-xs text-primary mb-2 block">
                      {`// ${group.category}`}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, ii) => (
                        <motion.span
                          key={item}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 0.4 + gi * 0.1 + ii * 0.05,
                            duration: 0.3,
                          }}
                          className="px-3 py-1.5 bg-secondary text-secondary-foreground font-display text-xs rounded hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
