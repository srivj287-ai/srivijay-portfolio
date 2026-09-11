import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const courses = [
  "Object-Oriented Programming (OOP)",
  "Data Structures & Algorithms",
  "Frontend Web Development (React/JS)",
  "Computer Programming in C & Python",
  "Responsive UI/UX Principles",
  "Database Management Systems",
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium mb-3">
            <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            academic credentials
          </div>
          <h2 className="section-heading">Education</h2>
          <p className="text-slate-600 text-sm mt-1">Formal engineering education and academic background</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Degree Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="lg:col-span-7 card relative overflow-hidden border-l-4 border-l-blue-600 p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    B.E. Computer Science and Engineering
                  </h3>
                  <p className="font-medium text-sm text-blue-600">
                    Christian College of Engineering and Technology
                  </p>
                </div>
              </div>
              <span className="tag">Academic Year: 2025 – 2029</span>
            </div>

            <p className="font-body text-sm text-slate-600 leading-relaxed mb-6">
              Pursuing a comprehensive 4-year Bachelor of Engineering degree in Computer Science and Engineering.
              Focused on core computing fundamentals, algorithmic problem solving, software design, and practical frontend web applications.
            </p>

            {/* Timeline indicator */}
            <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex justify-between text-xs font-mono text-slate-500 mb-2">
                <span>Start: 2025</span>
                <span className="text-blue-700 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  Year 1 — in progress
                </span>
                <span>Graduation: 2029</span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: "15%" } : {}}
                  transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                />
              </div>
            </div>

            {/* School Education Card (12th Grade) */}
            <div className="pt-5 border-t border-slate-100 flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-display text-sm font-bold text-slate-900">
                    Higher Secondary Schooling (12th Grade)
                  </h4>
                  <p className="text-xs text-slate-500">Tamil Nadu State Board</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 font-mono text-xs font-bold text-slate-800 shrink-0">
                Score: 367
              </span>
            </div>
          </motion.div>

          {/* Core Subjects / Curriculum */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-5 card p-8"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
              <p className="font-mono text-xs font-bold text-blue-700 uppercase tracking-wider">
                Relevant Coursework
              </p>
            </div>

            <ul className="space-y-3">
              {courses.map((course, i) => (
                <motion.li
                  key={course}
                  initial={{ opacity: 0, x: 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.06, duration: 0.4 }}
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                  {course}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
