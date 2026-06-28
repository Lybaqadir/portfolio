import { motion, useScroll, useTransform } from "motion/react";
import { Trophy, Users, Zap } from "lucide-react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgHackathonGroup from "../../assets/images/hackathon-group.webp";
import imgHackathonBadges from "../../assets/images/hackathon-badges.webp";

export function Hackathons() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.02, 1.15]);
  return (
    <section className="py-24 relative bg-slate-50 dark:bg-slate-900 border-y border-slate-900/5 dark:border-white/5 overflow-hidden" ref={sectionRef}>
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-indigo-200/30 dark:from-indigo-900/20 to-transparent pointer-events-none z-10" />

      {/* Massive full-width photo banner */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full mb-16 px-6"
      >
        <div className="container mx-auto">
          <div className="relative aspect-[16/7] md:aspect-[16/6] rounded-[2rem] overflow-hidden border border-slate-900/10 dark:border-white/10 shadow-[0_0_60px_rgba(99,102,241,0.15)] dark:shadow-[0_0_100px_rgba(99,102,241,0.3)] group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-70" />
            <div className="absolute inset-0 bg-indigo-900/15 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700" />
            <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0 -m-10">
              <motion.div
                animate={{
                  x: [0, 14, -10, 0],
                  rotate: [0, 0.6, -0.4, 0],
                }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <ImageWithFallback
                  src={imgHackathonGroup}
                  alt="Snoonu Hackathon team group photo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex items-center gap-3 mb-3"
              >
                <Trophy className="text-amber-400" size={22} />
                <span className="text-amber-400 font-medium tracking-wider uppercase text-sm font-['Plus_Jakarta_Sans']">Competitive Building</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-3xl md:text-5xl lg:text-6xl font-['Outfit'] font-bold text-white"
              >
                Hackathons & Rapid Prototyping
              </motion.h2>
            </div>
          </div>

          {/* Floating badges photo — top-right corner, clear of title and group photo */}
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: 6, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, rotate: 4, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.06, rotate: 0 }}
            className="absolute -top-8 -right-2 md:-top-10 md:right-6 w-28 md:w-40 aspect-[4/5] rounded-2xl overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl z-30 hidden sm:block group"
          >
            <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
            <ImageWithFallback
              src={imgHackathonBadges}
              alt="Snoonu Hackathon participant badges"
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              loading="lazy"
            />
          </motion.div>

          {/* Floating stats card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-6 left-8 md:left-12 bg-white dark:bg-slate-900 border-2 border-amber-400/40 dark:border-white/10 p-5 rounded-2xl shadow-xl flex items-center gap-4 z-30"
          >
            <div className="w-12 h-12 bg-amber-500/15 dark:bg-amber-500/20 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400">
              <Users size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white font-['Outfit']">3 Days</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">Intense Collab</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10"
          >
            I thrive under pressure. Hackathons are where I push my boundaries, collaborate with diverse minds, and transform raw ideas into functional prototypes in a matter of days. It's the ultimate test of software engineering and product strategy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-white dark:bg-white/5 border-2 border-indigo-200 dark:border-white/10 p-8 rounded-3xl relative overflow-hidden group shadow-md dark:shadow-none"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap size={64} className="text-amber-500 dark:text-amber-400" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs font-bold rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse" /> 2026 Edition
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 font-['Outfit']">Snoonu Hackathon</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">Product Concept & Pitch Deck</p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Collaborated in a 3-day high-stakes hackathon to design a product concept improving user discovery of Snoonu's extra services. I led the ideation and product flow, proposing a smart post-order suggestion bar recommending next services based on user behavior. Translated raw user insights into a structured, business-aligned presentation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
