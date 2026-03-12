import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate send — replace with real backend later
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  const socials = [
    { id: 1, name: "github", url: "https://github.com/UnfazedAy" },
    { id: 2, name: "linkedin", url: "https://www.linkedin.com/in/ayomide-soniyi-3151461a5/" },
    { id: 3, name: "X (formerly Twitter)", url: "https://twitter.com/SoniyiAyomide_" }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label mb-4 block">// contact</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Let's <span className="text-gradient">talk</span>
          </h1>
          <p className="text-muted-foreground font-body max-w-xl mb-12">
            Got a project idea, job opportunity, or just want to say hi? Drop me a line.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="font-display text-xs text-muted-foreground mb-2 block">name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-md font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-display text-xs text-muted-foreground mb-2 block">email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-md font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label className="font-display text-xs text-muted-foreground mb-2 block">message</label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-md font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Tell me about your project or just say hello..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display text-sm font-medium rounded-md transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? "sending..." : "send message"}
              <Send size={14} />
            </button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            <div className="p-6 bg-card border border-border rounded-lg space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-destructive/80" />
                <span className="w-3 h-3 rounded-full bg-primary/60" />
                <span className="w-3 h-3 rounded-full bg-primary/40" />
                <span className="font-display text-xs text-muted-foreground ml-2">contact.info</span>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-primary mt-0.5" />
                  <div>
                    <span className="font-display text-xs text-muted-foreground block">email</span>
                    <span className="text-sm text-foreground font-body">ayomidesoniyi@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary mt-0.5" />
                  <div>
                    <span className="font-display text-xs text-muted-foreground block">location</span>
                    <span className="text-sm text-foreground font-body">Remote — Worldwide</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-primary mt-0.5" />
                  <div>
                    <span className="font-display text-xs text-muted-foreground block">availability</span>
                    <span className="text-sm text-foreground font-body">Open to opportunities</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <span className="font-display text-xs text-muted-foreground block mb-3">// socials</span>
                <div className="flex gap-4">
                  {socials.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link text-xs font-display"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
