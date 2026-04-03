import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to Pranay\'s Terminal Experience v1.0.0' },
    { type: 'output', content: 'Type "help" to see available commands.' },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isTyping) {
      inputRef.current?.focus();
    }
  }, [isTyping]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const commands = {
    help: 'Available commands: whoami, projects, skills, contact, clear',
    whoami: 'Pranay Kumar — Senior Backend Engineer. I specialize in building scalable distributed systems, event-driven architectures (Kafka), and high-performance APIs (Node.js/NestJS).',
    projects: '1. Full Stack Deployment System (GCP, Nginx, CI/CD)\n2. KYC Backend System (NestJS, Kafka, Redis)',
    skills: 'Backend: Node.js, NestJS, Go, Python\nDatabases: PostgreSQL, MongoDB, Redis\nInfrastructure: Docker, Kubernetes, GCP, AWS, Kafka',
    contact: 'Email: hello@pranay.dev\nGitHub: github.com/pranay\nLinkedIn: linkedin.com/in/pranay',
    clear: 'CLEAR',
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { type: 'input', content: cmd }];
      
      if (cmd === 'clear') {
        setHistory([]);
      } else if (commands[cmd]) {
        setIsTyping(true);
        setTimeout(() => {
          setHistory([...newHistory, { type: 'output', content: commands[cmd] }]);
          setIsTyping(false);
        }, 300);
      } else if (cmd !== '') {
        setHistory([...newHistory, { type: 'output', content: `Command not found: ${cmd}. Type "help" for assistance.` }]);
      }

      setInput('');
    }
  };

  return (
    <section id="terminal" className="py-24 px-6 bg-slate-50 dark:bg-dark-primary">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-900"
        >
          {/* Terminal Header */}
          <div className="bg-slate-800 px-5 py-3 flex items-center justify-between border-b border-slate-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
              bash — zsh — 80x24
            </div>
            <div className="w-12"></div>
          </div>

          {/* Terminal Body */}
          <div 
            ref={scrollRef}
            onClick={() => inputRef.current?.focus()}
            className="p-8 h-[450px] overflow-y-auto font-mono text-sm md:text-base cursor-text selection:bg-blue-500/30 selection:text-white"
          >
            <AnimatePresence mode="popLayout">
              {history.map((line, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mb-2 leading-relaxed"
                >
                  {line.type === 'input' ? (
                    <div className="flex items-center">
                      <span className="text-emerald-400 mr-2 font-bold">➜</span>
                      <span className="text-blue-400 mr-2 font-bold">~</span>
                      <span className="text-slate-100">{line.content}</span>
                    </div>
                  ) : (
                    <div className="text-slate-300 whitespace-pre-wrap pl-6 border-l border-slate-800">
                      {line.content}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Current Input Line */}
            <div className="flex items-center mt-2 group">
              <span className="text-emerald-400 mr-2 font-bold animate-pulse">➜</span>
              <span className="text-blue-400 mr-2 font-bold">~</span>
              <input
                ref={inputRef}
                type="text"
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                disabled={isTyping}
                className="bg-transparent border-none outline-none text-slate-100 flex-1 caret-blue-500 py-0 px-0"
                spellCheck="false"
              />
            </div>
            {isTyping && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-slate-500 italic text-xs pl-6 mt-1"
              >
                processing command...
              </motion.div>
            )}
          </div>
        </motion.div>
        
        <p className="mt-6 text-center text-slate-500 dark:text-slate-400 text-xs font-mono">
          Terminal UI v1.0 • Built with Framer Motion • Click terminal to focus
        </p>
      </div>
    </section>
  );
};

export default Terminal;
