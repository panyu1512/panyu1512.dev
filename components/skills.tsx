"use client";
import React from "react";
import { skillsData } from "@/config/data";
import { motion } from "framer-motion";

export const Skills = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="rounded-xl px-5 py-3 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div
              className="border border-[#9028A3] rounded-full
              bg-[#9028A3]/60
              flex justify-center items-center gap-x-2
              py-2 px-6 md:py-2 md:px-8            
              transition
              hover:scale-110 hover:bg-[#9028A3]/80"
            >
              <skill.icon />
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
