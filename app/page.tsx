"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FaGithub, FaLinkedin, FaApple, FaGooglePlay, 
  FaExternalLinkAlt, FaCode, FaRocket, FaEnvelope, FaBriefcase
} from "react-icons/fa";
import { 
  SiNextdotjs, SiSupabase, SiPostgresql, SiRedis, SiTypescript, 
  SiJavascript, SiPython, SiCplusplus, SiFlutter, SiNestjs, 
  SiNodedotjs, SiDocker, SiAmazonwebservices, SiGooglecloud, 
  SiFirebase, SiTensorflow, SiDart 
} from "react-icons/si";
import { ChevronLeft, ChevronRight, Quote, Globe, Zap, Mail, Terminal } from "lucide-react";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-slate-100 selection:bg-cyan-500/30">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full" />
      </div>

      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 lg:py-32 space-y-48">
        <Hero />
        <Skills />
        <FeaturedProducts />
        <Projects />
        <Testimonials />
        <HireMe />

        <footer className="pt-20 pb-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-white">UTSAV KUMAR</p>
            <div className="flex gap-4">
               <a href="https://in.linkedin.com/in/utsavkumar14" target="_blank" className="hover:text-cyan-400"><FaLinkedin size={18}/></a>
               <a href="https://github.com/jhautsav14" target="_blank" className="hover:text-cyan-400"><FaGithub size={18}/></a>
            </div>
          </div>
          <div className="flex gap-6 opacity-80">
            <SiNextdotjs title="Next.js" className="hover:text-white transition-colors cursor-help" />
            <SiSupabase title="Supabase" className="hover:text-white transition-colors cursor-help" />
            <SiPostgresql title="PostgreSQL" className="hover:text-white transition-colors cursor-help" />
            <SiRedis title="Redis" className="hover:text-white transition-colors cursor-help" />
          </div>
        </footer>
      </div>
    </main>
  );
}

/* ================= NAVBAR ================= */

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-black tracking-tighter text-xl bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          UTSAV KUMAR
        </span>
        <div className="flex items-center gap-6">
          <a href="https://in.linkedin.com/in/utsavkumar14" target="_blank" className="text-white/70 hover:text-cyan-400 transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/jhautsav14" target="_blank" className="text-white/70 hover:text-cyan-400 transition-colors">
            <FaGithub size={20} />
          </a>
          <Button asChild size="sm" className="bg-white text-black hover:bg-cyan-500 hover:text-white rounded-full font-bold transition-all">
            <a href="mailto:workutsavkumar@gmail.com">Hire Me</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}

/* ================= HERO ================= */

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center gap-12"
    >
      {/* Avatar Section */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-white/20">
          <Image
            src="https://avatars.githubusercontent.com/u/95420144?v=4"
            alt="Utsav Kumar"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-4 py-1">
          Available for Freelance Projects
        </Badge>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white">
          Utsav Kumar
        </h1>

        <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
          Full-stack developer specializing in{" "}
          <span className="text-white border-b-2 border-cyan-500/50">
            Production Systems
          </span>
          . I turn complex ideas into scalable, high-performance applications.
        </p>

        {/* Social Links */}
        <div className="flex gap-4 justify-center md:justify-start pt-2">
          <Button
  asChild
  variant="outline"
  className="
    rounded-full
    bg-transparent
    border-white/20
    text-white
    hover:bg-white/10
    hover:text-white
    focus:bg-white/10
    focus:text-white
    active:bg-white/20
    focus-visible:ring-2
    focus-visible:ring-cyan-500/50
    focus-visible:ring-offset-0
    transition-all duration-300
  "
>
  <a
    href="https://in.linkedin.com/in/utsavkumar14"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2"
  >
    <FaLinkedin className="text-blue-400" />
    LinkedIn
  </a>
</Button>

          <Button
            asChild
            variant="outline"
            className="
              rounded-full
    bg-transparent
    border-white/20
    text-white
    hover:bg-white/10
    hover:text-white
    focus:bg-white/10
    focus:text-white
    active:bg-white/20
    focus-visible:ring-2
    focus-visible:ring-cyan-500/50
    focus-visible:ring-offset-0
    transition-all duration-300
            "
          >
            <a
              href="https://github.com/jhautsav14"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaGithub className="text-white" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}

