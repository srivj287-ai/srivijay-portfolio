import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillSections = [
  {
    category: "Web Development",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      { name: "React.js", level: 85, desc: "Components, Hooks, State Management" },
      { name: "JavaScript", level: 85, desc: "ES6+, DOM Manipulation, Async Logic" },
      { name: "HTML", level: 90, desc: "Semantic Markup, Structure, SEO" },
      { name: "CSS", level: 85, desc: "Flexbox, Grid, Responsive Design" },
    ],
  },
  {
    category: "Programming Languages",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: [
      { name: "Python", level: 75, desc: "Scripting, Logic, Algorithms" },
      { name: "C", level: 70, desc: "Pointers, Memory, Structured Programming" },
    ],
  },
  {
    category: "Concepts",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    skills: [
      { name: "Object-Oriented Programming (OOP)", level: 80, desc: "Modularity, Encapsulation, Classes" },
      { name: "Responsive Design", level: 90, desc: "Mobile-First, Adaptive Layouts" },
    ],
  },
  {
    category: "Tools & Technologies",
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    skills: [
      { name: "Git", level: 80, desc: "Version Control, Branching, Commits" },
      { name: "GitHub", level: 80, desc: "Repositories, GitHub Pages, Collaboration" },
      { name: "React.js & Tools", level: 85, desc: "Vite, Component Ecosystem" },
    ],
  },
];

const strengths = [
  "Quick Learner",
  "Team Player",
  "Problem Solving",
  "Communication Skills",
  "Time Management",
];

const languages = [
  { name: "Tamil", proficiency: "Native Proficiency" },
  { name: "English", proficiency: "Fluent (Speaking, Reading & Writing)" },
];

function SkillBar({ name, level, desc, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="group"
    >
      <div className="flex justify-between items-baseline mb-1.5">
        <div>
          <span className="font-display text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
            {name}
          </span>
          <span className="ml-2 font-mono text-xs text-slate-500 hidden sm:inline">{desc}</span>
        </div>
        <span className="font-mono text-xs font-semibold text-blue-600">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.9, delay: index * 0.06 + 0.1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6 bg-slate-50/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium mb-3">
            <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            technical expertise
          </div>
          <h2 className="section-heading">Skills & Competencies</h2>
          <p className="text-slate-600 text-sm mt-1">Core technical skills, tools, and personal strengths from my resume</p>
        </motion.div>

        {/* 4 Skill Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {skillSections.map(({ category, icon, skills }, gi) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.1, duration: 0.5 }}
              className="card space-y-5 hover:border-blue-300"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <span className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  {icon}
                </span>
                <h3 className="font-display text-base font-bold text-slate-900">
                  {category}
                </h3>
              </div>

              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    index={gi * 3 + i}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strengths & Languages */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Strengths Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="card"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
              <span className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </span>
              <h3 className="font-display text-base font-bold text-slate-900">
                Key Strengths
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {strengths.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100 text-blue-800 text-xs font-medium"
                >
                  <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Languages Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="card"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-4">
              <span className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </span>
              <h3 className="font-display text-base font-bold text-slate-900">
                Languages
              </h3>
            </div>
            <div className="space-y-3">
              {languages.map((l) => (
                <div key={l.name} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-display text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    {l.name}
                  </span>
                  <span className="text-xs font-mono text-blue-700 font-medium">
                    {l.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
