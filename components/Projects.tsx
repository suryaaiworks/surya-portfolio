"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Leaf, GraduationCap, Car } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface Project {
  icon: any;
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
    stack: ["Next.js", "FastAPI", "Gemini", "Supabase", "TypeScript", "Voice AI"],
    accent: "from-[#2563EB] to-[#16A34A]",
    demoUrl: "https://krishiva.vercel.app/dashboard/farmer",
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
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Maps API", "Razorpay"],
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
    stack: ["React", "Next.js", "FastAPI", "Gemini", "PostgreSQL"],
    accent: "from-[#2563EB] to-[#60A5FA]",
    demoUrl: "https://eduearn-8mx2i5gbo-eduearnofficial-2394s-projects.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Products, not prototypes."
          description="A selection of platforms I've built end to end — from AI core to shipped UI."
        />

        <div className="mt-14 space-y-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 250, damping: 22 }}
                className="group relative card-surface rounded-lg2 shadow-premium hover:shadow-hover transition-shadow overflow-hidden"
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${p.accent}`} />
                <div className="p-8 sm:p-10 grid md:grid-cols-[auto_1fr] gap-8">
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                    <div
                      className={`inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br ${p.accent} text-white shadow-premium`}
                    >
                      <p.icon size={24} />
                    </div>
                    <div className="md:mt-4">
                      <h3 className="font-display font-bold text-2xl text-navy tracking-tight">
                        {p.name}
                      </h3>
                      <p className="text-sm text-blue-primary font-medium mt-1">{p.tagline}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-text-secondary leading-relaxed max-w-2xl">
                      {p.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.features.map((f) => (
                        <span
                          key={f}
                          className="text-xs font-medium text-navy bg-bg border border-border rounded-full px-3 py-1.5"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="text-xs font-mono font-medium text-blue-primary bg-blue-50/60 rounded-md px-2.5 py-1"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-5">
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live Demo for ${p.name}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-blue-primary transition-colors"
                      >
                        Live Demo
                        <ArrowUpRight
                          size={16}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                      {p.githubUrl ? (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub Repository for ${p.name}`}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-muted hover:text-blue-primary transition-colors"
                        >
                          GitHub
                          <ArrowUpRight
                            size={16}
                            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </a>
                      ) : (
                        <span className="text-xs font-medium text-text-muted cursor-default" aria-label="Repository available on request">
                          Repository available on request
                        </span>
                      )}
                    </div>
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
