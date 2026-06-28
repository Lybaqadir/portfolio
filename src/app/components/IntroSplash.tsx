import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const GREETINGS = [
  "Hello",
  "Bonjour",
  "Hola",
  "Ciao",
  "こんにちは",
  "안녕하세요",
  "Привет",
  "नमस्ते",
  "السلام عليكم",
  "ہیلو",
];

const STEP_MS = 220;

function getIsDark(): boolean {
  if (typeof document === "undefined") return true;
  return document.documentElement.classList.contains("dark");
}

export function IntroSplash({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"cycling" | "name" | "exit">("cycling");
  const [isDark] = useState(getIsDark);

  useEffect(() => {
    if (phase !== "cycling") return;

    if (index >= GREETINGS.length - 1) {
      const t = setTimeout(() => setPhase("name"), STEP_MS);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => setIndex((i) => i + 1), STEP_MS);
    return () => clearTimeout(t);
  }, [index, phase]);

  useEffect(() => {
    if (phase !== "name") return;
    const t = setTimeout(() => setPhase("exit"), 1000);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "exit") return;
    const t = setTimeout(onComplete, 900);
    return () => clearTimeout(t);
  }, [phase, onComplete]);

  const isExiting = phase === "exit";
  const solidColor = isDark ? "rgba(2,6,23,1)" : "rgba(255,255,255,1)";
  const transparentColor = isDark ? "rgba(2,6,23,0)" : "rgba(255,255,255,0)";
  const textColorClass = isDark ? "text-white" : "text-slate-900";

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ pointerEvents: isExiting ? "none" : "auto" }}
    >
      {/* Backdrop sits ON TOP of the portfolio (which is already rendered behind),
          starts solid, becomes transparent/blurred as we exit so the real site is revealed */}
      <motion.div
        initial={{ backgroundColor: solidColor }}
        animate={{ backgroundColor: isExiting ? transparentColor : solidColor }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        className="absolute inset-0"
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        animate={{ opacity: isExiting ? 0 : 1, scale: isExiting ? 1.08 : 1 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 text-center px-6"
      >
        <AnimatePresence mode="wait">
          {phase === "cycling" && (
            <motion.div
              key={GREETINGS[index]}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className={`text-5xl md:text-7xl font-['Outfit'] font-bold ${textColorClass}`}
            >
              {GREETINGS[index]}
            </motion.div>
          )}

          {phase !== "cycling" && (
            <motion.div
              key="name"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className={`text-4xl md:text-6xl font-['Outfit'] font-bold mb-3 ${textColorClass}`}>
                Lyba Qadir
              </div>
              <div className="text-amber-500 dark:text-amber-400 font-medium tracking-wider uppercase text-sm md:text-base font-['Plus_Jakarta_Sans']">
                Software Engineer
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
