"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FloatingCard } from "./physics-provider";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 px-6 md:px-12">
      {/* Decorative gradient blur background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="container relative z-10 max-w-4xl mx-auto">
        <FloatingCard className="w-full relative overflow-hidden text-center md:text-left shadow-2xl shadow-blue-500/10">
          <div className="absolute top-0 right-0 p-4 opacity-50 hidden md:block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 border-2 border-dashed border-gray-400/20 rounded-full"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
            {/* Profile Picture */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-48 h-48 sm:w-56 sm:h-56 shrink-0 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_40px_rgba(14,165,233,0.3)] bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center backdrop-blur-sm"
            >
              <Image 
                src="/profile.png" 
                alt="Rahul T K" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

            <div className="flex-1 space-y-4 text-center md:text-left">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl text-cyan-400 font-medium tracking-wide"
              >
                Hello, I'm
              </motion.h2>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 drop-shadow-sm"
              >
                Rahul T K
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl text-gray-300 dark:text-gray-400 font-medium"
              >
                Software Tester | QA/Test Engineer | CSE Graduate
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-400"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Bengaluru, India
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-4 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300"
              >
                Passionate about creating innovative solutions and delivering quality software. Ready to contribute to dynamic projects and grow in the tech industry.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
              >
                <a href="#projects" className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] transition-all hover:-translate-y-1">
                  View My Work
                </a>
                <a href="#contact" className="px-6 py-3 rounded-full border border-purple-500/50 hover:bg-purple-500/10 text-foreground font-medium transition-all hover:-translate-y-1">
                  Get In Touch
                </a>
                <a href="https://drive.google.com/file/d/1jB5eJ1syzSxKlUqj4l2eXoxWHCHGHik8/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-foreground font-medium border border-white/10 transition-all hover:-translate-y-1">
                  Download Resume
                </a>
              </motion.div>
            </div>
          </div>
        </FloatingCard>


      </div>
    </section>
  );
};
