import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University Of Doha Science & Technology",
      location: "Doha, Qatar",
      period: "Aug 2023 - Expected 2027",
      icon: <GraduationCap className="text-indigo-600 dark:text-indigo-400" size={24} />
    },
    {
      degree: "AS Level (Grade 12)",
      institution: "English Modern School",
      location: "Doha, Qatar",
      period: "Aug 2022 - July 2023",
      icon: <BookOpen className="text-amber-600 dark:text-amber-400" size={24} />
    }
  ];

  return (
    <section className="py-24 relative bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-['Outfit'] font-bold mb-4 text-slate-900 dark:text-white">Academic Background</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Building a strong foundation in software engineering principles.</p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-white/5 border-2 border-indigo-200 dark:border-white/10 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-start md:items-center hover:border-indigo-400 dark:hover:bg-white/10 transition-colors shadow-md dark:shadow-none"
            >
              <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-900/10 dark:border-white/5 shrink-0">
                {edu.icon}
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-['Outfit'] mb-1">{edu.degree}</h3>
                <div className="text-lg text-slate-600 dark:text-slate-300 font-medium">{edu.institution}</div>
              </div>
              
              <div className="md:text-right shrink-0">
                <div className="text-amber-600 dark:text-amber-400 font-medium mb-1">{edu.period}</div>
                <div className="text-slate-500 dark:text-slate-400 text-sm">{edu.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
