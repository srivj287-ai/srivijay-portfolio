import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Student Grade Tracker",
    category: "React.js",
    subtitle: "Academic Performance & GPA Management System",
    description:
      "A web application to manage and track student marks across multiple subjects. Features automatic GPA calculation, color-coded performance indicators, and persistent state for seamless performance tracking.",
    tech: ["React.js", "JavaScript", "CSS3", "State Management", "LocalStorage"],
    highlights: [
      "Developed a web application to manage and track student marks across multiple subjects.",
      "Implemented GPA calculation and color-coded performance indicators for easy visualization.",
      "Built using React state management for seamless real-time updates without page reload.",
      "Designed a clean, user-friendly interface with responsive layout for all screen sizes.",
    ],
    status: "Completed",
    github: "https://github.com",
    demo: "#",
  },
  {
    number: "02",
    title: "Personal Portfolio Website",
    category: "React.js",
    subtitle: "Modern Responsive Developer Showcase",
    description:
      "A fully responsive single-page developer portfolio designed to showcase skills, projects, and contact details with smooth scrolling navigation, mobile-first design, and seamless interactive UI components.",
    tech: ["React.js", "CSS3", "Tailwind CSS", "GitHub Pages", "Git"],
    highlights: [
      "Built a fully responsive single-page portfolio to showcase skills, projects, and contact details.",
      "Implemented smooth scrolling navigation and mobile-first layout design.",
      "Deployed the project live using GitHub Pages with version control via Git.",
      "Integrated resume preview, downloadable credentials, and direct contact avenues.",
    ],
    status: "Live",
    github: "https://github.com",
    demo: "#",
  },
  {
    number: "03",
    title: "To-Do Task Manager",
    category: "JavaScript",
    subtitle: "Intuitive Productivity & Task Organization App",
    description:
      "A focused productivity task management application featuring instant task addition, status filtering, editing, and deletion with zero-delay vanilla JavaScript DOM manipulation.",
    tech: ["HTML5", "CSS3", "JavaScript", "DOM API", "LocalStorage"],
    highlights: [
      "Created a task management app with features to add, edit, delete, and filter tasks by status.",
      "Focused on intuitive UX and clean interface using vanilla JavaScript DOM manipulation.",
      "Managed source code and project versions using GitHub repository.",
      "Implemented persistent task tracking with responsive UI across mobile and desktop.",
    ],
    status: "Completed",
    github: "https://github.com",
    demo: "#",
  },
];

const categories = ["All", "React.js", "JavaScript"];

function ProjectCard({ project, index, onSelect }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      className="card group hover:shadow-lg hover:border-blue-300 relative overflow-hidden flex flex-col justify-between"
    >
      <div>
        {/* Card Top: Number, Category & Status */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-mono font-bold text-sm">
              {project.number}
            </span>
            <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wide">
              {project.category}
            </span>
          </div>

          <span
            className={`text-xs px-2.5 py-0.5 rounded-full font-mono font-medium ${
              project.status === "Live"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : "bg-blue-50 text-blue-700 border border-blue-200"
            }`}
          >
            {project.status === "Live" ? "● Live" : "✓ Completed"}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-medium text-blue-600 mb-3">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="font-body text-sm text-slate-600 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Resume Highlights Bullet Points */}
        <div className="space-y-2 mb-6">
          <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Highlights:</p>
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-body">
                <svg className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 pt-4 mb-5 border-t border-slate-100">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-xs text-blue-700 bg-blue-50/70 border border-blue-100/80 px-2.5 py-0.5 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links / Action */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={() => onSelect(project)}
            className="text-xs font-mono font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors"
          >
            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Details
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
              title="GitHub Repository"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href={project.demo}
              className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
              title="Live Link"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium mb-3">
              <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              featured work
            </div>
            <h2 className="section-heading">Projects</h2>
            <p className="text-slate-600 text-sm mt-1">Real-world web applications from my development portfolio</p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeFilter === cat
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={i}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-lg hover:bg-slate-100"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-mono font-bold text-xs">
                  {selectedProject.number}
                </span>
                <span className="text-xs font-mono text-blue-600 font-medium">
                  {selectedProject.category}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-xs font-medium text-blue-600 mb-4">
                {selectedProject.subtitle}
              </p>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Highlights from Resume
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t) => (
                  <span key={t} className="font-mono text-xs text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-outline py-2 px-4 text-xs"
                >
                  Close
                </button>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-2 px-4 text-xs flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
