"use client";

import { motion } from "framer-motion";
import { Sparkles, Rocket, Workflow, GraduationCap, Layers, Puzzle } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const POINTS = [
  {
    icon: Sparkles,
    title: "Artificial Intelligence",
    text: "Genuinely passionate about how AI systems reason, plan, and act — not just as a trend, but as the core of the products I build.",
  },
  {
    icon: Rocket,
    title: "Real-World AI Products",
    text: "I build things people actually use — from farming assistants to education platforms — not demos that only work on stage.",
  },
  {
    icon: Layers,
    title: "Startup Mindset",
    text: "I think in outcomes: ship fast, validate with real users, and iterate. Every project starts as a founder's problem to solve.",
  },
  {
    icon: Workflow,
    title: "Automation",
    text: "I love replacing repetitive, manual work with reliable workflows and agents that quietly do the heavy lifting.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    text: "AI moves fast. I stay hands-on with new models, frameworks, and agent architectures the week they ship.",
  },
  {
    icon: Puzzle,
    title: "Problem Solving",
    text: "I enjoy full stack development and backend architecture equally — the goal is always a clean, working solution end to end.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Building at the intersection of AI and product."
          description="I'm an AI Engineer and startup builder who cares more about shipped, working systems than polished slideware. Here's what drives the way I work."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="h-full card-surface rounded-card p-7 shadow-premium hover:shadow-hover transition-shadow"
              >
                <div className="inline-flex items-center justify-center h-11 w-11 rounded-2xl bg-accent-gradient text-white mb-5">
                  <p.icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-lg text-navy mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{p.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
