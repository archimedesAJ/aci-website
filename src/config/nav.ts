import {
	BanknoteIcon,
	ChurchIcon,
	HouseIcon,
	MailOpenIcon,
	NotepadTextIcon,
	UsersIcon,
} from "lucide-react";

export const routes = [
	{
		title: "Home",
		href: "/",
		icon: HouseIcon,
	},
	// {
	// 	title: "About Us",
	// 	href: "/about",
	// 	icon: ChurchIcon,
	// },
	{
		title: "Departments",
		href: "/departments",
		icon: UsersIcon,
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
