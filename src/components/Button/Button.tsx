import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 text-center font-bold leading-5 transition-all duration-150 ease-in whitespace-nowrap rounded-md text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary: "bg-blue text-white from-blue to-green hover:bg-blue/80",
        secondary:
          "bg-white border border-blue hover:bg-hover-blue text-blue rounded-md",
        delete:
          "bg-error text-white border border-error hover:bg-error/80 rounded-md",
        hover: "bg-white text-blue hover:bg-hover-blue rounded-full",
        outline: "bg-white text-blue rounded-full",
        alert: "text-error hover:bg-hoverRed",
      },
      size: {
        small: "text-sm px-6 py-2",
        default: "text-base px-8 py-2",
        big: "text-lg px-10 py-2",
      },
      disabled: {
        true: "bg-light-grey border border-disabled text-grey cursor-not-allowed pointer-events-none rounded-md",
        false: "",
      },
      capitalized: {
        true: "capitalize",
        false: "normal-case",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      capitalized: true,
    },
  }
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

function Button({
  className,
  variant = "primary",
  size = "default",
  disabled = false,
  asChild = false,
  capitalized = false,
  ...props
}: React.ComponentProps<"button"> &
  ButtonVariants & { asChild?: boolean; capitalized?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      disabled={disabled}
      className={cn(
        buttonVariants({
          variant,
          size,
          disabled,
          capitalized,
          className,
        })
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
