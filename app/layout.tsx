import type { Metadata } from "next";
import "@fontsource/sora/500.css";
import "@fontsource/sora/600.css";
import "@fontsource/sora/700.css";
import "@fontsource/sora/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Surya | Agentic AI Engineer",
  description:
    "Portfolio of Surya showcasing AI engineering projects including Krishiva, Cabzii, and EduEarn built with Next.js, FastAPI, Gemini, TypeScript, PostgreSQL, and modern AI technologies.",
  keywords: [
    "AI Engineer",
    "Agentic AI",
    "Automation Engineer",
    "Full Stack Developer",
    "Surya",
    "Krishiva",
    "Cabzii",
    "EduEarn",
  ],
  openGraph: {
    title: "Surya | Agentic AI Engineer",
    description:
      "Portfolio of Surya showcasing AI engineering projects including Krishiva, Cabzii, and EduEarn built with Next.js, FastAPI, Gemini, TypeScript, PostgreSQL, and modern AI technologies.",
    url: "https://github.com/suryaaiworks",
    siteName: "Surya Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surya | Agentic AI Engineer",
    description:
      "Portfolio of Surya showcasing AI engineering projects including Krishiva, Cabzii, and EduEarn built with Next.js, FastAPI, Gemini, TypeScript, PostgreSQL, and modern AI technologies.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased bg-bg text-text-dark">{children}</body>
    </html>
  );
}
