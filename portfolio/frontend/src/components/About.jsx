import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import profileImg from "../assets/profile.jpg";

const stats = [
  { value: "3+", label: "Projects Completed" },
  { value: "4", label: "Years B.E. Degree (2025-29)" },
  { value: "9+", label: "Core Technologies" },
  { value: "2", label: "Languages Spoken" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 px-6 bg-slate-50/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Featured Portrait Photo Card & Contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Portrait Card */}
            <div className="relative group rounded-2xl bg-white border border-slate-200/90 p-3.5 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300">
              {/* Image Frame */}
              <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/4.8] w-full">
                <img
                  src={profileImg}
                  alt="Srivijay B — Frontend Web Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle gradient shadow at bottom for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-85" />

                {/* Floating pill badge on photo */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-xs font-mono font-medium text-slate-800 shadow-sm border border-white/60">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    Frontend Developer
                  </span>
                </div>

                {/* Bottom title overlay */}
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <p className="font-display font-bold text-xl leading-tight drop-shadow-sm">
                    Srivijay B
                  </p>
                  <p className="font-mono text-xs text-blue-200/95 flex items-center gap-1.5 mt-0.5">
                    <span>B.E. CSE</span>
                    <span>·</span>
                    <span>Batch 2025–2029</span>
                  </p>
                </div>
              </div>

              {/* Sub-strip with college & location */}
              <div className="pt-3 pb-1 px-1 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Oddanchatram, Dindigul
                </span>
                <span className="text-blue-600 font-medium">CCET</span>
              </div>
            </div>

            {/* Direct contact card */}
            <div className="card space-y-3 p-6 border-slate-200">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-blue-700 mb-1 flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Direct Contact
              </p>

              <div className="space-y-2.5">
                <a
                  href="mailto:srivj287@gmail.com"
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50/60 transition-colors group"
                >
                  <span className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div className="overflow-hidden">
                    <p className="text-xs font-mono text-slate-400">Email</p>
                    <p className="text-sm font-medium text-slate-800 group-hover:text-blue-600 truncate transition-colors">
                      srivj287@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+916383016338"
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50/60 transition-colors group"
                >
                  <span className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-mono text-slate-400">Phone</p>
                    <p className="text-sm font-medium text-slate-800 group-hover:text-blue-600 transition-colors">
                      +91 6383016338
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-2.5 rounded-lg">
                  <span className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-mono text-slate-400">Location</p>
                    <p className="text-sm font-medium text-slate-800">
                      Oddanchatram, Dindigul, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Info & Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium mb-4">
                <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                about me
              </div>

              <h2 className="section-heading mb-6">
                Engineering web experiences
                <br />
                <span className="text-blue-600 font-medium">with precision & clean code.</span>
              </h2>

              <div className="space-y-4 text-slate-600 font-body text-[15px] leading-relaxed">
                <p>
                  I'm <strong className="text-slate-900 font-semibold">Srivijay B</strong>, a Computer Science &
                  Engineering student at <span className="text-slate-800 font-medium">Christian College of Engineering and Technology</span> (Academic Year: 2025 – 2029).
                </p>
                <p>
                  Enthusiastic about frontend web development, I specialize in building interactive,
                  responsive web applications using <span className="text-blue-600 font-medium">React.js</span>, <span className="text-blue-600 font-medium">JavaScript</span>, and modern CSS.
                  I am passionate about turning concepts into intuitive digital tools that solve real-world problems.
                </p>
                <p>
                  With a solid grounding in programming languages like <span className="font-mono text-slate-800 text-sm">C</span> and <span className="font-mono text-slate-800 text-sm">Python</span>, Object-Oriented Programming (OOP) concepts, and Git version control, I'm eager to learn continuously and contribute to high-impact development projects.
                </p>
              </div>

              {/* Quick badges with blue accents */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="tag">
                  <svg className="w-3 h-3 text-blue-600 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Oddanchatram, Dindigul
                </span>
                <span className="tag">
                  <svg className="w-3 h-3 text-blue-600 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                  Christian College of Eng. & Tech
                </span>
                <span className="tag">
                  <svg className="w-3 h-3 text-blue-600 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Batch 2025–2029
                </span>
                <span className="tag">
                  <svg className="w-3 h-3 text-blue-600 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  12th TN State Board (Score: 367)
                </span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3.5 pt-2">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="card text-center p-5 hover:border-blue-300 transition-colors"
                >
                  <p className="font-display text-3xl font-bold text-blue-600 mb-1">
                    {value}
                  </p>
                  <p className="font-mono text-xs text-slate-500 leading-tight">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
