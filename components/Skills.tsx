'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '@/constants/data';
import { Layout, Server, Database, Settings } from 'lucide-react';

const CATEGORY_ICONS: Record<string, any> = {
  'Frontend': <Layout size={20} />,
  'Backend': <Server size={20} />,
  'Full-stack': <Database size={20} />,
  'Additional': <Settings size={20} />,
};

function SkillBadge({ skill }: { skill: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span 
        whileHover={{ scale: 1.05, y: -2 }}
        className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-sm text-zinc-400 hover:text-white hover:border-purple-500/50 transition-all cursor-default block"
      >
        {skill.name}
      </motion.span>

      {/* Floating Tooltip */}
      <AnimatePresence>
        {isHovered && skill.level && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95, x: "-50%" }}
            animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
            exit={{ opacity: 0, y: 8, scale: 0.95, x: "-50%" }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 mb-2.5 px-2.5 py-1 bg-purple-600 border border-purple-500 rounded-md text-[10px] font-bold text-white uppercase tracking-wider z-20 shadow-xl whitespace-nowrap pointer-events-none"
          >
            {skill.level}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-purple-600" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Skills() {
  const categories = ['Frontend', 'Backend', 'Full-stack', 'Additional'];

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Technical <span className="gradient-text">Toolkit</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <motion.div 
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 glow-card"
            >
              <div className="text-purple-400 mb-6 flex items-center gap-3">
                {CATEGORY_ICONS[cat] || <Settings size={20} />}
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">{cat}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.filter(s => s.category === cat).map(skill => (
                  <SkillBadge key={skill.id} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
