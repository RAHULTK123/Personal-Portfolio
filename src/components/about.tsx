"use client";

import React from "react";
import { motion } from "framer-motion";
import { DraggableCard } from "./physics-provider";
import { Code, TestTube, CheckCircle, ShieldCheck } from "lucide-react";

export const About = () => {
  const focusAreas = [
    { name: "Software Development", icon: <Code className="w-6 h-6 text-blue-400" /> },
    { name: "Manual Testing", icon: <CheckCircle className="w-6 h-6 text-purple-400" /> },
    { name: "Automation Testing", icon: <TestTube className="w-6 h-6 text-cyan-400" /> },
    { name: "Quality Assurance", icon: <ShieldCheck className="w-6 h-6 text-green-400" /> },
  ];

  return (
    <section id="about" className="relative py-24 px-6 md:px-12 flex items-center justify-center min-h-[80vh]">
      <div className="container max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 inline-block">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="relative w-full h-[600px] sm:h-[500px] flex items-center justify-center">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-400/5 rounded-3xl border border-blue-500/10 dark:border-blue-400/10 pointer-events-none" />
          
          <div className="w-full max-w-3xl relative z-10 p-4">
            <DraggableCard className="glass-panel rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-xl border border-white/20">
              <div className="space-y-8 cursor-text">
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-200">
                  <span className="text-2xl font-semibold text-blue-500 dark:text-blue-400">QA/Test Engineer</span> with hands-on experience in software testing and development. Skilled in identifying defects, designing test cases and ensuring software quality.
                </p>

                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <span className="w-2 h-6 bg-purple-500 rounded-full inline-block" />
                    Focus Areas
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {focusAreas.map((area, idx) => (
                      <motion.div
                        key={area.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.3 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                          {area.icon}
                        </div>
                        <span className="font-medium">{area.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce shadow-lg cursor-grab active:cursor-grabbing">
                  Drag Me!
                </div>
              </div>
            </DraggableCard>
          </div>
        </div>
      </div>
    </section>
  );
};
