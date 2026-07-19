"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Leaf,
  GraduationCap,
  Car,
  Building2,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface Project {
  icon: typeof Leaf;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  accent: string;
  demoUrl: string;
  githubUrl?: string;
}

const PROJECTS: Project[] = [
  {
    icon: Leaf,
    name: "KRISHIVA",
    tagline: "AI Farming Platform",
    description:
      "An AI-powered farming assistant that helps farmers through multilingual voice AI, crop disease detection, weather intelligence, market insights, and government scheme recommendations.",
    features: [
      "Multilingual Voice AI",
      "Crop Disease Detection",
      "Weather Intelligence",
      "Market Insights",
      "Government Schemes",
    ],
    stack: [
      "Next.js",
      "FastAPI",
      "Gemini",
      "Supabase",
      "TypeScript",
      "Voice AI",
    ],
    accent: "from-[#2563EB] to-[#16A34A]",
    demoUrl: "https://krishiva.vercel.app/dashboard/farmer",
  },

  {
    icon: Building2,
    name: "ARENAOS AI",
    tagline: "Intelligent Stadium Operations Platform",
    description:
      "Built an AI-powered stadium operations platform featuring an interactive Digital Twin, multi-agent orchestration, real-time telemetry simulation, Gemini-powered spectator assistance, and intelligent operational dashboards for large-scale sports venues.",
    features: [
      "Digital Twin",
      "Multi-Agent AI",
      "Real-Time Telemetry",
      "Spectator Assistance",
      "Event Simulation",
      "Operations Dashboard",
    ],
    stack: [
      "Next.js",
      "FastAPI",
      "Gemini",
      "Supabase",
      "TypeScript",
      "Digital Twin",
    ],
    accent: "from-cyan-500 to-blue-700",
    demoUrl: "https://arenaos-ai-2005.vercel.app/",
  },

  {
    icon: Car,
    name: "CABZII",
    tagline: "AI Travel & Ride Platform",
    description:
      "An AI-powered ride booking and travel platform featuring intelligent trip planning, secure payments, driver and passenger dashboards, booking management, and a modern user experience.",
    features: [
      "Intelligent Trip Planning",
      "Secure Payments",
      "Driver & Passenger Dashboards",
      "Booking Management",
      "Modern UX",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Maps API",
      "Razorpay",
    ],
    accent: "from-[#1D4ED8] to-[#0F172A]",
    demoUrl: "https://cabzii.com",
  },

  {
    icon: GraduationCap,
    name: "EDUEARN",
    tagline: "AI Learning Platform",
    description:
      "An AI-powered education platform where learners and educators connect through AI tutors, personalized learning paths, live classes, certificates, and intelligent recommendations.",
    features: [
      "AI Tutors",
      "Personalized Learning Paths",
      "Live Classes",
      "Certificates",
      "Intelligent Recommendations",
    ],
    stack: [
      "React",
      "Next.js",
      "FastAPI",
      "Gemini",
      "PostgreSQL",
    ],
    accent: "from-[#2563EB] to-[#60A5FA]",
    demoUrl:
      "https://eduearn-8mx2i5gbo-eduearnofficial-2394s-projects.vercel.app",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12"
    >
      <SectionHeading
        eyebrow="PROJECTS"
        title="Selected Work"
        description="A mix of AI products, platform experiences, and intelligent operations systems designed for real-world impact."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((project, index) => {
          const Icon = project.icon;

          return (
            <Reveal key={project.name} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 p-8 shadow-[0_20px_80px_rgba(2,6,23,0.45)]"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-10 transition-opacity group-hover:opacity-20`}
                />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${project.accent} text-white shadow-lg`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {project.name}
                        </h3>
                        <p className="text-sm text-sky-300/90">
                          {project.tagline}
                        </p>
                      </div>
                    </div>

                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition hover:bg-white/10"
                    >
                      Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="text-sm text-slate-400">
                        #{item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
