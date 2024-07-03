"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export default function ThemeSwitcher() {
	const { setTheme } = useTheme();

	return (
		<div className="container flex min-h-screen items-center justify-center py-12">
			<div className="flex items-center gap-x-4 md:gap-x-8">
				<Button variant={"primary"} onClick={() => setTheme("light")}>
					Light
				</Button>
				<Button variant={"secondary"} onClick={() => setTheme("dark")}>
					Dark
				</Button>
				<Button variant={"tertiary"} onClick={() => setTheme("system")}>
					System
				</Button>
			</div>
		</div>
	);
}
