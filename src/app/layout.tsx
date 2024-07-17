import "@/styles/globals.css";
import ScrollToTop from "@/components/common/scroll-to-top";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { fontSans } from "./fonts";
import Footer from "./footer";
import Header from "./header";
import Providers from "./providers";
import TopHeader from "./top-header";

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.URL),
	title: {
		template: `%s | ${siteConfig.name}`,
		default: siteConfig.name,
	},
	description: siteConfig.description,
	keywords: [
		"Action Chapel",
		"International Church",
		"Action Chapel International",
		"Church In Ghana",
		"Top Churches In Ghana",
	],
	robots: {
		follow: true,
		index: true,
	},
	twitter: {
		card: "summary_large_image",
		creator: "@gybex_enock",
		site: siteConfig.URL,
	},
	creator: siteConfig.author.name,
};
export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={cn("scroll-smooth", fontSans.variable)}
		>
			<body>
				<Providers>
					<div className="relative grid min-h-dvh grid-rows-[auto_auto_1fr_auto]">
						<TopHeader />
						<Header />
						{children}
						<Footer />
					</div>
					<ScrollToTop />
				</Providers>
			</body>
		</html>
	);
}
