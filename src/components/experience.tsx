"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { FloatingCard } from "./physics-provider";

const experiences = [
  {
    role: "Software Tester",
    company: "Shloka Solutions, Bengaluru",
    period: "June 2025 – Present",
    icon: <Briefcase className="w-8 h-8 text-blue-400" />,
    responsibilities: [
      "Executed manual & automated tests across web/mobile apps",
      "Identified and resolved defects with developers",
      "Implemented testing strategies",
      "Documented test cases and testing workflows"
    ],
    tech: ["Manual Testing", "Automation Testing", "QA", "Bug Tracking", "Collaboration"],
    colorClasses: {
      borderT: "border-t-blue-500",
      shadowHover: "hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
      iconBg: "bg-blue-100 dark:bg-blue-500/10",
      iconBorder: "border-blue-200 dark:border-blue-500/20",
      companyText: "text-blue-700 dark:text-blue-400",
      dotBg: "bg-blue-500",
      techBg: "bg-blue-100 dark:bg-blue-900/30",
      techText: "text-blue-800 dark:text-blue-300",
      techBorder: "border-blue-300 dark:border-blue-500/30"
    }
  },
  {
    role: "Application Developer – Web & Mobile",
    company: "Rooman Technologies, Bangalore",
    period: "Sept 2024 – Mar 2025",
    type: "Internship",
    icon: <GraduationCap className="w-8 h-8 text-purple-400" />,
    responsibilities: [
      "Implemented CI/CD pipelines",
      "Gained experience in web application development",
      "Worked across full project lifecycle",
      "Learned development workflows and best practices"
    ],
    tech: ["CI/CD", "Web Development", "Mobile Development", "DevOps"],
    colorClasses: {
      borderT: "border-t-purple-500",
      shadowHover: "hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]",
      iconBg: "bg-purple-100 dark:bg-purple-500/10",
      iconBorder: "border-purple-200 dark:border-purple-500/20",
      companyText: "text-purple-700 dark:text-purple-400",
      dotBg: "bg-purple-500",
      techBg: "bg-purple-100 dark:bg-purple-900/30",
      techText: "text-purple-800 dark:text-purple-300",
      techBorder: "border-purple-300 dark:border-purple-500/30"
    }
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 relative">
      <div className="container max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16 relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 inline-block">
            Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
          {experiences.map((exp, index) => (
            <FloatingCard 
              key={index} 
              delay={index * 0.5} 
              className={`border-t-4 ${exp.colorClasses.borderT} ${exp.colorClasses.shadowHover} transition-all`}
            >
              <div className="flex items-start gap-6 mb-6">
                <div className={`p-4 rounded-2xl ${exp.colorClasses.iconBg} border ${exp.colorClasses.iconBorder} shadow-inner`}>
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    {exp.role}
                    {exp.type && (
                      <span className="text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-300 font-normal uppercase tracking-wider relative top-px">
                        {exp.type}
                      </span>
                    )}
                  </h3>
                  <h4 className={`text-lg ${exp.colorClasses.companyText} font-medium`}>{exp.company}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{exp.period}</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-semibold text-gray-800 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700/50 pb-2">Key Responsibilities:</p>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex flex-col sm:flex-row sm:items-start text-gray-700 dark:text-gray-300 gap-3 text-sm md:text-base">
                      <span className={`w-2 h-2 rounded-full ${exp.colorClasses.dotBg} mt-1.5 sm:mt-2 shrink-0`} />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 mt-6 border-t border-gray-700/50">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className={`px-3 py-1 rounded-full text-xs font-medium ${exp.colorClasses.techBg} ${exp.colorClasses.techText} border ${exp.colorClasses.techBorder}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
};
