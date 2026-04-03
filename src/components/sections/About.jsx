import { skills } from '../../data/skills';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50/50 dark:bg-dark-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold border-l-4 border-blue-500 pl-4">About Me</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              I'm a passionate developer with a knack for creating intuitive and efficient solutions. With a background in Computer Science, I've spent the last few years honing my skills in modern web technologies.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              My approach blends technical rigor with a deep focus on user experience. I believe that great software isn't just about code—it's about solving real problems for real people.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-semibold capitalize bg-blue-500/10 text-blue-500 px-3 py-1 rounded inline-block">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map(skill => (
                    <li key={skill} className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
