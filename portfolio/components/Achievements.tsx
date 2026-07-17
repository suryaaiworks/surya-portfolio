"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { FolderGit2, BrainCog, Trophy, Github, Clock } from "lucide-react";

const STATS = [
  { icon: FolderGit2, value: 15, suffix: "+", label: "Projects Built" },
  { icon: BrainCog, value: 30, suffix: "+", label: "Technologies Learned" },
  { icon: Trophy, value: 5, suffix: "+", label: "Hackathons" },
  { icon: Github, value: 40, suffix: "+", label: "GitHub Repositories" },
  { icon: Clock, value: 1500, suffix: "+", label: "Hours of Learning" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display font-bold text-4xl sm:text-5xl text-white tabular-nums">
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section className="relative py-24 sm:py-32 bg-primary-gradient overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-[0.08]" />
      <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-light/20 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-light" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-blue-light font-medium">
              Achievements
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Numbers behind the work.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass !bg-white/10 !border-white/15 rounded-card p-6 text-center flex flex-col items-center gap-3"
            >
              <s.icon size={22} className="text-blue-light" />
              <Counter value={s.value} suffix={s.suffix} />
              <span className="text-xs sm:text-sm text-white/70 font-medium">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
