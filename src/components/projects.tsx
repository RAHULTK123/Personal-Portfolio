"use client";

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Event Management System",
    date: "Mar 2024",
    description: "A comprehensive event management platform offering secure registration, ticketing, admin controls, and role-based access.",
    tech: ["Python", "MySQL", "Web Development"],
    github: "https://github.com/RAHULTK123",
    features: [
      "User registration and authentication",
      "Ticket booking system",
      "Admin dashboard",
      "Event feedback system"
    ]
  },
  {
    title: "Posture Detection & Monitoring System",
    date: "Jan – May 2025",
    description: "Real-time AI-powered posture detection application designed to provide instant feedback and health recommendations.",
    tech: ["Python", "Computer Vision", "Machine Learning", "Java", "Firebase"],
    github: "https://github.com/RAHULTK123",
    features: [
      "Real-time posture detection",
      "Instant feedback",
      "Data storage and trend analysis",
      "Health recommendations"
    ]
  }
];

const TiltCard = ({ project, index }: { project: any, index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useTransform(x, [-0.5, 0.5], ["15deg", "-15deg"]);
  const mouseYSpring = useTransform(y, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to card center (-0.5 to 0.5)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      style={{
        perspective: "1000px",
      }}
      className="w-full h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: mouseYSpring,
          rotateY: mouseXSpring,
          transformStyle: "preserve-3d",
        }}
        className="h-full w-full glass-panel rounded-3xl p-6 md:p-8 flex flex-col justify-between border border-black/5 dark:border-white/10 hover:border-cyan-400/30 dark:hover:border-cyan-500/50 transition-colors shadow-2xl relative"
      >
        <div style={{ transform: "translateZ(50px)" }}>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-foreground max-w-[80%]">{project.title}</h3>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 text-gray-600 dark:text-gray-400 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-sm font-medium text-purple-700 dark:text-purple-400 mb-4">{project.date}</p>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>

          <ul className="space-y-2 mb-8">
            {project.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ transform: "translateZ(30px)" }} className="mt-auto">
          <div className="flex flex-wrap gap-2 pt-4 border-t border-black/10 dark:border-white/10">
            {project.tech.map((tech: string) => (
              <span 
                key={tech} 
                className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-500/10 text-cyan-800 dark:text-cyan-300 border border-blue-200 dark:border-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative">
      <div className="container max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16 relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 inline-block">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {projects.map((project, index) => (
            <TiltCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
