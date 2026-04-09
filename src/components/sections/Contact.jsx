import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { contactData } from '../../data/contact';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_name: 'Pranay',
        },
        publicKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      // Reset error status after 5 seconds to allow retry
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white dark:bg-dark-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-blue-500/5 blur-[120px] -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let's <span className="text-blue-600">Connect</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Whether you're looking for a lead backend engineer or just want to discuss distributed systems, I'm always open to new connections.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Contact Information</h3>
              <p className="text-slate-600 dark:text-slate-400">
                I typically respond within 24 hours. Feel free to reach out via email or any of my social profiles.
              </p>
            </div>

            <div className="grid gap-6">
              {contactData.map((item, i) => (
                <div key={i} className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-dark-secondary border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-all group">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-slate-900 dark:text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-slate-50 dark:bg-dark-secondary rounded-3xl border border-slate-200 dark:border-slate-800 relative shadow-sm"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest pl-1">Full Name</label>
                <input 
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 focus:border-blue-500 outline-none transition-all dark:text-white placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest pl-1">Email Address</label>
                <input 
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 focus:border-blue-500 outline-none transition-all dark:text-white placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-widest pl-1">Message</label>
                <textarea 
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I'd like to collaborate on..." 
                  rows="4"
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 focus:border-blue-500 outline-none transition-all dark:text-white placeholder:text-slate-400"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center space-x-2 ${
                  status === 'success' 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20 active:scale-95 disabled:opacity-70 disabled:hover:bg-blue-600'
                }`}
              >
                <AnimatePresence mode="wait">
                  {status === 'loading' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                    />
                  )}
                  {status === 'success' && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                    > 
                      Sent Successfully!
                    </motion.span>
                  )}
                  {status === 'idle' && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
