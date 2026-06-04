'use client';
import { motion } from 'framer-motion';
import { Mail, Globe, Code, ArrowDown } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const subHeadline = "Full Stack Developer & Problem Solver";

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.4,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        {/* Photo Container */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative w-56 h-56 md:w-80 md:h-80 mx-auto mb-10 rounded-full p-1 bg-gradient-to-tr from-purple-500 to-transparent shadow-2xl glow-card"
        >
          <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden border-4 border-zinc-900 relative">
            {!imgError ? (
              <Image 
                src="/profile.jpeg" 
                alt="Akash Chem J" 
                fill 
                sizes="(max-width: 768px) 224px, 320px"
                priority
                className="object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-600/30 to-zinc-900 flex items-center justify-center text-purple-400 font-bold text-4xl md:text-5xl font-mono tracking-tight select-none">
                AC
              </div>
            )}
          </div>
        </motion.div>

        <motion.h2 
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
          className="text-purple-400 font-mono mb-4 text-sm md:text-base tracking-widest uppercase flex justify-center flex-wrap gap-y-1 select-none"
        >
          {subHeadline.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letterVariants}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>
        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
          Akash <span className="gradient-text">Chem. J</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          I build seamless, scalable, and responsive digital experiences. Currently pursuing B.Tech in CSBS at Model Engineering College.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects" 
            className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-medium transition-all shadow-lg shadow-purple-500/20"
          >
            View Projects
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="px-8 py-3 glass hover:bg-white/5 border border-white/10 rounded-full font-medium transition-all"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-zinc-500 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
