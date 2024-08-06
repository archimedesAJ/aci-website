import { Button } from "@/components/ui/button";
import { routes } from "@/config/nav";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetOverlay,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, XIcon } from "lucide-react";

export default function Header() {
	return (
		<header className="sticky top-0 z-10 bg-secondary/95 text-secondary-foreground shadow-[0_4px_8px_rgb(0_0_0_/_.2)] backdrop-blur">
			<div className="container flex items-center gap-x-4 py-px max-lg:justify-between md:gap-x-20">
				{/* logo */}
				<Link
					href={"/"}
					className="relative inline-block size-16 overflow-hidden rounded-md md:size-20"
				>
					<Image
						src={"/aci-logo.png"}
						alt={"Action Chapel International"}
						className="max-w-full truncate object-cover object-center italic"
						fill
						sizes="100px"
						priority
					/>
				</Link>
				{/* nav links */}
				<ul className="flex items-center gap-x-8 max-lg:hidden">
					{routes.map((x) => (
						<li key={x.title}>
							<Link
								href={x.href}
								className="flex items-center gap-x-1 text-xs uppercase transition-colors duration-150 ease-linear hover:text-primary 2xl:text-sm"
							>
								<x.icon className="size-3 2xl:size-4" />
								<span>{x.title}</span>
							</Link>
						</li>
					))}
				</ul>
				{/* mobile nav */}
				<Sheet>
					<SheetTrigger asChild>
						<Button size={"icon"} className="size-9 lg:hidden">
							<MenuIcon className="size-6" />
						</Button>
					</SheetTrigger>
					<SheetOverlay className="bg-transparent" />
					<SheetContent
						side={"left"}
						className="bg-secondary text-secondary-foreground"
					>
						<SheetHeader className="sr-only">
							<SheetTitle>Nav menu</SheetTitle>
							<SheetDescription>Mobile navigation menu</SheetDescription>
						</SheetHeader>

						<div className="space-y-8">
							{/* logo and close button */}
							<div className="flex items-center justify-between gap-x-4 py-px md:gap-x-8">
								<SheetClose asChild>
									<Button
										asChild
										variant={"plain"}
										className="aspect-square h-fit p-0"
									>
										<Link
											href={"/"}
											className="relative block size-16 overflow-hidden rounded-md md:size-20"
										>
											<Image
												src={"/aci-logo.png"}
												alt={"Action Chapel International"}
												className="max-w-full truncate object-cover object-center italic"
												fill
												sizes="100px"
												priority
											/>
										</Link>
									</Button>
								</SheetClose>
								<SheetClose asChild>
									<Button
										type="button"
										variant={"ghost"}
										size={"icon"}
										rounded
										className="size-9"
									>
										<XIcon className="size-5" />
									</Button>
								</SheetClose>
							</div>
							{/* nav links */}
							<ul className="space-y-6 md:space-y-8">
								{routes.map((x) => (
									<li key={x.title}>
										<SheetClose asChild>
											<Button asChild variant={"plain"} className="h-fit p-0">
												<Link
													href={x.href}
													className="flex items-center gap-x-1 text-xs uppercase transition-colors duration-150 ease-linear hover:text-primary 2xl:text-sm"
												>
													<x.icon className="size-3 2xl:size-4" />
													<span>{x.title}</span>
												</Link>
											</Button>
										</SheetClose>
									</li>
								))}
							</ul>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
