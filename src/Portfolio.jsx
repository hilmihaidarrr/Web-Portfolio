import React from "react";
import { motion } from "framer-motion";
import {
  // aman di semua versi lucide-react
  Github as GitHub,
  Linkedin as LinkedIn,
  Mail,
  ExternalLink,
  MapPin,
  Code2,
  GraduationCap,
  Award,
  FileText,
  Briefcase, 
  Users,
} from "lucide-react";
import { Button } from "./components/ui/button";


const CONTACT = {
  name: "Muhamad Hilmi Haidar",
  location: "Jawa Barat, Indonesia",
  email: "hilmihaidar11@gmail.com",
  github: "https://github.com/hilmihaidarrr",
  linkedin: "https://www.linkedin.com/in/hilmihaidar",
  resumeUrl: "/CV.pdf",
};

const projects = [
  {
    title: "Cuacane, Weather and Dispersion App",
    tagline: "Desktop app for real time weather monitoring and plume simulation",
    points: [
      "PyQt5 and QML interface with adaptive dashboard and dark mode",
      "Reads Vaisala WXT520 sensor data in real time and logs to CSV",
      "Multi horizon wind prediction using MLP at 15m, 1h, 3h, 6h",
      "Gaussian Plume simulation with Leaflet heatmap and legend",
    ],
    links: [
      { label: "Demo video", href: "https://youtu.be/f9r21_Kayig" },
      { label: "GitHub", href: "https://github.com/hilmihaidarrr/cuacane_app_prototype" },
    ],
    image: "/CuacaneLogo.png",
  },
  {
    title: "Vaisala Converter",
    tagline: "GUI tool to convert raw sensor lines to CSV and MH2",
    points: [
      "Python app with robust parsing, validation and exports",
      "Speeds up BRIN research workflows for dispersion models",
      "Includes batch processing and simple QA checks",
    ],
    links: [{ label: "GitHub", href: "https://github.com/hilmihaidarrr/Vaisala-Converter-App" }],
    image: "/Converterapp.jpg",
  },
  {
    title: "Wind Prediction Models",
    tagline: "MLP models for wind speed and direction forecasting",
    points: [
      "Targets: wind speed, sin(dir), cos(dir)",
      "Training with 2021 to 2022 data and validation with 2023 to 2024",
      "4 models for 15m, 1h, 3h, 6h horizons",
    ],
    links: [{ label: "Notebook and code", href: "https://github.com/hilmihaidarrr/MLP_Wind_Direction-Speed_Prediction_Model" }],
    image: "/MLP.jpg",
  },
];

