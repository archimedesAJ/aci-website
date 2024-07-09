import { routes } from "@/config/nav";
import { siteConfig } from "@/config/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return routes.map((route) => ({
		url: `${siteConfig.URL}${route.href}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));
}
