'use client';
import {Divider} from "@nextui-org/react";
import { motion } from "framer-motion";

export const SectionDivider = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.125 }}
	  	>
			<Divider className="my-2 h-12" orientation="vertical"/>
		</motion.div>
	);
};
