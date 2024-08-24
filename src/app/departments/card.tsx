import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type * as React from "react";

export default function Card({
	imgUrl,
	title,
	description,
	children,
}: {
	imgUrl: string;
	title: string;
	description: string;
	children: React.ReactNode;
}) {
	return (
		<div className="grid place-content-center space-y-1.5 md:space-y-3">
			{/* image */}
			<Image
				src={imgUrl}
				width={150}
				height={150}
				alt={title}
				className="mx-auto max-w-full truncate rounded-full italic"
			/>
			{/* title */}
			<p className="max-w-[22.5rem] font-semibold uppercase">{title}</p>
			{/* description */}
			<p className="line-clamp-4 max-w-[22.5rem] text-justify">{description}</p>
			{/* action and dialog*/}
			<Dialog>
				<DialogTrigger asChild>
					<Button
						variant="link"
						className="font-semibold text-foreground text-sm underline"
					>
						Read More
					</Button>
				</DialogTrigger>
				<DialogContent className="flex max-w-screen-sm flex-col gap-0 rounded-lg border-8 border-secondary p-0">
					<DialogHeader className="sr-only">
						<DialogTitle>{title}</DialogTitle>
						<DialogDescription>{description}</DialogDescription>
					</DialogHeader>
					<div className="overflow-y-auto p-2 text-justify text-sm leading-relaxed tracking-wider md:p-4">
						{children}
					</div>
					<div className="flex items-center justify-end bg-primary/15 px-2 py-0.5">
						<DialogClose asChild>
							<Button
								variant="plain"
								size="icon"
								className="size-6 rounded-full text-primary"
							>
								<X className="size-3/4" />
								<span className="sr-only">Close</span>
							</Button>
						</DialogClose>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
