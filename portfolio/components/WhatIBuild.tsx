"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Network,
  Workflow,
  MessageCircle,
  Mic,
  LayoutDashboard,
  Rocket,
  Cloud,
  Terminal,
  Globe,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ITEMS = [
  { icon: Bot, title: "AI Agents" },
  { icon: Network, title: "Agentic AI Systems" },
  { icon: Workflow, title: "Automation Platforms" },
  { icon: MessageCircle, title: "AI Chatbots" },
  { icon: Mic, title: "Voice Assistants" },
  { icon: LayoutDashboard, title: "Business Dashboards" },
  { icon: Rocket, title: "Startup MVPs" },
  { icon: Cloud, title: "SaaS Applications" },
  { icon: Terminal, title: "REST APIs" },
  { icon: Globe, title: "Modern Websites" },
];

export default function WhatIBuild() {
  return (
    <section id="build" className="relative py-24 sm:py-32 grid-texture">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="What I Build"
          title="From idea to deployed product."
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={(i % 5) * 0.06}>
              <motion.div
                whileHover={{ y: -8, rotate: -1 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="h-full flex flex-col items-center text-center gap-3 card-surface rounded-card p-6 shadow-premium hover:shadow-hover transition-shadow"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-accent-gradient text-white">
                  <item.icon size={20} />
                </div>
                <span className="text-sm font-semibold text-navy leading-tight">
                  {item.title}
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