const skills = [
  { group: "Programming Languages", items: ["Python", "C++", "JavaScript", "SQL"] },
  { group: "Machine Learning & AI", items: ["PyTorch", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "Feature Engineering", "Time Series Forecasting"] },
  { group: "Application Development", items: ["PyQt5", "QML", "Leaflet", "REST API"] },
  { group: "Frontend & UI", items: ["React", "Tailwind CSS", "Framer Motion"] },
  { group: "DevOps & Tools", items: ["Git", "Jupyter", "Docker", "Render", "DigitalOcean"] },
  { group: "Soft Skills", items: ["Problem Solving", "Collaboration", "Project Management", "Technical Writing"] },
];


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0f1b] text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1020]/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold text-xl text-white">{CONTACT.name}</a>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#education" className="hover:text-white">Education</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <Button asChild className="h-9">
            <a href="#contact"><Mail className="h-4 w-4 mr-2" />Hire me</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        {/* Background gradient + grid overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#0a0f1b] to-black -z-10" />
        <div className="grid-mask absolute inset-0 pointer-events-none opacity-20 -z-10"></div>

        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* Text content */}
            <div className="md:col-span-7 text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-extrabold leading-tight"
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Turning Ideas into Solutions
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, delay: 0.2 }}
                transition={{ duration: 0.8 }}
                className="mt-5 text-white/80 md:text-lg max-w-2xl"
              >
                I am passionate about technology, data, and innovation.  
                With experience in machine learning, software development, and data-driven research,  
                I build solutions that transform ideas into real impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, delay: 0.4 }}
                transition={{ duration: 0.8 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Button asChild className="bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:opacity-90 text-white">
                  <a href="#projects" className="flex items-center">
                    <Code2 className="h-4 w-4 mr-2" />
                    See Projects
                  </a>
                </Button>
                <Button asChild variant="outline" className="h-8 text-xs">
                  <a href={CONTACT.github} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <GitHub className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" className="h-8 text-xs">
                  <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <LinkedIn className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" className="h-8 text-xs">
                  <a href={CONTACT.resumeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Resume PDF
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Profile image - kotak */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, delay: 0.6 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5 relative flex justify-center"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 blur-xl opacity-40 animate-pulse" />
                {/* Foto kotak */}
                <img
                  src="/hilmi.jpg"
                  alt="Hilmi"
                  className="relative w-64 h-72 md:w-80 md:h-96 object-cover rounded-2xl border border-white/10 shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur border border-white/20 rounded-xl px-4 py-2 shadow text-white text-sm flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-cyan-300" />
                  {CONTACT.location}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-[#0a0f1b] border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured projects</h2>
          <p className="mt-2 text-white/70">Highlights from my recent work.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {projects.map((p, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition"
              >
                <img src={p.image} alt={p.title} className="w-full h-60 object-cover opacity-90 group-hover:opacity-100 transition" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-1 text-white/80">{p.tagline}</p>
                  <ul className="mt-3 space-y-1 text-white/80 list-disc list-inside">
                    {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {p.links.map((l, i) => (
                      <a
                        key={i}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className={
                          i === 0
                            ? "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-gray-900 border border-white/20"
                            : "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-transparent text-white border border-white/30 hover:bg-white/10"
                        }
                      >
                        <ExternalLink className="h-4 w-4" /> {l.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div
                  className="pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-100 blur-3xl transition"
                  style={{ background: "radial-gradient(400px 200px at 70% 20%, rgba(168,85,247,.25), transparent 60%)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-[#0a0f1b] border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold text-white">Skills</h2>
          <p className="mt-2 text-white/70">A snapshot of tools and capabilities I use to turn ideas into working solutions.</p>

          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((s, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 transition hover:bg-white/[0.08] hover:border-white/20"
              >
                <div className="font-semibold text-white">{s.group}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((it, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/80 bg-white/5"
                      title={it}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="experience" className="bg-[#0a0f1b] border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold text-white">Experience</h2>
          <p className="mt-2 text-white/70">
            Professional and organizational experiences that shaped my journey.
          </p>

          <div className="mt-10 grid gap-6">
            {/* BRIN Internship */}
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 transition hover:scale-[1.01] hover:border-purple-400/50 hover:shadow-lg">
              <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300">
                Work Experience
              </span>
              <div className="flex items-start gap-4 mt-2">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-purple-300" />
                </div>
                <div>
                  <div className="font-semibold text-white">BRIN RI — Data Science Intern</div>
                  <div className="text-white/60 text-sm">
                    Jun 2024 – Sep 2024 • Bandung, Indonesia
                  </div>
                  <ul className="mt-3 space-y-2 text-white/80 text-sm list-disc list-inside">
                    <li>Built and evaluated LSTM & ARIMA forecasting models for early warning around nuclear facility.</li>
                    <li>Processed meteorological datasets (wind, temperature, humidity, rainfall) for predictive modeling.</li>
                    <li>Conducted preprocessing, time series analysis, and feature selection to improve accuracy.</li>
                    <li>Collaborated with researchers to integrate insights into a real-world early-warning system.</li>
                    <li>Worked with Python, Pandas, Scikit-learn, Matplotlib, VS Code, and Git.</li>
                  </ul>
                <div className="mt-3">
                    <Button variant="outline" disabled className="h-8 text-xs opacity-50">Not Issued</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* HMTK Head */}
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 transition hover:scale-[1.01] hover:border-blue-400/50 hover:shadow-lg">
              <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300">
                Organisational Experience
              </span>
              <div className="flex items-start gap-4 mt-2">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-300" />
                </div>
                <div>
                  <div className="font-semibold text-white">HMTK — Head of Entrepreneurship</div>
                  <div className="text-white/60 text-sm">
                    Dec 2024 – Aug 2025 • Bandung, Indonesia
                  </div>
                  <ul className="mt-3 space-y-2 text-white/80 text-sm list-disc list-inside">
                    <li>Directed production of official apparel (PDH, jackets) and launched Teknik Komputer merchandise.</li>
                    <li>Managed budgeting, vendor coordination, and marketing for product rollouts.</li>
                    <li>Fostered entrepreneurship and collaboration through identity-driven projects.</li>
                  </ul>
                  <div className="mt-3">
                    <Button variant="outline" disabled className="h-8 text-xs opacity-50">Not Issued Yet</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* HMTK Staff */}
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 transition hover:scale-[1.01] hover:border-blue-400/50 hover:shadow-lg">
              <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300">
                Organisational Experience
              </span>
              <div className="flex items-start gap-4 mt-2">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-300" />
                </div>
                <div>
                  <div className="font-semibold text-white">HMTK — Staff, Entrepreneurship Dept.</div>
                  <div className="text-white/60 text-sm">
                    Oct 2023 – Dec 2024 • Bandung, Indonesia
                  </div>
                  <ul className="mt-3 space-y-2 text-white/80 text-sm list-disc list-inside">
                    <li>Assisted planning and execution of official apparel, merchandise, and event branding.</li>
                    <li>Supported logistics and team operations to strengthen student identity and cohesion.</li>
                  </ul>
                  <div className="mt-3">
                    <Button asChild variant="outline" className="h-8 text-xs">
                      <a href="/beraksi.png" target="_blank" rel="noreferrer">
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* i-Smile Inventory Coordinator */}
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 transition hover:scale-[1.01] hover:border-blue-400/50 hover:shadow-lg">
              <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300">
                Organisational Experience
              </span>
              <div className="flex items-start gap-4 mt-2">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-300" />
                </div>
                <div>
                  <div className="font-semibold text-white">i-Smile Lab — Inventory Coordinator</div>
                  <div className="text-white/60 text-sm">
                    Jun 2024 – May 2025 • Bandung, Indonesia
                  </div>
                  <ul className="mt-3 space-y-2 text-white/80 text-sm list-disc list-inside">
                    <li>Managed and updated inventory database of lab tools and materials.</li>
                    <li>Conducted stock evaluations and audits to maintain readiness for academic/research use.</li>
                    <li>Implemented structured tracking system to improve accuracy and traceability.</li>
                  </ul>
                  <div className="mt-3">
                    <Button asChild variant="outline" className="h-8 text-xs">
                      <a href="/ismile.jpg" target="_blank" rel="noreferrer">
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* i-Smile Lab Assistant */}
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 transition hover:scale-[1.01] hover:border-blue-400/50 hover:shadow-lg">
              <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300">
                Organisational Experience
              </span>
              <div className="flex items-start gap-4 mt-2">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-300" />
                </div>
                <div>
                  <div className="font-semibold text-white">i-Smile Lab — Laboratory Assistant</div>
                  <div className="text-white/60 text-sm">
                    Jun 2024 – Dec 2024 • Bandung, Indonesia
                  </div>
                  <ul className="mt-3 space-y-2 text-white/80 text-sm list-disc list-inside">
                    <li>Guided students in AI practicums (Search, Fuzzy Logic, Genetic Algorithms).</li>
                    <li>Provided hands-on instruction and troubleshooting to support algorithm implementation.</li>
                    <li>Prepared instructional materials and maintained lab equipment.</li>
                  </ul>
                  <div className="mt-3">
                    <Button asChild variant="outline" className="h-8 text-xs">
                      <a href="/ismile.jpg" target="_blank" rel="noreferrer">
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Grab It Fast 2023 */}
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 transition hover:scale-[1.01] hover:border-blue-400/50 hover:shadow-lg">
              <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300">
                Organisational Experience
              </span>
              <div className="flex items-start gap-4 mt-2">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-300" />
                </div>
                <div>
                  <div className="font-semibold text-white">Grab It Fast 2023 — Documentation Team</div>
                  <div className="text-white/60 text-sm">
                    Sep 2022 – Jul 2023 • Bogor, Indonesia
                  </div>
                  <ul className="mt-3 space-y-2 text-white/80 text-sm list-disc list-inside">
                    <li>Produced live Instagram updates for a national student-organized event.</li>
                    <li>Ensured consistent tone, branding, and visual design across communications.</li>
                    <li>Supported final content compilation pre- and post-event.</li>
                  </ul>
                  <div className="mt-3">
                    <Button asChild variant="outline" className="h-8 text-xs">
                      <a href="/forcy.pdf" target="_blank" rel="noreferrer">
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="education" className="bg-[#0a0f1b] border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold text-white">Education & Certifications</h2>
          <p className="mt-2 text-white/70">Academic background and professional certifications.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-purple-500/30 to-fuchsia-500/30 hover:from-purple-400/50 hover:to-fuchsia-400/50 transition">
              <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="flex items-start gap-3">
                  <div className="h-11 w-11 rounded-xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-purple-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">
                        Education
                      </span>
                    </div>
                    <div className="mt-3 font-semibold text-white">Telkom University</div>
                    <div className="text-white/80">Bachelor in Computer Engineering</div>
                    <div className="text-white/80">GPA 3.51, 4.00</div>
                    <div className="text-white/60 text-sm mt-1">Bandung, 2021 to 2025</div>
                    <div className="mt-4">
                      <Button asChild variant="outline" className="h-8 text-xs">
                        <a href="/SKL.jpeg" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          View Certificate
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CEFR B2 */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 hover:from-emerald-400/50 hover:to-cyan-400/50 transition">
              <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="flex items-start gap-3">
                  <div className="h-11 w-11 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center">
                    <Award className="h-6 w-6 text-emerald-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                        Certification
                      </span>
                    </div>
                    <div className="mt-3 font-semibold text-white">CEFR B2 English Test</div>
                    <div className="text-white/80">Issuer, LAC Telkom University</div>
                    <div className="text-white/80">Valid until 2027</div>
                    <div className="text-white/60 text-sm mt-1">Level, Upper Intermediate</div>
                    <div className="mt-4">
                      <Button asChild variant="outline" className="h-8 text-xs">
                        <a href="/PusatBahasa.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          View Certificate
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Udemy */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-rose-500/30 to-orange-500/30 hover:from-rose-400/50 hover:to-orange-400/50 transition">
              <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="flex items-start gap-3">
                  <div className="h-11 w-11 rounded-xl bg-rose-500/15 border border-rose-400/30 flex items-center justify-center">
                    <Award className="h-6 w-6 text-rose-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300">
                        Certification
                      </span>
                    </div>
                    <div className="mt-3 font-semibold text-white">Udemy, Machine Learning A to Z</div>
                    <div className="text-white/80">AI, Python and R, ChatGPT Prize</div>
                    <div className="text-white/60 text-sm mt-1">Issued 2025</div>
                    <div className="mt-4">
                      <Button asChild variant="outline" className="h-8 text-xs">
                        <a href="/AiUdemy.jpg" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          View Certificate
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="bg-[#0a0f1b] border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
          <p className="mt-2 text-white/70">
            Interested in working together or just want to connect?  
            Feel free to reach out through any of the platforms below.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {/* Email */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-purple-500/30 to-fuchsia-500/30 hover:from-purple-400/50 hover:to-fuchsia-400/50 transition">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6 h-full flex flex-col items-center justify-center">
                <Mail className="h-7 w-7 text-purple-300" />
                <div className="mt-3 font-semibold text-white">Email</div>
                <p className="text-white/70 text-sm">hilmihaidar11@gmail.com</p>
                <div className="mt-4">
                  <Button asChild variant="outline" className="h-8 text-xs">
                    <a href="mailto:hilmihaidar@example.com" className="inline-flex items-center gap-2">
                      Send Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-sky-500/30 to-blue-500/30 hover:from-sky-400/50 hover:to-blue-400/50 transition">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6 h-full flex flex-col items-center justify-center">
                <LinkedIn className="h-7 w-7 text-sky-300" />
                <div className="mt-3 font-semibold text-white">LinkedIn</div>
                <p className="text-white/70 text-sm">@hilmihaidar</p>
                <div className="mt-4">
                  <Button asChild variant="outline" className="h-8 text-xs">
                    <a href="https://linkedin.com/in/hilmihaidar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                      Visit Profile
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* GitHub */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-gray-500/30 to-slate-500/30 hover:from-gray-400/50 hover:to-slate-400/50 transition">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6 h-full flex flex-col items-center justify-center">
                <GitHub className="h-7 w-7 text-gray-300" />
                <div className="mt-3 font-semibold text-white">GitHub</div>
                <p className="text-white/70 text-sm">hilmihaidarrr</p>
                <div className="mt-4">
                  <Button asChild variant="outline" className="h-8 text-xs">
                    <a href="https://github.com/hilmihaidarrr" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                      Visit Repo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#0a0f1b]">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-white/70 flex items-center justify-between">
          <div>© {new Date().getFullYear()} {CONTACT.name}. All rights reserved.</div>
          <div>Built with React and Tailwind.</div>
        </div>
      </footer>
    </div>
  );
}
