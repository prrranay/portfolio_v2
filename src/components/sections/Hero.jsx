import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-slate-50 dark:bg-dark-primary">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-4xl mx-auto text-center space-y-10 z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-500 rounded-full text-xs font-bold tracking-widest uppercase border border-blue-500/20 shadow-sm"
        >
          Senior Backend Engineer
        </motion.div>

        <div className="space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Pranay <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">Kumar</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            I build scalable backend systems with event-driven architecture and production-ready deployments.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-slate-500 dark:text-slate-400 font-mono tracking-wide"
          >
            Node.js • NestJS • Distributed Systems
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 pt-4"
        >
          <a 
            href="#projects" 
            className="px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/10 dark:shadow-white/5"
          >
            View Projects
          </a>
          <a 
            href="https://github.com/pranay" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full font-bold transition-all hover:bg-slate-50 dark:hover:bg-slate-700 hover:scale-105 active:scale-95 shadow-sm"
          >
            GitHub
          </a>
          <a 
            href="#contact" 
            className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 active:scale-95"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Subtle bottom gradient sweep */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </section>
  );
};

export default Hero;
