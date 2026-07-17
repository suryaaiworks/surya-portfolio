"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDownToLine, ArrowRight } from "lucide-react";

const ROLES = [
  "Agentic AI Engineer",
];

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 35 : 65;
    const pause = deleting ? 300 : 1400;

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="top"
      className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden grid-texture"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-blue-royal/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -left-32 h-[420px] w-[420px] rounded-full bg-blue-light/20 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-[0.85fr_1.15fr] gap-14 md:gap-10 items-center">
        {/* Photo card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto md:mx-0 w-full max-w-sm"
        >
          <div className="absolute -inset-4 bg-primary-gradient rounded-lg2 opacity-20 blur-2xl animate-pulse-glow" />
          <div className="relative rounded-lg2 p-2.5 card-surface shadow-premium animate-float">
            <div className="relative rounded-[26px] overflow-hidden aspect-[4/5]">
              <Image
                src="/images/profile.png"
                alt="Surya Sai Teja"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent" />
            </div>
          </div>

          {/* floating status chip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -bottom-5 -right-4 sm:-right-8 card-surface shadow-premium rounded-2xl px-4 py-3 flex items-center gap-2.5"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
            </span>
            <span className="text-xs font-semibold text-navy">Open to opportunities</span>
          </motion.div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-sm tracking-[0.2em] uppercase text-blue-primary font-medium mb-4">
            Hello, I&apos;m
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-navy">
            Surya Sai Teja
          </h1>

          <div className="mt-5 h-9 sm:h-10 flex items-center">
            <span className="font-display text-xl sm:text-2xl font-semibold text-gradient">
              {typed}
            </span>
            <span className="w-[3px] h-6 sm:h-7 bg-blue-royal ml-1 animate-blink" />
          </div>

          <p className="mt-6 text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
            Building production-ready AI agents, multi-agent systems, intelligent automation, and scalable AI-powered applications.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-blue-royal/30 text-blue-primary bg-white text-sm font-semibold px-6 py-3.5 hover:bg-blue-50 hover:-translate-y-0.5 transition-all"
            >
              View Projects
              <ArrowRight size={16} />
            </a>

            <div className="flex items-center gap-2 ml-1">
              <a
                href="https://github.com/suryaaiworks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3.5 rounded-full card-surface text-navy hover:text-blue-primary hover:-translate-y-0.5 shadow-premium transition-all"
              >
                <Github size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/surya-sai-teja-9a861a296"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3.5 rounded-full card-surface text-navy hover:text-blue-primary hover:-translate-y-0.5 shadow-premium transition-all"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="mailto:suryasaiteja2005@gmail.com"
                aria-label="Email"
                className="p-3.5 rounded-full card-surface text-navy hover:text-blue-primary hover:-translate-y-0.5 shadow-premium transition-all"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
