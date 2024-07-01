import { siteConfig } from "@/config/site";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: "/private/",
		},
		host: siteConfig.URL,
		sitemap: `${siteConfig.URL}/sitemap.xml`,
	};
}
