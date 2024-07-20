"use client";

import { MoveUpIcon } from "lucide-react";
import * as React from "react";
import { Button } from "../ui/button";

export default function ScrollToTop() {
	return (
		<Button
			variant={"primary"}
			size={"icon"}
			className="zoom-in-50 fixed right-4 bottom-20 z-20 size-9 animate-in duration-500 ease-linear xl:right-8"
			onClick={() => {
				window.scrollTo({
					top: 0,
					behavior: "smooth",
				});
			}}
		>
			<MoveUpIcon className="size-5" />
		</Button>
	);
}
