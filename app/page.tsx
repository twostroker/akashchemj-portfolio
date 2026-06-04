import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="about" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <p className="text-xl text-zinc-400 leading-relaxed">
          I am a B.Tech student in Computer Science and Business Systems, passionate about creating high-impact 
          web applications. With expertise in the MERN stack and Django, I focus on building efficient, user-centric 
          solutions while exploring cloud computing and high-performance routing. Based in Kerala, I am driven by 
          problem-solving and a continuous thirst for new technologies.
        </p>
      </section>
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <footer className="py-10 text-center text-zinc-600 text-sm border-t border-white/5 mx-6">
        <p>© 2026 Akash Chem. J. Built with Next.js, Framer Motion & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
