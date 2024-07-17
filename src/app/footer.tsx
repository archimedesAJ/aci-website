import { socials } from "@/lib/data";
import { ChurchIcon, MailOpenIcon, MapPinIcon, PhoneIcon } from "lucide-react";

const contactInfo = [
	{ caption: "Action Chapel International", icon: ChurchIcon },
	{ caption: "37 Spintex Rd. Accra, Ghana", icon: MapPinIcon },
	{ caption: "+233 262626 906", icon: PhoneIcon },
	{ caption: "admin@actionchapel.net", icon: MailOpenIcon },
];

export default function Footer() {
	return (
		<footer className="space-y-8 bg-secondary/95 py-8 text-secondary-foreground md:space-y-12 md:pt-16">
			{/* top section */}
			<div className="container flex flex-col gap-x-4 gap-y-8 md:flex-row md:justify-around md:gap-x-8">
				{/* contact section */}
				<div className="space-y-4">
					<p className="font-bold">CONTACT INFO</p>
					<ul className="space-y-4">
						{contactInfo.map((contact) => (
							<li key={contact.caption} className="flex items-center gap-x-2">
								<contact.icon className="size-4" />
								<p>{contact.caption}</p>
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
		</footer>
	);
}
