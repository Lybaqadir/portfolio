import { motion } from "motion/react";
import { Mail, Github, MapPin, ArrowUpRight, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="relative pt-24 pb-10 overflow-hidden border-t border-slate-900/5 dark:border-white/5 bg-white dark:bg-slate-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-['Outfit'] font-bold mb-6 text-slate-900 dark:text-white">Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-200 dark:to-amber-500">great.</span></h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
              Currently seeking new opportunities to contribute and grow. If you're looking for a passionate developer who brings energy and results, let's talk.
            </p>
            
            <a 
              href="mailto:60304987@udst.edu.qa" 
              className="inline-flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(15,23,42,0.15)] dark:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              <Mail size={20} /> Say Hello
            </a>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-3">
              Opens your device's default mail app
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 py-10 border-t border-slate-900/10 dark:border-white/10">
          <div className="flex flex-col gap-2">
            <span className="text-slate-900 dark:text-white font-['Outfit'] font-bold text-2xl tracking-wider mb-2">LQ<span className="text-amber-500 dark:text-amber-400">.</span></span>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Software Engineering Student & Full-Stack Developer</p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-slate-900 dark:text-white font-bold mb-2">Contact Info</h4>
            <a href="mailto:60304987@udst.edu.qa" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2 text-sm">
              <Mail size={16} /> 60304987@udst.edu.qa
            </a>
            <a href="tel:+97450518763" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2 text-sm">
              <Phone size={16} /> +974 5051 8763
            </a>
            <div className="text-slate-500 dark:text-slate-400 flex items-center gap-2 text-sm">
              <MapPin size={16} /> Doha, Qatar
            </div>
          </div>
          
          <div className="flex flex-col gap-4 md:items-end">
            <h4 className="text-slate-900 dark:text-white font-bold mb-2">Socials</h4>
            <a href="https://github.com/Lybaqadir" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2 text-sm group">
              GitHub <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            {/* Can add LinkedIn here if she ever makes one again, but she said this replaces LinkedIn */}
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-slate-900/5 dark:border-white/5 text-slate-400 dark:text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Lyba Qadir. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">Designed & Built with <span className="text-rose-500">♥</span> in Doha</p>
        </div>
      </div>
    </footer>
  );
}
