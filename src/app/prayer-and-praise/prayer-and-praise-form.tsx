"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { LoaderIcon } from "lucide-react";
import { z } from "zod";

export const OPTIONS = ["Prayer Request", "Praise Report"] as const;

export default function PrayerAndPraiseForm() {
	const form = useForm({
		defaultValues: {
			option: "",
			details: "",
			name: undefined as string | undefined,
			email: undefined as string | undefined,
		},
		onSubmit: async ({ value }) => {
			// fake submit delay
			return new Promise(() => {
				setTimeout(() => {
					/* TODO: remove undefined values before submitting values */
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
			className="mx-auto space-y-6 md:space-y-12"
		>
			<form.Field
				name="option"
				validators={{
					onChange: z.enum(OPTIONS, {
						errorMap: () => ({ message: "Please select an option" }),
					}),
				}}
			>
				{(field) => (
					<div className="space-y-1">
						<Label htmlFor="option">Choose Option</Label>
						<Select
							onValueChange={field.handleChange}
							value={field.state.value}
						>
							<SelectTrigger className="w-full" id="option">
								<SelectValue placeholder="-----" />
							</SelectTrigger>
							<SelectContent>
								{OPTIONS.map((option) => (
									<SelectItem key={option} value={option}>
										{option}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						{field.state.meta.errors ? (
							<p className="font-medium text-destructive text-sm">
								{field.state.meta.errors.join(", ")}
							</p>
						) : null}
					</div>
				)}
			</form.Field>
			<form.Field
				name="details"
				validators={{
					onChange: z
						.string()
						.trim()
						.min(2, { message: "Details must be 2 or more characters long" })
						.max(200, {
							message: "Details must be at most 200 characters long",
						}),
				}}
			>
				{(field) => (
					<div className="space-y-1">
						<Label htmlFor="details">Details (200 Characters Maximum)</Label>
						<Textarea
							id="details"
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
				name="name"
				validators={{
					onChange: z
						.string()
						.trim()
						.min(2, { message: "Name must be 2 or more characters long" })
						.optional(),
				}}
			>
				{(field) => (
					<div className="space-y-1">
						<Label htmlFor="name">Your Name (Optional)</Label>
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
						.email({ message: "Invalid email address" })
						.optional(),
				}}
			>
				{(field) => (
					<div className="space-y-1">
						<Label htmlFor="email">Your Email (Optional)</Label>
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

			<form.Subscribe
				selector={(state) => [state.canSubmit, state.isSubmitting]}
			>
				{([canSubmit, isSubmitting]) => (
					<Button type="submit" size="lg" disabled={!canSubmit}>
						{isSubmitting ? <LoaderIcon className="animate-spin" /> : "Send"}
					</Button>
				)}
			</form.Subscribe>
		</form>
	);
}
