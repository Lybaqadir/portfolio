import { motion } from "motion/react";
import { ExternalLink, Github, Database, Shield, MonitorPlay } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "ShiftGuard",
      subtitle: "Secure Employee Scheduling System",
      description: "A secure employee scheduling system featuring two-factor authentication, session management, and role-based document uploads.",
      tags: ["Node.js", "Express", "MongoDB", "2FA"],
      icon: <Shield className="text-emerald-600 dark:text-emerald-400" size={28} />,
      accent: "emerald",
      repoUrl: "https://github.com/Lybaqadir/ShiftGuard"
    },
    {
      title: "Secure Hotel Management System",
      subtitle: "Enterprise Java Application",
      description: "Developed a secure, role-based hotel management system implementing RBAC, BCrypt password authentication, and full booking operations.",
      tags: ["JavaFX", "MySQL", "MVC", "Security"],
      icon: <Database className="text-indigo-600 dark:text-indigo-400" size={28} />,
      accent: "indigo",
      repoUrl: "https://github.com/Lybaqadir/Secure-Hotel-Managment-System"
    },
    {
      title: "GarageGo",
      subtitle: "Java Garage Management System",
      description: "A garage management system built applying core OOP concepts. Implemented Strategy and Decorator design patterns for flexible pricing.",
      tags: ["Java", "OOP", "Design Patterns"],
      icon: <MonitorPlay className="text-amber-600 dark:text-amber-400" size={28} />,
      accent: "amber",
      repoUrl: "https://github.com/Lybaqadir/GarageGo"
    }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      <div className="absolute top-40 right-[-10%] w-[500px] h-[500px] bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 left-[-10%] w-[500px] h-[500px] bg-amber-300/20 dark:bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-xs font-bold rounded-full mb-4 border border-indigo-500/20">
              <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse" /> Portfolio
            </div>
            <h2 className="text-5xl md:text-6xl font-['Outfit'] font-bold mb-4 text-slate-900 dark:text-white">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-amber-500 dark:from-indigo-400 dark:to-amber-300">Projects.</span></h2>
            <p className="text-slate-600 dark:text-slate-400 text-xl max-w-2xl">Building secure, scalable, and well-architected applications across different tech stacks.</p>
          </div>
          <a href="https://github.com/Lybaqadir" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-900 dark:text-white bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 px-6 py-3 rounded-full hover:bg-slate-900/10 dark:hover:bg-white/10 transition-colors font-medium backdrop-blur-md">
            View GitHub <ExternalLink size={16} />
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-slate-950 border-2 border-slate-200 dark:border-white/10 rounded-[2rem] overflow-hidden group hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all duration-500 flex flex-col h-full relative shadow-md dark:shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] dark:hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] cursor-pointer"
            >
              {/* Icon header area, no image */}
              <div className="relative h-44 w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-900/[0.03] dark:from-white/[0.04] to-transparent border-b border-slate-900/5 dark:border-white/5">
                <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.07] bg-[radial-gradient(circle_at_50%_0%,black,transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_0%,white,transparent_60%)]" />
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  transition={{ duration: 0.4 }}
                  className="w-20 h-20 rounded-3xl bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 flex items-center justify-center shadow-lg backdrop-blur-xl relative z-10"
                >
                  {project.icon}
                </motion.div>

                {/* Top right action: explicit GitHub link button */}
                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="w-10 h-10 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-900/10 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900 transition-colors">
                    <Github size={18} />
                  </span>
                  <span className="w-10 h-10 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-900/10 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900 transition-colors">
                    <ExternalLink size={18} />
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col relative z-20 bg-white dark:bg-slate-950">
                <h3 className="text-2xl font-bold font-['Outfit'] mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                <p className="text-sm text-amber-700 dark:text-amber-400/90 mb-4 font-medium tracking-wide uppercase">{project.subtitle}</p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-900/5 dark:border-white/5">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1.5 bg-slate-900/[0.04] dark:bg-white/5 border border-slate-900/5 dark:border-white/5 rounded-full text-slate-700 dark:text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
