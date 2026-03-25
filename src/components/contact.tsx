"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle } from "lucide-react";

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    setIsSubmitted(false);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      await fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSeoTEJRWnewX6PhKOGLsc8TJNymqiGZ3GrTuH45tA6nz2QuyA/formResponse", {
        method: "POST",
        mode: "no-cors",
        body: formData
      });
      setIsSubmitted(true);
      form.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Form submission error", error);
      setIsError(true);
      setTimeout(() => setIsError(false), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16 relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 inline-block">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 relative z-10">
          
          {/* Contact Information Cards */}
          <div className="flex-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-panel p-6 rounded-2xl flex items-center gap-6 border-l-4 border-l-blue-500 hover:border-l-blue-400 transition-colors"
            >
              <div className="p-4 rounded-full bg-blue-500/10">
                <Phone className="text-blue-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Phone</p>
                <a href="tel:+919400420321" className="text-lg font-semibold text-foreground hover:text-blue-400 transition-colors">
                  +91-9400420321
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel p-6 rounded-2xl flex items-center gap-6 border-l-4 border-l-purple-500 hover:border-l-purple-400 transition-colors"
            >
              <div className="p-4 rounded-full bg-purple-500/10">
                <Mail className="text-purple-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Email</p>
                <a href="mailto:tkrahul75@gmail.com" className="text-lg font-semibold text-foreground hover:text-purple-400 transition-colors">
                  tkrahul75@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-panel p-6 rounded-2xl flex items-center gap-6 border-l-4 border-l-cyan-500 hover:border-l-cyan-400 transition-colors"
            >
              <div className="p-4 rounded-full bg-cyan-500/10">
                <Linkedin className="text-cyan-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">LinkedIn</p>
                <a href="https://www.linkedin.com/in/rahul-t-k/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-foreground hover:text-cyan-400 transition-colors">
                  linkedin.com/in/rahul-t-k
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-panel p-6 rounded-2xl flex items-center gap-6 border-l-4 border-l-gray-500 hover:border-l-gray-400 transition-colors"
            >
              <div className="p-4 rounded-full bg-gray-500/10">
                <Github className="text-gray-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">GitHub</p>
                <a href="https://github.com/RAHULTK123" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-foreground hover:text-gray-300 transition-colors">
                  github.com/RAHULTK123
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 glass-panel p-8 md:p-10 rounded-3xl relative"
          >
            {/* Form decorative glows */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
            
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="entry.1529060254"
                  required
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-600"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="entry.1107751672"
                  required
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-600"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="entry.1440802280"
                  required
                  rows={4}
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none placeholder:text-gray-500 dark:placeholder:text-gray-600"
                  placeholder="Hello Rahul, I'd like to discuss a project..."
                />
              </div>

              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">Thank you! Your message has been sent successfully. I'll get back to you soon.</p>
                </motion.div>
              )}
              
              {isError && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">Oops! Something went wrong. Please try again later or contact me directly via email.</p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group py-4 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : isSubmitted ? (
                  <>Sent Successfully <CheckCircle2 className="w-5 h-5 text-green-300" /></>
                ) : (
                  <>Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
