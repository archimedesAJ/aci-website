const deployedSiteURL = process.env.NEXT_PUBLIC_SITE_URL;

export const siteConfig = {
	name: "Action Chapel International",
	description: "Where Divinity Meets Humanity",
	deployedSiteURL: deployedSiteURL || `localhost:${process.env.PORT || 3000}`,
	URL: deployedSiteURL
		? `https://${deployedSiteURL}`
		: `http://localhost:${process.env.PORT || 3000}`,
	isProdEnv: !!deployedSiteURL,
	author: {
		name: "Enock Yawson",
		url: "https://www.gybex.dev/",
	},
} as const;
