import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				monochrome:
					"bg-monochrome text-monochrome-foreground shadow hover:bg-monochrome/90",
				primary:
					"bg-primary text-primary-foreground shadow hover:bg-primary/90",
				secondary:
					"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
				tertiary:
					"bg-tertiary text-tertiary-foreground shadow-sm hover:bg-tertiary/80",
				accent: "bg-accent text-accent-foreground shadow-sm hover:bg-accent/80",
				destructive:
					"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
				outline:
					"border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				lg: "h-11 px-8",
				md: "h-10 px-4 py-2",
				sm: "h-9 px-3",
				icon: "size-10",
			},
			fullWidth: {
				true: "w-full",
			},
			rounded: {
				true: "rounded-full",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ className, variant, size, rounded, fullWidth, asChild = false, ...props },
		ref,
	) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(
					buttonVariants({ variant, size, rounded, fullWidth, className }),
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
