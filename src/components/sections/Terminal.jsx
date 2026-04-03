import { useState } from 'react';

const Terminal = () => {
  const [commands, setCommands] = useState([
    { type: 'input', text: 'whoami' },
    { type: 'output', text: 'developer' },
    { type: 'input', text: 'cat skills.txt' },
    { type: 'output', text: 'React, Node.js, Tailwind, TypeScript, AWS...' },
  ]);

  return (
    <section id="terminal" className="py-24 px-6 bg-slate-900 text-slate-100 font-mono">
      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-slate-700">
        <div className="bg-slate-800 px-4 py-2 flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="ml-4 text-xs font-semibold text-slate-400">bash — 80x24</div>
        </div>
        <div className="p-6 space-y-2 h-[400px] overflow-y-auto bg-slate-950/80 backdrop-blur-sm">
          <div className="text-slate-400">Last login: Fri Apr 03 21:22:24 2026</div>
          {commands.map((cmd, i) => (
            <div key={i}>
              {cmd.type === 'input' ? (
                <div className="flex">
                  <span className="text-green-400 mr-2">$</span>
                  <span>{cmd.text}</span>
                </div>
              ) : (
                <div className="text-slate-400 pl-4">
                  {cmd.text}
                </div>
              )}
            </div>
          ))}
          <div className="flex items-center">
            <span className="text-green-400 mr-2">$</span>
            <div className="w-2 h-5 bg-blue-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
