import { motion, useScroll, useTransform } from "motion/react";
import { Briefcase, Calendar, MapPin, Sparkles, Award, Code2, GraduationCap, Heart } from "lucide-react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgExp1 from "../../assets/images/experience-alexmind.webp";
import imgExp4 from "../../assets/images/experience-websummit.webp";
import imgExp5 from "../../assets/images/experience-volunteering.webp";

function ParallaxPhoto({
  src,
  alt,
  fit,
  className,
}: {
  src: string;
  alt: string;
  fit: "cover" | "contain";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-24, 24]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.02, 1.1]);

  return (
    <div ref={ref} className={`relative w-full h-full overflow-hidden ${className ?? ""}`}>
      <motion.div style={{ y, scale }} className="absolute inset-0 -m-4">
        <ImageWithFallback
          src={src}
          alt={alt}
          className={fit === "contain" ? "w-full h-full object-contain p-6" : "w-full h-full object-cover"}
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "AlexMind",
      location: "Doha, Qatar (Hybrid)",
      period: "Oct 2025 - Feb 2026",
      icon: Briefcase,
      achievements: [
        "Directed AI coding tools to build features quickly, while staying hands-on with architecture and verifying every output.",
        "Developed core features of an AI-powered document management platform using Next.js, Express, Prisma, and PostgreSQL.",
        "Built production AI features integrating OpenAI and Gemini APIs to support document summarization and AI generation."
      ],
      hasImage: true,
      image: imgExp1,
      imageFit: "contain" as const,
      imageCaption: "Certificate of Internship Completion"
    },
    {
      role: "MLOps / AI Engineer",
      company: "Chorate AI",
      location: "Doha, Qatar (Remote)",
      period: "Oct 2025 - Feb 2026",
      icon: Code2,
      achievements: [
        "Utilized Docker to build, tag, push, and pull container images, enabling streamlined deployment workflows.",
        "Developed backend services using FastAPI to connect frontend interfaces with backend logic.",
        "Contributed to a prototype platform for one-click LLM deployment and JupyterLab environments.",
        "Built a UI feature displaying a curated list of Hugging Face models."
      ],
      hasImage: false,
      image: null,
      imageFit: "cover" as const,
      imageCaption: null
    },
    {
      role: "Peer Tutoring",
      company: "University of Doha for Science & Technology",
      location: "Doha, Qatar",
      period: "May 2025 - July 2025",
      icon: GraduationCap,
      achievements: [
        "Conducted one-on-one tutoring sessions for Intro to Data and Cybersecurity courses.",
        "Clarified core concepts, guided students through lab exercises and quizzes.",
        "Strengthened communication, mentoring, and interpersonal skills through consistent student engagement."
      ],
      hasImage: false,
      image: null,
      imageFit: "cover" as const,
      imageCaption: null
    },
    {
      role: "Volunteer",
      company: "Web Summit Qatar 2026",
      location: "Doha, Qatar",
      period: "2026",
      icon: Sparkles,
      achievements: [
        "Volunteered at Web Summit Qatar, supporting the Investor to Startup Meetings track.",
        "Assisted attendees, speakers, and exhibitors to ensure smooth on-the-ground event operations.",
        "Gained exposure to the startup and investor ecosystem at one of the region's largest tech conferences."
      ],
      hasImage: true,
      image: imgExp4,
      imageFit: "cover" as const,
      imageCaption: null
    },
    {
      role: "Volunteer",
      company: "Charity Event",
      location: "Doha, Qatar",
      period: "2026",
      icon: Heart,
      achievements: [
        "Volunteered at a charity bazaar, managing a donation table and engaging visitors.",
        "Supported a cause where 20% of proceeds were donated, helping coordinate sales and outreach.",
        "Contributed time to community-oriented work alongside academic and professional commitments."
      ],
      hasImage: true,
      image: imgExp5,
      imageFit: "cover" as const,
      imageCaption: null
    }
  ];

  return (
    <section id="experience" className="py-32 relative bg-white dark:bg-slate-950 overflow-hidden" ref={containerRef}>
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-300/15 dark:bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-300/15 dark:bg-amber-900/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-amber-500 dark:text-amber-400" size={24} />
            <span className="text-amber-600 dark:text-amber-400 font-medium tracking-wider uppercase text-sm font-['Plus_Jakarta_Sans']">Career & Impact</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-['Outfit'] font-bold mb-6 text-slate-900 dark:text-white">Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-400 dark:from-white dark:to-slate-500">Journey.</span></h2>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-2xl">Building scalable systems, integrating AI models, and mentoring the next generation of engineers.</p>
        </motion.div>

        <div className="space-y-32">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const isCompact = exp.role === "Volunteer";

            if (!exp.hasImage) {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative max-w-3xl mx-auto"
                >
                  <div className="bg-slate-900/[0.02] dark:bg-white/5 border-2 border-indigo-200 dark:border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl shadow-md dark:shadow-2xl relative overflow-hidden group hover:border-indigo-400 dark:hover:border-indigo-500/30 transition-colors duration-500">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/50 to-amber-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -right-10 -top-10 opacity-[0.04] dark:opacity-5 text-slate-900 dark:text-white">
                      <Icon size={180} />
                    </div>

                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-900/10 dark:border-white/10 shadow-inner text-amber-600 dark:text-amber-400">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white font-['Outfit'] mb-1">{exp.role}</h3>
                        <div className="text-indigo-600 dark:text-indigo-400 font-medium text-lg">{exp.company}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-700 dark:text-slate-300 mb-8 p-4 bg-slate-900/[0.03] dark:bg-black/20 rounded-2xl border border-slate-900/5 dark:border-white/5 relative z-10">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-slate-400 dark:text-slate-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-slate-400 dark:text-slate-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 relative z-10">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="text-slate-700 dark:text-slate-300 leading-relaxed flex items-start">
                          <span className="text-indigo-500 dark:text-indigo-400 mr-3 mt-1 block">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            }

            if (isCompact) {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row gap-0 items-stretch bg-slate-900/[0.01] dark:bg-white/[0.03] border-2 border-amber-200 dark:border-white/10 rounded-3xl overflow-hidden hover:border-amber-400 dark:hover:border-amber-500/30 transition-colors duration-500 group">
                    <div className="relative w-full md:w-1/2 h-96 md:h-auto md:min-h-[420px] flex-shrink-0 overflow-hidden">
                      <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                      <ParallaxPhoto src={exp.image!} alt={exp.role + " " + exp.company} fit="cover" />
                    </div>
                    <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center border border-slate-900/10 dark:border-white/10 text-amber-600 dark:text-amber-400 flex-shrink-0">
                          <Icon size={18} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white font-['Outfit']">{exp.company}</h3>
                        <span className="text-xs uppercase tracking-wider text-amber-700 dark:text-amber-400/80 bg-amber-500/10 px-2.5 py-1 rounded-full ml-auto">{exp.role}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400 mb-5">
                        <div className="flex items-center gap-1.5"><Calendar size={13} /><span>{exp.period}</span></div>
                        <div className="flex items-center gap-1.5"><MapPin size={13} /><span>{exp.location}</span></div>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed flex items-start">
                            <span className="text-amber-600 dark:text-amber-400 mr-2.5 mt-1 block">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
            <div key={index} className="relative">
              <div className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Section */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full lg:w-1/2"
                >
                  <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.08)] dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-slate-900/10 dark:border-white/10 group ${exp.imageFit === "contain" ? "bg-slate-100 dark:bg-slate-900" : ""}`}>
                    {exp.imageFit === "cover" && (
                      <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                    )}
                    <ParallaxPhoto src={exp.image!} alt={exp.role} fit={exp.imageFit} />
                    <div className="absolute inset-0 border border-slate-900/5 dark:border-white/5 rounded-3xl z-20 pointer-events-none" />
                  </div>
                  {exp.imageCaption && (
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-3 text-center">{exp.imageCaption}</p>
                  )}
                </motion.div>
                
                {/* Text Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  className="w-full lg:w-1/2"
                >
                  <div className="bg-slate-900/[0.02] dark:bg-white/5 border-2 border-indigo-200 dark:border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-xl shadow-md dark:shadow-2xl relative overflow-hidden group hover:border-indigo-400 dark:hover:border-indigo-500/30 transition-colors duration-500">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/50 to-amber-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-900/10 dark:border-white/10 shadow-inner text-amber-600 dark:text-amber-400">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white font-['Outfit'] mb-1">{exp.role}</h3>
                        <div className="text-indigo-600 dark:text-indigo-400 font-medium text-lg">{exp.company}</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-slate-700 dark:text-slate-300 mb-8 p-4 bg-slate-900/[0.03] dark:bg-black/20 rounded-2xl border border-slate-900/5 dark:border-white/5">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-slate-400 dark:text-slate-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-slate-400 dark:text-slate-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-4">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="text-slate-700 dark:text-slate-300 leading-relaxed flex items-start">
                          <span className="text-indigo-500 dark:text-indigo-400 mr-3 mt-1 block">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

              </div>
              
              {/* Connecting Line between sections (except last) */}
              {index !== experiences.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[100%] h-32 w-px bg-gradient-to-b from-indigo-500/30 to-transparent" />
              )}
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
