'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/constants/data';
import { ExternalLink, Code2, Folder } from 'lucide-react';

function ProjectCard({ project, index }: { project: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate coordinates relative to the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setCoords({ x, y });

    // Calculate rotation angles based on cursor position relative to the center
    const width = rect.width;
    const height = rect.height;
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Max rotation is 6 degrees to keep it subtle
    const rotateX = -(mouseY / (height / 2)) * 6;
    const rotateY = (mouseX / (width / 2)) * 6;

    card.style.setProperty('--rx', `${rotateX}deg`);
    card.style.setProperty('--ry', `${rotateY}deg`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="glass p-8 flex flex-col h-full group relative overflow-hidden transition-all duration-200 cursor-default"
      style={{
        transform: `perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Spotlight Glow Effect */}
      {isHovered && (
        <div
          className="absolute pointer-events-none rounded-full blur-[60px] opacity-20 transition-opacity duration-300"
          style={{
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
            left: `${coords.x - 100}px`,
            top: `${coords.y - 100}px`,
          }}
        />
      )}

      {/* Card Border Glow */}
      <div 
        className="absolute inset-0 border border-purple-500/20 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          maskImage: `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, black 30%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, black 30%, transparent 100%)`,
        }}
      />

      <div className="flex justify-between items-start mb-6" style={{ transform: 'translateZ(20px)' }}>
        <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
          <Folder size={24} />
        </div>
        <div className="flex gap-3">
          {project.repo_url && (
            <a href={project.repo_url} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-purple-400 transition-colors">
              <Code2 size={20} />
            </a>
          )}
          {project.demo_url && (
            <a href={project.demo_url} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-purple-400 transition-colors">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors" style={{ transform: 'translateZ(15px)' }}>
        {project.title}
      </h3>
      <p className="text-zinc-400 mb-8 flex-grow text-sm leading-relaxed" style={{ transform: 'translateZ(10px)' }}>
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2" style={{ transform: 'translateZ(10px)' }}>
        {project.tech_stack.map((tech: string) => (
          <span key={tech} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono text-zinc-300">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
            <p className="text-zinc-400">A collection of systems and applications I've built, ranging from MERN-stack platforms to NLP-driven automation bots.</p>
          </div>
          <div className="h-[1px] flex-grow bg-white/5 mx-8 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
