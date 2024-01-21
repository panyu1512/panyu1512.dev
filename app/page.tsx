import { Intro } from "@/components/intro";
import { SectionDivider } from "@/components/section-divider";
import { About } from "@/components/about";
import Projects from "@/components/projects";
import { Skills } from "@/components/skills";
import Experience from "@/components/experience";
import  Contact  from "@/components/contact";
import SectionHeading from "@/components/section-heading";
import { ProjectIcon, ExperienceIcon, AboutIcon, TecnologiesIcon, ContactIcon } from "@/components/icons";

export default function Home() {
	return (
		<main className="flex flex-col items-center space-y-12">
			<Intro/>
			<SectionDivider />
			<SectionHeading><ExperienceIcon/> My experience</SectionHeading>
			<Experience />
			<SectionHeading><ProjectIcon/> My projects</SectionHeading>
			<Projects />
			<SectionHeading><TecnologiesIcon/> My skills</SectionHeading>
			<Skills />
			<SectionHeading><AboutIcon/> About me</SectionHeading>
			<About />
			<SectionHeading><ContactIcon/> Contact me</SectionHeading>
			<Contact />
	  	</main>
	);
}
