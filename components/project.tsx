"use client";
import React from "react";
import {Card, CardHeader, CardFooter, Image, Button, Link} from "@nextui-org/react";
import { useRef } from "react";
import { projectsData } from "@/config/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { GithubIcon } from "./icons";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
        <Card isFooterBlurred className="lg:w-[700px] md:w-full sm:w-full h-[300px] hover:scale-110">
            <CardHeader className="absolute bg-[#9028A3]/70 z-10 top-0 flex-col items-start">
                <p className="text-tiny text-white/70 uppercase font-bold">{title}</p>
                <h4 className="text-white/90 font-medium text-xl">{description}</h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="project image"
                className="z-0 w-full h-full object-cover"
                src={imageUrl.src}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-tiny text-white/90 uppercase font-bold border dark:border-[#9028A3] border-[#9028A3] rounded-full
                            bg-black
                            flex justify-center items-center gap-x-2
                            py-2 px-6 md:py-2 md:px-8"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <Button radius="full" variant="ghost" size="sm" color="secondary" as={Link} href={githubUrl} target="_blank"><GithubIcon/></Button>      
            </CardFooter>
        </Card>
    </motion.div>
  );
}