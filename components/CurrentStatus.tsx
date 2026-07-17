"use client";

import { motion } from "framer-motion";
import { Rocket, BrainCircuit, Network, Workflow, Code2, Trophy } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FOCUS = [
  { icon: Rocket, title: "Building Startup Products" },
  { icon: BrainCircuit, title: "Learning Advanced AI" },
  { icon: Network, title: "Agentic AI" },
  { icon: Workflow, title: "Automation" },
  { icon: Code2, title: "Full Stack Engineering" },
  { icon: Trophy, title: "Hackathons" },
];

export default function CurrentStatus() {
  return (
    <section id="status" className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Current Status"
          title="What I'm focused on right now."
          align="center"
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="card-surface rounded-lg2 shadow-premium p-8 sm:p-12 gradient-border relative overflow-hidden">
            <div className="flex flex-wrap justify-center gap-4">
              {FOCUS.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-2.5 bg-bg border border-border rounded-full px-5 py-3"
                >
                  <f.icon size={16} className="text-blue-primary" />
                  <span className="text-sm font-semibold text-navy">{f.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
