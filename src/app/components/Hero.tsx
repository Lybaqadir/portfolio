import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Github, Mail, ChevronDown, Code2, Sparkles, Terminal, Database } from "lucide-react";
import { useEffect, useState } from "react";

const CYCLE_WORDS = ["the future.", "with AI.", "fast.", "with intent."];

function CyclingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % CYCLE_WORDS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={CYCLE_WORDS[index]}
          initial={{ opacity: 0, y: 16, rotateX: -40 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -16, rotateX: 40 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-amber-500 dark:from-indigo-400 dark:to-amber-300"
        >
          {CYCLE_WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const FLOATERS = [
  { Icon: Code2, top: "8%", left: "82%", delay: 0, duration: 7, color: "text-indigo-500 dark:text-indigo-400" },
  { Icon: Terminal, top: "60%", left: "88%", delay: 1.2, duration: 8, color: "text-amber-500 dark:text-amber-400" },
  { Icon: Database, top: "78%", left: "74%", delay: 0.6, duration: 6.5, color: "text-emerald-500 dark:text-emerald-400" },
  { Icon: Sparkles, top: "20%", left: "92%", delay: 1.8, duration: 7.5, color: "text-rose-500 dark:text-rose-400" },
];

export function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  const titleLine1 = "Hi, I'm Lyba Qadir.";

  return (
    <section id="hero" className="min-h-screen relative flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-indigo-600/20 dark:bg-indigo-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-amber-500/15 dark:bg-amber-500/10 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-screen" />
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-30 dark:opacity-50" />
      </div>

      {/* Floating tech icon orbs — fun visual element */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
        {FLOATERS.map(({ Icon, top, left, delay, duration, color }, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ top, left }}
            animate={{ y: [0, -18, 0], x: [0, 10, 0], rotate: [0, 8, 0] }}
            transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className={`w-14 h-14 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-slate-900/10 dark:border-white/10 shadow-lg flex items-center justify-center ${color}`}>
              <Icon size={24} />
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-12 bg-amber-500 dark:bg-amber-400"></span>
            <span className="text-amber-600 dark:text-amber-400 font-medium tracking-wider uppercase text-sm font-['Plus_Jakarta_Sans']">Based in Doha, Qatar</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-['Outfit'] leading-tight mb-6 text-slate-900 dark:text-white" style={{ perspective: 800 }}>
            <span className="block overflow-hidden">
              {titleLine1.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="inline-block mr-[0.3em]"
              >
                I build
              </motion.span>
              <CyclingWord />
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl font-['Plus_Jakarta_Sans'] leading-relaxed"
          >
            A Software Engineering student and full-stack developer who loves crafting intelligent, modern applications. I direct AI coding tools as core partners and pair that with disciplined planning to ship products that matter.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="flex flex-wrap items-center gap-4 relative z-20"
          >
            <motion.a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-shadow duration-300 shadow-[0_0_30px_rgba(15,23,42,0.15)] dark:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              View My Work
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}>
                <ArrowRight size={18} />
              </motion.span>
            </motion.a>
            <div className="flex items-center gap-4 ml-4">
              <a href="https://github.com/Lybaqadir" target="_blank" rel="noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 text-slate-700 dark:text-white hover:bg-slate-900/10 dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                <Github size={24} />
              </a>
              <a href="mailto:60304987@udst.edu.qa" className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 text-slate-700 dark:text-white hover:bg-slate-900/10 dark:hover:bg-white/10 hover:text-amber-600 dark:hover:text-amber-300 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500"
      >
        <span className="text-xs uppercase tracking-widest font-['Plus_Jakarta_Sans']">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
