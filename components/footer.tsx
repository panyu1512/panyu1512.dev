'use client';
import React from "react";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 mt-10 pb=10">
      <small className="mb-2 block text-xs">
        &copy; 2023 Enrique. All rights reserved.
      </small>
      <p className="text-xs pb-4">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
      <motion.div
        className="overflow-hidden whitespace-nowrap text-center"
        initial={{ x: "-10%", opacity: 0.2}}
        animate={{ x: "10%", opacity: 1 }}
        transition={{ ease: "linear", duration: 0.5, repeat: Infinity, repeatType: "mirror"}}
      >
        <span className="inline-block">
          {/* Contenido que se mueve en la marquesina */}
          FORTUNE PUTO CALVO. FORTUNE PUTO CALVO. FORTUNE PUTO CALVO. 
        </span>
        
      </motion.div>
    </footer>
  );
}