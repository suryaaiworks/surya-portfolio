"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Workflow,
  Network,
  Database,
  MessageSquareCode,
  Plug,
  Code2,
  Server,
  LayoutPanelLeft,
  Cloud,
  Terminal,
  BrainCircuit,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const EXPERTISE = [
  { icon: BrainCircuit, title: "Agentic AI", text: "Designing autonomous agents that plan, reason, and act toward a goal." },
  { icon: Workflow, title: "Automation", text: "Turning multi-step manual work into reliable, self-running pipelines." },
  { icon: Bot, title: "AI Agents", text: "Task-focused agents that use tools, memory, and context to get real work done." },
  { icon: Network, title: "Multi-Agent Systems", text: "Coordinating specialized agents that collaborate to solve complex tasks." },
  { icon: Database, title: "RAG", text: "Retrieval-augmented pipelines that ground responses in real, current data." },
  { icon: MessageSquareCode, title: "Prompt Engineering", text: "Structuring prompts and context for accuracy, consistency, and cost." },
  { icon: Plug, title: "AI Integration", text: "Wiring LLMs and agents cleanly into existing products and workflows." },
  { icon: Code2, title: "Full Stack Development", text: "Shipping complete products across frontend, backend, and data layers." },
  { icon: Terminal, title: "REST APIs", text: "Designing clean, documented APIs that are easy to build on top of." },
  { icon: Server, title: "Backend Development", text: "Robust services and data models built for correctness at scale." },
  { icon: LayoutPanelLeft, title: "Frontend Development", text: "Interfaces that feel fast, intentional, and easy to trust." },
  { icon: Cloud, title: "Cloud Deployment", text: "Shipping and monitoring production systems that stay up." },
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="My Expertise"
          title="What I actually work on, day to day."
          description="A blend of agentic AI systems and the full stack engineering needed to bring them to production."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXPERTISE.map((e, i) => (
            <Reveal key={e.title} delay={(i % 6) * 0.05}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="relative h-full glass rounded-card p-6 shadow-premium hover:shadow-glow transition-shadow overflow-hidden group"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-royal/10 group-hover:bg-blue-royal/20 transition-colors blur-xl" />
                <div className="relative flex items-start gap-4">
                  <div className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white text-blue-royal shadow-sm">
                    <e.icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-navy">{e.title}</h3>
                    <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">{e.text}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
