"use client";

import { ChevronDownIcon } from "lucide-react";
import * as React from "react";
import { Button } from "../ui/button";

export default function ScrollToBottom() {
	return (
		<Button
			variant={"plain"}
			size={"icon"}
			className="mx-auto mt-auto"
			onClick={() =>
				window.scrollTo({
					top: document.body.scrollHeight,
					behavior: "smooth",
				})
			}
		>
			<ChevronDownIcon className="size-8 animate-bounce text-primary" />
		</Button>
	);
}
