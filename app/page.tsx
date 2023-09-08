import { Intro } from "@/components/intro";
import { SectionDivider } from "@/components/section-divider";
import { About } from "@/components/about";
import Projects from "@/components/projects";
import { Skills } from "@/components/skills";
import Experience from "@/components/experience";

export default function Home() {
	return (
		<main className="flex flex-col text-center items-center space-y-12">
			<Intro/>
			<SectionDivider />
			<About />
			<Projects />
			<Skills />
			<Experience />
	  	</main>
	);
}
