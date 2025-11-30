import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-purple focus-visible:ring-offset-2 disabled:pointer-events-none rounded-lg",
  {
    variants: {
      variant: {
        primary: "bg-light-purple text-white hover:bg-light-purple/90 disabled:bg-transparent disabled:text-black-40 disabled:cursor-not-allowed",
        secondary: "bg-transparent text-light-purple border-2 border-light-purple hover:bg-light-purple/10",
        tertiary: "bg-transparent text-light-purple hover:bg-light-purple/5",
        link: "bg-transparent text-light-purple underline hover:text-light-purple/80",
      },
      size: {
        mobile: "text-sm px-4 py-2.5",
        desktop: "text-base px-6 py-3",
      },
      iconPosition: {
        left: "flex-row",
        right: "flex-row-reverse",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "desktop",
      iconPosition: "left",
    },
  },
);

const ArrowCircleRightIcon = ({ className }: { className?: string }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12ZM4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12ZM16 12L12 16L10.59 14.59L12.17 13H8V11H12.17L10.58 9.41L12 8L16 12Z" 
      fill="currentColor"
    />
  </svg>
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  label?: string;
  icon?: React.ReactNode;
  showIcon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    iconPosition, 
    asChild = false, 
    label,
    icon,
    showIcon = true,
    children,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    const buttonSize = size || (typeof window !== 'undefined' && window.innerWidth < 768 ? 'mobile' : 'desktop');
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size: buttonSize, iconPosition, className }))}
        ref={ref}
        {...props}
      >
        {showIcon && (icon || <ArrowCircleRightIcon />)}
        {label || children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
