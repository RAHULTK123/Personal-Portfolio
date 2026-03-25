"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import { FloatingCard } from "./physics-provider";

const certs = [
  {
    title: "Upcode AI Bootcamp",
    issuer: "Upcode",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "SDET Automation Engineer",
    issuer: "Certification Program",
    color: "from-purple-500 to-pink-500"
  }
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-[100%] blur-3xl pointer-events-none" />
      
      <div className="container max-w-4xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-400 inline-block">
            Certifications
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {certs.map((cert, index) => (
            <FloatingCard 
              key={index} 
              delay={index * 0.3}
              className="flex-1 border-t border-l border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 relative group overflow-hidden"
            >
              {/* Animated hover gradient */}
              <div 
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${cert.color}`} 
              />
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mt-2 mb-2">
                  <Award className="w-10 h-10 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r text-foreground group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 font-medium pb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-500" />
                  Issued by {cert.issuer}
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
};
