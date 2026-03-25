"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 glass-panel py-12 mt-12 overflow-hidden">
      {/* Decorative gradient blur background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold tracking-tight">Rahul T K</h2>
            <p className="text-cyan-400 font-medium mt-1">CSE Graduate | QA/Test Engineer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <a 
              href="https://www.linkedin.com/in/rahul-t-k/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            
            <a 
              href="https://github.com/RAHULTK123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 hover:text-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
            >
              <Github className="w-6 h-6" />
            </a>

            <a 
              href="mailto:tkrahul75@gmail.com" 
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-sm text-gray-500 mt-8"
          >
            © 2026 Rahul T K. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
