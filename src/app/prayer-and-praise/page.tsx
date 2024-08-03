import type { Metadata } from "next";
import PrayerAndPraiseForm from "./prayer-and-praise-form";

export const metadata: Metadata = {
	title: "Prayer and Praise",
	description: "Send us your prayer and praise requests",
};

export default function ContactPage() {
	return (
		<div className="container max-w-screen-md space-y-8 py-12 md:space-y-16 md:py-24">
			{/* info */}
			<div className="space-y-3 text-center md:space-y-6">
				<h1>Prayer Request / Praise Report</h1>
				<p className="mx-auto text-center">
					You&apos;re important to God, and you&apos;re important to us at
					Action Chapel International. When it comes to prayer, we believe that
					God wants to meet your needs and reveal His promises to you. So
					whatever you&apos;re concerned about and need prayer for — we want to
					be here for you!
				</p>
			</div>
			{/* form */}
			<PrayerAndPraiseForm />
		</div>
	);
}
