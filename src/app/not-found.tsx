import { Button } from "@/components/ui/button";
import { HouseIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Page Not Found",
	description: "Oops! The page you are looking for cannot be found.",
};

export default function NotFound() {
	return (
		<main className="container flex flex-col justify-center gap-y-4 py-8 md:gap-y-8 md:py-16">
			<h2 className="text-balance text-center">Oops! Page not found</h2>
			<Button asChild className="mx-auto">
				<Link href="/">
					<HouseIcon className="size-4" />
					<span>GO HOME</span>
				</Link>
			</Button>
		</main>
	);
}
