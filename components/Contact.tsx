'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Globe, Code, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const url = "https://docs.google.com/forms/d/e/1FAIpQLScL6ruXsjahDtqk5ezGFZUQaZyn1Od2PqhvK8Le_aaJhuYPMQ/formResponse";
    const googleFormData = new URLSearchParams();
    googleFormData.append("entry.1745339948", name);
    googleFormData.append("entry.161022685", email);
    googleFormData.append("entry.569225861", message);

    try {
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: googleFormData
      });
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In <span className="gradient-text">Touch</span></h2>
        <p className="text-zinc-400 max-w-lg mx-auto text-lg">
          Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        {/* Left Column: Socials Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-2 flex flex-col gap-6"
        >
          <div className="glass p-6 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-white mb-2">Contact Info</h3>
            <a 
              href="mailto:akashchemj@gmail.com" 
              className="flex items-center gap-3 text-zinc-400 hover:text-purple-400 transition-colors text-sm"
            >
              <Mail size={18} className="text-purple-400" />
              akashchemj@gmail.com
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-4">
            <a 
              href="mailto:akashchemj@gmail.com" 
              className="p-4 glass hover:text-purple-400 hover:border-purple-500/50 transition-all cursor-pointer"
              title="Email me directly"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/akash-chem-j-863925272" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 glass hover:text-purple-400 hover:border-purple-500/50 transition-all"
              title="LinkedIn Profile"
            >
              <Globe size={20} />
            </a>
            <a 
              href="https://instagram.com/akash_c.j" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 glass hover:text-purple-400 hover:border-purple-500/50 transition-all"
              title="Instagram Profile"
            >
              <Code size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-3 glass p-8"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="bg-purple-600 hover:bg-purple-500 disabled:bg-purple-800 text-white font-medium py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Success & Error State Notifications */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle2 size={20} className="shrink-0" />
                  <p className="text-sm">Message sent successfully! I'll get back to you soon.</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl flex items-center gap-3"
                >
                  <AlertCircle size={20} className="shrink-0" />
                  <p className="text-sm">Failed to send message. Please try again or email directly.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
