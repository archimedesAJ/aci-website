import ThemeSwitcher from "@/components/common/theme-switcher";
import type { Metadata } from "next";

export const metadata: Metadata = {
	openGraph: {
		type: "website",
	},
};

export default function Page() {
	return <ThemeSwitcher />;
}
