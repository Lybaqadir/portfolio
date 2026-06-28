import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-900/5 dark:border-white/5 py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" onClick={(e) => scrollToSection(e, 'hero')} className="font-['Outfit'] font-bold text-2xl tracking-widest text-slate-900 dark:text-white group">
          LQ<span className="text-amber-500 dark:text-amber-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">.</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8 bg-slate-900/5 dark:bg-white/5 px-8 py-3 rounded-full border border-slate-900/10 dark:border-white/10 backdrop-blur-md">
          {links.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-amber-500 dark:after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300 pb-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 text-slate-700 dark:text-white hover:bg-slate-900/10 dark:hover:bg-white/10 transition-colors"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </motion.div>
          </button>

          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="inline-flex items-center justify-center text-sm font-medium px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:scale-105 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] border border-indigo-400/30">
            Contact Me
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 text-slate-700 dark:text-white"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="text-slate-900 dark:text-white w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-900/10 dark:border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          {links.map(link => (
            <a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
