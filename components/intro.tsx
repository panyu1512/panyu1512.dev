"use client";
import { Avatar } from "@nextui-org/react";
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import { Button, Link } from "@nextui-org/react";
import { GithubIcon, ArrowIcon } from "@/components/icons";
import Confetti from "@/components/confetti";
import avatar from "../public/avatar.webp";

export const Intro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Living in Mallorca",
        "With more than two years of experience",
        "Experienced also as a data engineer",
        "Currently working at Possible Inc",
      ],
      typeSpeed: 60,
      backSpeed: 60,
      cursorChar: "|",
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section>
      <motion.section
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <motion.div
          className="flex flex-col text-center items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <Avatar
              className="my-4"
              isBordered
              color="secondary"
              size="lg"
              src={avatar.src}
            />
          </div>
          <div>
            <h1 className="text-4xl my-4">Hi, my name is Enrique</h1>
          </div>
          <div>
            <span className="my-4 text-xl">I am a software engineer</span>
          </div>
          <div>
            <span className="my-4 text-xl" ref={el}></span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 justify-center items-center space-x-4 mt-16"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Button
            className="bg-[#9028A3]/80 hover:bg-[#9028A3] transition hover:scale-110 border border-[#9028A3] dark:text-black font-bold"
            as={Link} 
            href="#contact"
          >
            Contact 
            <ArrowIcon />
          </Button>
          <Button
            className="bg-[#9028A3]/80 hover:bg-[#9028A3] transition hover:scale-110 border border-[#9028A3] dark:text-black font-bold"
            onPress={() => setIsVisible(true)}
            as={Link}
            href="/CV.pdf"
            download
          >
            Download CV
          </Button>
          {isVisible && <Confetti />}
          <Button
            className="bg-[#9028A3]/80 hover:bg-[#9028A3] transition hover:scale-110 border border-[#9028A3] dark:text-black font-bold"
            as={Link}
            href="https://github.com/panyu1512"
            target="_blank"
          >
            Github <GithubIcon />
          </Button>
        </motion.div>
      </motion.section>
    </section>
  );
};
