import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import profileImg from "../assets/profile.jpg";

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("srivj287@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resume" className="py-24 px-6 bg-slate-50/60 border-y border-slate-200/80">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 no-print"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium mb-3">
              <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              curriculum vitae
            </div>
            <h2 className="section-heading">Resume</h2>
            <p className="text-slate-600 text-sm mt-1">Official resume & credentials of Srivijay B</p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="btn-primary py-2.5 px-4 text-xs flex items-center gap-2"
              title="Print or Save as PDF"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Print / Save PDF
            </button>
            <button
              onClick={handleCopyEmail}
              className="btn-outline py-2.5 px-3 text-xs flex items-center gap-2"
              title="Copy Email"
            >
              <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </motion.div>

        {/* Printable Resume Sheet */}
        <motion.div
          id="resume-printable"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-sm text-slate-800"
        >
          {/* Header */}
          <div className="border-b-2 border-slate-100 pb-6 mb-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 text-center sm:text-left">
              <img
                src={profileImg}
                alt="Srivijay B"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover object-top border-2 border-blue-100 shadow-sm shrink-0"
              />
              <div>
                <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-1">
                  SRIVIJAY B
                </h1>
                <p className="font-display text-base sm:text-lg font-medium text-blue-600 tracking-wide">
                  Computer Science & Engineering Student
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:items-end gap-1.5 text-xs text-slate-600 font-mono">
              <span className="inline-flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 6383016338
              </span>
              <span className="inline-flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                srivj287@gmail.com
              </span>
              <span className="inline-flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Oddanchatram, Dindigul, India
              </span>
            </div>
          </div>

          {/* Section: Profile Summary */}
          <div className="mb-8">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-700 pb-2 border-b border-blue-100 flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Profile Summary
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Enthusiastic Computer Science and Engineering student with a keen interest in frontend web development.
              Skilled in building interactive web applications using React.js and JavaScript. Eager to learn, apply
              problem-solving skills, and contribute meaningfully to real-world development projects.
            </p>
          </div>

          {/* Section: Education */}
          <div className="mb-8">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-700 pb-2 border-b border-blue-100 flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex flex-wrap justify-between items-baseline">
                  <h4 className="font-display text-sm font-semibold text-slate-900">
                    B.E. Computer Science and Engineering
                  </h4>
                  <span className="text-xs font-mono text-blue-600 font-medium">Academic Year: 2025 – 2029</span>
                </div>
                <p className="text-xs text-slate-600">Christian College of Engineering and Technology</p>
              </div>
              <div>
                <div className="flex flex-wrap justify-between items-baseline">
                  <h4 className="font-display text-sm font-semibold text-slate-900">
                    12th Grade
                  </h4>
                  <span className="text-xs font-mono text-slate-600 font-medium">Score: 367</span>
                </div>
                <p className="text-xs text-slate-600">Tamil Nadu State Board</p>
              </div>
            </div>
          </div>

          {/* Section: Skills */}
          <div className="mb-8">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-700 pb-2 border-b border-blue-100 flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Skills
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-semibold text-slate-900 block mb-1">Web Development:</span>
                <span className="text-slate-700 font-mono">HTML, CSS, JavaScript, React.js</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-semibold text-slate-900 block mb-1">Programming Languages:</span>
                <span className="text-slate-700 font-mono">C, Python</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-semibold text-slate-900 block mb-1">Concepts:</span>
                <span className="text-slate-700">Object-Oriented Programming (OOP), Responsive Design</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="font-semibold text-slate-900 block mb-1">Tools & Technologies:</span>
                <span className="text-slate-700 font-mono">React.js, JavaScript, Git, GitHub</span>
              </div>
            </div>
          </div>

          {/* Section: Projects */}
          <div className="mb-8">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-700 pb-2 border-b border-blue-100 flex items-center gap-2 mb-4">
              <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              Projects
            </h3>
            <div className="space-y-6">
              {/* Project 1 */}
              <div className="border-l-2 border-blue-600 pl-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h4 className="font-display text-sm font-bold text-slate-900">
                    Student Grade Tracker
                  </h4>
                  <span className="text-xs font-mono text-blue-600">React.js, JavaScript</span>
                </div>
                <ul className="space-y-1 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Developed a web application to manage and track student marks across multiple subjects.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Implemented GPA calculation and color-coded performance indicators for easy visualization.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Built using React state management for seamless real-time updates without page reload.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Designed a clean, user-friendly interface with responsive layout for all screen sizes.</span>
                  </li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="border-l-2 border-blue-600 pl-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h4 className="font-display text-sm font-bold text-slate-900">
                    Personal Portfolio Website
                  </h4>
                  <span className="text-xs font-mono text-blue-600">React.js, CSS3, GitHub Pages</span>
                </div>
                <ul className="space-y-1 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Built a fully responsive single-page portfolio to showcase skills, projects, and contact details.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Implemented smooth scrolling navigation and mobile-first layout design.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Deployed the project live using GitHub Pages with version control via Git.</span>
                  </li>
                </ul>
              </div>

              {/* Project 3 */}
              <div className="border-l-2 border-blue-600 pl-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h4 className="font-display text-sm font-bold text-slate-900">
                    To-Do Task Manager
                  </h4>
                  <span className="text-xs font-mono text-blue-600">HTML, CSS, JavaScript</span>
                </div>
                <ul className="space-y-1 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Created a task management app with features to add, edit, delete, and filter tasks by status.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Focused on intuitive UX and clean interface using vanilla JavaScript DOM manipulation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Managed source code and project versions using GitHub repository.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Strengths & Languages */}
          <div className="grid sm:grid-cols-2 gap-6 pt-2 border-t border-slate-100">
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-700 pb-2 border-b border-blue-100 flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Strengths
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Quick Learner • Team Player • Problem Solving • Communication Skills • Time Management
              </p>
            </div>
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-700 pb-2 border-b border-blue-100 flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                Languages
              </h3>
              <div className="text-xs text-slate-700 space-y-1">
                <p><span className="font-semibold text-slate-900">Tamil:</span> Native Proficiency</p>
                <p><span className="font-semibold text-slate-900">English:</span> Fluent (Speaking, Reading & Writing)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
