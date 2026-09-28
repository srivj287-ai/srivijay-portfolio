import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

const floatingTags = [
  { label: "React.js", x: "8%", y: "22%", delay: 0 },
  { label: "JavaScript", x: "80%", y: "18%", delay: 0.5 },
  { label: "CSS3", x: "76%", y: "68%", delay: 1 },
  { label: "Python", x: "7%", y: "70%", delay: 1.5 },
  { label: "Git & GitHub", x: "85%", y: "44%", delay: 0.8 },
  { label: "HTML5", x: "5%", y: "46%", delay: 0.3 },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-white pt-16">
      {/* Subtle blue grid background */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-80 pointer-events-none"
        style={{ maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)" }}
      />

      {/* Ambient blue glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-blue-300/10 blur-3xl pointer-events-none" />

      {/* Floating skill tags */}
      {floatingTags.map(({ label, x, y, delay }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.8, duration: 0.5 }}
          style={{ left: x, top: y }}
          className="absolute hidden lg:block pointer-events-none"
        >
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4 + delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay,
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono font-medium text-slate-700 shadow-sm hover:border-blue-300 hover:text-blue-600 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            {label}
          </motion.span>
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-3xl mx-auto px-6 py-12"
      >
        {/* Profile Avatar with subtle glow ring */}
        <motion.div variants={item} className="flex justify-center mb-6">
          <div className="relative group">
            {/* Ambient blue glow aura */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400 opacity-60 blur-md group-hover:opacity-90 transition-opacity duration-500 group-hover:duration-200 animate-pulse-slow" />

            {/* Avatar frame */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-white ring-2 ring-blue-500/30 overflow-hidden shadow-xl">
              <img
                src={profileImg}
                alt="Srivijay B"
                className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />
            </div>

            {/* Active status indicator */}
            <div
              className="absolute bottom-1 right-1 flex items-center justify-center w-6 h-6 rounded-full bg-white ring-2 ring-white shadow-md"
              title="Available for projects & internships"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Status badge */}
        <motion.div variants={item} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-xs font-mono text-blue-800 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse-slow" />
            Open to internships & frontend projects
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-slate-900 mb-4 leading-none"
        >
          Srivijay<span className="text-blue-600">.</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={item}
          className="font-display text-lg sm:text-2xl font-medium text-slate-700 mb-6 tracking-wide flex items-center justify-center gap-3 flex-wrap"
        >
          <span className="text-blue-600 font-semibold">Frontend Web Developer</span>
          <span className="text-slate-300">·</span>
          <span>CS&E Student (2025–2029)</span>
        </motion.p>

        {/* Tagline from resume */}
        <motion.p
          variants={item}
          className="font-body text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Enthusiastic Computer Science & Engineering student with a keen interest in frontend web development.
          Skilled in building interactive, responsive web applications using React.js and JavaScript.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="btn-primary w-full sm:w-auto text-sm justify-center"
          >
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            View my work
          </button>

          <button
            onClick={() => scrollTo("resume")}
            className="btn-outline w-full sm:w-auto text-sm justify-center border-blue-200 bg-blue-50/50 text-blue-700 hover:bg-blue-100/60"
          >
            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View Resume
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="btn-outline w-full sm:w-auto text-sm justify-center"
          >
            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in touch
          </button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          variants={item}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-slate-400 tracking-widest uppercase">
            scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-blue-500/50 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
