import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Terminal from './components/sections/Terminal';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Terminal />
        <Contact />
      </main>
      <footer className="py-12 border-t dark:border-slate-800 text-center text-sm text-slate-500">
        <p>© 2026 Pranay. Built with React and Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
