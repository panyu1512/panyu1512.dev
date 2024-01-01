import galletoAdventuresImg from "../public/galletos_adventures.png";
import flightScraperImg from "../public/flight_scraper.png";
import clearJunkImg from "../public/clear_junk.png";
import portfolioImg from "../public/portfolio.png";
import {
  JavascriptIcon,
  TypescriptIcon,
  HtmlIcon,
  CssIcon,
  ReactIcon,
  AngularIcon,
  AstroIcon,
  NextjsIcon,
  NodeIcon,
  PythonIcon,
  MysqlIcon,
} from "@/components/icons";


export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "POSSIBLE, Vigo, Spain",
    description:
      "I have had the opportunity to work with Django-React and Django-Angular stacks in several projects in the company, leveraging my skills in full-stack web development.",
    date: "2021 - 2023",
  },
  {
    title: "Data science engineer",
    location: "Saturdays AI, Madrid, Spain",
    description:
      "I worked as a data engineer. I expanded my programming skills in Python and my knowledge of Machine Learning and Deep Learning techniques.",
    date: "2021 - 2021",
  },
  {
    title: "Degree in Software Engineering.",
    location: "UOC, Barcelona, Spain",
    description:
      "I graduated after 5 years. I immediately found a job as a full stack developer.",
    date: "2021",
  },
] as const;

export const projectsData = [
  {
    title: "FlightScraper",
    description:
      "Flight scrapper to find cheap flights to Oporto from Mallorca!",
    tags: ["Javascript"],
    imageUrl: flightScraperImg,
    githubUrl: "https://github.com/panyu1512/FlightScrapper",
  },
  {
    title: "GalletosAdventures-Platform2DGame",
    description: "Repository for my final degree project. Plaform 2D Game.",
    tags: ["C#", "Unity"],
    imageUrl: galletoAdventuresImg,
    githubUrl: "https://github.com/panyu1512/GalletosAdventures-Platform2DGame",
  },
  {
    title: "ClearJunk",
    description: "Python script for cleaning up directories",
    tags: ["Python"],
    imageUrl: clearJunkImg,
    githubUrl: "https://github.com/panyu1512/ClearJunk",
  },
  {
    title: "Portofolio",
    description: "Portfolio to show my software engineering skills",
    tags: ["React", "TypeScript", "Next.js"],
    imageUrl: portfolioImg,
    githubUrl: "https://github.com/panyu1512/Portfolio",
  },
] as const;

export const skillsData = [
  {
    icon: JavascriptIcon,
    title: "Javascript",
  },
  {
    icon: TypescriptIcon,
    title: "Typescript",
  },
  {
    icon: HtmlIcon,
    title: "HTML",
  },
  {
    icon: CssIcon,
    title: "CSS",
  },
  {
    icon: ReactIcon,
    title: "React",
  },
  {
    icon: AngularIcon,
    title: "Angular",
  },
  {
    icon: AstroIcon,
    title: "Astro",
  },
  {
    icon: NextjsIcon,
    title: "Next.js",
  },
  {
    icon: NodeIcon,
    title: "Node.js",
  },
  {
    icon: PythonIcon,
    title: "Python",
  },
  {
    icon: MysqlIcon,
    title: "MySQL",
  },
] as const;
