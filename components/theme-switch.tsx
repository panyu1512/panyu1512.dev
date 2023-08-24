import React from "react";
import { useTheme } from "next-themes";
import {Switch} from "@nextui-org/react";
import { SunIcon, MoonIcon } from "@/components/icons";
import { SwitchProps} from "@nextui-org/switch";

export interface ThemeSwitchProps {
	className?: string;
	classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
	className,
}) => {
	const { theme, setTheme } = useTheme();
	const onChange = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};
	// ocultar theme switch en mobile y tablet 
	return (
	  <Switch
		className={className}
		size="lg"
		color="secondary"
		startContent={<SunIcon />}
		endContent={<MoonIcon />}
		onChange={() => onChange()}
	  >
	  </Switch>
	);
}
  
