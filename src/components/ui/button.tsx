import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight } from "lucide-react";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground shadow hover:bg-primary-hover",
				destructive:
					"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
				outline:
					"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
				nothing: "",
			},
			size: {
				default: "h-12 px-4 py-2",
				sm: "h-8 rounded-md px-3 text-xs",
				lg: "h-10 rounded-md px-8",
				icon: "h-9 w-9",
				nav: "px-3 py-2",
				link: "h-fit w-fit",
				nothing: "",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	morphArrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			asChild = false,
			morphArrow = false,
			children,
			...props
		},
		ref
	) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(
					buttonVariants({ variant, size, className }),
					morphArrow && "group"
				)}
				ref={ref}
				{...props}
			>
				{children}
				{morphArrow && (
					<span className="relative w-5 h-5 ml-2">
						<ChevronRight className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0" />
						<ArrowRight className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100" />
					</span>
				)}
			</Comp>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
