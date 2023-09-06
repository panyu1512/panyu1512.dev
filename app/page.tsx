import { Intro } from "@/components/intro";
import { SectionDivider } from "@/components/section-divider";

export default function Home() {
	return (
		<main className="flex flex-col text-center items-center space-y-12">
			<Intro/>
			<SectionDivider />
	  	</main>
	);
}
