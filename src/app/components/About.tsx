import { motion, useScroll, useTransform, useInView } from "motion/react";
import { Code2, BrainCircuit, Lightbulb, Rocket } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgAbout from "../../assets/images/about-main.webp";
import imgSecondary from "../../assets/images/about-secondary.webp";

const GREETING = "Hello, I'm Lyba Qadir";
const TYPE_SPEED_MS = 90;

function TypedGreeting({ isVisible }: { isVisible: boolean }) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      // Reset so it types again next time it becomes visible
      setShown("");
      setDone(false);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setShown(GREETING.slice(0, i));
      if (i >= GREETING.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, TYPE_SPEED_MS);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <span className="inline-flex items-baseline">
      {shown}
      <motion.span
        animate={{ opacity: done ? [1, 0] : 1 }}
        transition={{ duration: 0.8, repeat: done ? Infinity : 0, repeatType: "reverse" }}
        className="inline-block w-[3px] md:w-[5px] h-[0.85em] bg-amber-400 ml-2 translate-y-[2px]"
      />
    </span>
  );
}

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const bannerInView = useInView(bannerRef, { margin: "-20% 0px -20% 0px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.18, 1.04, 1.18]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 0.6, 0.85]);

  const traits = [
    {
      icon: <Code2 className="text-indigo-600 dark:text-indigo-400" size={24} />,
      title: "Full-Stack Builder",
      description: "From React and Next.js interfaces to complex Express and FastAPI backends, I enjoy crafting the entire user journey."
    },
    {
      icon: <BrainCircuit className="text-amber-600 dark:text-amber-400" size={24} />,
      title: "AI-Directed Builder",
      description: "I get most of my work done by guiding AI coding tools like Claude, Cursor, and Codex, then rigorously reviewing and verifying their output before it ships."
    },
    {
      icon: <Lightbulb className="text-emerald-600 dark:text-emerald-400" size={24} />,
      title: "Lifelong Learner",
      description: "Driven by curiosity, hackathons, and a genuine desire to create technology that leaves a positive impact on the world."
    },
    {
      icon: <Rocket className="text-rose-600 dark:text-rose-400" size={24} />,
      title: "Ships Fast",
      description: "From idea to working prototype in days, not weeks — proven across multiple hackathons, internships, and side projects."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-6">

        {/* Massive hero banner — photo + animated greeting */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-20"
        >
          <div ref={bannerRef} className="relative aspect-[16/10] md:aspect-[16/8] rounded-[2.5rem] overflow-hidden border border-slate-900/10 dark:border-white/10 shadow-[0_0_60px_rgba(99,102,241,0.15)] dark:shadow-[0_0_100px_rgba(99,102,241,0.3)] group">
            {/* Moving photo */}
            <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0 -m-12">
              <motion.div
                animate={{
                  x: [0, -16, 12, 0],
                  rotate: [0, -0.5, 0.5, 0],
                }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <ImageWithFallback
                  src={imgAbout}
                  alt="Lyba Qadir - Software Engineering Student"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>

            {/* Dark gradient for legibility */}
            <motion.div
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/10 z-10"
            />
            <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay z-10" />

            {/* Animated greeting text on top of photo */}
            <div className="absolute inset-0 flex flex-col items-start justify-end p-8 md:p-14 z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-amber-400 font-medium tracking-wider uppercase text-xs md:text-sm font-['Plus_Jakarta_Sans'] mb-3"
              >
                Software Engineering Student · UDST
              </motion.div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-['Outfit'] font-bold text-white leading-tight">
                <TypedGreeting isVisible={bannerInView} />
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="text-slate-300 text-base md:text-lg mt-3 max-w-md"
              >
                Builder at the intersection of code, AI, and curiosity.
              </motion.p>
            </div>
          </div>

          {/* Secondary floating photo, overlapping the banner */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -8, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.06, rotate: 3 }}
            className="absolute -bottom-10 right-6 md:right-12 w-28 md:w-44 aspect-square rounded-3xl overflow-hidden border-4 border-white dark:border-slate-950 shadow-2xl z-30 hidden sm:block group"
          >
            <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
            <ImageWithFallback
              src={imgSecondary}
              alt="Lyba Qadir"
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              loading="lazy"
            />
          </motion.div>

          {/* Education badge floating bottom-left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -bottom-8 left-6 md:left-12 bg-white dark:bg-slate-900 border-2 border-amber-300 dark:border-white/10 p-5 rounded-2xl shadow-xl flex items-center gap-4 z-30"
          >
            <div className="text-amber-500 dark:text-amber-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">B.S. Software Engineering</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">University of Doha for Science & Technology</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Text + trait cards below the hero banner */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-3xl md:text-4xl font-['Outfit'] font-bold mb-6 text-slate-900 dark:text-white">More than just writing code.</h3>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              <p>
                I'm Lyba, a developer who thrives on the intersection of human creativity and technical execution. For me, software engineering isn't just about syntax—it's about empathy, continuous growth, and architecting solutions with clear intent.
              </p>
              <p>
                Whether I'm containerizing a backend in Docker, displaying Hugging Face models in a UI, or debugging an edge case at a 3-day hackathon, I bring high energy, disciplined planning, and an open mind.
              </p>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 grid sm:grid-cols-2 gap-6">
            {traits.map((trait, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative bg-slate-900/[0.01] dark:bg-white/5 border-2 border-slate-200 dark:border-white/5 hover:border-indigo-300 dark:hover:border-white/20 p-6 rounded-2xl hover:bg-slate-900/[0.03] dark:hover:bg-white/10 transition-colors group overflow-hidden"
              >
                <span className="absolute top-4 right-5 text-4xl font-bold font-['Outfit'] text-slate-900/[0.04] dark:text-white/[0.06] select-none">
                  0{index + 1}
                </span>
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 bg-white dark:bg-white/5 border border-slate-900/5 dark:border-transparent rounded-xl flex items-center justify-center mb-4 relative z-10"
                >
                  {trait.icon}
                </motion.div>
                <h4 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white relative z-10">{trait.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">{trait.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
