"use client";

import React from "react";
import { projectsData } from "@/config/data";
import Project from "./project";

export default function Projects() {

  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <div className="gap-12 grid grid-cols-2 sm:col-span-12">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}