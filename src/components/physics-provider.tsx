"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useDragControls } from "framer-motion";

export const PhysicsProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <BackgroundParticles />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

const BackgroundParticles = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);
  
  useEffect(() => {
    // Generate initial particles client-side only
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="w-full h-full absolute inset-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-blue-500/20 dark:bg-blue-400/20 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: ["0%", "-100%", "0%"],
            x: ["0%", "50%", "0%"],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Reusable animated physical floating card
export const FloatingCard = ({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ 
        y: [0, -10, 0],
        opacity: 1
      }}
      transition={{ 
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        },
        opacity: {
          duration: 0.8,
          delay: delay * 0.5
        }
      }}
      className={`glass-panel rounded-2xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Reusable draggable wrapper
export const DraggableCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const controls = useDragControls();
  const constraintsRef = useRef(null);

  return (
    <div ref={constraintsRef} className="w-full h-full">
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        whileDrag={{ scale: 1.05, cursor: "grabbing" }}
        className={`cursor-grab ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};
