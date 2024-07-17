import ScrollToBottom from "@/components/common/scroll-to-bottom";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	openGraph: {
		type: "website",
	},
};

const imageLinks = [
	{
		src: "/upcoming-events.jpg",
		alt: "Upcoming events",
	},
	{
		src: "/im-new.jpg",
		alt: "I am new",
	},
	{
		src: "/get-involved.jpg",
		alt: "Get involved",
	},
	{
		src: "/get-connected.jpg",
		alt: "Get connected",
	},
	{
		src: "/prayer-request.jpg",
		alt: "Prayer request",
	},
];

export default function Page() {
	return (
		<section>
			{/* hero section */}
			<div className="flex min-h-[65dvh] flex-col py-8 pb-0">
				<div className="container mt-auto flex flex-col items-center justify-center gap-y-4 md:gap-y-8">
					<h1 className="text-balance text-center">
						Action Chapel International
					</h1>
					<p className="text-center text-2xl">
						One Church in many Locations Worldwide
					</p>
				</div>
				<ScrollToBottom />
			</div>
			{/* image links */}
			<ul className="grid grid-cols-[repeat(auto-fit,_minmax(min(300px,_100%),_1fr))] gap-4 p-4">
				{imageLinks.map((imageLink) => (
					<li key={imageLink.src} className="aspect-square w-full">
						<Link
							href=""
							className="relative inline-block h-full w-full overflow-hidden rounded-lg"
						>
							<Image
								src={imageLink.src}
								sizes="300px"
								fill
								alt={imageLink.alt}
								className="transition-transform duration-300 ease-in-out hover:scale-110"
							/>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
