import galletoAdventuresImg from "../public/galletos_adventures.webp";
import flightScraperImg from "../public/flight_scraper.webp";
import clearJunkImg from "../public/clear_junk.webp";
import portfolioImg from "../public/portfolio.webp";
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
  AwsIcon,
  SparkIcon,
  UnityIcon,
  CIcon,
} from "@/components/icons";

export const experiencesData = [
  {
    title: "Full-Stack / Data engineer",
    location: "POSSIBLE, Vigo, Spain",
    description:
      "Led the development of a sentiment analysis web app for digital newspapers, emphasizing UI design, ETL processes, and RESTful API integration. Managed the migration of the European Patent Office datalake to AWS, refactoring SAS code to Pyspark. Implemented Airflow-based ETL operations for data normalization and cleaning, and contributed to the development of an internal project library for reusable components.",
    date: "2021 - 2024",
  },
  {
    title: "Data science engineer",
    location: "Saturdays AI, Madrid, Spain",
    description:
      "Expanded Python programming skills and deepened knowledge of Machine Learning and Deep Learning techniques through projects like a trash detector.",
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
    tags: [{ icon: JavascriptIcon }],
    imageUrl: flightScraperImg,
    githubUrl: "https://github.com/panyu1512/FlightScrapper",
  },
  {
    title: "GalletosAdventures-Platform2DGame",
    description: "Repository for my final degree project. Plaform 2D Game.",
    tags: [{ icon: CIcon }, { icon: UnityIcon }],
    imageUrl: galletoAdventuresImg,
    githubUrl: "https://github.com/panyu1512/GalletosAdventures-Platform2DGame",
  },
  {
    title: "ClearJunk",
    description: "Python script for cleaning up directories",
    tags: [{ icon: PythonIcon }],
    imageUrl: clearJunkImg,
    githubUrl: "https://github.com/panyu1512/ClearJunk",
  },
  {
    title: "Portofolio",
    description: "Portfolio to show my software engineering skills",
    tags: [{ icon: ReactIcon }, { icon: TypescriptIcon }, { icon: NextjsIcon }],
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
    icon: SparkIcon,
    title: "Spark",
  },
  {
    icon: AwsIcon,
    title: "AWS",
  },
  {
    icon: MysqlIcon,
    title: "MySQL",
  },
] as const;
