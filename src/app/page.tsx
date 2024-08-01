import ScrollToBottom from "@/components/common/scroll-to-bottom";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Spotify } from "react-spotify-embed";

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
		<section className="space-y-10 py-10 md:space-y-16 md:py-12">
			{/* hero section */}
			<div className="flex min-h-[33dvh] flex-col gap-y-8">
				<div className="container mt-auto flex flex-col items-center justify-center gap-y-4">
					<p className="text-center text-xl">
						Kwabenya - Opposite Hairport Salon
					</p>
					<h1 className="text-balance text-center">
						Action Chapel International - Praise Cathedral
					</h1>
					<p className="text-center text-2xl">
						One Church in many Locations Worldwide
					</p>
				</div>
				<ScrollToBottom />
			</div>

			{/* banner */}
			<div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-center md:gap-8">
				<div className="size-fit rounded-full border-[15px] border-secondary max-xl:aspect-square max-xl:h-auto max-xl:w-full xl:size-[25rem] xl:border-[20px]">
					<div className="relative size-full overflow-hidden rounded-full">
						<Image
							src={"/profile.jpeg"}
							sizes="500px"
							fill
							alt={"Bishop Charles T.Tetteh"}
							className="max-w-full truncate object-contain italic"
						/>
					</div>
				</div>
				<div className="max-w-[25rem] space-y-4 xl:max-w-[34.375rem]">
					<h2>Welcome to Action Chapel International (Praise Cathedral)</h2>
					<p>
						Action Chapel International (Praise Cathedral) was established on
						the ...... Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Harum aspernatur dolore id tempora quia aliquam maiores sit, est
						aliquid consequuntur, provident doloremque ad possimus quidem error
						et minima voluptas tempore quisquam neque nulla tenetur explicabo
						ratione commodi. Consectetur tempore non soluta qui distinctio.
					</p>
				</div>
			</div>

			{/* podcast */}
			<div className="space-y-8">
				<h2 className="after:-bottom-1 relative mx-auto w-fit text-balance text-center after:absolute after:inset-x-0 after:mx-auto after:h-[3px] after:w-3/4 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-secondary after:content-['']">
					Bishop Charles T.Tetteh Podcast
				</h2>

				<div className="grid gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
					<Spotify
						className="aspect-video w-full"
						link="https://open.spotify.com/episode/0P1gQtM2ArfjpfkgKohFOl"
					/>
					<Spotify
						className="aspect-video w-full"
						link="https://open.spotify.com/episode/6V6txoaqpvBgMcAdc8hmZ7"
					/>
					<Spotify
						className="aspect-video w-full"
						link="https://open.spotify.com/episode/1b0Y3rMd5bBpKdng0U1XpQ"
					/>
				</div>
			</div>

			{/* image links */}
			<ul className="grid grid-cols-[repeat(auto-fit,_minmax(min(250px,_100%),_1fr))] gap-4 px-4">
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
