"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/config/data";
import { useTheme } from "next-themes";

export default function Experience() {
    const { theme } = useTheme();
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="purple">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid purple",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid purple"
                    : "0.4rem solid purple",
              }}
              date={item.date}
              iconStyle={{
                background:
                  theme === "light" ? "purple" : "purple",
                fontSize: "1.5rem",
                scale: 0.5,
              }}
            >
              <h3 className="font-bold capitalize">{item.title}</h3>
              <h4 className="font-bold !mt-0">{item.location}</h4>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}