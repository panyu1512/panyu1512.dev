import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
	return (
		<NextUINavbar 
			maxWidth="xl" 
			position="sticky" 
			motionProps={{
				initial: {
					y: -1000,
					x: "-50%",
					opacity: 0,
				},
				animate: {
					y: 0,
					x: "-50%",
					opacity: 1,
				},
			}
		}
		>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="center" >
				<ul className="hidden lg:flex gap-8 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.hash}>
							<Link
								size="lg"
								color="foreground"
								href={item.hash}
							>
								{item.label}
							</Link>
						</NavbarItem>
					))}
					<ThemeSwitch />
				</ul>
			</NavbarContent>

			{/* <NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex">
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent> */}

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={item.hash}>
							<Link
								size="lg"
								color="foreground"
								href={item.hash}
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
					<ThemeSwitch/>
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
