import { Intro } from "@/components/intro";
import { SectionDivider } from "@/components/section-divider";
import { About } from "@/components/about";
import Projects from "@/components/projects";

export default function Home() {
	return (
		<main className="flex flex-col text-center items-center space-y-12">
			<Intro/>
			<SectionDivider />
			<About />
			<Projects />
	  	</main>
	);
}
