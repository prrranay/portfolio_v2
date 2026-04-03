const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 blur-[120px] -z-10"></div>
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-dark-secondary border border-transparent hover:border-blue-500/30 transition-all group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-bold mb-1">Email</h4>
            <p className="text-sm text-slate-500">hello@portfolio.com</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-dark-secondary border border-transparent hover:border-blue-500/30 transition-all group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h4 className="font-bold mb-1">Github</h4>
            <p className="text-sm text-slate-500">github.com/pranay</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-dark-secondary border border-transparent hover:border-blue-500/30 transition-all group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-bold mb-1">LinkedIn</h4>
            <p className="text-sm text-slate-500">linkedin.com/in/pranay</p>
          </div>
        </div>

        <form className="max-w-2xl mx-auto space-y-4 pt-12">
          <div className="grid md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-dark-secondary border border-slate-200 dark:border-slate-800 focus:border-blue-500 outline-none transition-all"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-dark-secondary border border-slate-200 dark:border-slate-800 focus:border-blue-500 outline-none transition-all"
            />
          </div>
          <textarea 
            placeholder="Message" 
            rows="5"
            className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-dark-secondary border border-slate-200 dark:border-slate-800 focus:border-blue-500 outline-none transition-all"
          ></textarea>
          <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25 active:scale-95">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
