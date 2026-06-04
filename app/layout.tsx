import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akash Chem. J | Full Stack Developer",
  description: "Portfolio of Akash Chem. J, a full-stack web developer specializing in MERN stack, Django, and modern web technologies. Based in Kerala, India.",
  keywords: ["Akash Chem J", "Full Stack Developer India", "MERN Stack Developer Kerala", "Django Developer", "Web Development Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased relative min-h-screen overflow-x-hidden`}>
        {/* Animated Background Blobs */}
        <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] blob-glow blob-1" />
        <div className="absolute top-[60%] right-[5%] w-[500px] h-[500px] blob-glow blob-2" />
        {children}
      </body>
    </html>
  );
}
