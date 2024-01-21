"use client";

import React from "react";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";
import AboutImage from "../public/aboutImage.webp";

export const About = () => {
  return (
    <motion.section
      //   ref={ref}
      className="mb-28 lg:w-[700px] md:w-full sm:w-full text-pretty leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <section className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <div>
          <p className="mb-3 text-lg">
            As a <span className="text-[#9028A3] font-bold">Software Engineer</span>, I bring a
            wealth of experience in both{" "}
            <span className="text-[#9028A3] font-bold">Full Stack</span> and{" "}
            <span className="text-[#9028A3] font-bold">Data Engineering</span> to the table. I
            thrive on challenges and have a deep-seated passion for{" "}
            <span className="text-[#9028A3] font-bold">continuous learning</span>, adapting to
            the <span className="text-[#9028A3] font-bold">ever-evolving tech landscape</span>.
            Whether crafting
            <span className="text-[#9028A3] font-bold"> intuitive user interfaces</span> or
            <span className="text-[#9028A3] font-bold">architecting robust data solutions</span>, I find immense fulfillment in
            transforming ideas into{" "}
            <span className="text-[#9028A3] font-bold">impactful realities</span>. Eager to
            explore new horizons and contribute to
            <span className="text-[#9028A3] font-bold"> innovative projects</span>, I am
            committed to driving success through a
            <span className="text-[#9028A3] font-bold"> dynamic and adaptable approach</span>{" "}
            to software development.
          </p>
        </div>
        <Image
          removeWrapper
          alt="About image"
          width={265}
          className="rounded-full order-1 md:order-2"
          src={AboutImage.src}
        />
      </section>
    </motion.section>
  );
};
