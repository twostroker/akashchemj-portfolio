'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none"
    >
      <div className="glass px-6 py-2 flex gap-4 md:gap-8 items-center pointer-events-auto">
        <Link href="#home" className="hover:text-purple-400 transition-colors font-medium text-sm md:text-base">Home</Link>
        <Link href="#projects" className="hover:text-purple-400 transition-colors font-medium text-sm md:text-base">Projects</Link>
        <Link href="#skills" className="hover:text-purple-400 transition-colors font-medium text-sm md:text-base">Skills</Link>
        <Link href="#experience" className="hover:text-purple-400 transition-colors font-medium text-sm md:text-base hidden md:block">Experience</Link>
        <Link href="#contact" className="hover:text-purple-400 transition-colors font-medium text-sm md:text-base">Contact</Link>
        
        <div className="w-[1px] h-4 bg-white/10 mx-2 hidden md:block" />
        
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/CV_Akash_26.pdf" 
          target="_blank"
          className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold transition-all"
        >
          Resume
        </motion.a>
      </div>
    </motion.nav>
  );
}
