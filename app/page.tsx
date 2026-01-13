"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaPython,
} from "react-icons/fa";
import {
  SiFlutter,
  SiNextdotjs,
  SiSupabase,
  SiPostgresql,
  SiRedis,
  SiTypescript,
} from "react-icons/si";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white px-6 py-16">

      {/* BACKGROUND BLOBS */}
      <div className="bg-blob w-[320px] h-[320px] bg-purple-600 top-10 left-10" />
      <div className="bg-blob w-[380px] h-[380px] bg-cyan-500 bottom-20 right-10" />
      <div className="bg-blob w-[260px] h-[260px] bg-pink-600 top-1/2 left-1/3" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-20">

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full p-[3px] bg-gradient-to-tr from-purple-500 via-cyan-400 to-pink-500">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-black">
              <Image
                src="https://avatars.githubusercontent.com/u/95420144?v=4"
                alt="Utsav Kumar"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-5 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">
              Utsav Kumar
            </h1>

            <p className="text-white/80 text-lg max-w-xl">
              Software Engineer at{" "}
              <a
                href="https://gofitzen.com"
                target="_blank"
                className="underline decoration-cyan-400/50 hover:text-cyan-400"
              >
                GoFitzen
              </a>
              . I build production-grade mobile & web applications using
              Flutter, Supabase, Redis, and GCP — shipping apps for Android & iOS.
            </p>

            <div className="flex gap-5 justify-center md:justify-start text-white">
              <a
                href="https://github.com/jhautsav14"
                target="_blank"
                className="hover:text-cyan-400 transition"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://in.linkedin.com/in/utsavkumar14"
                target="_blank"
                className="hover:text-cyan-400 transition"
              >
                <FaLinkedin size={28} />
              </a>
            </div>

            <div className="flex gap-4 pt-2 justify-center md:justify-start">
              <Button
                asChild
                className="bg-white text-black hover:bg-white/90"
              >
                <a href="mailto:jhaluv0@gmail.com?subject=Request%20a%20Call">
                  Request a Call
                </a>
              </Button>

              <Button
  asChild
  variant="outline"
  className="text-black border-white/40 hover:bg-white/10 hover:text-white"
>
  <a href="mailto:jhaluv0@gmail.com">
    Email Me
  </a>
</Button>

            </div>
          </div>
        </motion.section>

        {/* TECH STACK */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">
            Tech Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-7 text-white/80">
            <SiFlutter size={34} />
            <SiNextdotjs size={34} />
            <FaReact size={34} />
            <FaNodeJs size={34} />
            <SiSupabase size={34} />
            <SiPostgresql size={34} />
            <SiRedis size={34} />
            <FaDocker size={34} />
            <FaAws size={34} />
            <SiTypescript size={34} />
            <FaPython size={34} />
          </div>
        </section>

        {/* PROJECTS */}
        <section className="space-y-10">
          <h2 className="text-2xl font-semibold text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <ProjectCard
              title="AR Air Pollution Visualization"
              description="An augmented reality platform that visualizes real-time air pollution data in the physical world. Officially recognized by KSCST and built to support 1,000+ concurrent users."
              tech="Flutter • Flask • WebSocket • Supabase"
              link="https://github.com/jhautsav14/airPollViewAr"
            />

            <ProjectCard
              title="Twitter ETL Pipeline with Airflow"
              description="A scalable ETL pipeline that ingests, processes, and stores Twitter data using Apache Airflow with automated scheduling and monitoring."
              tech="Python • Airflow • Docker • PostgreSQL"
              link="https://github.com/jhautsav14/Twitter-ETL-Pipeline-with-Airflow"
            />

            <ProjectCard
              title="Movie Title Extraction & Info Retrieval"
              description="Extracts movie titles from posters using OCR and fetches metadata using Gemini API. Deployed on Hugging Face Spaces."
              tech="OpenCV • EasyOCR • Streamlit • Gemini API"
              link="https://huggingface.co/spaces/utsavjha/movie"
              live
            />

            <ProjectCard
              title="🤖 AI Haircut Booking Bot (Telegram)"
              description="An intelligent, location-aware Telegram bot that allows users to discover nearby salons and book appointments using natural language (text or voice) with real-time slot management."
              tech="TypeScript • Telegraf • Groq LLaMA 3 • Whisper • Supabase • PostGIS"
              link="https://github.com/jhautsav14/haircut-bot-ai"
              featured
            />

          </div>
        </section>

        {/* FOOTER */}
        <p className="text-center text-white/40 text-sm">
          Utsav 2026 | All rights reserved ©
        </p>

      </div>
    </main>
  );
}

/* PROJECT CARD COMPONENT */
function ProjectCard({
  title,
  description,
  tech,
  link,
  live,
  featured,
}: {
  title: string;
  description: string;
  tech: string;
  link: string;
  live?: boolean;
  featured?: boolean;
}) {
  return (
    <motion.div whileHover={{ scale: 1.03 }}>
      <Card
        className={`glass h-full ${
          featured ? "ring-1 ring-cyan-400/40" : ""
        }`}
      >
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-semibold text-white">
            {title}
          </h3>

          <p className="text-sm text-white/70">
            {description}
          </p>

          <Separator className="bg-white/20" />

          <p className="text-xs text-white/50">
            {tech}
          </p>

          <a
            href={link}
            target="_blank"
            className="inline-block text-sm text-white underline hover:text-cyan-400"
          >
            {live ? "Live Demo →" : "View Project →"}
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}