/* ================= SKILLS ================= */

function Skills() {
  const categories = [
    {
      title: "Languages",
      skills: [
        { name: "Dart", icon: <SiDart /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Python", icon: <SiPython /> },
        { name: "C++", icon: <SiCplusplus /> },
      ]
    },
    {
      title: "Frameworks & Backend",
      skills: [
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Nest.js", icon: <SiNestjs /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Supabase", icon: <SiSupabase /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Redis", icon: <SiRedis /> },
      ]
    },
    {
      title: "Infrastructure & AI",
      skills: [
        { name: "Docker", icon: <SiDocker /> },
        { name: "AWS", icon: <SiAmazonwebservices /> },
        { name: "GCP", icon: <SiGooglecloud /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
      ]
    }
  ];

  return (
    <section className="space-y-12">
      <div className="flex items-center gap-4">
        <Terminal className="text-cyan-500" />
        <h2 className="text-3xl font-bold text-white tracking-tight">Technical Arsenal</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div key={cat.title} className="space-y-6 p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors">
            <h3 className="text-sm font-black uppercase tracking-widest text-cyan-400">{cat.title}</h3>
            <div className="flex flex-wrap gap-4">
              {cat.skills.map((s) => (
                <div key={s.name} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group">
                  <span className="text-xl group-hover:scale-110 transition-transform">{s.icon}</span>
                  <span className="text-sm font-medium">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= FEATURED PRODUCTS ================= */

function FeaturedProducts() {
  return (
    <section className="space-y-32">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight text-white">Featured Products</h2>
        <p className="text-slate-500">Live systems operating at production scale.</p>
      </div>

      <ProductDisplay 
        title="Inkgo.in"
        description="Smart campus printing platform. Upload PDFs, pay online, skip queues. Built with a focus on speed and reliable transaction handling."
        url="https://inkgo.in"
        tech={[<SiNextdotjs key="1" />, <SiSupabase key="2" />, <SiPostgresql key="3" />, <SiRedis key="4" />]}
      />

      <GoFitzenDisplay />
    </section>
  );
}

function ProductDisplay({ title, description, url, tech }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
          <p className="text-lg text-slate-400 leading-relaxed">{description}</p>
          <div className="flex gap-4 text-2xl text-white/40">
            {tech}
          </div>
          <Button asChild className="rounded-full bg-white text-black hover:bg-cyan-500 hover:text-white transition-all px-8">
            <a href={url} target="_blank">View Live Platform <FaExternalLinkAlt className="ml-2 w-3 h-3"/></a>
          </Button>
        </div>

        <div className="bg-[#121212] rounded-2xl border border-white/10 p-2 shadow-2xl overflow-hidden">
          <div className="flex gap-1.5 mb-2 px-3 pt-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
          </div>
          <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-white/5">
            <iframe src={url} className="w-full h-full bg-white" loading="lazy" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function GoFitzenDisplay() {
  const images = ["/screenshot/g1.png", "/screenshot/g2.png", "/screenshot/g3.png", "/screenshot/g4.png"];
  const [index, setIndex] = useState(0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid lg:grid-cols-2 gap-12 items-center"
    >
      <div className="space-y-6 lg:order-2">
        <h3 className="text-4xl font-bold text-white">GoFitzen</h3>
        <p className="text-lg text-slate-400 leading-relaxed">Production fitness platform powering real gyms and tournaments. High-performance athlete tracking with seamless mobile integration.</p>
        <div className="flex gap-6">
           <a href="https://apps.apple.com/in/app/gofitzen-fitness-tracker/id6751807716" target="_blank" className="text-white hover:text-cyan-400 transition-colors flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10"><FaApple /> iOS</a>
           <a href="https://play.google.com/store/apps/details?id=com.app.gofitzen" target="_blank" className="text-white hover:text-green-400 transition-colors flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10"><FaGooglePlay /> Android</a>
        </div>
      </div>

      <div className="bg-[#121212] rounded-2xl border border-white/10 p-2 shadow-2xl relative lg:order-1">
        <div className="flex gap-1.5 mb-2 px-3 pt-2">
           <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
           <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
           <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
        </div>
        <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-black flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          
          <button onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)} className="absolute left-4 p-2 rounded-full bg-black/60 border border-white/10 text-white hover:bg-cyan-500 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => setIndex((i) => (i + 1) % images.length)} className="absolute right-4 p-2 rounded-full bg-black/60 border border-white/10 text-white hover:bg-cyan-500 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ================= PROJECTS ================= */

function Projects() {
  return (
    <section className="space-y-16">
      <h2 className="text-3xl font-bold text-white flex items-center gap-3">
        <FaCode className="text-purple-500" /> Open Source Lab
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard 
          title="AR Air Pollution Viz"
          bullets={["Real-time AR mapping", "99.5% uptime for 1k+ users", "Recognized by KSCST"]}
          link="https://github.com/jhautsav14/airPollViewAr"
          tag="Augmented Reality"
        />
        <ProjectCard 
          title="AI Haircut Booking Bot"
          bullets={["Conversational LLM engine", "PostGIS proximity matching", "Voice + Text Support"]}
          link="https://github.com/jhautsav14/haircut-bot-ai"
          tag="AI / Automation"
        />
      </div>
    </section>
  );
}

function ProjectCard({ title, bullets, link, tag }: any) {
  return (
    <Card className="bg-[#0a0a0a] border-white/10 hover:border-cyan-500/50 transition-all duration-500 group overflow-hidden">
      <CardContent className="p-8 space-y-6">
        <div className="flex justify-between items-start">
           <Badge variant="outline" className="text-cyan-400 border-cyan-400/30 px-3">{tag}</Badge>
           <a href={link} target="_blank" className="text-white/40 hover:text-white transition-colors"><FaGithub size={20}/></a>
        </div>
        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
        <ul className="space-y-3 text-slate-400">
          {bullets.map((b: string) => (
            <li key={b} className="flex items-center gap-2 text-sm leading-relaxed">
              <Zap size={14} className="text-cyan-500 shrink-0" /> {b}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

/* ================= TESTIMONIALS ================= */

function Testimonials() {
  const feedback = [
    { name: "Sandeep", role: "Product Owner", text: "I hired Utsav for a complex freelance project. He is a really strong developer. Clean architecture, fast execution, and excellent communication." },
    { name: "Ravi", role: "CTO", text: "Utsav built our system end-to-end and handled scaling without issues. Very reliable and technically sharp for a freelance partner." },
    { name: "Simran", role: "Startup Founder", text: "Professional, detail-oriented, and delivers production-ready systems. He treated our project like his own. Highly recommended!" },
    { name: "Suman", role: "Software Architect", text: "His technical depth and ability to solve complex backend problems remotely is what sets him apart. Great to work with." }
  ];

  return (
    <section className="space-y-16">
      <h2 className="text-3xl font-bold text-white text-center tracking-tight">Client Testimonials</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {feedback.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:bg-white/[0.07] transition-all group"
          >
            <div>
              <Quote className="text-cyan-500/20 group-hover:text-cyan-500/60 transition-colors mb-4" size={32} />
              <p className="text-slate-300 text-sm leading-relaxed italic mb-8">"{item.text}"</p>
            </div>
            <div>
              <p className="text-white font-black text-base">{item.name}</p>
              <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mt-1">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ================= HIRE ME / CTA ================= */

function HireMe() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-600/20 to-purple-600/20 border border-white/10 p-12 text-center space-y-8">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      <div className="relative z-10 space-y-4">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">Have a Project in Mind?</h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          I'm currently accepting new freelance projects and collaborations. Let's build something extraordinary together.
        </p>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-6">
        <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-cyan-500 hover:text-white px-10 py-6 text-lg font-bold shadow-xl">
          <a href="mailto:workutsavkumar@gmail.com">
            <FaEnvelope className="mr-2" /> Hire Me Now
          </a>
        </Button>
        <div className="text-white/60 font-mono text-sm">
          or reach out at: <span className="text-cyan-400 font-bold">workutsavkumar@gmail.com</span>
        </div>
      </div>
    </section>
  );
}