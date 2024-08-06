import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Donate",
	description: "Electronic giving options",
};

export default function DonatePage() {
	return (
		<div className="container space-y-4 py-12 md:space-y-8 md:py-24">
			{/* heading */}
			<h1 className="text-balance text-center">THANK YOU FOR YOUR SUPPORT!</h1>

			{/* giving platforms */}
			<div className="space-y-4 md:space-y-8">
				{/* momo */}
				<div className="relative h-24 xs:h-[15rem] w-full overflow-hidden rounded-lg drop-shadow-lg">
					<Image
						src="/momo.webp"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						fill
						alt="Momo"
						className="max-w-full truncate italic"
					/>
				</div>
				<div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
					{/* fidelity */}
					<div className="relative h-[15rem] w-[min(21.25rem,100%)] overflow-hidden rounded-lg drop-shadow-lg">
						<Image
							src="/fidelity.webp"
							sizes="400px"
							fill
							alt="Fidelity"
							className="max-w-full truncate italic"
						/>
					</div>
					{/* zenith */}
					<div className="relative h-[15rem] w-[min(21.25rem,100%)] overflow-hidden rounded-lg drop-shadow-lg">
						<Image
							src="/zenith.webp"
							sizes="400px"
							fill
							alt="Zenith"
							className="max-w-full truncate italic"
						/>
					</div>
					{/* ecobank */}
					<div className="relative h-[15rem] w-[min(21.25rem,100%)] overflow-hidden rounded-lg drop-shadow-lg">
						<Image
							src="/ecobank.webp"
							sizes="400px"
							fill
							alt="Ecobank"
							className="max-w-full truncate italic"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
