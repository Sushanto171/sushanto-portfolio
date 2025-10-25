"use client";

import { learningPath } from "@/constant/leaningPath";
import { motion } from "framer-motion";

export default function LearningPathTab() {
  const width = 500;
  const height = 500;
  const centerX = width / 2;
  const startY = 50;
  const stepY = 70;

  const getStepPosition = (index: number) => {
    const offsetX = 120;
    const x = index % 2 === 0 ? centerX - offsetX : centerX + offsetX;
    const y = startY + index * stepY;
    return { x, y };
  };

  const getCurvePath = (index: number) => {
    if (index >= learningPath.length - 1) return "";
    const { x: x1, y: y1 } = getStepPosition(index);
    const { x: x2, y: y2 } = getStepPosition(index + 1);
    const controlY = y1 + (y2 - y1) / 2;
    return `M${x1},${y1} C${x1},${controlY} ${x2},${controlY} ${x2},${y2}`;
  };

  return (
    <div className="relative flex justify-center items-start py-12 overflow-x-auto">
      <div className="relative w-[520px] h-[500px]">
        {/* Animated SVG Lines with Gradient */}
        <svg viewBox={`0 0 ${width} ${height}`} className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00FFFF" />
              <stop offset="50%" stopColor="#FFD580" />
              <stop offset="100%" stopColor="#FF80BF" />
            </linearGradient>
            <marker
              id="arrowhead"
              markerWidth="6"
              markerHeight="6"
              refX="5"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L6,3 z" fill="#00FFFF" />
            </marker>
          </defs>

          {learningPath.map((step, index) => (
            <motion.path
              key={step.id}
              d={getCurvePath(index)}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 4"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: index * 0.3 }}
            />
          ))}
        </svg>

        {/* Step Nodes */}
        {learningPath.map((step, index) => {
          const { x, y } = getStepPosition(index);
          return (
            <motion.div
              key={step.id}
              className="absolute w-28 h-20 bg-card rounded-xl border border-border flex flex-col items-center justify-center text-center px-2 shadow-lg"
              style={{ left: x - 56 / 2, top: y - 40 / 2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <h4 className="font-semibold text-sm sm:text-base">{step.title}</h4>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </motion.div>
          );
        })}

        {/* Center Chip */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 bg-primary px-6 py-3 rounded-xl text-white font-semibold shadow-lg border border-primary/70"
          style={{ top: startY - 40 }}
        >
          Learning Path
        </div>
      </div>
    </div>
  );
}
