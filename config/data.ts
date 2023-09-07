import galletoAdventuresImg from "../public/galletos_adventures.png";
import flightScraperImg from "../public/flight_scraper.png";
import clearJunkImg from "../public/clear_junk.png";
import portfolioImg from "../public/portfolio.png";

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
        description:
            "Repository for my final degree project. Plaform 2D Game.",
        tags: ["C#", "Unity"],
        imageUrl: galletoAdventuresImg,
        githubUrl: "https://github.com/panyu1512/GalletosAdventures-Platform2DGame",
    },
    {
        title: "ClearJunk",
        description:
            "Python script for cleaning up directories",
        tags: ["Python"],
        imageUrl: clearJunkImg,
        githubUrl: "https://github.com/panyu1512/ClearJunk",
    },
    {
        title: "Portofolio",
        description:
            "Portfolio to show my software engineering skills",
        tags: ["React", "TypeScript", "Next.js", "Tailwind"],
        imageUrl: portfolioImg,
        githubUrl: "https://github.com/panyu1512/Portfolio",
    },
] as const;
  