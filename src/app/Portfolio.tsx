import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Hackathons } from "./components/Hackathons";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { IntroSplash } from "./components/IntroSplash";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Portfolio() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showIntro]);

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-50 font-['Plus_Jakarta_Sans'] selection:bg-indigo-500/30 overflow-x-hidden relative transition-colors duration-500">
      {showIntro && <IntroSplash onComplete={() => setShowIntro(false)} />}

      {/* Ambient vibrant background — dark mode only */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden hidden dark:block">
        <motion.div
          className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[140px]"
          animate={{ x: [0, 60, -30, 0], y: [0, 40, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[20%] right-[-10%] w-[700px] h-[700px] bg-fuchsia-600/15 rounded-full blur-[160px]"
          animate={{ x: [0, -50, 30, 0], y: [0, 30, -40, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[20%] w-[650px] h-[650px] bg-amber-500/10 rounded-full blur-[150px]"
          animate={{ x: [0, 40, -60, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[130px]"
          animate={{ x: [0, -40, 20, 0], y: [0, 20, -30, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Custom Cursor Glow */}
      <motion.div 
        className="pointer-events-none fixed top-0 left-0 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-[100px] z-50 mix-blend-multiply dark:mix-blend-screen"
        animate={{
          x: mousePos.x - 192,
          y: mousePos.y - 192,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Hackathons />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
