import { motion } from "motion/react";
import { Terminal, Database, Cloud, Blocks, Cpu, Network, ShieldCheck } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Core Engineering",
      icon: <Terminal className="text-indigo-600 dark:text-indigo-400" size={20} />,
      skills: ["Python", "Java (OOP)", "Node.js", "FastAPI", "TypeScript / JS", "HTML / CSS", "SQL"],
      borderClass: "border-indigo-200 hover:border-indigo-400 dark:border-white/10 dark:hover:border-indigo-500/30"
    },
    {
      title: "AI-Directed Development",
      icon: <Cpu className="text-amber-600 dark:text-amber-400" size={20} />,
      skills: ["Guiding AI Coding Tools", "Output Verification & Review", "Claude / Cursor / Codex", "Rapid Iteration", "Architectural Oversight"],
      borderClass: "border-amber-200 hover:border-amber-400 dark:border-white/10 dark:hover:border-amber-500/30"
    },
    {
      title: "Infrastructure & DevOps",
      icon: <Cloud className="text-emerald-600 dark:text-emerald-400" size={20} />,
      skills: ["Docker", "Git / GitHub", "CI/CD Pipelines", "Virtual Machines", "Linux / Ubuntu"],
      borderClass: "border-emerald-200 hover:border-emerald-400 dark:border-white/10 dark:hover:border-emerald-500/30"
    },
    {
      title: "Architecture & Security",
      icon: <ShieldCheck className="text-rose-600 dark:text-rose-400" size={20} />,
      skills: ["SDLC", "Penetration Testing (Theory)", "Encryption", "Risk Assessment", "Network Foundations"],
      borderClass: "border-rose-200 hover:border-rose-400 dark:border-white/10 dark:hover:border-rose-500/30"
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4 text-slate-900 dark:text-white">Technical Arsenal</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">Modern tools for modern problems. I focus on building a robust, adaptable skill set across the entire stack.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className={`bg-white dark:bg-slate-900/50 backdrop-blur-md border-2 ${category.borderClass} rounded-[2rem] p-8 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-500 group shadow-md dark:shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.08)] dark:hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-[50px] group-hover:bg-indigo-500/10 transition-colors duration-500" />
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-950 rounded-2xl flex items-center justify-center border border-slate-900/10 dark:border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-['Outfit']">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx * 0.15) + (sIdx * 0.05), duration: 0.4 }}
                    className="px-4 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-900/10 dark:border-white/5 rounded-full text-sm text-slate-700 dark:text-slate-300 font-medium hover:border-indigo-500/50 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Workflow Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-5xl mx-auto bg-gradient-to-br from-indigo-100 to-white dark:from-indigo-900/40 dark:to-slate-900 border border-indigo-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-2/3">
              <div className="inline-block px-3 py-1 bg-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-bold rounded-full mb-4">
                Core Methodology
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white font-['Outfit'] mb-4">AI-Directed Development Workflow</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                I get most of my work done by directing AI coding tools like Claude, Cursor, and Codex as core development partners. I guide them toward a solution, then rigorously review and verify every piece of output before it ships, while staying hands-on with the underlying architecture.
              </p>
            </div>
            
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-44 h-44 relative">
                {/* Outer ring with an orbiting marker dot */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                </motion.div>

                {/* Inner ring, opposite direction, with its own marker */}
                <motion.div
                  className="absolute inset-5 rounded-full border-2 border-dashed border-amber-500/50"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
                </motion.div>

                {/* Pulsing center icon */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-950 border border-indigo-500/20 shadow-lg flex items-center justify-center">
                    <Cpu size={32} className="text-slate-900 dark:text-white" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
