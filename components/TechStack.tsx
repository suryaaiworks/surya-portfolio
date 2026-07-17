"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CATEGORIES = [
  { title: "Programming", items: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"] },
  { title: "Frameworks", items: ["React", "Next.js", "FastAPI", "Node.js", "Tailwind CSS"] },
  { title: "Databases", items: ["Supabase", "PostgreSQL", "Firebase"] },
  {
    title: "Artificial Intelligence",
    items: ["Google Gemini", "Google AI Studio", "LangChain", "LangGraph", "RAG", "MCP", "Prompt Engineering"],
  },
  { title: "Automation", items: ["n8n", "Google ADK", "AI Agents", "Workflow Automation"] },
  { title: "Deployment", items: ["Vercel", "Render", "GitHub", "Docker"] },
  { title: "Tools", items: ["Git", "VS Code", "Postman", "Figma"] },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative py-24 sm:py-32 grid-texture">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Tech Stack"
          title="The tools I build with."
          description="A stack chosen for shipping speed — from agent orchestration to production deployment."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={(i % 4) * 0.06}>
              <div className="h-full card-surface rounded-card p-7 shadow-premium">
                <h3 className="font-mono text-xs tracking-[0.18em] uppercase text-blue-primary font-semibold mb-4">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {cat.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ y: -3, backgroundColor: "#2563EB", color: "#fff" }}
                      transition={{ duration: 0.2 }}
                      className="text-sm font-medium text-navy bg-bg border border-border rounded-full px-4 py-2 cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
