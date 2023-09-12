"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/config/data";
import Project from "./project";

export default function Projects() {

  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="gap-4 grid lg:grid-cols-2 sm:col-span-12">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}