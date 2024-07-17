import {
	BanknoteIcon,
	ChurchIcon,
	HouseIcon,
	MailOpenIcon,
	MapPinIcon,
	NotepadTextIcon,
} from "lucide-react";

export const routes = [
	{
		title: "Home",
		href: "/",
		icon: HouseIcon,
	},
	{
		title: "About Us",
		href: "/about",
		icon: ChurchIcon,
	},
	{
		title: "Locations",
		href: "/locations",
		icon: MapPinIcon,
	},
	{
		title: "Prayer Request and Praise Report",
		href: "/prayer-and-praise",
		icon: NotepadTextIcon,
	},
	{
		title: "Donate",
		href: "/donate",
		icon: BanknoteIcon,
	},
	{
		title: "Contact",
		href: "/contact",
		icon: MailOpenIcon,
	},
] as const;
