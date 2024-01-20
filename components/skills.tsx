"use client";
import React from "react";
import { skillsData } from "@/config/data";
import SectionHeading from "./section-heading";
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
      <SectionHeading>My skills</SectionHeading>
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
              className="border dark:border-[#9028A3] border-[#9028A3] rounded-full
              bg-black/60
              flex justify-center items-center gap-x-2
              py-1 px-2 md:py-2 md:px-4
              text-xs md:text-base
              text-black/70 dark:text-white
              dark:hover:bg-white/60 dark:hover:text-black
              transition
              hover:scale-110 hover:bg-black/80"
            >
              <skill.icon />
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
