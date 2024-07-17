"use client";

import { MoveUpIcon } from "lucide-react";
import * as React from "react";
import { Button } from "../ui/button";

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = React.useState(false);

	const toggleVisibility = React.useCallback(() => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	React.useEffect(() => {
		toggleVisibility();

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, [toggleVisibility]);

	return isVisible ? (
		<Button
			variant={"plain"}
			size={"icon"}
			className="slide-in-from-bottom-8 fixed right-4 bottom-20 z-20 animate-in duration-500 ease-linear xl:right-8"
			onClick={scrollToTop}
		>
			<MoveUpIcon className="size-8 text-primary" />
		</Button>
	) : null;
}
