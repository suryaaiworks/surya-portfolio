"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "./Reveal";

const CHANNELS = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Surya Sai Teja",
    href: "https://www.linkedin.com/in/surya-sai-teja-9a861a296",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "suryaaiworks",
    href: "https://github.com/suryaaiworks",
  },
  {
    icon: Mail,
    label: "Email",
    value: "suryasaiteja2005@gmail.com",
    href: "mailto:suryasaiteja2005@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 grid-texture">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-royal" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-blue-primary font-medium">
              Contact
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight">
            Let&apos;s build the future with AI.
          </h2>
          <p className="mt-4 text-text-secondary text-base sm:text-lg leading-relaxed">
            Open to full-time roles, freelance builds, and collaborations. If you&apos;re
            working on something ambitious, I&apos;d love to hear about it.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="card-surface rounded-lg2 shadow-premium p-8 sm:p-12 grid md:grid-cols-2 gap-8 items-stretch">
            <div className="flex flex-col gap-4">
              {CHANNELS.map((c) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") || c.href.endsWith(".pdf") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") || c.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                  aria-label={`${c.label}: ${c.value}`}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-4 bg-bg border border-border rounded-2xl p-4 hover:border-blue-royal/40 transition-colors"
                >
                  <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-white shadow-sm text-blue-royal shrink-0">
                    <c.icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono uppercase tracking-wider text-text-muted">
                      {c.label}
                    </p>
                    <p className="text-sm font-semibold text-navy truncate">{c.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="bg-bg border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:border-blue-royal/40 transition-colors">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1">
                  Status
                </p>
                <h3 className="font-display font-semibold text-lg text-navy">
                  Available for Opportunities
                </h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-navy">
                  <span aria-hidden="true">🚀</span>
                  <span>Agentic AI Engineer</span>
                </div>
                
                <div className="border-t border-border/50 my-2" />
                
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1.5">
                    Open to
                  </p>
                  <ul className="text-sm font-medium text-navy space-y-1.5 list-disc pl-4">
                    <li>Full-Time AI Engineering Roles</li>
                    <li>Internships</li>
                    <li>Startup Collaborations</li>
                  </ul>
                </div>
              </div>

              <div className="mt-auto border-t border-border/50 pt-3 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
                  Response Time
                </span>
                <span className="text-xs font-semibold bg-success/10 text-success rounded-full px-2.5 py-1">
                  Within 24 Hours
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <a
            href="mailto:suryasaiteja2005@gmail.com"
            aria-label="Email Surya"
            className="inline-flex items-center gap-2 rounded-full bg-button-gradient text-white text-sm font-semibold px-8 py-4 shadow-premium hover:shadow-hover hover:-translate-y-0.5 transition-all"
          >
            <Mail size={16} />
            Let&apos;s Connect
          </a>
        </Reveal>
      </div>
    </section>
  );
}
