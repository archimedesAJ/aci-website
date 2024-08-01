"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { LoaderIcon } from "lucide-react";
import { z } from "zod";

export default function ContactForm() {
	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
		onSubmit: async ({ value }) => {
			// fake submit delay
			return new Promise(() => {
				setTimeout(() => {
					console.log(value);
					form.reset();
				}, 3000); // 3 seconds
			});
		},
		validatorAdapter: zodValidator(),
	});

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				form.handleSubmit();
			}}
			className="mx-auto max-w-lg space-y-6 md:space-y-12"
		>
			<form.Field
				name="name"
				validators={{
					onChange: z
						.string()
						.trim()
						.min(2, { message: "Name must be 2 or more characters long" }),
				}}
			>
				{(field) => (
					<div className="space-y-1">
						<Label htmlFor="name">Your Name</Label>
						<Input
							id="name"
							type="text"
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
						/>
						{field.state.meta.errors ? (
							<p className="font-medium text-destructive text-sm">
								{field.state.meta.errors.join(", ")}
							</p>
						) : null}
					</div>
				)}
			</form.Field>
			<form.Field
				name="email"
				validators={{
					onChange: z
						.string()
						.trim()
						.email({ message: "Invalid email address" }),
				}}
			>
				{(field) => (
					<div className="space-y-1">
						<Label htmlFor="email">Your Email</Label>
						<Input
							id="email"
							type="email"
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
						/>
						{field.state.meta.errors ? (
							<p className="font-medium text-destructive text-sm">
								{field.state.meta.errors.join(", ")}
							</p>
						) : null}
					</div>
				)}
			</form.Field>
			<form.Field
				name="subject"
				validators={{
					onChange: z
						.string()
						.trim()
						.min(2, { message: "Subject must be 2 or more characters long" }),
				}}
			>
				{(field) => (
					<div className="space-y-1">
						<Label htmlFor="subject">Subject</Label>
						<Input
							id="subject"
							type="text"
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
						/>
						{field.state.meta.errors ? (
							<p className="font-medium text-destructive text-sm">
								{field.state.meta.errors.join(", ")}
							</p>
						) : null}
					</div>
				)}
			</form.Field>
			<form.Field
				name="message"
				validators={{
					onChange: z
						.string()
						.trim()
						.min(2, { message: "Message must be 2 or more characters long" }),
				}}
			>
				{(field) => (
					<div className="space-y-1">
						<Label htmlFor="message">Message</Label>
						<Textarea
							id="message"
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
						/>
						{field.state.meta.errors ? (
							<p className="font-medium text-destructive text-sm">
								{field.state.meta.errors.join(", ")}
							</p>
						) : null}
					</div>
				)}
			</form.Field>

			<form.Subscribe
				selector={(state) => [state.canSubmit, state.isSubmitting]}
			>
				{([canSubmit, isSubmitting]) => (
					<Button type="submit" size="lg" disabled={!canSubmit}>
						{isSubmitting ? <LoaderIcon className="animate-spin" /> : "Submit"}
					</Button>
				)}
			</form.Subscribe>
		</form>
	);
}
