"use client";

import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B.E. Computer Science & Engineering",
    institution: "Vivekananda College of Engineering and Technology, Puttur, Karnataka",
    period: "2021 – 2025",
    score: "CGPA: 8.44",
    color: "from-blue-500 to-cyan-500",
  },
  {
    degree: "12th Science (PCMC)",
    institution: "Rotary P.U College, Sullia, Karnataka",
    period: "2019 – 2021",
    score: "Percentage: 80.83%",
    color: "from-purple-500 to-blue-500",
  },
  {
    degree: "SSLC",
    institution: "Vivekananda English Medium High School, Vinobhanagara, Karnataka",
    period: "2018 – 2019",
    score: "Percentage: 73.60%",
    color: "from-cyan-500 to-teal-500",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 inline-block">
            Education
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 pl-8 space-y-12">
          {educationData.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative glass-panel rounded-2xl p-6 shadow-xl border !border-l-4 border-black/5 dark:border-white/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all"
              style={{ borderLeftColor: `var(--color-neon-${item.color.includes('cyan') ? 'cyan' : 'blue'})` }}
            >
              {/* Timeline Node */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: index * 0.2 + 0.3 }}
                className={`absolute -left-[41px] top-8 w-6 h-6 rounded-full bg-gradient-to-r ${item.color} shadow-[0_0_15px_rgba(255,255,255,0.5)] border-4 border-background`}
              />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {item.degree}
                </h3>
                <span className="inline-block px-4 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm font-medium text-cyan-700 dark:text-cyan-300 whitespace-nowrap">
                  {item.period}
                </span>
              </div>
              
              <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-4">{item.institution}</h4>
              
              <div className="inline-block px-4 py-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 font-semibold text-purple-700 dark:text-purple-400">
                {item.score}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
