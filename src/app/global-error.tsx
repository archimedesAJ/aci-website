"use client";

import "@/styles/globals.css";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReloadIcon } from "@radix-ui/react-icons";
import { fontSans } from "./fonts";
import Providers from "./providers";

export default function GlobalError({ reset }: { reset: () => void }) {
	return (
		<html lang="en" suppressHydrationWarning className={cn(fontSans.variable)}>
			<head>
				<title>Oops! An Error Has Occured</title>
			</head>
			<body>
				<Providers>
					<main className="container grid min-h-dvh place-content-center place-items-center gap-4 py-4 md:gap-8 md:py-8">
						<div className="grid place-items-center gap-2">
							<h2 className="text-balance">Something went wrong!</h2>
						</div>
						<Button className="group" onClick={() => reset()}>
							<ReloadIcon className="group-hover:repeat-1 size-4 group-hover:animate-spin group-hover:duration-700 group-hover:group-hover:ease-in-out" />
							<span>Refresh</span>
						</Button>
					</main>
				</Providers>
			</body>
		</html>
	);
}
