import type { Metadata } from "next";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
	title: "Contact Us",
	description:
		"Get in touch with Action Chapel International for support and questions",
};

export default function ContactPage() {
	return (
		<div className="container space-y-8 py-12 md:space-y-16 md:py-24">
			{/* info */}
			<div className="space-y-3 text-center md:space-y-6">
				<h1>GET IN TOUCH</h1>
				<div>
					<p className="font-semibold">Action Chapel International</p>
					<p className="font-semibold">Praise Cathedral</p>
					<p>Kwabenya - Opposite Hairport Salon</p>
				</div>
			</div>
			{/* form */}
			<ContactForm />
		</div>
	);
}
