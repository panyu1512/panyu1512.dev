'use client';
import {
	Navbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { motion } from "framer-motion";

export const Header = () => {
	const navbarVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
	};
	return (
	<motion.div
		initial="hidden"
		animate="visible"
		variants={navbarVariants}
	  >
		<Navbar 
			maxWidth="xl" 
			className="fixed"
		>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="center" >
				<ul className="hidden lg:flex gap-8 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.hash}>
							<Link
								size="lg"
								color="secondary"
								href={item.hash}
								underline="hover"
							>
								{item.label}
							</Link>
						</NavbarItem>
					))}
					<ThemeSwitch className="hidden sm:block"/>
				</ul>
			</NavbarContent>
			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<NavbarMenuToggle />
			</NavbarContent>
			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item) => (
						<NavbarMenuItem key={item.hash}>
							<Link
								size="lg"
								color="secondary"
								href={item.hash}
								underline="hover"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
					<ThemeSwitch/>
				</div>
			</NavbarMenu>
		</Navbar>
	</motion.div>
	);
};
