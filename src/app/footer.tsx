"use client";

import ScrollToTop from "@/components/common/scroll-to-top";
import { socials } from "@/lib/data";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { ChurchIcon, MailOpenIcon, MapPinIcon, PhoneIcon } from "lucide-react";

const contactInfo = [
	{
		caption: "Action Chapel International - Praise Cathedral",
		icon: ChurchIcon,
	},
	{ caption: "Kwabenya - Opposite Hairport Salon", icon: MapPinIcon },
	{ caption: "+233 26 489 1234", icon: PhoneIcon },
	{ caption: "aci-praisecathedral@gmail.com", icon: MailOpenIcon },
];

export default function Footer() {
	const [ref, entry] = useIntersectionObserver({
		threshold: 0,
		root: null,
		rootMargin: "0px",
	});

	return (
		<footer
			ref={ref}
			className="space-y-10 bg-secondary/95 py-8 text-secondary-foreground md:space-y-12 md:pt-16"
		>
			{/* top section */}
			<div className="container flex flex-col gap-x-4 gap-y-10 md:flex-row md:justify-around md:gap-x-8">
				{/* weekly activities */}
				<div className="space-y-4">
					<p className="font-bold">WEEKLY ACTIVITIES</p>
					<ul className="space-y-4">
						<li>
							<span className="font-semibold">Sunday:</span> Family Service: 8AM
							- 11AM
						</li>
						<li>
							<span className="font-semibold">Tuesday:</span> Bible Teaching &
							Communion Service: 6PM - 8PM
						</li>
						<li>
							<span className="font-semibold">Friday:</span> Corporate Prayer:
							6PM - 8PM
						</li>
					</ul>
				</div>

				{/* contact section */}
				<div className="space-y-4">
					<p className="font-bold">CONTACT INFO</p>
					<ul className="space-y-4">
						{contactInfo.map((contact) => (
							<li
								key={contact.caption}
								className="grid grid-cols-[auto_1fr] gap-x-2"
							>
								<contact.icon className="size-4" />
								<p className="leading-none">{contact.caption}</p>
							</li>
						))}
					</ul>
				</div>

				{/* social section */}
				<div className="space-y-4">
					<p className="font-bold">FIND US ON SOCIAL MEDIA</p>
					<ul className="flex items-center gap-x-4">
						{socials.map((social) => (
							<li key={social.url}>
								<a
									href={social.url}
									target="_blank"
									rel="noreferrer"
									className="inline-block rounded-full border p-2"
								>
									<social.icon className="size-4 md:size-5" />
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* copyright section */}
			<p className="text-center text-sm">© All Rights Reserved</p>

			{/* scroll to top button */}
			{entry?.isIntersecting ? <ScrollToTop /> : null}
		</footer>
	);
}
