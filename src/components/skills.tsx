"use client";

import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  { name: "Python", category: "Programming Languages" },
  { name: "Java", category: "Programming Languages" },
  { name: "MySQL", category: "Database" },
  { name: "GitHub", category: "Tools & Frameworks" },
  { name: "Selenium", category: "Tools & Frameworks" },
  { name: "Postman", category: "Tools & Frameworks" },
  { name: "JIRA", category: "Tools & Frameworks" },
  { name: "TestNG", category: "Tools & Frameworks" },
  { name: "MS Office", category: "Tools & Frameworks" },
  { name: "VS Code", category: "IDEs" },
  { name: "IntelliJ IDEA", category: "IDEs" },
  { name: "Eclipse", category: "IDEs" },
  { name: "Communication", category: "Soft Skills" },
  { name: "Collaboration", category: "Soft Skills" },
  { name: "Problem Solving", category: "Soft Skills" },
  { name: "Adaptability", category: "Soft Skills" },
];

const categoryColors: Record<string, string> = {
  "Programming Languages": "bg-blue-100 dark:bg-blue-500/20 border-blue-200 dark:border-blue-500/40 text-blue-700 dark:text-blue-400",
  "Database": "bg-teal-100 dark:bg-teal-500/20 border-teal-200 dark:border-teal-500/40 text-teal-700 dark:text-teal-400",
  "Tools & Frameworks": "bg-purple-100 dark:bg-purple-500/20 border-purple-200 dark:border-purple-500/40 text-purple-700 dark:text-purple-400",
  "IDEs": "bg-cyan-100 dark:bg-cyan-500/20 border-cyan-200 dark:border-cyan-500/40 text-cyan-700 dark:text-cyan-400",
  "Soft Skills": "bg-green-100 dark:bg-green-500/20 border-green-200 dark:border-green-500/40 text-green-700 dark:text-green-400",
};

export const Skills = () => {
  // Group skills by category
  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative min-h-screen flex items-center justify-center">
      <div className="container max-w-6xl mx-auto flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16 z-10 relative"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 inline-block">
            Skills & Expertise
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {Object.entries(groupedSkills).map(([category, skills], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-3xl border border-black/5 dark:border-white/20 shadow-xl hover:-translate-y-2 transition-transform duration-300 bg-white/50 dark:bg-transparent"
            >
              <h3 className="text-xl font-bold mb-6 text-foreground">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold border shadow-sm ${categoryColors[category] || categoryColors["Soft Skills"]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
